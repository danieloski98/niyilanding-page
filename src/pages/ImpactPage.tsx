import { Link } from "react-router-dom"
import { GraduationCap, Code, Briefcase, Quote, ArrowRight } from "lucide-react"
import { DEALS } from "../data/contentData"
import SEO from "../components/SEO"

export default function ImpactPage() {
  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Landmark Deals & Subnational Impact"
        description="High-value enterprise telecom deals and subnational public sector digital partnerships exceeding $650M+ per annum led by Adeniyi Odejobi."
      />

      {/* ── SECTION 1: HERO BANNER (DEEP BLUE BACKGROUND) ── */}
      <section className="bg-[#0F2C59] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-6">
          {/* Circular Emblem Badge */}
          <div className="w-28 h-28 rounded-full bg-white text-[#0F2C59] flex items-center justify-center border-4 border-amber-400/40 p-4 shadow-2xl">
            <div className="text-center leading-none">
              <span className="font-serif font-bold text-2xl block text-[#0F2C59]">
                AO
              </span>
              <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-[#e07a2c] block mt-1">
                Initiative
              </span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            The Business Roundtable Initiative
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg font-sans max-w-xl">
            The Business Roundtable Initiative – a Social Development and Youth
            Empowerment Advocacy Nonprofit Organization.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: WHO WE ARE ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-gray-500 font-medium">
                <span>The Business Roundtable Initiative</span>
                <span className="w-16 h-[1px] bg-gray-400 inline-block"></span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
                Who We Are
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans pt-2">
                The Business Roundtable has made a personal impact in Nigeria by
                supporting over 500 youths, entrepreneurs and start-ups through
                numerous projects and intervention programs. The Business
                Roundtable Initiative was founded on the belief that true
                executive leadership extends beyond the institution. The
                Initiative is a dynamic Non-Governmental Organisation dedicated
                to human capital development. By bridging the gap between
                theoretical knowledge and practical execution, this Initiative
                empowers underserved Nigerians with the tools they need to
                thrive in a digital-first economy.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6">
              <div className="w-full overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/contents/training.jpeg"
                  alt="Who We Are - AO Initiative"
                  className="w-full h-auto object-cover max-h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR GUIDING PHILOSOPHY ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-gray-500 font-medium">
                <span>Building self-reliant problem solvers</span>
                <span className="w-16 h-[1px] bg-gray-400 inline-block"></span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
                Our Guiding Philosophy
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans pt-2">
                Across Nigeria and the wider African continent, a vast divide
                often exists between theoretical classroom learning and the
                practical skills required to build sustainable enterprises and
                solve real-world challenges. The Business Roundtable Initiative
                was established to bridge this exact gap.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                By translating complex analytical frameworks into accessible
                mentorship, practical tech literacy, and business service
                delivery, the Initiative actively builds human capacity. We do
                not simply distribute aid; we build self-reliant problem
                solvers. Our goal is to foster an ecosystem where young minds
                can leverage technology to create jobs, drive local innovation,
                and achieve lasting financial independence.
              </p>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-6">
              <div className="w-full overflow-hidden">
                <img
                  src="/contents/roundtable.jpeg"
                  alt="Our Guiding Philosophy"
                  className="w-full h-auto object-contain max-h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR VISION & OUR MISSION OVERLAY BANNER ── */}
      <section className="relative py-28 md:py-36 bg-gray-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/contents/training.jpeg"
            alt="Vision & Mission Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-xl bg-white p-8 sm:p-12 shadow-2xl space-y-8 text-[#111827]">
            {/* Vision */}
            <div className="space-y-3">
              <h3 className="font-serif text-3xl font-bold text-[#111827]">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                Our vision at The Business Roundtable Initiative is to build a
                generation of confident, skilled, and self-reliant Nigerians
                capable of leading positive change in their respective
                communities.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <h3 className="font-serif text-3xl font-bold text-[#111827]">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                At The Business Roundtable Initiative, we provide accessible
                learning, foster innovation, and support entrepreneurship
                through practical programmes, mentorship, and strategic
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR CORE PILLARS OF INTERVENTION ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-2 mb-14">
            <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-gray-500 font-medium">
              <span>Actionable strategies we follow at the foundation</span>
              <span className="w-16 h-[1px] bg-gray-400 inline-block"></span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
              Our Core Pillars of Intervention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Education */}
            <div className="bg-[#E6EEFA] p-8 md:p-10 flex flex-col justify-between min-h-[460px] border border-blue-100">
              <div className="space-y-6">
                <div className="text-[#1E40AF]">
                  <GraduationCap className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1E40AF]">
                  Education
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  We believe education is the bedrock of societal
                  transformation. Our programmes provide structured access to
                  high-quality learning resources, academic advisory, and
                  mentorship. Through these, we equip Nigerians with the
                  intellectual rigour and essential life skills required to
                  navigate a competitive world.
                </p>
              </div>
            </div>

            {/* Pillar 2: Innovation */}
            <div className="bg-[#E6EEFA] p-8 md:p-10 flex flex-col justify-between min-h-[460px] border border-blue-100">
              <div className="space-y-6">
                <div className="text-[#1E40AF]">
                  <Code className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1E40AF]">
                  Innovation
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Our innovation programmes empower young minds to challenge
                  conventional boundaries, embrace emerging technologies, and
                  develop practical, scalable solutions to real-world
                  socio-economic challenges. We do not simply distribute aid; we
                  build self-reliant problem solvers.
                </p>
              </div>
            </div>

            {/* Pillar 3: Entrepreneurship */}
            <div className="bg-[#E6EEFA] p-8 md:p-10 flex flex-col justify-between min-h-[460px] border border-blue-100">
              <div className="space-y-6">
                <div className="text-[#1E40AF]">
                  <Briefcase className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1E40AF]">
                  Entrepreneurship
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                  We support aspiring founders and emerging innovators with the
                  targeted training, mentorship, and business service resources
                  necessary to transform ideas into sustainable enterprises. Our
                  approach champions long-term job creation, ethical leadership,
                  and lasting financial independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: QUOTE BLOCK SECTION ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6 text-left">
          <div className="text-black text-6xl md:text-7xl font-serif leading-none select-none">
            “
          </div>

          <blockquote className="font-sans text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed italic">
            “Throughout my career one truth has remained constant:{" "}
            <strong className="font-bold text-[#111827]">
              Systems are only as strong as the people who build and manage
              them.
            </strong>{" "}
            The Business Roundtable Initiative is my commitment to nurturing
            that human capital. When we teach a Nigerian how to think
            analytically, how to harness digital tools, and how to build a
            self-sustaining enterprise, we are not just changing an individual
            life; we are engineering the socio-economic transformation of our
            nation.”
          </blockquote>

          <div className="pt-4 font-sans text-sm text-[#111827]">
            <div className="font-bold">Adeniyi Odejobi</div>
            <div className="text-gray-500 text-xs">
              (Founder, The AO Initiative)
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: DEALS & PUBLIC SECTOR PARTNERSHIPS SHOWCASE ── */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111827]">
              Landmark Commercial & Public Sector Deals
            </h2>
            <p className="text-gray-600 text-sm">
              Multi-million dollar enterprise and subnational digital
              partnerships facilitated across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEALS.map((deal) => (
              <div
                key={deal.id}
                className="bg-white p-8 border border-gray-200 shadow-sm space-y-3"
              >
                <span className="inline-block px-2.5 py-1 bg-[#0F2C59] text-white text-[10px] font-bold uppercase tracking-wider">
                  {deal.tag}
                </span>
                <div className="text-3xl font-serif font-bold text-[#111827]">
                  {deal.value}{" "}
                  <span className="text-xs font-normal text-gray-500">
                    {deal.detail}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  {deal.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {deal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
