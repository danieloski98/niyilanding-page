export interface Deal {
  id: string
  tag: string
  title: string
  value: string
  detail: string
  year: string
  body: string
}

export interface Competency {
  title: string
  iconName: string
  description: string
  points: string[]
}

export interface ExperienceItem {
  period: string
  role: string
  organization: string
  location: string
  description: string
  achievements: string[]
}

export interface Membership {
  title: string
  institution: string
  detail: string
  category: "qualification" | "membership" | "education"
}

export interface PhotoEngagement {
  id: string
  title: string
  subtitle: string
  date: string
  category: "Governor" | "Federal Minister" | "DG/CEO" | "Industry"
  imagePath: string
}

export interface NewsArticle {
  title: string
  source: string
  date?: string
  url: string
  excerpt: string
}

export const PROFILE = {
  name: "ADENIYI ODEJOBI",
  title: "African Telecoms & FinTech Sales Director",
  subtitle:
    "Commercial Executive · Public Sector Partnerships · Multi-Million P&L Leadership",
  bioShort:
    "A Commercial African Telecoms & FinTech Executive at very senior levels with a successful track record. Experienced in incremental revenue growth, business expansion strategies, achieving operational and financial performance targets, and fostering business relationships across global corporations.",
  bioLong: [
    "Adeniyi Odejobi is a high-performing African Telecoms & FinTech Sales Director with an unusual diversity of experience across commercial strategy, executive leadership, public sector sales, and digital infrastructure expansion.",
    "Over a decade of his experience has been in senior management and leadership roles with leading Telcos and FinTechs, managing multi-million-dollar P&L with full responsibility for strategy, go-to-market execution, top-line growth, profitability, and market share expansion across sub-Saharan Africa.",
    "Adeniyi possesses deep expertise in high-level government relations, having successfully negotiated and closed multi-million dollar deals with state governors, federal ministries, regulatory agencies, and multilateral corporate institutions. He holds a BSc (Hons) in Actuarial Science from the University of Lagos, an MBA from Edinburgh Business School (Heriot-Watt University, UK), and is a qualified member of the Institute of Chartered Accountants of Nigeria (ICAN).",
  ],
  education: [
    {
      degree: "Postgraduate & MBA",
      institution: "Edinburgh Business School, Heriot-Watt University, UK",
    },
    {
      degree: "Associate Member (ACA)",
      institution: "Institute of Chartered Accountants of Nigeria (ICAN)",
    },
    {
      degree: "BSc (Hons) Actuarial Science",
      institution: "University of Lagos, Nigeria",
    },
    {
      degree: "High School Diploma",
      institution: "Kings College, Lagos, Nigeria",
    },
  ],
  specialties: [
    "Business Leadership & P&L Management",
    "Strategic Growth & Market Expansion",
    "Telecoms, Technology & Mobile Financial Services",
    "Executive Sales & High-Stakes Deal Closure",
    "Federal & Subnational Government Relations",
    "Joint Venture Partnerships & Stakeholder Management",
    "Public Sector Digital Infrastructure Sales",
    "Revenue Optimisation & Execution",
  ],
}

export const DEALS: Deal[] = [
  // {
  //   id: "seplat-shell",
  //   tag: "Energy Sector Enterprise Deal",
  //   title: "SEPLAT Energy & Shell Nigeria Commercial Engagement",
  //   value: "> $99.5M",
  //   detail: "per annum",
  //   year: "2025",
  //   body: "Led the strategic commercial and sales engagement for 2 key high-value deals exceeding $99.5 Million per annum with SEPLAT Energy and Shell Nigeria, providing mission-critical enterprise connectivity, broadband infrastructure, and managed digital services across upstream operations."
  // },

  {
    id: "state-governments",
    tag: "Subnational Digital Infrastructure",
    title: "Multi-State Digital Solutions Partnerships",
    value: "> $85.5M",
    detail: "per annum",
    year: "2024 – 2026",
    body: "Secured digital solutions partnerships with Lagos, Imo, Enugu, Ogun, Osun & Kwara State Governments worth over $85.5 Million per annum — accelerating e-governance, broadband access, e-libraries, and smart traffic technologies across 6 key states.",
  },
  {
    id: "e-health",
    tag: "Federal Government Partnership",
    title: "Health and Digital Health Infrastructure",
    value: "> $192.5M",
    detail: "per annum",
    year: "2025 – 2026",
    body: "Secured the E-Health partnership for the Digital Health Initiative, interconnecting public tertiary healthcare centers and digitizing medical service delivery nationwide.",
  },
  {
    id: "smarter-productivity",
    tag: "Federal Government Partnership",
    title: "Smarter Productivity Initiative",
    value: "> $283.5M",
    detail: "per annum",
    year: "2025 – 2026",
    body: "Secured the National Productivity partnership on the Smarter Productivity Initiative of the Federal Government to digitize national labor registries and productivity tracking.",
  },
  {
    id: "education-transformation",
    tag: "Federal Educational Digital Transformation",
    title: "Unified Educational Management & Agency Integration",
    value: "$40M+",
    detail: "per annum",
    year: "2025 – 2026",
    body: "Secured and deployed comprehensive educational management solutions for the Federal Ministry of Education worth over $40 Million per annum. This initiative integrates key agencies, including TETFUND and NELFUND, to provide seamless online learning ecosystems and innovative digital solutions for institutional management and enhanced learning outcomes across the federation.",
  },
]

export const COMPETENCIES: Competency[] = [
  {
    title: "Business Leadership & Strategic Growth",
    iconName: "TrendingUp",
    description:
      "Driving multi-million-dollar P&L results, top-line growth, and market expansion for tier-1 telecom and fintech firms across Africa.",
    points: [
      "End-to-end P&L accountability and margin expansion",
      "Go-to-market strategy for enterprise & public sector",
      "Market share growth in competitive African markets",
      "Cross-functional team leadership & execution",
    ],
  },
  {
    title: "Government Relations & Public Sector Sales",
    iconName: "Building2",
    description:
      "Building cabinet-level partnerships with State Governors, Federal Ministers, and Chief Executives of federal agencies.",
    points: [
      "State-wide digital infrastructure and e-governance deals",
      "Federal Ministry e-health & smart productivity initiatives",
      "Regulatory & inter-governmental policy alignment",
      "High-stakes public sector procurement & bidding",
    ],
  },
  {
    title: "Telecoms, Tech & Mobile Financial Services",
    iconName: "Smartphone",
    description:
      "Architecting transformative digital infrastructure, corporate enterprise broadband, and mobile payment ecosystems.",
    points: [
      "Enterprise telecom connectivity & cloud infrastructure",
      "Mobile money, digital payments & fintech integration",
      "IoT solutions for energy & logistics sectors",
      "Submarine fiber capacity & enterprise managed services",
    ],
  },
  {
    title: "Executive Deal Negotiation & Partnerships",
    iconName: "Handshake",
    description:
      "Structuring complex joint venture partnerships, multi-party commercial contracts, and strategic alliance models.",
    points: [
      "C-Suite & Ministerial level deal closure",
      "Joint venture partnership design & governance",
      "Revenue sharing & commercial model optimization",
      "Long-term client retention & account expansion",
    ],
  },
]

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    period: "Senior Executive Level",
    role: "Telecoms & FinTech Sales Director / Enterprise Commercial Lead",
    organization: "Leading Telcos & FinTechs (including Globacom Limited)",
    location: "Lagos, Nigeria / Sub-Saharan Africa",
    description:
      "Serving as senior commercial leader responsible for multi-million dollar P&L, enterprise growth, government relations, and high-stakes strategic deal closure across telecoms, tech, and mobile financial services.",
    achievements: [
      "Led strategic commercial engagement for SEPLAT & Shell Nigeria deals exceeding $99.5M/annum.",
      "Secured 6 State Government digital solution partnerships (Lagos, Imo, Enugu, Ogun, Osun, Kwara) worth $85.5M+/annum.",
      "Spearheaded Federal Ministry of Health E-Health initiative ($192.5M+/annum).",
      "Architected Federal Ministry of Labour Smarter Productivity digital partnership ($283.5M+/annum).",
      "Consistently achieved top-line revenue targets while driving high margin performance across enterprise verticals.",
    ],
  },
  {
    period: "Over a Decade of Senior Leadership",
    role: "Commercial & Business Development Director",
    organization: "Enterprise Telco & MFS Corporations",
    location: "Nigeria & West Africa",
    description:
      "Managed cross-functional teams across strategy, enterprise accounts, public sector, and solution architecture.",
    achievements: [
      "Developed go-to-market frameworks for mobile financial services targeting urban and rural markets.",
      "Fostered C-Suite relationships with top commercial banks, oil & gas multinationals, and public institutions.",
      "Pioneered enterprise broadband expansion into state government civil service infrastructure.",
    ],
  },
]

export const MEMBERSHIPS: Membership[] = [
  {
    title: "Associate Chartered Accountant (ACA)",
    institution: "Institute of Chartered Accountants of Nigeria (ICAN)",
    detail:
      "Recognized financial practitioner with expertise in corporate finance, financial analysis, and audit.",
    category: "qualification",
  },
  {
    title: "Master of Business Administration (MBA)",
    institution: "Edinburgh Business School, Heriot-Watt University, UK",
    detail:
      "Postgraduate degree specializing in strategic management, corporate governance, and international business.",
    category: "education",
  },
  {
    title: "BSc. (Hons) Actuarial Science",
    institution: "University of Lagos, Nigeria",
    detail:
      "Rigorous mathematical foundation in risk assessment, statistical modeling, and financial quantitative analysis.",
    category: "education",
  },
  {
    title: "Alumnus",
    institution: "Kings College, Lagos",
    detail:
      "Prestigious secondary education background fostering lifelong leadership and executive alumni network.",
    category: "membership",
  },
]

export const PHOTO_ENGAGEMENTS: PhotoEngagement[] = [
  {
    id: "ebonyi-gov",
    title: "Meeting with the Ebonyi State Governor",
    subtitle: "Strategic Dialogue on Digital Infrastructure",
    date: "April 2026",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.06_AM.jpeg",
  },
  {
    id: "imo-gov",
    title: "Engagement with the Imo State Governor",
    subtitle: "Digital Solutions & State Broadband Partnership",
    date: "August 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.06_AM_1.jpeg",
  },
  {
    id: "parallex-ceo",
    title: "Meeting with the CEO of Parallex Bank",
    subtitle: "FinTech & Banking Commercial Collaboration",
    date: "Executive Summit",
    category: "Industry",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.06_AM_2.jpeg",
  },
  {
    id: "ondo-gov",
    title: "With the Ondo State Governor",
    subtitle: "State Technology Transformation Initiatives",
    date: "September 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.06_AM_3.jpeg",
  },
  {
    id: "osun-gov",
    title: "With the Osun State Governor (Gov. Ademola Adeleke)",
    subtitle: "Telecom Partnership & Community Connectivity Commitment",
    date: "November 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.06_AM_4.jpeg",
  },
  {
    id: "enugu-gov-1",
    title: "With the Enugu State Governor",
    subtitle: "Smart Governance Infrastructure Discussion",
    date: "July 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.06_AM_5.jpeg",
  },
  {
    id: "enugu-gov-2",
    title: "With the Enugu State Governor",
    subtitle: "Follow-up High-Level Public Sector Engagement",
    date: "July 2026",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM.jpeg",
  },
  {
    id: "plateau-gov",
    title: "With the Plateau State Governor",
    subtitle: "State E-Government Partnership",
    date: "March 2026",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM_1.jpeg",
  },
  {
    id: "oyo-gov",
    title: "With the Oyo State Governor",
    subtitle: "Modern Traffic Technologies & Smart Infrastructure",
    date: "February 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM_2.jpeg",
  },
  {
    id: "kwara-gov",
    title: "With the Kwara State Governor (Gov. AbdulRahman AbdulRazaq)",
    subtitle: "Subnational Telecom Partnership",
    date: "January 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM_3.jpeg",
  },
  {
    id: "ekiti-gov",
    title: "With the Ekiti State Governor",
    subtitle: "Digital Technology Advancement Praise",
    date: "December 2025",
    category: "Governor",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM_4.jpeg",
  },
  {
    id: "nitda-dg",
    title:
      "With DG/CEO National Information Technology Development Agency (NITDA)",
    subtitle: "National IT Policy & Enterprise Technology Session",
    date: "February 2026",
    category: "DG/CEO",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM_5.jpeg",
  },
  {
    id: "nimc-dg",
    title: "With DG/CEO National Identity Management Commission (NIMC)",
    subtitle: "Digital Identity & Telecom Integration Dialogue",
    date: "January 2026",
    category: "DG/CEO",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.07_AM_6.jpeg",
  },
  {
    id: "naseni-dg",
    title: "With DG/CEO NASENI",
    subtitle:
      "National Agency for Science & Engineering Infrastructure Engagement",
    date: "April 2026",
    category: "DG/CEO",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.08_AM.jpeg",
  },
  {
    id: "youth-minister",
    title: "With Hon. Minister of Youth Development",
    subtitle: "Digital Empowerment Initiative Session",
    date: "April 2026",
    category: "Federal Minister",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.08_AM_1.jpeg",
  },
  {
    id: "nipost-pmg",
    title: "With Postmaster General/CEO, NIPOST",
    subtitle: "Postal Infrastructure Modernization Session",
    date: "May 2026",
    category: "DG/CEO",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.08_AM_2.jpeg",
  },
  {
    id: "education-minister",
    title: "With Federal Minister of Education",
    subtitle: "E-Learning & Digital School Infrastructure Strategy",
    date: "March 2026",
    category: "Federal Minister",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.17_AM.jpeg",
  },
  {
    id: "chowdeck-ceo",
    title: "With Co-Founder/CEO of Chowdeck",
    subtitle: "On-Demand Logistics & Tech Ecosystem Collaboration",
    date: "March 2023",
    category: "Industry",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_7.57.17_AM_1.jpeg",
  },
]

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    title: "Bridging the Gap: Youth Development and Entrepreneurship Summit",
    source: "The Guardian Nigeria",
    url: "https://guardian.ng/features/bridging-the-gap-youth-development-and-entrepreneurship-summit/",
    excerpt:
      "Feature interview with Niyi Odejobi on founding The Business Roundtable (BRT) to empower Nigerian youth and reduce unemployment through skill acquisition & social development.",
  },
  {
    title: "Glo Enterprise Partners with Ondo State to Advance Digital Economy",
    source: "Marketing Edge",
    url: "https://marketingedge.com.ng/glo-enterprise-partners-with-ondo-state-to-advance-digital-economy/",
    excerpt:
      "Strategic partnership led by Niyi Odejobi to deploy Learning Management Systems (LMS), facial biometric surveillance, and electronic tax platforms across Ondo State.",
  },
  {
    title:
      "Globacom to equip Oyo traffic managers with modern traffic technologies",
    source: "BusinessDay",
    url: "https://businessday.ng/news/article/globacom-to-equip-oyo-traffic-managers-with-modern-traffic-technologies/",
    excerpt:
      "Enterprise telecom solution partnership led by Adeniyi Odejobi providing smart traffic management tools and digital tracking tech to Oyo State.",
  },
  {
    title:
      "King's College Lagos 116th Anniversary: Role of Alumni in Sustaining Institutional Excellence",
    source: "The Guardian Nigeria",
    url: "https://guardian.ng/news/kings-college-lagos-marks-116th-anniversary-focuses-on-alumni-impact/",
    excerpt:
      "Niyi Odejobi speaks at King's College 116th anniversary on the vital role of alumni networks in sustaining educational excellence and national human capital.",
  },
  {
    title: "Glo Launches E-Learning & Community User Group Solutions for KWASU",
    source: "Telecompaper",
    url: "https://www.telecompaper.com/news/glo-launches-e-learning-and-cug-solutions-for-kwasu",
    excerpt:
      "Niyi Odejobi leads Globacom enterprise team in delivering high-speed campus broadband and dedicated Community User Group lines to Kwara State University.",
  },
  {
    title: "YABATECH Partners with Globacom for High-Speed Campus Connectivity",
    source: "The Sun Nigeria",
    url: "https://thesun.ng/yabatech-partners-with-globacom-for-high-speed-campus-connectivity/",
    excerpt:
      "Strategic agreement led by Niyi Odejobi to equip Yaba College of Technology with enterprise fiber-optic connectivity and digital student portals.",
  },
  {
    title: "Ekiti Gov lauds Glo's strides in Nigeria",
    source: "Daily Trust",
    url: "https://dailytrust.com/ekiti-gov-lauds-glos-strides-in-nigeria/",
    excerpt:
      "Governor of Ekiti State commends Globacom's investment in state-wide telecommunication connectivity and digital infrastructure.",
  },
  {
    title: "Glo, Nigeria's proud ambassador — Gov AbdulRazaq",
    source: "PM News Nigeria",
    url: "https://pmnewsnigeria.com/2024/01/19/glo-nigerias-proud-ambassador-abdulrazaq/",
    excerpt:
      "Kwara State Governor praises Glo's strategic engagement with subnational institutions to drive grassroots technology inclusion.",
  },
  {
    title:
      "Governor Adeleke tasks telecom firms on partnership with subnational entities",
    source: "Osun State Government Official Portal",
    url: "https://www.osunstate.gov.ng/2024/05/governor-adeleke-tasks-telecom-firms-on-partnership-with-subnational-entities-commends-glo-community-commitment/",
    excerpt:
      "Osun State Governor Adeleke commends community commitment and infrastructure partnerships facilitated by enterprise leadership.",
  },
  {
    title: "Egbedun, Globacom partner to fix Osun Assembly e-library",
    source: "Osun Defender",
    url: "https://www.osundefender.com/egbedun-globacom-partner-to-fix-osun-assembly-e-library/",
    excerpt:
      "Partnership between Osun House of Assembly and Globacom to modernize electronic library and digital research facilities.",
  },
  {
    title: "Niyi Odejobi in The Guardian Newspaper Features",
    source: "The Guardian Nigeria",
    url: "https://guardian.ng/tag/niyi-odejobi/",
    excerpt:
      "Coverage of executive sales milestones, telecom innovation, and public sector partnerships led by Adeniyi Odejobi.",
  },
]
