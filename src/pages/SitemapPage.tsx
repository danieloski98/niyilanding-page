import { Link } from "react-router-dom"
import SEO from "../components/SEO"
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Mail,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Newspaper,
  Camera,
} from "lucide-react"

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Navigation",
      icon: Compass,
      links: [
        {
          name: "Home",
          path: "/",
          desc: "Executive profile & high-level P&L commercial overview",
        },
        {
          name: "About",
          path: "/about",
          desc: "Professional background, executive philosophy & leadership history",
        },
        {
          name: "Work Experience",
          path: "/work-experience",
          desc: "Commercial P&L growth, enterprise telecoms & governance roles",
        },
        {
          name: "Board & Advisory Memberships",
          path: "/memberships",
          desc: "Fellowships, charter affiliations & advisory board positions",
        },
      ],
    },
    {
      title: "Executive Practices & Programs",
      icon: GraduationCap,
      links: [
        {
          name: "AO Academy",
          path: "/ao-academy",
          desc: "B2B enterprise sales masterclasses & high-ticket revenue training",
        },
        {
          name: "Adeniyi Odejobi Consulting",
          path: "/consulting",
          desc: "Commercial advisory for tech, telco & subnational governments",
        },
        {
          name: "Keynote Speaking",
          path: "/speaking",
          desc: "Summit addresses, executive panels & tech conference keynotes",
        },
        {
          name: "Public Sector Impact",
          path: "/impact",
          desc: "State government digital infrastructure & revenue initiatives",
        },
      ],
    },
    {
      title: "Media, Press & Contact",
      icon: Newspaper,
      links: [
        {
          name: "News & Insights",
          path: "/news-and-insights",
          desc: "Articles, press releases & industry leadership thought pieces",
        },
        {
          name: "Official Press Kit",
          path: "/press-kit",
          desc: "Download high-res executive photography, bio & media assets",
        },
        {
          name: "Contact Executive Office",
          path: "/contact",
          desc: "Direct inquiries for consulting, partnerships & speaking",
        },
      ],
    },
  ]

  return (
    <div className="bg-white text-[#111827] min-h-screen">
      <SEO
        title="Sitemap & Website Directory"
        description="Complete directory of Adeniyi Odejobi's executive portfolio, AO Academy, commercial advisory, keynote speaking, and press assets."
      />

      {/* Hero Banner */}
      <section className="bg-[#0F2C59] text-white py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full border border-amber-400/30">
            Navigation Index
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Website Directory & Sitemap
          </h1>
          <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto font-sans font-light">
            Comprehensive overview of all pages, executive services, and
            resources available across the platform.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, idx) => {
              const Icon = section.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fafafa] border border-gray-200 p-8 rounded-sm space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0F2C59] text-amber-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="font-serif font-bold text-xl text-[#0F2C59]">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="space-y-4">
                    {section.links.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link
                          to={item.path}
                          className="group block p-3 rounded-xs hover:bg-white border border-transparent hover:border-gray-200 transition-all"
                        >
                          <div className="flex items-center justify-between font-serif font-bold text-base text-[#111827] group-hover:text-[#e07a2c] transition-colors">
                            <span>{item.name}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#e07a2c]" />
                          </div>
                          <p className="text-xs text-gray-600 mt-1 font-sans font-light">
                            {item.desc}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
