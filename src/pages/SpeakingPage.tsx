import { Link } from "react-router-dom"
import {
  Mic,
  Users,
  FileText,
  UserCheck,
  Zap,
  Globe,
  ShieldCheck,
  Lightbulb,
  Target,
  ArrowRight,
  Calendar,
  MessageSquare,
} from "lucide-react"
import SEO from "../components/SEO"

export default function SpeakingPage() {
  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Exchange with Adeniyi Odejobi | Speaking Engagements"
        description="Book C-Level Commercial Executive & Fellow Chartered Accountant Adeniyi Odejobi for Keynote Speeches, Panel Discussions, Executive Mentoring, and Workshops."
      />

      {/* ── SECTION 1: HERO / BANNER ── */}
      <section className="bg-[#0F2C59] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-sans font-bold uppercase tracking-widest">
                <Mic className="w-3.5 h-3.5" />
                <span>Speaking Engagements & Exchanges</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight">
                Exchange with Adeniyi Odejobi
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-amber-300 font-medium">
                Strategic Insights. Global Vision. Impactful Conversations.
              </p>

              <div className="space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-sans pt-2">
                <p>
                  Are you looking to elevate your next event with a perspective
                  shaped at the intersection of high-stakes commerce and digital
                  innovation?
                </p>
                <p>
                  As a C-Level Commercial Executive and Fellow of the Institute
                  of Chartered Accountants (FCA) with a proven track record of
                  managing multi-million dollar P&Ls across 17+ African markets,
                  I bring more than just words to the stage. I bring a blueprint
                  for growth, a passion for financial inclusion, and the
                  strategic foresight gained from leading at the forefront of
                  the Telecoms and Fintech revolution.
                </p>
                <p className="text-white font-medium">
                  Through &ldquo;Exchange with Adeniyi Odejobi,&rdquo; I offer a
                  platform for knowledge transfer and strategic dialogue
                  designed to inspire action and drive innovation.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e07a2c] hover:bg-[#c96920] text-white font-sans font-bold text-xs uppercase tracking-widest transition-all shadow-lg rounded-xs"
                >
                  <span>Book Adeniyi for Your Event</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                <img
                  src="/contents/speaking.jpeg"
                  alt="Adeniyi Odejobi Speaking Engagement"
                  className="w-full h-auto object-cover max-h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: HOW WE CAN COLLABORATE ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-14">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-gray-500 font-medium">
              <span>Engagements & Formats</span>
              <span className="w-16 h-[1px] bg-gray-400 inline-block"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              How We Can Collaborate
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
              Whether it’s a global tech summit, a corporate boardroom, or an
              intensive leadership bootcamp, I provide tailored sessions that
              resonate with diverse audiences:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Format 1: Keynote Speeches */}
            <div className="bg-[#FAF9F5] p-8 border border-amber-200/60 rounded-xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-400 flex items-center justify-center">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827]">
                Keynote Speeches
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Inspiring narratives on leadership, the future of the digital
                economy, and scaling businesses in emerging markets.
              </p>
            </div>

            {/* Format 2: Panel Discussions */}
            <div className="bg-gray-50 p-8 border border-gray-200/80 rounded-xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-400 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827]">
                Panel Discussions
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Insightful contributions that bridge the gap between technical
                innovation and commercial viability.
              </p>
            </div>

            {/* Format 3: Paper Delivery & Research Presentation */}
            <div className="bg-gray-50 p-8 border border-gray-200/80 rounded-xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827]">
                Paper Delivery & Research Presentation
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Deep dives into data-driven trends, physics-based modeling, and
                the socio-economic impact of fintech.
              </p>
            </div>

            {/* Format 4: Executive Mentoring */}
            <div className="bg-gray-50 p-8 border border-gray-200/80 rounded-xl space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-400 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827]">
                Executive Mentoring
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                One-on-one or group sessions focused on capacity building,
                employability, and strategic leadership for the next generation
                of executives.
              </p>
            </div>

            {/* Format 5: Workshops & Bootcamps */}
            <div className="bg-gray-50 p-8 border border-gray-200/80 rounded-xl space-y-4 hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-lg bg-[#0F2C59] text-amber-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#111827]">
                Workshops & Bootcamps
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Practical, hands-on training sessions focused on innovation,
                knowledge sharing, and commercial excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY INVITE ADENIYI? ── */}
      <section className="bg-[#FAF9F5] py-20 md:py-28 border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              Why Invite Adeniyi?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans">
              Bringing real-world executive authority and transformative
              insights to your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Market Mastery */}
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex items-start gap-5 shadow-xs hover:border-amber-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#0F2C59] text-amber-400 flex items-center justify-center shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#111827]">
                  Market Mastery
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Real-world experience navigating 17+ diverse African markets,
                  managing complex subnational relationships and enterprise
                  operations.
                </p>
              </div>
            </div>

            {/* Pillar 2: Authority */}
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex items-start gap-5 shadow-xs hover:border-amber-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#0F2C59] text-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#111827]">
                  Authority
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  A Fellow Chartered Accountant (FCA) with deep financial,
                  governance, and commercial expertise across multi-million
                  dollar P&Ls.
                </p>
              </div>
            </div>

            {/* Pillar 3: Visionary Thinking */}
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex items-start gap-5 shadow-xs hover:border-amber-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#0F2C59] text-amber-400 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#111827]">
                  Visionary Thinking
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  A specialist in viewing technology not just as a tool, but as
                  a fundamental right for economic inclusion and societal
                  advancement.
                </p>
              </div>
            </div>

            {/* Pillar 4: Clarity & Conviction */}
            <div className="bg-white p-8 border border-gray-200 rounded-xl flex items-start gap-5 shadow-xs hover:border-amber-400 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#0F2C59] text-amber-400 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-[#111827]">
                  Clarity & Conviction
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  I don&apos;t just speak; I leave audiences with the clarity
                  and conviction needed to trigger tangible growth and
                  actionable execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CALL TO ACTION BANNER ── */}
      <section className="bg-[#0F2C59] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
            Let’s Start the Conversation
          </h2>

          <p className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Transform your next event into a catalyst for change. Whether you
            are aiming to spark innovation or build professional capacity, let’s
            create an &ldquo;Exchange&rdquo; that lasts long after the final
            applause.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#e07a2c] hover:bg-[#c96920] text-white font-sans font-bold text-sm uppercase tracking-widest transition-all shadow-xl rounded-xs hover:scale-105"
            >
              <span>Book Adeniyi for Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
