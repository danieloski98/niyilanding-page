import { Link } from "react-router-dom"
import {
  ShieldCheck,
  GraduationCap,
  Award,
  Building2,
  CheckCircle2,
} from "lucide-react"
import SEO from "../components/SEO"

export interface MembershipItem {
  id: string
  title: string
  abbreviation: string
  badgeBg: string
  badgeTextColor: string
  icon: any
  description: string
}

const MEMBERSHIP_LIST = [
  {
    id: "ican",
    title: "Institute of Chartered Accountants of Nigeria",
    abbreviation: "ICAN (ACA)",
    badgeBg: "bg-emerald-800",
    badgeTextColor: "text-white",
    badgeSubtitle: "Associate Chartered Accountant",
    description:
      "Adeniyi Odejobi is an Associate Chartered Accountant (ACA) with ICAN. He is fully licensed and recognized by the statutory financial regulatory authority for corporate finance, financial auditing, and risk management in Nigeria.",
  },
  {
    id: "ebs",
    title: "Edinburgh Business School, Heriot-Watt University",
    abbreviation: "Heriot-Watt UK",
    badgeBg: "bg-blue-900",
    badgeTextColor: "text-white",
    badgeSubtitle: "Master of Business Administration (MBA)",
    description:
      "Adeniyi Odejobi holds an MBA from Edinburgh Business School, Heriot-Watt University, UK. Recognized for advanced strategic management, corporate governance, cross-border enterprise deal structuring, and international business leadership.",
  },
  {
    id: "unilag",
    title: "University of Lagos — Department of Actuarial Science",
    abbreviation: "UNILAG",
    badgeBg: "bg-amber-700",
    badgeTextColor: "text-white",
    badgeSubtitle: "B.Sc. (Hons) Actuarial Science",
    description:
      "Adeniyi Odejobi holds a Bachelor of Science (B.Sc. Hons) in Actuarial Science from the University of Lagos. Recognized for quantitative risk modeling, mathematical probability, and financial systems architecture.",
  },
  {
    id: "kc",
    title: "Kings College Lagos Alumni Association",
    abbreviation: "KCOB",
    badgeBg: "bg-indigo-900",
    badgeTextColor: "text-white",
    badgeSubtitle: "Kings College Alumnus",
    description:
      "Adeniyi Odejobi is an alumnus of Kings College, Lagos. An active member contributing to educational development, youth mentorship, and executive governance across national leadership circles.",
  },
  {
    id: "telecom-fintech",
    title: "African Telecoms & Mobile Money Executive Forum",
    abbreviation: "MFS Forum",
    badgeBg: "bg-slate-900",
    badgeTextColor: "text-white",
    badgeSubtitle: "Commercial Executive Member",
    description:
      "Adeniyi Odejobi is a recognized commercial sales leader across subnational telecommunications networks, enterprise energy connectivity, and mobile money payment ecosystems in sub-Saharan Africa.",
  },
]

export default function MembershipsPage() {
  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Qualifications & Memberships"
        description="Professional qualifications, academic degrees, and memberships of Adeniyi Odejobi (ACA ICAN, Heriot-Watt MBA, UNILAG Actuarial Science)."
      />

      {/* ── SECTION 1: HERO FOLD ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Portrait Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="/contents/training.jpeg"
                  alt="Adeniyi Odejobi Professional Memberships"
                  className="w-full h-auto object-cover max-h-[480px]"
                />
              </div>
            </div>

            {/* Right Column: Title & Subtitle */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111827] tracking-tight leading-tight">
                Adeniyi Odejobi's
                <br />
                Professional Memberships & Affiliations
              </h1>
              <p className="text-gray-700 text-sm sm:text-base font-sans leading-relaxed pt-2">
                Adeniyi Odejobi's institutional recognition and active
                governance across global and national commercial accounting,
                financial, and alumni bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INSTITUTIONAL MEMBERSHIPS CARDS (1:1 ACCORDING TO SCREENSHOTS) ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          {/* Sub-header */}
          <div className="max-w-4xl space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
              Executive Fellowships & Institutional Memberships
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans">
              Adeniyi Odejobi's professional standing is anchored by active
              memberships and fellowships in the world's leading financial,
              accounting, and educational regulatory bodies.
            </p>
          </div>

          {/* Vertical Stack of Horizontal Cards */}
          <div className="space-y-8">
            {MEMBERSHIP_LIST.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 sm:p-10 border border-gray-200 rounded-2xl shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left: Badge / Emblem Box */}
                  <div className="md:col-span-4 flex justify-center">
                    <div
                      className={`w-full max-w-[280px] py-10 px-6 ${item.badgeBg} ${item.badgeTextColor} rounded-xl text-center space-y-2 shadow-inner border border-white/20`}
                    >
                      <div className="font-serif font-bold text-3xl md:text-4xl tracking-tight">
                        {item.abbreviation}
                      </div>
                      <div className="text-[10px] font-sans font-semibold uppercase tracking-widest opacity-90">
                        {item.badgeSubtitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: Title & Description */}
                  <div className="md:col-span-8 space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link */}
          <div className="pt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111827] text-white font-medium text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Read Full Executive Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
