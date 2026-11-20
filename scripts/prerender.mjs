import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, "..")
const distDir = path.resolve(rootDir, "dist")

// Canonical metadata for all routes
const SITE_URL = "https://niyiodejobi.com"
const DEFAULT_IMAGE = "/contents/IMG_2726.PNG"

const ROUTES = [
  {
    path: "/",
    title: "Adeniyi Odejobi | African Telecoms & C-Level Commercial Executive",
    description:
      "Commercial Executive driving subnational digital partnerships, enterprise telecoms transformation, and multi-million dollar P&L growth across Africa.",
    keywords:
      "Adeniyi Odejobi, C-Level Commercial Executive, African Telecoms, Public Sector Partnerships, Enterprise Sales, Globacom, Digital Infrastructure, Lagos Nigeria, ACA, MBA",
    image: DEFAULT_IMAGE,
    changefreq: "weekly",
    priority: "1.0",
    type: "profile",
  },
  {
    path: "/about",
    title:
      "About Adeniyi Odejobi | Commercial Executive & Fellow Chartered Accountant",
    description:
      "Executive biography and profile of Adeniyi Odejobi — Actuarial Science alumnus, ICAN Chartered Accountant, Edinburgh MBA, and African Telecoms & FinTech Sales Director.",
    keywords:
      "About Adeniyi Odejobi, Commercial Executive, ICAN, Heriot-Watt MBA, UNILAG Actuarial Science, African Telecoms, Executive Profile",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.9",
    type: "about",
  },
  {
    path: "/work-experience",
    title: "Executive Career & Work Experience | Adeniyi Odejobi",
    description:
      "Executive leadership, public sector sales, and telecom commercial track record of Adeniyi Odejobi across sub-Saharan Africa.",
    keywords:
      "Adeniyi Odejobi Work Experience, Globacom, Enterprise Telecoms, Commercial Director, Sales Leadership, Public Sector Engagements",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/memberships",
    title: "Qualifications & Memberships | Adeniyi Odejobi",
    description:
      "Professional qualifications, academic degrees, and memberships of Adeniyi Odejobi (ACA ICAN, Heriot-Watt MBA, UNILAG Actuarial Science).",
    keywords:
      "Adeniyi Odejobi Qualifications, ICAN Fellow, Chartered Accountant, MBA Heriot-Watt, Actuarial Science UNILAG, Professional Memberships",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/ao-academy",
    title: "AO Academy | Empowering Next-Gen Business Leaders",
    description:
      "AO Academy (Adeniyi Odejobi Academy) is a definitive launchpad developing the next generation of sales and business professionals across Nigeria.",
    keywords:
      "AO Academy, Adeniyi Odejobi Academy, Youth Mentorship, Executive Mentorship, Nigerian Sales Talent, Business Leadership Academy",
    image: "/contents/youth.jpeg",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/consulting",
    title: "Adeniyi Odejobi Consulting | Commercial Advisory & Strategy",
    description:
      "Adeniyi Odejobi Consulting turns growth hurdles into stepping stones for incremental revenue growth, GTM execution, and government relations in Nigeria.",
    keywords:
      "Adeniyi Odejobi Consulting, Commercial Advisory, Go-To-Market Strategy, Telecom Consulting, Government Partnerships Nigeria",
    image: "/contents/consulting.jpeg",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/speaking",
    title: "Exchange with Adeniyi Odejobi | Speaking Engagements & Keynotes",
    description:
      "Book C-Level Commercial Executive & Fellow Chartered Accountant Adeniyi Odejobi for Keynote Speeches, Panel Discussions, Executive Mentoring, and Workshops.",
    keywords:
      "Adeniyi Odejobi Speaking, Keynote Speaker Africa, Telecoms Speaker, Commercial Executive Keynote, Executive Mentoring, Panel Discussions",
    image: "/contents/speaking.jpeg",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/speaking-engagements",
    title: "Keynotes & Speaking Engagements | Adeniyi Odejobi",
    description:
      "Book C-Level Commercial Executive & Fellow Chartered Accountant Adeniyi Odejobi for Keynote Speeches, Panel Discussions, Executive Mentoring, and Workshops.",
    keywords:
      "Adeniyi Odejobi Speaking Engagements, Keynote Speaker, Executive Panels, Telecoms Thought Leadership",
    image: "/contents/speaking.jpeg",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/impact",
    title: "Landmark Deals & Subnational Impact | Adeniyi Odejobi",
    description:
      "High-value enterprise telecom deals and subnational public sector digital partnerships exceeding $650M+ per annum led by Adeniyi Odejobi.",
    keywords:
      "Subnational Impact, Public Sector Deals, Digital Infrastructure, Revenue Modernization, Enterprise Connectivity, Adeniyi Odejobi Impact",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/news-and-insights",
    title: "News & Press Features | Adeniyi Odejobi",
    description:
      "Press coverage, newspaper features, and official news mentions of Adeniyi Odejobi and his executive telecom partnerships.",
    keywords:
      "Adeniyi Odejobi News, Press Mentions, Vanguard, ThisDay, Guardian Nigeria, Telecom News, Executive Insights",
    image: DEFAULT_IMAGE,
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/press-kit",
    title: "Executive Press Kit, News & Media Assets | Adeniyi Odejobi",
    description:
      "Official press kit for Adeniyi Odejobi containing news features, press releases, approved portraits, executive bio, and photo engagement archive.",
    keywords:
      "Adeniyi Odejobi Press Kit, Media Kit, Executive Headshots, Biography, Media Assets, Photos",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/contact",
    title: "Contact & Executive Advisory | Adeniyi Odejobi",
    description:
      "Connect with Adeniyi Odejobi for commercial executive leadership, board advisory, enterprise telecoms sales, and subnational public sector partnerships.",
    keywords:
      "Contact Adeniyi Odejobi, Executive Inquiries, Advisory Booking, Commercial Consulting Contact, Lagos Nigeria",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.9",
    type: "contact",
  },
  {
    path: "/sitemap",
    title: "Sitemap & Website Directory | Adeniyi Odejobi",
    description:
      "Complete directory of Adeniyi Odejobi's executive portfolio, AO Academy, commercial advisory, keynote speaking, and press assets.",
    keywords: "Adeniyi Odejobi Sitemap, Site Directory, Navigation",
    image: DEFAULT_IMAGE,
    changefreq: "monthly",
    priority: "0.7",
  },
]

function escapeHtml(str) {
  if (!str) return ""
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function getStructuredData(route) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adeniyi Odejobi",
    alternateName: "Niyi Odejobi",
    jobTitle: "C-Level Commercial Executive",
    worksFor: {
      "@type": "Organization",
      name: "Adeniyi Odejobi Executive Office",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Heriot-Watt University Edinburgh Business School",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Lagos",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Institute of Chartered Accountants of Nigeria (ICAN)",
      },
    ],
    image: `${SITE_URL}/contents/IMG_2726.PNG`,
    url: SITE_URL,
    sameAs: ["https://www.linkedin.com/in/adeniyi-odejobi"],
    description:
      "High-performing African Telecoms & C-Level Commercial Executive with over a decade of senior leadership driving multi-million-dollar P&L growth and subnational digital partnerships.",
  }

  const schemas = [person]

  if (route.path === "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Adeniyi Odejobi Official Website",
      url: SITE_URL,
      author: {
        "@type": "Person",
        name: "Adeniyi Odejobi",
      },
    })
  } else if (route.type === "contact") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: route.title,
      url: `${SITE_URL}${route.path}`,
      mainEntity: {
        "@type": "Person",
        name: "Adeniyi Odejobi",
        email: "ao@adeniyiodejobi.com",
      },
    })
  } else if (route.type === "about") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: route.title,
      url: `${SITE_URL}${route.path}`,
      description: route.description,
    })
  }

  // Breadcrumbs for inner pages
  if (route.path !== "/") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: route.title.split("|")[0].trim(),
          item: `${SITE_URL}${route.path}`,
        },
      ],
    })
  }

  return schemas
}

async function prerender() {
  console.log("🚀 Starting pre-rendering for SEO & server-side rendering...")

  const templatePath = path.resolve(distDir, "index.html")
  if (!fs.existsSync(templatePath)) {
    throw new Error(
      `Template not found at ${templatePath}. Run vite build first.`,
    )
  }

  const rawTemplate = fs.readFileSync(templatePath, "utf-8")

  const serverEntryPath = path.resolve(distDir, "server/entry-server.js")
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(
      `Server bundle not found at ${serverEntryPath}. Run vite build --ssr first.`,
    )
  }

  const { render } = await import(`file://${serverEntryPath}`)

  let totalRendered = 0

  for (const route of ROUTES) {
    const canonicalUrl = `${SITE_URL}${route.path === "/" ? "" : route.path}`
    const imageUrl = `${SITE_URL}${route.image}`
    const structuredData = getStructuredData(route)

    // Render React tree to HTML string
    const { html: appHtml } = render(route.path)

    // Build head tags
    const headReplacements = [
      `<title>${escapeHtml(route.title)}</title>`,
      `<meta name="title" content="${escapeHtml(route.title)}" />`,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
      `<meta name="keywords" content="${escapeHtml(route.keywords)}" />`,
      `<link rel="canonical" href="${canonicalUrl}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:url" content="${canonicalUrl}" />`,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
      `<meta property="og:image" content="${imageUrl}" />`,
      `<meta property="og:site_name" content="Adeniyi Odejobi Official Executive Site" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:url" content="${canonicalUrl}" />`,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
      `<meta name="twitter:image" content="${imageUrl}" />`,
    ].join("\n  ")

    const jsonLdScripts = structuredData
      .map(
        (data) =>
          `<script type="application/ld+json">\n${JSON.stringify(data, null, 2)}\n</script>`,
      )
      .join("\n  ")

    // Replace <title> tag
    let pageHtml = rawTemplate.replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(route.title)}</title>`,
    )

    // Replace or update meta tags in <head>
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']description["'][^>]*>/gi,
      `<meta name="description" content="${escapeHtml(route.description)}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:title["'][^>]*>/gi,
      `<meta property="og:title" content="${escapeHtml(route.title)}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:description["'][^>]*>/gi,
      `<meta property="og:description" content="${escapeHtml(route.description)}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:url["'][^>]*>/gi,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+property=["']og:image["'][^>]*>/gi,
      `<meta property="og:image" content="${imageUrl}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:title["'][^>]*>/gi,
      `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:description["'][^>]*>/gi,
      `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`,
    )
    pageHtml = pageHtml.replace(
      /<meta\s+name=["']twitter:image["'][^>]*>/gi,
      `<meta name="twitter:image" content="${imageUrl}" />`,
    )
    pageHtml = pageHtml.replace(
      /<link\s+rel=["']canonical["'][^>]*>/gi,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    )

    // Inject JSON-LD right before </head>
    pageHtml = pageHtml.replace("</head>", `  ${jsonLdScripts}\n</head>`)

    // Inject server-rendered app HTML into <div id="root">
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    )

    // Determine output file path
    let outputPath
    if (route.path === "/") {
      outputPath = path.resolve(distDir, "index.html")
    } else {
      const routeDir = path.resolve(distDir, route.path.replace(/^\//, ""))
      fs.mkdirSync(routeDir, { recursive: true })
      outputPath = path.resolve(routeDir, "index.html")
    }

    fs.writeFileSync(outputPath, pageHtml, "utf-8")
    totalRendered++
    console.log(
      `  ✓ Pre-rendered: ${route.path} -> ${path.relative(rootDir, outputPath)} (${appHtml.length} chars)`,
    )
  }

  // Also create dist/404.html with the home template for single-page fallback
  const notFoundHtml = rawTemplate.replace(
    "<title>Adeniyi Odejobi | African Telecoms &amp; FinTech Sales Director</title>",
    "<title>Page Not Found | Adeniyi Odejobi</title>",
  )
  fs.writeFileSync(path.resolve(distDir, "404.html"), notFoundHtml, "utf-8")
  console.log(`  ✓ Generated 404 fallback: dist/404.html`)

  // Update dist/sitemap.xml
  const today = new Date().toISOString().split("T")[0]
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  ).join("\n")}
</urlset>
`
  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemapXml, "utf-8")
  // Also sync to public/sitemap.xml so it persists
  fs.writeFileSync(
    path.resolve(rootDir, "public/sitemap.xml"),
    sitemapXml,
    "utf-8",
  )
  console.log(`  ✓ Updated sitemap: dist/sitemap.xml and public/sitemap.xml`)

  // Ensure robots.txt is present and points to sitemap
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
  fs.writeFileSync(path.resolve(distDir, "robots.txt"), robotsTxt, "utf-8")
  fs.writeFileSync(
    path.resolve(rootDir, "public/robots.txt"),
    robotsTxt,
    "utf-8",
  )
  console.log(`  ✓ Verified robots.txt: dist/robots.txt and public/robots.txt`)

  console.log(
    `✨ Successfully pre-rendered all ${totalRendered} routes with Google indexing optimizations!`,
  )
}

prerender().catch((err) => {
  console.error("Error during pre-rendering:", err)
  process.exit(1)
})
