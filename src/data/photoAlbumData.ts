export interface PhotoAlbum {
  id: string
  title: string
  subtitle: string
  description: string
  date: string
  category: string
  images: {
    id: string
    imagePath: string
  }[]
}

export const PHOTO_ALBUMS: PhotoAlbum[] = [
  {
    id: "album-british-high-commission",
    title: "With the new British High Commissioner, Pete Vowles",
    subtitle:
      "UK-Nigeria partnership at the British Deputy High Commissioner’s residence in Lagos.",
    description:
      "We took a deep dive into how we can strengthen youth participation in democratic processes as we look toward the 2027 General Elections. The energy in the room was a testament to the fact that the future of Nigeria’s democracy is bright and youth-led.",
    date: "Lagos Engagement",
    category: "British High Commission",
    images: [
      { id: "pm-1", imagePath: "/contents/newimage/prime_minister/pm1.jpeg" },
      { id: "pm-2", imagePath: "/contents/newimage/prime_minister/pm2.jpeg" },
      { id: "pm-3", imagePath: "/contents/newimage/prime_minister/pm3.jpeg" },
      { id: "pm-4", imagePath: "/contents/newimage/prime_minister/pm4.jpeg" },
      { id: "pm-5", imagePath: "/contents/newimage/prime_minister/pm5.jpeg" },
      { id: "pm-6", imagePath: "/contents/newimage/prime_minister/pm6.jpeg" },
    ],
  },
  {
    id: "album-enugu-state-governor",
    title: "Engagement with the Executive Governor of Enugu State",
    subtitle: "Strategic State & Regional Commercial Partnership Engagement",
    description:
      "High-level executive consultation focusing on state digital transformation, regional economic growth initiatives, and strategic enterprise infrastructure development.",
    date: "Enugu State Engagement",
    category: "Enugu State",
    images: [
      { id: "enugu-2", imagePath: "/contents/newimage/enugu/enugu2.jpeg" },
      { id: "enugu-3", imagePath: "/contents/newimage/enugu/enugu3.jpeg" },
      { id: "enugu-4", imagePath: "/contents/newimage/enugu/enugu4.jpeg" },
    ],
  },
  {
    id: "album-imo-state-governor",
    title: "Engagement with the Executive Governor of Imo State",
    subtitle: "Strategic State & Regional Commercial Partnership Engagement",
    description:
      "High-level executive consultation focusing on state digital transformation, regional economic growth initiatives, and strategic enterprise infrastructure development.",
    date: "Imo State Engagement",
    category: "Imo State",
    images: [
      { id: "imo-1", imagePath: "/contents/newimage/imo/imo1.jpeg" },
      { id: "imo-2", imagePath: "/contents/newimage/imo/imo2.jpeg" },
      { id: "imo-3", imagePath: "/contents/newimage/imo/imo3.jpeg" },
    ],
  },
  {
    id: "album-ebonyi-state-governor",
    title: "Engagement with the Executive Governor of Ebonyi State",
    subtitle: "Strategic State & Regional Commercial Partnership Engagement",
    description:
      "High-level executive consultation focusing on state digital transformation, regional economic growth initiatives, and strategic enterprise infrastructure development.",
    date: "Ebonyi State Engagement",
    category: "Ebonyi State",
    images: [
      { id: "ebonyi-1", imagePath: "/contents/newimage/ebonyi/ebonyi1.jpeg" },
      { id: "ebonyi-2", imagePath: "/contents/newimage/ebonyi/ebonyi2.jpeg" },
      { id: "ebonyi-3", imagePath: "/contents/newimage/ebonyi/ebonyi3.jpeg" },
      { id: "ebonyi-4", imagePath: "/contents/newimage/ebonyi/ebonyi4.jpeg" },
      { id: "ebonyi-5", imagePath: "/contents/newimage/ebonyi/ebonyi5.jpeg" },
    ],
  },
  {
    id: "album-sedc-mark-okoye",
    title:
      "With Mr. Mark Okoye, CEO of South East Development Commission (SEDC)",
    subtitle:
      "The Chief Executive Officer, South East Development Commission (SEDC)",
    description:
      "High-level strategic dialogue on regional infrastructure development, commercial transformation, and public-private partnership frameworks for the South East.",
    date: "SEDC Strategic Engagement",
    category: "Regional Development",
    images: [
      { id: "okoye-1", imagePath: "/contents/newimage/okoye/okoye1.jpeg" },
      { id: "okoye-2", imagePath: "/contents/newimage/okoye/okoye2.jpeg" },
      { id: "okoye-3", imagePath: "/contents/newimage/okoye/okoye3.jpeg" },
      { id: "okoye-4", imagePath: "/contents/newimage/okoye/okoye4.jpeg" },
      { id: "okoye-5", imagePath: "/contents/newimage/okoye/okoye5.jpeg" },
    ],
  },
  {
    id: "album-ondo-state-governor",
    title: "Engagement with the Executive Governor of Ondo State",
    subtitle: "Strategic State & Regional Commercial Partnership Engagement",
    description:
      "High-level executive consultation focusing on state digital economy transformation, revenue optimization platforms, biometric surveillance, and enterprise infrastructure.",
    date: "Ondo State Engagement",
    category: "Ondo State",
    images: [
      { id: "ondo-1", imagePath: "/contents/newimage/ondo/ondo1.jpeg" },
      { id: "ondo-2", imagePath: "/contents/newimage/ondo/ondo2.jpeg" },
      { id: "ondo-3", imagePath: "/contents/newimage/ondo/ondo3.jpeg" },
      { id: "ondo-4", imagePath: "/contents/newimage/ondo/ondo4.jpeg" },
      { id: "ondo-5", imagePath: "/contents/newimage/ondo/ondo5.jpeg" },
      { id: "ondo-6", imagePath: "/contents/newimage/ondo/ondo6.jpeg" },
      { id: "ondo-7", imagePath: "/contents/newimage/ondo/ondo7.jpeg" },
      { id: "ondo-8", imagePath: "/contents/newimage/ondo/ondo8.jpeg" },
      { id: "ondo-9", imagePath: "/contents/newimage/ondo/ondo9.jpeg" },
    ],
  },
  {
    id: "album-naseni-khalil-halilu",
    title: "With Khalil Suleiman Halilu, EVC/CEO of NASENI",
    subtitle:
      "The Executive Vice Chairman and Chief Executive Officer of the National Agency for Science and Engineering Infrastructure (NASENI) - Khalil Suleiman Halilu",
    description:
      "Strategic engagement on national science, engineering infrastructure, digital innovation, and technological commercialization partnerships.",
    date: "NASENI Strategic Engagement",
    category: "Science & Technology",
    images: [
      { id: "nas-1", imagePath: "/contents/newimage/nas/nas1.jpeg" },
      { id: "nas-2", imagePath: "/contents/newimage/nas/nas2.jpeg" },
      { id: "nas-3", imagePath: "/contents/newimage/nas/nas3.jpeg" },
      { id: "nas-4", imagePath: "/contents/newimage/nas/nas4.jpeg" },
    ],
  },
  {
    id: "album-nipost-tola-odeyemi",
    title: "With Mrs. Tola Odeyemi, Postmaster General & CEO of NIPOST",
    subtitle:
      "Postmaster General and CEO of the Nigerian Postal Service (NIPOST) Mrs Tola Odeyemi",
    description:
      "High-level strategic dialogue on postal technology modernization, last-mile logistics infrastructure, and digital financial inclusion partnerships.",
    date: "NIPOST Strategic Engagement",
    category: "Public Sector & Infrastructure",
    images: [
      { id: "tola-1", imagePath: "/contents/newimage/tola/tola1.jpeg" },
      { id: "tola-2", imagePath: "/contents/newimage/tola/tola2.jpeg" },
      { id: "tola-3", imagePath: "/contents/newimage/tola/tola3.jpeg" },
    ],
  },
  {
    id: "album-nitda-kashifu-inuwa",
    title: "With Kashifu Inuwa Abdullahi, DG/CEO of NITDA",
    subtitle:
      "The Director-General and CEO of the National Information Technology Development Agency (NITDA) is Kashifu Inuwa Abdullahi",
    description:
      "High-level strategic delegation engagement on national IT policy, digital economy expansion, cybersecurity, and ICT skills framework development.",
    date: "NITDA Strategic Engagement",
    category: "IT & Digital Economy",
    images: [
      { id: "nitda-1", imagePath: "/contents/newimage/nitda/nitda1.jpg" },
      { id: "nitda-2", imagePath: "/contents/newimage/nitda/nitda2.jpg" },
      { id: "nitda-3", imagePath: "/contents/newimage/nitda/nitda3.jpg" },
      { id: "nitda-4", imagePath: "/contents/newimage/nitda/nitda4.jpg" },
      { id: "nitda-5", imagePath: "/contents/newimage/nitda/nitda5.jpg" },
      { id: "nitda-6", imagePath: "/contents/newimage/nitda/nitda6.jpg" },
    ],
  },
  {
    id: "album-nimc-coker-odusote",
    title: "With Engr. Abisoye Coker-Odusote, DG/CEO of NIMC",
    subtitle:
      "The Director-General and Chief Executive Officer of the National Identity Management Commission (NIMC) - Engr. Abisoye Coker-Odusote",
    description:
      "Strategic executive engagement on national digital identity infrastructure, biometric verification integration, and identity management ecosystems.",
    date: "NIMC Strategic Engagement",
    category: "Digital Identity & Infrastructure",
    images: [
      { id: "coker-1", imagePath: "/contents/newimage/coker/coker1.jpeg" },
      { id: "coker-2", imagePath: "/contents/newimage/coker/coker2.jpeg" },
      { id: "coker-3", imagePath: "/contents/newimage/coker/coker3.jpeg" },
    ],
  },
  {
    id: "album-chowdeck-femi-aluko",
    title: "With Femi Aluko, Co-Founder & CEO of Chowdeck",
    subtitle:
      "The co-founder and chief executive officer of Chowdeck - Femi Aluko.",
    description:
      "High-level strategic discussion on hyper-growth tech startups, last-mile quick commerce logistics, and scaling digital platforms in West Africa.",
    date: "Tech Startup Engagement",
    category: "Tech & Innovation",
    images: [{ id: "chow-1", imagePath: "/contents/newimage/chow/chow1.png" }],
  },
  {
    id: "album-osun-state-governor",
    title: "With the Executive Governor of Osun State",
    subtitle: "Strategic State & Regional Commercial Partnership Engagement",
    description:
      "Executive consultation on state digital infrastructure, e-library initiatives, smart governance solutions, and regional technology deployment.",
    date: "Osun State Engagement",
    category: "Osun State",
    images: [
      { id: "osun-1", imagePath: "/contents/newimage/osun/osun1.jpeg" },
      { id: "osun-2", imagePath: "/contents/newimage/osun/osun2.jpeg" },
      { id: "osun-3", imagePath: "/contents/newimage/osun/osun3.jpeg" },
    ],
  },
  {
    id: "album-edo-state-governor",
    title: "With the Executive Governor of Edo State",
    subtitle: "Strategic State & Regional Commercial Partnership Engagement",
    description:
      "High-level executive consultation focusing on state digital transformation, regional economic expansion, and public-private enterprise partnerships.",
    date: "Edo State Engagement",
    category: "Edo State",
    images: [
      { id: "edo-1", imagePath: "/contents/newimage/edo/edo1.jpg" },
      { id: "edo-2", imagePath: "/contents/newimage/edo/edo2.jpg" },
      { id: "edo-3", imagePath: "/contents/newimage/edo/edo3.jpg" },
    ],
  },
  {
    id: "album-swoop-aubrey-niederhoffer",
    title: "With Aubrey Niederhoffer, Founder & CEO of Swoop",
    subtitle:
      "Founder and CEO of Swoop, Aubrey Niederhoffer and his leadership team",
    description:
      "High-level strategic meeting on international enterprise technology solutions, mobility innovation, and executive leadership collaboration.",
    date: "Global Tech Engagement",
    category: "Tech & Innovation",
    images: [
      { id: "swoop-1", imagePath: "/contents/newimage/swoop/swoop1.jpeg" },
    ],
  },
  {
    id: "album-payaza-seyi-ebenezer",
    title: "With Seyi Ebenezer, CEO & Founder of Payaza Africa",
    subtitle:
      "With The CEO and founder of Payaza Africa Seyi Ebenezer and his leadership team",
    description:
      "Strategic executive engagement on pan-African fintech infrastructure, cross-border payment solutions, and digital financial inclusion scaling.",
    date: "Fintech Executive Engagement",
    category: "Fintech & Payments",
    images: [
      { id: "payaza-1", imagePath: "/contents/newimage/payaza/payaza1.jpeg" },
      { id: "payaza-2", imagePath: "/contents/newimage/payaza/payaza2.jpeg" },
      { id: "payaza-3", imagePath: "/contents/newimage/payaza/payaza3.jpeg" },
      { id: "payaza-4", imagePath: "/contents/newimage/payaza/payaza4.jpeg" },
      { id: "payaza-5", imagePath: "/contents/newimage/payaza/payaza5.jpeg" },
      { id: "payaza-6", imagePath: "/contents/newimage/payaza/payaza6.jpeg" },
      { id: "payaza-7", imagePath: "/contents/newimage/payaza/payaza7.jpeg" },
      { id: "payaza-8", imagePath: "/contents/newimage/payaza/payaza8.jpeg" },
      { id: "payaza-9", imagePath: "/contents/newimage/payaza/payaza9.jpeg" },
      { id: "payaza-10", imagePath: "/contents/newimage/payaza/payaza10.jpeg" },
    ],
  },
  {
    id: "album-parallex-femi-bakre",
    title: "With Mr. Femi Bakre, CEO of Parallex Bank",
    subtitle: "With the CEO of Parallex Bank. Mr Femi Bakre",
    description:
      "High-level strategic executive engagement on commercial banking partnerships, digital financial services, and enterprise capital growth.",
    date: "Banking Strategic Engagement",
    category: "Banking & Financial Services",
    images: [
      { id: "para-1", imagePath: "/contents/newimage/para/para1.jpeg" },
      { id: "para-2", imagePath: "/contents/newimage/para/para2.jpeg" },
    ],
  },
  {
    id: "album-youth-development-olawande",
    title: "With Ayodele Olawande, Minister of Youth Development",
    subtitle: "With the Minister of Youth Development - Ayodele Olawande.",
    description:
      "High-level strategic dialogue on youth empowerment, digital skills acquisition, entrepreneurship frameworks, and human capital development in Nigeria.",
    date: "Youth & Social Development",
    category: "Youth & Governance",
    images: [
      { id: "youth-1", imagePath: "/contents/newimage/youth/youth1.jpeg" },
      { id: "youth-2", imagePath: "/contents/newimage/youth/youth2.jpeg" },
    ],
  },
  {
    id: "album-plateau-state-governor",
    title: "With Caleb Mutfwang, Executive Governor of Plateau State",
    subtitle: "The governor of Plateau State - Caleb Mutfwang.",
    description:
      "Executive consultation focusing on state digital transformation, regional economic expansion, ICT infrastructure, and public-private growth partnerships.",
    date: "Plateau State Engagement",
    category: "Plateau State",
    images: [
      { id: "plat-1", imagePath: "/contents/newimage/plat/plat1.jpeg" },
      { id: "plat-2", imagePath: "/contents/newimage/plat/plat2.jpeg" },
    ],
  },
  {
    id: "album-health-salako",
    title: "With Dr. Iziaq Adekunle Salako, Minister of State for Health",
    subtitle:
      "Minister of State for Health and Social Welfare - Dr. Iziaq Adekunle Salako",
    description:
      "Strategic executive consultation on healthcare digital transformation, e-health infrastructure, biometric health tracking, and public health technology frameworks.",
    date: "Healthcare Strategic Engagement",
    category: "Healthcare & Welfare",
    images: [
      { id: "health-1", imagePath: "/contents/newimage/health/health1.jpeg" },
      { id: "health-2", imagePath: "/contents/newimage/health/health2.jpeg" },
      { id: "health-3", imagePath: "/contents/newimage/health/health3.jpeg" },
      { id: "health-4", imagePath: "/contents/newimage/health/health4.jpeg" },
      { id: "health-5", imagePath: "/contents/newimage/health/health5.jpeg" },
      { id: "health-6", imagePath: "/contents/newimage/health/health6.jpeg" },
      { id: "health-7", imagePath: "/contents/newimage/health/health7.jpeg" },
    ],
  },
  {
    id: "album-naltf-henry-nwawuba",
    title: "With Rt. Hon. Henry Nwawuba, Executive Secretary of NALTF",
    subtitle:
      "With the Executive Secretary, National Assembly Library Trust Fund (NALTF) - Rt. Hon. Henry Nwawuba",
    description:
      "Strategic executive engagement on legislative digital library infrastructure, educational technology resources, and knowledge management systems.",
    date: "NALTF Strategic Engagement",
    category: "Legislative & Infrastructure",
    images: [
      { id: "nal-1", imagePath: "/contents/newimage/nal/nal1.jpeg" },
      { id: "nal-2", imagePath: "/contents/newimage/nal/nal2.jpeg" },
      { id: "nal-3", imagePath: "/contents/newimage/nal/nal3.jpeg" },
      { id: "nal-4", imagePath: "/contents/newimage/nal/nal4.jpeg" },
      { id: "nal-5", imagePath: "/contents/newimage/nal/nal5.jpeg" },
      { id: "nal-6", imagePath: "/contents/newimage/nal/nal6.jpeg" },
      { id: "nal-7", imagePath: "/contents/newimage/nal/nal7.jpeg" },
      { id: "nal-8", imagePath: "/contents/newimage/nal/nal8.jpeg" },
      { id: "nal-9", imagePath: "/contents/newimage/nal/nal9.jpeg" },
      { id: "nal-10", imagePath: "/contents/newimage/nal/nal10.jpeg" },
      { id: "nal-11", imagePath: "/contents/newimage/nal/nal11.jpeg" },
      { id: "nal-12", imagePath: "/contents/newimage/nal/nal12.jpeg" },
      { id: "nal-13", imagePath: "/contents/newimage/nal/nal13.jpeg" },
    ],
  },
  {
    id: "album-hakeem-bello-osagie",
    title: "With Mr. Hakeem Bello-Osagie, Global Investor & Philanthropist",
    subtitle:
      "With the Global Investor and Philanthropist- Mr. Hakeem Bello-Osagie",
    description:
      "High-level strategic dialogue on private equity investments, African commercial expansion, educational philanthropy, and leadership development.",
    date: "Global Investment Leadership",
    category: "Global Investment",
    images: [
      {
        id: "investor-1",
        imagePath: "/contents/newimage/investor/investor1.jpeg",
      },
    ],
  },
  {
    id: "album-shippers-council-akutah-pius",
    title: "With Dr. Akutah Pius Ukeyima, ES/CEO of Nigerian Shippers' Council",
    subtitle:
      "With The Executive Secretary and Chief Executive Officer of the Nigerian Shippers' Council - Dr. Akutah Pius Ukeyima",
    description:
      "High-level strategic consultation on maritime trade digitisation, port commercial efficiency, and logistics enterprise infrastructure.",
    date: "Maritime & Port Infrastructure",
    category: "Maritime & Logistics",
    images: [
      {
        id: "shipper-1",
        imagePath: "/contents/newimage/shipper/shipper1.jpeg",
      },
      {
        id: "shipper-2",
        imagePath: "/contents/newimage/shipper/shipper2.jpeg",
      },
      {
        id: "shipper-3",
        imagePath: "/contents/newimage/shipper/shipper3.jpeg",
      },
    ],
  },
  {
    id: "album-betking-gossy-ukanwoke",
    title: "With Mr. Gossy Ukanwoke, CEO of BetKing Nigeria",
    subtitle: "With the CEO of BetKing Nigeria - Gossy Ukanwoke,",
    description:
      "High-level strategic engagement on gaming tech innovation, digital entertainment ecosystems, and commercial enterprise scale.",
    date: "Gaming & Tech Engagement",
    category: "Gaming & Betting",
    images: [
      { id: "bet-1", imagePath: "/contents/newimage/bet/bet1.jpeg" },
      { id: "bet-2", imagePath: "/contents/newimage/bet/bet2.jpeg" },
    ],
  },
  {
    id: "album-jamb-segun-aina",
    title: "With Prof. Segun Aina, Registrar & CEO of JAMB",
    subtitle:
      "With The Registrar and Chief Executive of the Joint Admissions and Matriculation Board (JAMB) - Professor Segun Aina.",
    description:
      "Strategic executive consultation on national CBT examination technology, edtech infrastructure scaling, and digital matriculation systems.",
    date: "JAMB Strategic Engagement",
    category: "Education & EdTech",
    images: [
      { id: "jamb-1", imagePath: "/contents/newimage/jamb/jamb1.jpeg" },
      { id: "jamb-2", imagePath: "/contents/newimage/jamb/jamb2.jpeg" },
      { id: "jamb-3", imagePath: "/contents/newimage/jamb/jamb3.jpeg" },
      { id: "jamb-4", imagePath: "/contents/newimage/jamb/jamb4.jpeg" },
      { id: "jamb-5", imagePath: "/contents/newimage/jamb/jamb5.jpeg" },
      { id: "jamb-6", imagePath: "/contents/newimage/jamb/jamb6.jpeg" },
      { id: "jamb-7", imagePath: "/contents/newimage/jamb/jamb7.jpeg" },
      { id: "jamb-8", imagePath: "/contents/newimage/jamb/jamb8.jpeg" },
      { id: "jamb-9", imagePath: "/contents/newimage/jamb/jamb9.jpeg" },
      { id: "jamb-10", imagePath: "/contents/newimage/jamb/jamb10.jpeg" },
      { id: "jamb-11", imagePath: "/contents/newimage/jamb/jamb11.jpeg" },
      { id: "jamb-12", imagePath: "/contents/newimage/jamb/jamb12.jpeg" },
    ],
  },
  {
    id: "album-Bank of industry",
    title: "Meeting with Dr. Olasupo Olusi and the leadership team at the Bank of Industry (BOI)",
    subtitle:
      "Meeting with Dr. Olasupo Olusi and the leadership team at the Bank of Industry (BOI) to align on a shared vision for Nigeria’s industrial future. 🇳🇬",
    description:
      "We're leveraging advanced technology to transform how MSMEs access capital and markets, by integrating digital innovation into funding, we'll deepen financial and digital inclusion whilst bridging the gap for entrepreneurs to thrive and drive national industrial growth.Together, we are committed to empower small businesses, drive industrial growth and unlocking the potential of Nigeria’s entrepreneurs.",
    date: "Bank Of Industry",
    category: "Financial Inclusion",
    images: [
      { id: "boi-1", imagePath: "/contents/boi1.jpeg" },
      { id: "boi-2", imagePath: "/contents/boi2.jpeg" },
      { id: "boi-3", imagePath: "/contents/boi3.jpeg" },
      { id: "boi-4", imagePath: "/contents/boi4.jpeg" },

    ],
  },
]
