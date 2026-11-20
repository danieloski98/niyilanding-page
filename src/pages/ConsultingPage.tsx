import { Link } from "react-router-dom"
import {
  Building2,
  TrendingUp,
  ShieldCheck,
  Handshake,
  Target,
  Compass,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import SEO from "../components/SEO"

export default function ConsultingPage() {
  const advisoryPillars = [
    {
      title: "Expansion",
      subtitle: "Acquisition & Partnerships",
      description:
        "New business acquisition, strategic joint venture partnerships, and enterprise market penetration frameworks.",
      icon: TrendingUp,
      bgColor: "bg-[#FDF4E7]",
      borderColor: "border-amber-200/80",
      textColor: "text-[#8B5A2B]",
    },
    {
      title: "Engagement",
      subtitle: "Government Relations & Policy",
      description:
        "Cabinet-level strategic government relations, public sector engagement, regulatory alignment, and policy navigation.",
      icon: ShieldCheck,
      bgColor: "bg-[#E6EEFA]",
      borderColor: "border-blue-100",
      textColor: "text-[#1D4ED8]",
    },
    {
      title: "Execution",
      subtitle: "GTM & High-Stakes Closure",
      description:
        "Go-To-Market (GTM) strategy design, executive deal negotiation and closure, and commercial leadership development.",
      icon: Target,
      bgColor: "bg-[#EAF7EE]",
      borderColor: "border-emerald-100",
      textColor: "text-[#059669]",
    },
  ]

  const targetIndustries = [
    "FinTech & MFS",
    "Banking & Financial Services",
    "Telecommunications & ICT",
    "Oil & Gas / Energy",
    "FMCG & Corporate",
    "Retail & Enterprise",
    "Gaming & Betting",
  ]

  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Adeniyi Odejobi Consulting | Commercial Advisory & Strategy"
        description="Adeniyi Odejobi Consulting turns growth hurdles into stepping stones for incremental revenue growth, GTM execution, and government relations in Nigeria."
      />

      {/* ── SECTION 1: HERO BANNER (DEEP ROYAL BLUE) ── */}
      <section className="bg-[#0F2C59] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center space-y-6">
          {/* Circular Emblem Badge */}
          <div className="w-28 h-28 rounded-full bg-white text-[#0F2C59] flex items-center justify-center border-4 border-amber-400/40 p-4 shadow-2xl">
            <div className="text-center leading-none">
              <span className="font-serif font-bold text-2xl block text-[#0F2C59]">
                AO
              </span>
              <span className="text-[7px] font-sans font-bold uppercase tracking-widest text-[#e07a2c] block mt-1">
                CONSULTING
              </span>
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full border border-amber-400/30">
            Adeniyi Odejobi Consulting
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight max-w-4xl leading-tight">
            Accelerate. Expand. Dominate.
          </h1>

          <p className="text-amber-300 font-serif italic text-lg sm:text-xl max-w-2xl font-light">
            The Architecture of Growth in Nigeria
          </p>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl font-sans font-light leading-relaxed pt-2">
            In the most dynamic market in Africa, standing still is the same as
            falling behind. Every company in Nigeria faces a unique set of
            hurdles—regulatory complexities, competitive pressures, and the
            constant need for scale. Adeniyi Odejobi Consulting was founded to
            turn these hurdles into stepping stones for incremental revenue
            growth and sustainable expansion.
          </p>

          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-400 text-[#0F2C59] font-sans font-bold text-xs uppercase tracking-widest hover:bg-amber-300 transition-colors shadow-lg rounded-xs"
            >
              Book a Strategic Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="pt-6 w-full max-w-3xl">
            <div className="w-full overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
              <img
                src="/contents/consulting.jpeg"
                alt="Adeniyi Odejobi Consulting"
                className="w-full h-auto object-cover max-h-[480px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ENGINEERING MOMENTUM & STRATEGIC BRIDGE ── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
                Commercial Engineering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
                We Don’t Just Offer Advice; We Engineer Momentum
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                From the fast-paced world of Fintech and ICT to the complex
                landscapes of Oil & Gas and FMCG, we serve as the strategic
                bridge between where your company is and where it needs to be.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                Whether you are a Bank, Fintech, or Financial Services Company
                looking to optimize revenue, or a Retail or Gaming/Betting firm
                navigating a crowded market, we provide the Go-To-Market (GTM)
                strategies and Government Relations expertise required to win.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#fafafa] border border-gray-200 p-8 md:p-10 rounded-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[#111827]">
                Industries We Transform
              </h3>
              <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">
                Tailored Advisory Services Across Key Sectors
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {targetIndustries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 bg-white border border-gray-200 text-xs font-medium font-sans text-gray-800 rounded-xs shadow-2xs flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY PARTNER WITH US? ── */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
              Competitive Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              Why Partner With Us?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-sans font-medium">
              Because we specialize in the "high-stakes" moments: deal
              negotiation and closure, joint venture partnerships, and strategic
              government engagement.
            </p>
          </div>

          <div className="bg-[#0F2C59] text-white p-8 md:p-12 rounded-sm shadow-xl space-y-6">
            <p className="text-gray-100 text-lg sm:text-xl font-serif leading-relaxed italic">
              "We understand the Nigerian commercial pulse better than anyone
              else. We don’t just open doors; we ensure you own the room."
            </p>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
              — Adeniyi Odejobi Consulting Principle
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: FULL-SPECTRUM COMMERCIAL ADVISORY SUITE ── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
              Advisory Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              Full-Spectrum Commercial Advisory Suite
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              Designed for industry leaders in FMCG, Banking,
              Telecommunications, Energy, and Financial Technology seeking
              market dominance.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisoryPillars.map((pillar, idx) => {
              const IconComp = pillar.icon
              return (
                <div
                  key={idx}
                  className={`${pillar.bgColor} p-8 md:p-10 border ${pillar.borderColor} flex flex-col justify-between min-h-[380px]`}
                >
                  <div className="space-y-4">
                    <IconComp className={`w-10 h-10 ${pillar.textColor}`} />
                    <h3
                      className={`font-serif text-2xl font-bold ${pillar.textColor} leading-tight`}
                    >
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-700 font-sans">
                      {pillar.subtitle}
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className={`inline-flex items-center gap-1.5 text-xs font-serif font-bold ${pillar.textColor} hover:underline`}
                    >
                      Learn More <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CALL TO ACTION & LEGACY ── */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              In a Market That Never Sleeps
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
              You need a consultant who understands both the boardroom and the
              street. We bring the strategic foresight and tactical network
              necessary to optimize your revenue and secure your market
              position.
            </p>
          </div>

          <div className="bg-[#FDF4E7] border border-amber-200/80 p-8 md:p-12 rounded-sm space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#8B5A2B]">
              Unlock Your Next Billion-Dollar Milestone
            </h3>
            <p className="text-gray-800 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
              Let’s build your legacy—we are the partners you’ve been looking
              for.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#111827] text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg"
              >
                Book a Strategic Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
