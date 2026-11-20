import { Link } from "react-router-dom"
import { Calendar } from "lucide-react"
import SEO from "../components/SEO"

export interface TimelineItem {
  id: string
  title: string
  organization: string
  date: string
  description: string
  achievements?: string[]
  side: "left" | "right"
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "globacom-group",
    title: "C – Level Commercial Executive",
    organization:
      "Globacom Group (Globacom Ltd, Glo1 Submarine Cable Company, Money Master Payment Service Bank, Glo Data Center & Glo Gateway)",
    date: "2017",
    side: "left",
    description:
      "Commercial Executive responsible for B2B and B2G business markets, driving business expansion, GTM strategies, revenue growth, and digital transformation across Africa’s telecoms and fintech sectors. Managing a multi-million-dollar business with full oversight on Go-To-Market (GTM), annual operating plans, and P&L management across various business units.",
  },
  {
    id: "etisalat-nigeria",
    title: "Enterprise Business Executive",
    organization: "Etisalat Nigeria",
    date: "2010",
    side: "right",
    description:
      "Delivering overall strategic direction and overseeing execution of secured partnerships with full P&L accountability for a business exceeding $3,500B Cr in annual revenue, especially the execution of all secured partnerships across the country.",
  },
  {
    id: "starcomms-plc",
    title: "Commercial Manager",
    organization: "Starcomms Plc",
    date: "2009",
    side: "left",
    description:
      "Generated over $70 million in annual revenues and activated 2 million customers within nine months—making it the fastest growing CDMA network in Nigeria’s history. Introduced the Closed User Group Initiative (CUG) to enable businesses and individuals to communicate in a seamless manner.",
  },
  {
    id: "oceanic-capital",
    title: "Investment Manager",
    organization: "Oceanic Capital Company (an Oceanic Bank Company)",
    date: "2008",
    side: "right",
    description:
      "Responsible for conducting rigorous financial modeling, market research, and due diligence to support the evaluation of new investment opportunities and the ongoing management of the firm's portfolio.",
  },
  {
    id: "oceanic-bank",
    title: "Treasury Analyst",
    organization: "Oceanic Bank",
    date: "2008",
    side: "left",
    description:
      "Managed daily liquidity, monitored cash flow forecasting, and executed risk mitigation strategies to ensure the efficiency and stability of the firm’s banking operations.",
  },
  {
    id: "bgl-securities",
    title: "Investment Analyst",
    organization: "BGL Securities",
    date: "2007",
    side: "right",
    description:
      "Responsible for performing in-depth financial valuation, sector analysis, and macro-economic research to generate actionable investment recommendations and support strategic portfolio decisions.",
  },
  {
    id: "fdhl",
    title: "Financial Market Analyst",
    organization: "Financial Datanet House Ltd (FDHL)",
    date: "2006",
    side: "left",
    description:
      "Responsible for providing deep-dive analysis into financial market trends, evaluating investment opportunities, and translating complex data into actionable business intelligence. Serving as a key link between market data and strategic decision-making, helping the firm and its clients optimize financial performance and mitigate risks.",
  },
]

export default function WorkExperiencePage() {
  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Work Experience & Career Trajectory"
        description="Executive leadership, public sector sales, and telecom commercial track record of Adeniyi Odejobi across sub-Saharan Africa."
      />

      {/* ── SECTION 1: HEADER TITLE ── */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111827] tracking-tight leading-tight">
            Adeniyi Odejobi's
            <br />
            Work Experience & Career Trajectory
          </h1>
          <p className="text-gray-700 text-sm sm:text-base font-sans tracking-wide">
            Executive Leadership, Public Sector Partnerships, Financial
            Services, Financial Technology, Telecoms Commercial Track Record.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: FEATURED PORTRAIT IMAGE ── */}
      <section className="bg-white pb-16">
        <div className="max-w-4xl mx-auto px-6 flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="/contents/IMG_2726.PNG"
              alt="Adeniyi Odejobi Portrait"
              className="w-full h-auto object-cover max-h-[460px]"
            />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SUMMARY WHITE CARD ── */}
      <section className="bg-white pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white p-8 sm:p-10 border border-gray-200 rounded-2xl shadow-md text-center space-y-6">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              Adeniyi Odejobi is a transformative executive leader with about
              20-year legacy of driving commercial dominance across Africa’s
              telecommunications and financial services landscapes.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              His career is a masterclass in institutional modernization and he
              is a catalyst for expansion in Africa’s telecommunications and
              fintech sectors.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              He is a specialist in institutional expansion, high-stakes P&L
              growth, and the strategic mind behind some of the region's most
              successful digital infrastructure deployments and national
              governance frameworks.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              He builds for scale, leads for growth, and delivers for the
              future.
            </p>
            <div className="pt-2 text-xs sm:text-sm font-serif font-bold text-[#111827]">
              Go Back In Time With Adeniyi Odejobi ↓
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TIMELINE (1:1 ACCORDING TO SCREENSHOTS) ── */}
      <section className="bg-[#fafafa] py-20 border-t border-gray-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative">
            {/* Central Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-amber-400/40"></div>

            <div className="space-y-16 py-8">
              {TIMELINE_DATA.map((item) => (
                <div
                  key={item.id}
                  className="relative flex items-center justify-between"
                >
                  {/* Left Side Container */}
                  <div className="w-[45%] flex justify-end">
                    {item.side === "left" && (
                      <div className="relative bg-[#FDF4E7] p-6 sm:p-8 border border-amber-200/60 rounded-sm shadow-sm space-y-2 text-left">
                        {/* Pointer Arrow pointing to center */}
                        <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#FDF4E7]"></div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B5A2B] leading-snug">
                          {item.title}
                        </h3>
                        <div className="font-serif italic text-xs sm:text-sm font-semibold text-[#8B5A2B]">
                          {item.organization}
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans pt-1">
                          {item.description}
                        </p>
                      </div>
                    )}
                    {item.side === "right" && (
                      <div className="pr-8 text-right font-serif text-sm font-bold text-[#111827]">
                        {item.date}
                      </div>
                    )}
                  </div>

                  {/* Center Calendar Badge */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center shadow-lg border-2 border-white shrink-0">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>

                  {/* Right Side Container */}
                  <div className="w-[45%] flex justify-start">
                    {item.side === "right" && (
                      <div className="relative bg-[#FDF4E7] p-6 sm:p-8 border border-amber-200/60 rounded-sm shadow-sm space-y-2 text-left">
                        {/* Pointer Arrow pointing to center */}
                        <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#FDF4E7]"></div>

                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B5A2B] leading-snug">
                          {item.title}
                        </h3>
                        <div className="font-serif italic text-xs sm:text-sm font-semibold text-[#8B5A2B]">
                          {item.organization}
                        </div>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans pt-1">
                          {item.description}
                        </p>
                      </div>
                    )}
                    {item.side === "left" && (
                      <div className="pl-8 text-left font-serif text-sm font-bold text-[#111827]">
                        {item.date}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
