import http from "node:http"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, "dist")

const PORT = parseInt(process.env.PORT || "8443", 10)
const HOST = process.env.HOST || "0.0.0.0"

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
}

// Lazy load server bundle for dynamic SSR fallback
let serverRender = null
async function getServerRenderer() {
  if (!serverRender) {
    const serverBundlePath = path.resolve(distDir, "server/entry-server.js")
    if (fs.existsSync(serverBundlePath)) {
      const mod = await import(`file://${serverBundlePath}`)
      serverRender = mod.render
    }
  }
  return serverRender
}

const server = http.createServer(async (req, res) => {
  try {
    const rawUrl = req.url || "/"
    const parsedUrl = new URL(
      rawUrl,
      `http://${req.headers.host || "localhost"}`,
    )
    const pathname = decodeURIComponent(parsedUrl.pathname)

    // 1. Direct file check in dist/
    let filePath = path.join(distDir, pathname)
    let stat = null
    try {
      stat = fs.statSync(filePath)
    } catch {
      stat = null
    }

    // If it's a directory, check for index.html inside it
    if (stat && stat.isDirectory()) {
      const nestedIndex = path.join(filePath, "index.html")
      if (fs.existsSync(nestedIndex)) {
        filePath = nestedIndex
        stat = fs.statSync(filePath)
      } else {
        stat = null
      }
    }

    // If static file exists, serve it
    if (stat && stat.isFile()) {
      const ext = path.extname(filePath).toLowerCase()
      const contentType = MIME_TYPES[ext] || "application/octet-stream"

      // Cache headers: assets get long cache, html gets short cache
      const isAsset = pathname.startsWith("/assets/")
      res.setHeader("Content-Type", contentType)
      res.setHeader(
        "Cache-Control",
        isAsset
          ? "public, max-age=31536000, immutable"
          : "public, max-age=3600, must-revalidate",
      )
      res.writeHead(200)
      fs.createReadStream(filePath).pipe(res)
      return
    }

    // 2. Check for pre-rendered route (e.g. /about -> dist/about/index.html)
    const cleanPath = pathname.replace(/^\/+|\/+$/g, "")
    const prerenderedPath = path.join(distDir, cleanPath, "index.html")
    if (cleanPath && fs.existsSync(prerenderedPath)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8")
      res.setHeader("Cache-Control", "public, max-age=3600, must-revalidate")
      res.writeHead(200)
      fs.createReadStream(prerenderedPath).pipe(res)
      return
    }

    // 3. Dynamic SSR rendering
    const renderer = await getServerRenderer()
    if (renderer) {
      try {
        const { html: appHtml } = renderer(pathname)
        const templatePath = path.resolve(distDir, "index.html")
        if (fs.existsSync(templatePath)) {
          let html = fs.readFileSync(templatePath, "utf-8")
          html = html.replace(
            '<div id="root"></div>',
            `<div id="root">${appHtml}</div>`,
          )
          res.setHeader("Content-Type", "text/html; charset=utf-8")
          res.writeHead(200)
          res.end(html)
          return
        }
      } catch (renderErr) {
        console.error("SSR dynamic render error:", renderErr)
      }
    }

    // 4. Fallback to 404.html or dist/index.html
    const fallback404 = path.resolve(distDir, "404.html")
    const rootIndex = path.resolve(distDir, "index.html")
    const fallbackPath = fs.existsSync(fallback404) ? fallback404 : rootIndex

    if (fs.existsSync(fallbackPath)) {
      res.setHeader("Content-Type", "text/html; charset=utf-8")
      res.writeHead(404)
      fs.createReadStream(fallbackPath).pipe(res)
      return
    }

    res.writeHead(404, { "Content-Type": "text/plain" })
    res.end("404 Not Found")
  } catch (err) {
    console.error("Server error:", err)
    res.writeHead(500, { "Content-Type": "text/plain" })
    res.end("Internal Server Error")
  }
})

server.listen(PORT, HOST, () => {
  console.log(`🚀 Server-rendered app listening at http://${HOST}:${PORT}`)
})
