import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
import Logo from "./Logo"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path
  const isAboutActive = [
    "/about",
    "/work-experience",
    "/memberships",
    "/impact",
  ].includes(location.pathname)

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setAboutDropdownOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo on Left */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center">
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation on Right */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            <Link
              to="/"
              className={`text-sm font-sans font-medium tracking-wide transition-colors ${
                isActive("/")
                  ? "text-[#111827] font-semibold"
                  : "text-gray-700 hover:text-[#111827]"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group dropdown-parent">
              <button
                className={`text-sm font-sans font-medium tracking-wide inline-flex items-center gap-1 transition-colors ${
                  isAboutActive
                    ? "text-[#111827] font-semibold"
                    : "text-gray-700 hover:text-[#111827]"
                }`}
              >
                About{" "}
                <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              <div className="dropdown-menu bg-white border border-gray-200 shadow-lg py-2 min-w-[220px]">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-xs font-sans text-gray-700 hover:bg-gray-50 hover:text-[#111827]"
                >
                  About Adeniyi Odejobi
                </Link>
                <Link
                  to="/work-experience"
                  className="block px-4 py-2 text-xs font-sans text-gray-700 hover:bg-gray-50 hover:text-[#111827]"
                >
                  Work Experience
                </Link>
                <Link
                  to="/memberships"
                  className="block px-4 py-2 text-xs font-sans text-gray-700 hover:bg-gray-50 hover:text-[#111827]"
                >
                  Professional Memberships & Affiliations
                </Link>
              </div>
            </div>

            <Link
              to="/consulting"
              className={`text-sm font-sans font-medium tracking-wide transition-colors ${
                isActive("/consulting")
                  ? "text-[#111827] font-semibold"
                  : "text-gray-700 hover:text-[#111827]"
              }`}
            >
              Consulting
            </Link>

            <Link
              to="/speaking"
              className={`text-sm font-sans font-medium tracking-wide transition-colors ${
                isActive("/speaking")
                  ? "text-[#111827] font-semibold"
                  : "text-gray-700 hover:text-[#111827]"
              }`}
            >
              Speaking Engagement
            </Link>

            <Link
              to="/ao-academy"
              className={`text-sm font-sans font-medium tracking-wide transition-colors ${
                isActive("/ao-academy")
                  ? "text-[#111827] font-semibold"
                  : "text-gray-700 hover:text-[#111827]"
              }`}
            >
              Training
            </Link>

            <Link
              to="/impact"
              className={`text-sm font-sans font-medium tracking-wide transition-colors ${
                isActive("/impact")
                  ? "text-[#111827] font-semibold"
                  : "text-gray-700 hover:text-[#111827]"
              }`}
            >
              Mentorship
            </Link>

            <Link
              to="/press-kit"
              className={`text-sm font-sans font-medium tracking-wide transition-colors ${
                isActive("/press-kit")
                  ? "text-[#111827] font-semibold"
                  : "text-gray-700 hover:text-[#111827]"
              }`}
            >
              Press Kit & Photo Gallery
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111827] hover:text-gray-600 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pt-4 pb-8 space-y-3 shadow-xl">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`block py-2 text-base font-sans font-medium ${
              isActive("/") ? "text-[#111827] font-bold" : "text-gray-700"
            }`}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-sans font-medium text-gray-700"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  aboutDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {aboutDropdownOpen && (
              <div className="pl-4 space-y-2 py-2 border-l-2 border-gray-300 my-1">
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block py-1 text-sm text-gray-600"
                >
                  About Adeniyi Odejobi
                </Link>
                <Link
                  to="/work-experience"
                  onClick={closeMobileMenu}
                  className="block py-1 text-sm text-gray-600"
                >
                  Work Experience
                </Link>
                <Link
                  to="/memberships"
                  onClick={closeMobileMenu}
                  className="block py-1 text-sm text-gray-600"
                >
                  Memberships & Affiliations
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/consulting"
            onClick={closeMobileMenu}
            className={`block py-2 text-base font-sans font-medium ${
              isActive("/consulting")
                ? "text-[#111827] font-bold"
                : "text-gray-700"
            }`}
          >
            Consulting
          </Link>

          <Link
            to="/speaking"
            onClick={closeMobileMenu}
            className={`block py-2 text-base font-sans font-medium ${
              isActive("/speaking")
                ? "text-[#111827] font-bold"
                : "text-gray-700"
            }`}
          >
            Speaking Engagement
          </Link>

          <Link
            to="/ao-academy"
            onClick={closeMobileMenu}
            className={`block py-2 text-base font-sans font-medium ${
              isActive("/ao-academy")
                ? "text-[#111827] font-bold"
                : "text-gray-700"
            }`}
          >
            Training
          </Link>

          <Link
            to="/impact"
            onClick={closeMobileMenu}
            className={`block py-2 text-base font-sans font-medium ${
              isActive("/impact") ? "text-[#111827] font-bold" : "text-gray-700"
            }`}
          >
            Mentorship
          </Link>

          <Link
            to="/press-kit"
            onClick={closeMobileMenu}
            className={`block py-2 text-base font-sans font-medium ${
              isActive("/press-kit")
                ? "text-[#111827] font-bold"
                : "text-gray-700"
            }`}
          >
            Press Kit & Photo Gallery
          </Link>
        </div>
      )}
    </header>
  )
}
