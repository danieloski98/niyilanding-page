import { Link } from "react-router-dom"
import {
  GraduationCap,
  BookOpen,
  Users,
  MessageSquare,
  Award,
  Sparkles,
  TrendingUp,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import SEO from "../components/SEO"

export default function AoAcademyPage() {
  const curriculumPillars = [
    {
      title: "Digital Marketing",
      description:
        "Leveraging digital channels, data analytics, and modern campaign frameworks to drive customer acquisition.",
    },
    {
      title: "Client Relationship Management",
      description:
        "Building long-term C-Suite trust, managing key accounts, and driving recurring business value.",
    },
    {
      title: "Strategic Branding",
      description:
        "Crafting authoritative corporate and personal brand positioning that commands premium market value.",
    },
    {
      title: "Advanced Negotiation",
      description:
        "Structuring high-stakes deals, mastering commercial dialogue, and navigating complex corporate procurement.",
    },
    {
      title: "Entrepreneurship & Scale",
      description:
        "Developing entrepreneurial agility, business modeling, and sustainable operational frameworks.",
    },
    {
      title: "Business Expansion",
      description:
        "Expanding into new market territories, subnational partnerships, and institutional growth channels.",
    },
  ]

  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="AO Academy | Empowering Next-Gen Business Leaders"
        description="AO Academy (Adeniyi Odejobi Academy) is a definitive launchpad developing the next generation of sales and business professionals across Nigeria."
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
              <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-[#e07a2c] block mt-1">
                ACADEMY
              </span>
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full border border-amber-400/30">
            Adeniyi Odejobi Academy
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight max-w-4xl leading-tight">
            Empowering the Next Generation of Business Leaders
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl font-sans font-light leading-relaxed">
            AO Academy (Adeniyi Odejobi Academy) continues to reinforce its
            commitment to developing the next generation of sales and business
            professionals across Nigeria. By bridging the gap between academic
            theory and market reality, the Academy serves as a definitive
            launchpad for young, ambitious minds.
          </p>

          {/* Training Image */}
          <div className="pt-4 w-full max-w-3xl">
            <div className="w-full overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
              <img
                src="/contents/training.jpeg"
                alt="AO Academy Training Session"
                className="w-full h-auto object-cover max-h-[480px] mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CURRICULUM BUILT FOR MODERN ECONOMY ── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
              Comprehensive Training Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              A Curriculum Built for the Modern Economy
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              Our sessions go beyond basic instruction, exploring the core
              pillars of professional success: digital marketing, client
              relationship management, strategic branding, advanced negotiation,
              entrepreneurship, and the principles of business expansion.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] border border-gray-200 p-8 rounded-sm hover:border-[#0F2C59] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#0F2C59]/10 text-[#0F2C59] flex items-center justify-center font-serif font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#111827]">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#FDF4E7] border border-amber-200/80 p-8 md:p-10 rounded-sm max-w-4xl space-y-3">
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-sans">
              Each module is meticulously designed to teach participants not
              only how the corporate world functions but also how to build a
              scalable and sustainable career within it. The curriculum reflects
              the growing demand for professionals who understand that success
              in the modern marketplace depends as much on communication,
              technology, and emotional intelligence as it does on closing a
              deal.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: TRANSFORMING CAREERS ── */}
      <section className="py-20 md:py-28 bg-[#fafafa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
                Career Acceleration
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
                Transforming Careers Across Nigeria
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                For many participants, AO Academy serves as their first
                structured introduction to the world of high-stakes sales and
                business development. For others already established in their
                careers, it is a vital opportunity to refine existing skills,
                adopt cutting-edge growth strategies, and master the art of
                business expansion.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-8 md:p-10 border border-gray-200 shadow-md space-y-6">
              <div className="flex items-center gap-4 text-[#0F2C59]">
                <TrendingUp className="w-8 h-8 stroke-[1.5]" />
                <h3 className="font-serif text-2xl font-bold text-[#111827]">
                  The Launchpad for Ambition
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-gray-700 font-sans">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    Structured transition from entry-level execution to
                    strategic commercial leadership.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    Mastering high-stakes corporate sales, public sector
                    pitching, and deal closure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>
                    Adopting cutting-edge market expansion strategies tailored
                    to the African economy.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CLASSROOM DRIVEN BY CONVERSATION ── */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
              Interactive Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111827] tracking-tight">
              A Classroom Driven by Conversation
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              Unlike conventional, rigid training programmes, AO Academy is
              defined by its interactive and high-energy learning environment.
              We believe that the best ideas are born through dialogue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#E6EEFA] p-8 border border-blue-100 space-y-4">
              <MessageSquare className="w-8 h-8 text-[#1D4ED8]" />
              <h3 className="font-serif text-xl font-bold text-[#1D4ED8]">
                Proactive Q&A Sessions
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Engaging sessions that tackle real-world commercial hurdles,
                market friction points, and operational challenges faced by
                professionals in Nigeria.
              </p>
            </div>

            <div className="bg-[#FDF4E7] p-8 border border-amber-200/60 space-y-4">
              <Target className="w-8 h-8 text-[#8B5A2B]" />
              <h3 className="font-serif text-xl font-bold text-[#8B5A2B]">
                Practical Sales Simulations
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Immersive simulations and real-life case studies that test
                strategic thinking, deal structuring, and high-pressure
                negotiation.
              </p>
            </div>

            <div className="bg-[#EAF7EE] p-8 border border-emerald-100 space-y-4">
              <Users className="w-8 h-8 text-[#059669]" />
              <h3 className="font-serif text-xl font-bold text-[#059669]">
                Peer-to-Peer Collaboration
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed font-sans">
                Collaborative exercises where participants become active
                contributors to the learning process, sharing diverse market
                insights.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200 rounded-sm">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
              The result is a transformative experience where ideas are
              exchanged freely, professional networks are forged, and future
              business partnerships take shape. By the end of the programme, our
              graduates gain more than just technical knowledge—they become part
              of an elite community of professionals committed to mutual growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: LEARNING FROM INDUSTRY ICONS ── */}
      <section className="bg-[#0F2C59] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Direct Mentorship Model
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Learning from Industry Icons
            </h2>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-sans">
              The hallmark of AO Academy is our emphasis on direct mentorship.
              Rather than relying on outdated textbooks, our students learn
              directly from seasoned practitioners and business leaders actively
              navigating the Nigerian and global markets.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-sm space-y-6">
            <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-serif italic">
              "Under the vision of Adeniyi Odejobi, participants gain insights
              shaped by real-world wins, market fluctuations, and years of
              hands-on experience in business development. This practical
              approach is why AO Academy remains the preferred choice for
              individuals seeking to dominate the fields of sales and
              marketing."
            </p>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold font-sans">
              — The AO Academy Mentorship Philosophy
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CELEBRATING EXCELLENCE & LOOKING AHEAD ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 bg-[#FDF4E7] p-8 md:p-12 border border-amber-200/70">
              <Award className="w-10 h-10 text-[#8B5A2B]" />
              <h2 className="font-serif text-3xl font-normal text-[#8B5A2B]">
                Celebrating Excellence
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                Every cohort concludes with a graduation ceremony—a symbolic
                beginning of a new professional journey. Certificates are
                presented to those who have met the Academy’s rigorous
                standards, marking their transition from students to
                market-ready professionals.
              </p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                Surrounded by mentors, families, and industry peers, our
                graduates celebrate a journey that many describe as truly
                transformative.
              </p>
            </div>

            <div className="space-y-6 bg-[#E6EEFA] p-8 md:p-12 border border-blue-100">
              <Sparkles className="w-10 h-10 text-[#1D4ED8]" />
              <h2 className="font-serif text-3xl font-normal text-[#1D4ED8]">
                Looking Ahead
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                As one cohort of leaders steps out to transform the business
                landscape, AO Academy is already preparing for the next. The
                mission remains clear: to mentor, to train, and to empower the
                voices that will lead Nigeria’s business future.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111827] text-white text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-colors"
                >
                  Inquire About Next Cohort <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
