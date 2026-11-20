import { useState } from "react"
import { Link } from "react-router-dom"
import {
  DEALS,
  COMPETENCIES,
  PROFILE,
  NEWS_ARTICLES,
} from "../data/contentData"
import { PHOTO_ALBUMS, PhotoAlbum } from "../data/photoAlbumData"
import Logo from "../components/Logo"
import {
  ArrowRight,
  Landmark,
  Shield,
  Cpu,
  GraduationCap,
  Code,
  ExternalLink,
  X,
  ChevronRight,
  ChevronLeft,
  Images,
  Download,
} from "lucide-react"

import SEO from "../components/SEO"

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeAlbum, setActiveAlbum] = useState<PhotoAlbum | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  const categories = [
    "All",
    ...Array.from(new Set(PHOTO_ALBUMS.map((a) => a.category))),
  ]

  const filteredAlbums =
    selectedCategory === "All"
      ? PHOTO_ALBUMS
      : PHOTO_ALBUMS.filter((a) => a.category === selectedCategory)

  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="African Telecoms & FinTech Sales Director"
        description="Commercial Executive driving subnational digital partnerships, enterprise telecoms transformation, and multi-million dollar P&L growth across Africa."
      />

      {/* ── SECTION 1: HERO PORTRAIT FOLD ── */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[420px]">
            {/* Left: Cutout Portrait */}
            <div className="md:col-span-5 flex justify-center md:justify-start">
              <div className="w-full max-w-sm md:max-w-md">
                <img
                  src="/contents/newimage/img.jpeg"
                  alt="Adeniyi Odejobi"
                  className="w-full h-auto object-contain max-h-[480px] mx-auto"
                />
              </div>
            </div>

            {/* Right: Title & Subhead */}
            <div className="md:col-span-7 space-y-4 text-left">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#111827] tracking-tight leading-tight">
                Adeniyi Odejobi
              </h1>
              <p className="text-gray-700 text-lg sm:text-xl font-sans font-normal tracking-wide">
                C - Level Commercial Executive - Africa Telecoms & Fintech
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT SUMMARY & LARGE MONOGRAM ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Bio Text */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
                Adeniyi Odejobi
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                At the heart of Africa’s digital transformation is Adeniyi, a
                leader whose career is defined by the intersection of analytical
                precision and commercial excellence.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                With a background in actuarial science and a proven track record
                in FinTech and Telecommunications, he possesses the rare ability
                to navigate both the boardroom and the public sector.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                With about two decades of experience in the African Telco and
                FinTech sectors, he serves as a bridge between corporate
                strategy and public sector governance. His work focuses on
                modernizing systems and designing resilient digital
                infrastructure, ultimately translating complex commercial
                insights into transformative, nationwide results.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                He doesn't just design strategy; he engineers scalable impact
                and uniquely blends technology and innovation with high-level
                commercial leadership.
              </p>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                Adeniyi excels at turning intricate commercial strategies into
                sustainable, institutional change that benefits entire nations.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#111827] hover:opacity-75 transition-opacity"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Large Monogram Logo Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm p-8 bg-[#fafafa] border border-gray-200 flex justify-center items-center py-16 shadow-xs">
                <Logo variant="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CORE COMPETENCIES (3 PASTEL VERTICAL CARDS) ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-16 space-y-3">
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
              Core Competencies
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans">
              Adeniyi Odejobi combines actuarial precision and chartered
              financial acumen with executive leadership to drive technological
              and institutional advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Warm Peach / Beige */}
            <div className="bg-[#FDF4E7] p-8 md:p-10 flex flex-col justify-between min-h-[540px]">
              <div>
                <div className="text-[#8B5A2B] mb-8">
                  <Landmark className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#8B5A2B] leading-tight mb-4">
                  Enterprise Sales & Revenue Growth
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6">
                  Decades of executive leadership, multi-million dollar P&L
                  management, top-line revenue expansion, and commercial
                  strategy across telecom and fintech verticals.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5A2B] font-bold">•</span>
                    <span>
                      Over 10+ years of senior executive management leading
                      multi-million dollar P&L.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5A2B] font-bold">•</span>
                    <span>
                      Associate Chartered Accountant (ICAN) & Edinburgh MBA
                      credentials.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5A2B] font-bold">•</span>
                    <span>
                      End-to-end go-to-market execution for enterprise corporate
                      clients.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/work-experience"
                  className="inline-flex items-center gap-1 text-xs font-serif font-bold text-[#8B5A2B] hover:underline"
                >
                  View Track Record <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Soft Blue */}
            <div className="bg-[#E6EEFA] p-8 md:p-10 flex flex-col justify-between min-h-[540px]">
              <div>
                <div className="text-[#1D4ED8] mb-8">
                  <Shield className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D4ED8] leading-tight mb-4">
                  Digital Economy & Government Engagements
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6">
                  Bridging corporate telecom frameworks with public sector
                  governance to modernize nationwide systems and deliver secure,
                  scalable digital infrastructure.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">•</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        National Infrastructure Modernization:
                      </strong>{" "}
                      Fusing enterprise-grade telecom expertise with public
                      policy to deliver secure, nationwide digital systems.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">•</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Strategic Deal Leadership:
                      </strong>{" "}
                      Directed end-to-end e-governance implementations for
                      Federal Ministries, Departments, and Agencies (MDAs) and
                      several sub-national territories.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">•</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Public-Private Partnerships (PPP):
                      </strong>{" "}
                      Facilitated landmark digital health and productivity
                      collaborations at the Federal level.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">•</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Digital Equity Advocate:
                      </strong>{" "}
                      Championing nationwide Digital Transformation and
                      Inclusion mandates to ensure no community is left behind.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1D4ED8] font-bold">•</span>
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Educational Advancement:
                      </strong>{" "}
                      Scaling digital literacy programs across public schools to
                      foster long-term national competitiveness.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-1 text-xs font-serif font-bold text-[#1D4ED8] hover:underline"
                >
                  See Public Sector Deals <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Soft Green */}
            <div className="bg-[#EAF7EE] p-8 md:p-10 flex flex-col justify-between min-h-[540px]">
              <div>
                <div className="text-[#059669] mb-8">
                  <Cpu className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#059669] leading-tight mb-4">
                  Telecoms, Tech & Mobile Financial Services
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-6">
                  Architecting resilient digital solutions, mobile money
                  ecosystems, and mission-critical enterprise energy broadband
                  connectivity.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold">•</span>
                    <span>
                      Strategic commercial engagement and partnership
                      development within the tier-one energy and technology
                      sectors.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold">•</span>
                    <span>
                      Mobile money and financial inclusion solutions for
                      unbanked populations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold">•</span>
                    <span>
                      Enterprise IoT, cloud infrastructure, and fiber
                      connectivity.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-1 text-xs font-serif font-bold text-[#059669] hover:underline"
                >
                  Browse Technical Initiatives{" "}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DEEP ROYAL BLUE INITIATIVE BANNER ── */}
      <section className="bg-[#0F2C59] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {/* Top Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 border-b border-blue-900/60 pb-10">
            {/* Circular Emblem */}
            <div className="w-28 h-28 rounded-full bg-white text-[#0F2C59] flex items-center justify-center shrink-0 border-4 border-amber-400/40 p-4 shadow-xl">
              <div className="text-center leading-none">
                <span className="font-serif font-bold text-2xl block text-[#0F2C59]">
                  AO
                </span>
                <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-[#e07a2c] block mt-1">
                  Initiative
                </span>
              </div>
            </div>

            <div className="space-y-2 text-center md:text-left">
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">
                Public Sector Digital Initiatives
              </h2>
              <p className="text-gray-200 text-sm sm:text-base font-sans max-w-2xl">
                Spearheaded by Adeniyi Odejobi to bridge the opportunity and
                infrastructure gaps for subnational entities through education,
                innovation, and digital connectivity.
              </p>
            </div>
          </div>

          {/* Middle Paragraph */}
          <div className="max-w-4xl text-gray-200 text-sm sm:text-base leading-relaxed font-sans">
            Founded on the belief that true executive leadership extends beyond
            corporate boardrooms, these public sector initiatives focus on human
            capital development and digital empowerment. By bridging the gap
            between strategy and practical execution, these initiatives empower
            state governments and federal ministries with the tools they need to
            thrive in a digital-first economy.
          </div>

          {/* Bottom 2 Rows with White Icons */}
          <div className="space-y-8 pt-4">
            <div className="flex items-start gap-6">
              <div className="text-white shrink-0 mt-1">
                <GraduationCap className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                  E-Health & Smarter Productivity Initiatives
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                  Collaborating with national government authorities to
                  establish a unified network for public healthcare facilities
                  and modernize the country&apos;s official workforce and
                  employment registries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-white shrink-0 mt-1">
                <Code className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
                  Digital & State Broadband Infrastructure
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                  Empowering Federal and State administrations through
                  large-scale digital transformation initiatives by deploying
                  end-to-end solutions—spanning digital healthcare, educational
                  management systems, e-governance frameworks, smart urban
                  infrastructure, advanced e-health ecosystems and robust
                  connectivity to optimize operational efficiency and enhance
                  service delivery across major regions including Lagos, Enugu,
                  Ondo, Kaduna, Imo, Ekiti, Kano, Port Harcourt, and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PUBLICATIONS & RESEARCH / LANDMARK DEALS ── */}
      <section className="bg-white py-20 md:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Text & Box */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#111827] tracking-tight">
                Landmark Deals & High-Value Impact
              </h2>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans">
                With major commercial deals exceeding hundreds of millions of
                dollars per annum, Adeniyi Odejobi consistently directs his
                executive sales strategy toward solving critical socioeconomic
                and technological challenges. His work in telecoms, fintech, and
                public sector partnerships focuses heavily on developing robust
                commercial models tailored to African subnational datasets.
              </p>

              {/* 8 Landmark Deals */}
              <div className="space-y-4 pt-2">
                <div className="bg-[#FDF4E7] p-6 border border-amber-200/60 rounded-xl space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#8B5A2B] text-white font-bold text-xs shrink-0">
                      1
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#8B5A2B] leading-snug">
                      Large-Scale Energy Infrastructure & Cloud Integration
                      (Upstream focus)
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Orchestrating a landmark, high-value engagement ($99.5M+ per
                    annum) to modernize upstream energy operations. This 2025
                    initiative delivers ultra-secure enterprise broadband,
                    mission-critical IoT frameworks, and integrated cloud
                    solutions to ensure seamless, real-time connectivity across
                    remote and offshore exploration assets.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      2
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      National Data Center Interconnectivity Ecosystem
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Forging strategic alliances with the leading carrier-neutral
                    data centers across the region. By establishing a robust
                    presence within these hubs, we facilitate high-speed
                    cross-connects, edge computing capabilities, and colocation
                    services that serve as the backbone for the digital economy.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      3
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      Financial Services Digital Transformation & MPLS
                      Deployment
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Driving the digital evolution of the banking sector through
                    the deployment of resilient MPLS networks and hybrid cloud
                    architectures. This engagement covers comprehensive digital
                    infrastructure for all Tier 1 and Tier 2 commercial banks,
                    as well as prominent Microfinance Institutions (MFBs),
                    ensuring secure, low-latency financial transactions and data
                    integrity.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      4
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      Nationwide Fiber-to-the-Tower (FTTT) Backhaul Project
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Partnering with leading Mobile Network Operators (MNOs) to
                    upgrade 4G and 5G backhaul infrastructure. By deploying
                    thousands of kilometers of high-capacity fiber, we are
                    enabling the next generation of mobile connectivity and
                    improving network density in both urban and underserved
                    regions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      5
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      Public Sector E-Governance & Secure Network Architecture
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Implementing a unified secure network infrastructure for
                    major governmental departments and agencies. This project
                    focuses on digitizing public workflows, securing sensitive
                    state data through private cloud environments, and fostering
                    inter-agency collaboration via a dedicated fiber backbone.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      6
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      FMCG Supply Chain Optimization & Industrial IoT
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Supporting the digital supply chain of multinational
                    Fast-Moving Consumer Goods (FMCG) corporations. We provide
                    the connectivity layer for Industrial IoT (IIoT)
                    applications, enabling real-time asset tracking, automated
                    warehouse management, and predictive maintenance across
                    manufacturing plants and distribution hubs.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      7
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      Pan-African Wholesale Transit & Subsea Cable Integration
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Facilitating international capacity via strategic landing
                    stations and subsea cable partnerships. We provide wholesale
                    internet transit and IPLC (International Private Leased
                    Circuit) services to regional ISPs and global content
                    providers, reducing latency for international traffic.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200/80 rounded-xl space-y-2 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-900 text-white font-bold text-xs shrink-0">
                      8
                    </span>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                      Education & Healthcare Digital Inclusion Initiative
                    </h3>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-10">
                    Developing specialized connectivity solutions for tertiary
                    institutions and regional healthcare systems. This includes
                    the deployment of high-speed campus-wide Wi-Fi networks and
                    telemedicine-ready data links to support remote learning and
                    digital health diagnostics.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Large Photo Sticky in View */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-28">
              <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="/contents/WhatsApp Image 2026-09-14 at 7.57.05 AM (2).jpeg"
                  alt="Adeniyi Odejobi"
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PHOTO ENGAGEMENTS ARCHIVE ── */}
      <section className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111827] tracking-tight">
                High-Level Engagements Archive
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                Browse executive event photo books & high-resolution media
                collages. Click any album to view the full gallery.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-sans transition-colors rounded-xs ${
                    selectedCategory === cat
                      ? "bg-[#111827] text-white font-semibold"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Album Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlbums.slice(0, 6).map((album) => (
              <div
                key={album.id}
                onClick={() => {
                  setActiveAlbum(album)
                  setActiveImageIndex(0)
                }}
                className="group bg-white border border-gray-200 overflow-hidden cursor-pointer hover:shadow-xl hover:border-amber-300 transition-all rounded-2xl flex flex-col justify-between"
              >
                {/* Photo Book / Collage Cover Header */}
                <div className="relative bg-gray-900 overflow-hidden">
                  {/* Main Featured Cover Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={album.images[0].imagePath}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Photo Count Badge */}
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-[11px] font-sans font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                      <Images className="w-3.5 h-3.5 text-amber-400" />
                      <span>{album.images.length} Photos</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-amber-400 block">
                        {album.category} · {album.date}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Collage Preview Strip (4 mini previews) */}
                  <div className="grid grid-cols-4 gap-1 p-1 bg-[#111827] border-t border-gray-800">
                    {album.images.slice(0, 4).map((img, idx) => (
                      <div
                        key={img.id}
                        className="relative aspect-square overflow-hidden rounded-xs bg-gray-800"
                      >
                        <img
                          src={img.imagePath}
                          alt=""
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        {idx === 3 && album.images.length > 4 && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-xs font-bold font-sans">
                            +{album.images.length - 3}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Album Card Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-lg text-[#111827] group-hover:text-[#e07a2c] transition-colors leading-snug">
                      {album.title}
                    </h3>
                    <p className="text-xs text-amber-700 font-sans font-semibold leading-relaxed">
                      {album.subtitle}
                    </p>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed line-clamp-3">
                      {album.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-sans font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#e07a2c] transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Images className="w-4 h-4 text-[#e07a2c]" /> View Photo
                      Book ({album.images.length} Photos)
                    </span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/press-kit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#111827] text-white font-medium text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
              View Full 24+ High-Res Engagements Archive{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO BOOK LIGHTBOX MODAL ── */}
      {activeAlbum && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3 sm:p-6 backdrop-blur-md animate-in fade-in">
          <div className="relative max-w-5xl w-full bg-[#111827] text-white overflow-hidden shadow-2xl rounded-2xl flex flex-col max-h-[92vh]">
            {/* Modal Top Header */}
            <div className="p-4 sm:p-5 bg-[#0b101b] border-b border-gray-800 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#e07a2c]">
                    {activeAlbum.category} · {activeAlbum.date}
                  </span>
                  <span className="text-xs text-gray-400 font-sans">
                    (Photo {activeImageIndex + 1} of {activeAlbum.images.length}
                    )
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-snug">
                  {activeAlbum.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveAlbum(null)}
                className="p-2 bg-gray-800 hover:bg-[#e07a2c] text-white transition-colors rounded-full shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Stage */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[58vh] overflow-hidden p-2">
              <img
                src={activeAlbum.images[activeImageIndex].imagePath}
                alt={activeAlbum.title}
                className="w-full h-full object-contain max-h-[56vh]"
              />

              {/* Previous / Next Navigation Arrows */}
              {activeAlbum.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImageIndex((prev) =>
                        prev === 0 ? activeAlbum.images.length - 1 : prev - 1,
                      )
                    }}
                    className="absolute left-3 p-3 bg-black/60 hover:bg-[#e07a2c] text-white rounded-full transition-colors backdrop-blur-sm border border-white/10 cursor-pointer"
                    title="Previous Photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveImageIndex((prev) =>
                        prev === activeAlbum.images.length - 1 ? 0 : prev + 1,
                      )
                    }}
                    className="absolute right-3 p-3 bg-black/60 hover:bg-[#e07a2c] text-white rounded-full transition-colors backdrop-blur-sm border border-white/10 cursor-pointer"
                    title="Next Photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Footer Controls & Thumbnails Strip */}
            <div className="p-4 sm:p-5 bg-[#111827] border-t border-gray-800 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1 max-w-2xl">
                  <p className="text-xs text-amber-300 font-sans font-semibold">
                    {activeAlbum.subtitle}
                  </p>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed line-clamp-2">
                    {activeAlbum.description}
                  </p>
                </div>

                <a
                  href={activeAlbum.images[activeImageIndex].imagePath}
                  download
                  className="px-5 py-2.5 bg-[#e07a2c] text-white font-medium text-xs font-sans uppercase tracking-wider hover:bg-white hover:text-[#111827] transition-colors shrink-0 flex items-center gap-2 rounded-xs"
                >
                  <Download className="w-4 h-4" /> Download Photo #
                  {activeImageIndex + 1}
                </a>
              </div>

              {/* Thumbnail Selector Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-gray-800">
                {activeAlbum.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#e07a2c] scale-105 opacity-100 ring-2 ring-[#e07a2c]/40"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img.imagePath}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
