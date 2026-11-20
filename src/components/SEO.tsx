import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getRouteMeta, SITE_URL } from "../data/routesData"

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

export default function SEO({ title, description, image }: SEOProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const defaultMeta = getRouteMeta(pathname)
    const pageTitle = title
      ? title.includes("Adeniyi Odejobi")
        ? title
        : `${title} | Adeniyi Odejobi`
      : defaultMeta.title
    const pageDescription = description || defaultMeta.description
    const currentUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`
    const pageImage = `${SITE_URL}${image || defaultMeta.ogImage || "/contents/IMG_2726.PNG"}`

    // Update document title
    document.title = pageTitle

    // Helper function to set meta tag attribute content
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector)
      if (el) {
        el.setAttribute("content", content)
      }
    }

    // Primary Meta Tags
    setMeta('meta[name="title"]', pageTitle)
    setMeta('meta[name="description"]', pageDescription)

    // Open Graph / Facebook
    setMeta('meta[property="og:title"]', pageTitle)
    setMeta('meta[property="og:description"]', pageDescription)
    setMeta('meta[property="og:url"]', currentUrl)
    setMeta('meta[property="og:image"]', pageImage)

    // Twitter
    setMeta('meta[name="twitter:title"]', pageTitle)
    setMeta('meta[name="twitter:description"]', pageDescription)
    setMeta('meta[name="twitter:url"]', currentUrl)
    setMeta('meta[name="twitter:image"]', pageImage)

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute("href", currentUrl || SITE_URL)
    }
  }, [title, description, image, pathname])

  return null
}
