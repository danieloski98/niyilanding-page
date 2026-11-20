import { Link } from "react-router-dom"
import { ArrowRight, GraduationCap, ShieldCheck, Award } from "lucide-react"
import { PROFILE } from "../data/contentData"
import SEO from "../components/SEO"

export default function AboutPage() {
  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="About Adeniyi Odejobi"
        description="Executive biography and profile of Adeniyi Odejobi — Actuarial Science alumnus, ICAN Chartered Accountant, Edinburgh MBA, and African Telecoms & FinTech Sales Director."
      />

      {/* ── SECTION 1: HERO FOLD (IMAGE + ABOUT ADENIYI ODEJOBI) ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Portrait Image with rounded corners */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="/contents/consulting.jpeg"
                  alt="About Adeniyi Odejobi"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>

            {/* Right Column: Title & Text */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111827] tracking-tight">
                About Adeniyi Odejobi
              </h1>

              <div className="font-sans italic text-sm sm:text-base text-gray-600">
                – Adeniyi Odejobi's Biography and Profile
              </div>

              <div className="pt-4">
                <a
                  href="#mindset"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-serif font-bold text-[#111827] hover:opacity-75 transition-opacity"
                >
                  Satiate Your Curiosity ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ADENIYI ODEJOBI'S MINDSET (WARM PEACH/BEIGE) ── */}
      <section
        id="mindset"
        className="bg-[#FDF4E7] py-20 md:py-28 border-b border-amber-100"
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B5A2B]">
            Adeniyi Odejobi's Mindset
          </h2>

          <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              Adeniyi Odejobi spearheads a rare and pivotal intersection in
              Africa's commercial and technological landscape. He unifies the
              spheres of actuarial science, chartered financial governance,
              public policy, and executive commercial operations in Africa by
              bringing an analytical, problem-solving mindset to every ecosystem
              he enters.
            </p>

            <p>
              With a distinguished career rooted in telecoms, financial services
              and financial technology, Adeniyi has consistently championed the
              idea that advanced commercial strategy must not remain confined to
              corporate boardrooms. Instead, it must be actively translated into
              digital infrastructure, modernised subnational systems, and
              scalable institutional reforms that serve national development.
            </p>

            <p>
              Whether advising state governments, structuring multi-million
              dollar upstream energy deals, driving digital economy and
              financial inclusion, or translating complex commercial strategies
              into practical digital infrastructure and institutional reform or
              modernising public infrastructure, he approaches every
              technological challenge with a commitment to sustainable, tangible
              impact.
            </p>

            <p>
              His distinguished track record across telecoms, fintech, and
              financial services highlights a relentless focus on financial
              inclusion and sustainable development.
            </p>

            <p>
              Adeniyi leverages an analytical, problem-solving mindset to drive
              measurable impact across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COMMERCIAL PHILOSOPHY (SOFT POWDER BLUE) ── */}
      <section className="bg-[#E6EEFA] py-20 md:py-28 border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1D4ED8]">
              Adeniyi Odejobi's Commercial Philosophy
            </h2>
            <div className="font-sans italic text-xs sm:text-sm text-[#1D4ED8]">
              Engineering for Subnational & Enterprise Ecosystems
            </div>
          </div>

          <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed font-sans pt-2">
            <p>
              A central tenet of Adeniyi Odejobi's commercial philosophy is that
              digital infrastructures and sales models must be calibrated to
              their specific regional, environmental, and demographic contexts.
              Recognising that imported technological models often fail to
              account for regional nuances, his focus centers heavily on
              tailored enterprise solutions, subnational e-governance, and
              public-private partnership frameworks.
            </p>

            <p>
              From structuring state-wide broadband partnerships that empower
              subnational entities to deploying multi-million dollar managed
              services for upstream energy operations, Adeniyi's work bridges
              the divide between quantitative actuarial science and practical
              socio-economic progress. He designs commercial solutions that work
              not just in theory, but in the demanding reality of developing
              markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ANALYTICAL MIND (SOFT MINT GREEN) ── */}
      <section className="bg-[#EAF7EE] py-20 md:py-28 border-b border-emerald-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#059669]">
            Adeniyi Odejobi's Analytical Mind
          </h2>

          <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed font-sans">
            <p>
              Colleagues, clients, and partners know Adeniyi Odejobi as a leader
              to whom analytical thinking, quantitative risk management, and
              complex problem-solving come naturally. He thrives on success,
              embraces financial rigour, and is continually driven by the
              pursuit of new commercial milestones. Yet, his proudest
              achievements lie not just in deals or appointments, but in human
              capital development.
            </p>

            <p>
              Through his passion project,{" "}
              <em className="font-serif text-[#059669]">
                AO Business Roundtable Initiative
              </em>
              , Adeniyi actively reinvests his time and resources into
              grassroots empowerment for underserved Nigerians. By providing
              mentorship, digital literacy frameworks, and entrepreneurial
              support, he is dedicated to empowering a generation of
              tech-enabled African problem solvers capable of achieving
              financial independence and driving national growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: ACADEMIC & PROFESSIONAL TRAJECTORY (3 PASTEL CARDS) ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-14 space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
              Academic & Professional Trajectory
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans">
              Adeniyi Odejobi's trajectory reflects a relentless pursuit of
              quantitative depth, combining international business management
              with financial chartered accounting and actuarial science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1: Soft Violet - Community Development */}

            {/* Card 1: Light Warm Peach */}
            <div className="bg-[#FDF4E7] p-8 md:p-10 flex flex-col justify-between min-h-[440px] border border-amber-200/60">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#8B5A2B] leading-snug">
                  Formative Actuarial & Financial Foundation
                </h3>
                <div className="font-serif italic text-xs text-gray-700">
                  University of Lagos
                </div>
                <div className="font-sans font-bold text-xs text-[#8B5A2B] uppercase tracking-wider pt-2">
                  Bachelor of Science (B.Sc. Hons) in Actuarial Science
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Focused foundational quantitative research on mathematical
                  risk modeling, statistical probability, and advanced financial
                  systems architecture.
                </p>
              </div>
            </div>

            {/* Card 2: Soft Blue */}
            <div className="bg-[#E6EEFA] p-8 md:p-10 flex flex-col justify-between min-h-[440px] border border-blue-100">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1D4ED8] leading-snug">
                  Postgraduate Strategy & International Business
                </h3>
                <div className="font-serif italic text-xs text-gray-700">
                  Edinburgh Business School, Heriot-Watt University, United
                  Kingdom.
                </div>
                <div className="font-sans font-bold text-xs text-[#1D4ED8] uppercase tracking-wider pt-2">
                  Master of Business Administration (MBA)
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Advanced postgraduate research in strategic management,
                  corporate governance, cross-border deal structuring, and
                  international business expansion.
                </p>
              </div>
            </div>

            {/* Card 3: Soft Green */}
            <div className="bg-[#EAF7EE] p-8 md:p-10 flex flex-col justify-between min-h-[440px] border border-emerald-100">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#059669] leading-snug">
                  Chartered Accounting & Financial Governance
                </h3>
                <div className="font-serif italic text-xs text-gray-700">
                  Institute of Chartered Accountants of Nigeria (ICAN).
                </div>
                <div className="font-sans font-bold text-xs text-[#059669] uppercase tracking-wider pt-2">
                  Associate Chartered Accountant (ACA)
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Certified expertise in corporate finance, financial auditing,
                  P&L risk management, and strategic corporate governance.
                </p>
              </div>
            </div>

            <div className="bg-[#F5F3FF] p-8 md:p-10 flex flex-col justify-between min-h-[440px] border border-violet-200/70">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#6D28D9] leading-snug">
                  Community Development
                </h3>
                <div className="font-serif italic text-xs text-gray-700">
                  Kings College Lagos, Nigeria.
                </div>
                <div className="font-sans font-bold text-xs text-[#6D28D9] uppercase tracking-wider pt-2">
                  Community Development Programs
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Distinguished alumnus of King’s College Lagos and a dedicated
                  member of the KCOBA, where he actively participates in the
                  association’s community development programs, and competitive
                  sports events to uphold our tradition of excellence and
                  brotherhood.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 text-center">
            <Link
              to="/work-experience"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111827] text-white font-medium text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              Explore Career Trajectory <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
