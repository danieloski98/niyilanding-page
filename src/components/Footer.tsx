import { Link } from "react-router-dom"
import Logo from "./Logo"
import { Rss, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] border-t border-gray-200/80 pt-16 pb-12 text-[#111827]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-8">
        {/* Centered AO Logo */}
        <div className="py-2">
          <Logo variant="footer" />
        </div>

        {/* Social & Contact Links Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-2">
          <a
            href="mailto:ao@adeniyiodejobi.com"
            className="inline-flex items-center gap-2 text-sm font-serif font-bold text-[#111827] hover:text-[#e07a2c] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#111827]" />
            <span>ao@adeniyiodejobi.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/adeniyi-odejobi-fca-5346632b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-serif font-bold text-[#111827] hover:text-[#e07a2c] transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/niyiodejobi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-serif font-bold text-[#111827] hover:text-[#e07a2c] transition-colors"
          >
            <svg
              className="w-4 h-4 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>

          <Link
            to="/news-and-insights"
            className="inline-flex items-center gap-2 text-sm font-serif font-bold text-[#111827] hover:text-[#e07a2c] transition-colors"
          >
            <Rss className="w-4 h-4 text-[#111827]" />
            <span>News & Insights</span>
          </Link>
        </div>

        {/* Copyright Notice */}
        <div className="pt-4 text-xs md:text-sm font-sans text-gray-800 font-medium tracking-wide">
          © {new Date().getFullYear()} Adeniyi Odejobi | All Rights Reserved.
        </div>

        {/* Footer Navigation & Legal Sublinks */}
        <div className="flex items-center justify-center space-x-2 text-[11px] font-sans text-gray-500">
          <Link to="/contact" className="hover:text-gray-800 transition-colors">
            Contact
          </Link>
          <span>|</span>
          <Link to="/sitemap" className="hover:text-gray-800 transition-colors">
            Sitemap
          </Link>
          <span>|</span>
          <Link
            to="/privacy-policy"
            className="hover:text-gray-800 transition-colors"
          >
            Privacy Policy
          </Link>
          <span>|</span>
          <Link
            to="/terms-of-use"
            className="hover:text-gray-800 transition-colors"
          >
            Terms of Use
          </Link>
          <span>|</span>
          <Link
            to="/cookie-policy"
            className="hover:text-gray-800 transition-colors"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
