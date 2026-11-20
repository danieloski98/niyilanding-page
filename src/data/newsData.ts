export interface NewsArticleItem {
  id: string
  title: string
  source: string
  date: string
  tag: string
  imagePath: string
  url: string
  excerpt: string
}

export const EXTENDED_NEWS: NewsArticleItem[] = [
  // 1. Ondo State
  {
    id: "news-independent-ondo",
    title: "Ondo State and Globacom Collaborate on Digital Innovation",
    source: "Independent Nigeria",
    date: "October 2025",
    tag: "Digital Innovation",
    imagePath: "/contents/news_images/art_5.jpg",
    url: "https://independent.ng/ondo-globacom-collaborate-on-digital-innovation/",
    excerpt:
      "Strategic digital economy partnership between Ondo State and Globacom delivering e-tax platforms, biometric surveillance, and LMS campus infrastructure.",
  },

  {
    id: "news-marketing-edge-tag",
    title: "Marketing Edge Features: Mr. Adeniyi Odejobi",
    source: "Marketing Edge",
    date: "2025",
    tag: "Digital Economy",
    imagePath: "/contents/newimage/ondo/ondo3.jpeg",
    url: "https://marketingedge.com.ng/tag/mr-adeniyi-odejobi/",
    excerpt:
      "Marketing Edge press archive highlighting Niyi Odejobi's subnational partnerships, digital revenue platforms, and commercial leadership across Nigeria.",
  },
  {
    id: "news-guardian-tag-1",
    title: "Adeniyi Odejobi: Executive Leadership & Telecom Innovation",
    source: "The Guardian Nigeria",
    date: "2024 – 2026",
    tag: "Executive Coverage",
    imagePath: "/contents/newimage/ondo/ondo1.jpeg",
    url: "https://guardian.ng/tag/adeniyi-odejobi/",
    excerpt:
      "National newspaper coverage featuring Adeniyi Odejobi's executive engagements, commercial sales leadership, and digital transformation initiatives.",
  },

  // 2. Enugu State
  // {
  //   id: "news-enugu-governor",
  //   title: "Engagement with the Executive Governor of Enugu State on Digital Infrastructure",
  //   source: "Press Coverage",
  //   date: "July 2025",
  //   tag: "Enugu State",
  //   imagePath: "/contents/newimage/enugu/enugu2.jpeg",
  //   url: "https://guardian.ng/tag/adeniyi-odejobi/",
  //   excerpt: "High-level executive consultation focusing on state digital transformation, regional economic growth initiatives, and strategic enterprise infrastructure development."
  // },

  // 3. Imo State
  {
    id: "news-leadership-imo",
    title:
      "Governor Uzodimma Partners Globacom on Digital Economy & Fibre Connectivity in Imo",
    source: "Leadership Newspaper",
    date: "August 2025",
    tag: "Subnational Tech",
    imagePath: "/contents/news_images/art_9.webp",
    url: "https://leadership.ng/uzodimma-to-partner-globacom-on-digital-economy-fibre-connectivity-in-imo/",
    excerpt:
      "Imo State Governor Hope Uzodimma partners with Globacom executive leadership to expand high-speed fiber connectivity and digital economy services.",
  },
  {
    id: "news-thenews-imo",
    title:
      "Uzodimma Partners Globacom to Enhance Digital Economy & Fibre Connectivity in Imo",
    source: "The News Nigeria",
    date: "August 2025",
    tag: "Fibre Infrastructure",
    imagePath: "/contents/newimage/imo/imo2.jpeg",
    url: "https://thenewsnigeria.com.ng/2025/08/27/%E2%80%8Euzodimma-partners-globacom-to-enhance-digital-economy-fibre-connectivity-in-imo-%E2%80%8E/",
    excerpt:
      "Imo State executive partnership with Globacom boosting broadband penetration, digital civil service tools, and fiber-optic backbone expansion.",
  },

  // 4. Ebonyi State
  {
    id: "news-newherald-ebonyi",
    title:
      "Globacom Executive Delegation Pays Courtesy Visit to Governor Nwifuru of Ebonyi State",
    source: "New Herald News",
    date: "February 2026",
    tag: "Ebonyi Partnership",
    imagePath: "/contents/news_images/art_23.jpg",
    url: "https://newheraldnews.com.ng/2026/02/13/globacom-visit-to-gov-nwifuru/",
    excerpt:
      "Globacom commercial leadership delegation visits Ebonyi State Governor Francis Nwifuru to strengthen state digital economy and fiber infrastructure.",
  },

  // 5. Ekiti State
  {
    id: "news-theboss-ekiti",
    title: "Glo is Nigeria's Telecoms Industry Leader, Says Ekiti Governor",
    source: "The Boss Newspapers",
    date: "July 2024",
    tag: "Governor Endorsement",
    imagePath: "/contents/news_images/art_15.jpg",
    url: "https://thebossnewspapers.com/featured/glos-nigerias-telecoms-industry-leader-says-ekiti-gov/",
    excerpt:
      "Ekiti State Governor Biodun Oyebanji praises Globacom's market leadership, indigenous enterprise vision, and digital infrastructure projects.",
  },
  {
    id: "news-thesun-ekiti",
    title:
      "Ekiti Governor Eulogizes Globacom's Strides in Subnational Expansion",
    source: "The Sun Nigeria",
    date: "July 2024",
    tag: "Subnational Leadership",
    imagePath: "/contents/news_images/art_15.jpg",
    url: "https://thesun.ng/ekiti-governor-eulogizes-adenuga-glo/?amp",
    excerpt:
      "Governor Biodun Oyebanji commends Globacom's executive team for prioritizing digital inclusion and state-wide telecommunication projects in Ekiti.",
  },
  {
    id: "news-dailytrust-ekiti",
    title: "Ekiti Governor Lauds Glo's Strides in Nigeria",
    source: "Daily Trust",
    date: "July 2024",
    tag: "Telecom Strides",
    imagePath: "/contents/news_images/art_21.jpg",
    url: "https://dailytrust.com/ekiti-gov-lauds-glos-strides-in-nigeria/",
    excerpt:
      "Governor Oyebanji commends Globacom's commercial growth and digital infrastructure delivery during official executive courtesy visit.",
  },
  {
    id: "news-newsmart-ekiti",
    title: "Ekiti Governor Lauds Glo as Industry Pace Setter",
    source: "Newsmart Nigeria",
    date: "July 2024",
    tag: "Industry Pioneer",
    imagePath: "/contents/WhatsApp_Image_2026-09-14_at_11.00.11_AM_3.jpeg",
    url: "https://www.newsmart.com.ng/2024/07/ekiti-governor-lauds-glo-as-industry.html?m=1",
    excerpt:
      "Ekiti State Government highlights Globacom's pioneering role in driving affordable mobile connectivity and enterprise digital solutions.",
  },

  // 6. Osun State
  {
    id: "news-arise-osun",
    title:
      "Glo, Osun Launch 20,000 'Imole Connect' Lines to Boost Civil Service Communication",
    source: "Arise News",
    date: "May 2024",
    tag: "Govt Infrastructure",
    imagePath: "/contents/news_images/art_4.png",
    url: "https://www.arise.tv/glo-osun-launch-20000-imole-connect-lines-to-boost-civil-service-communication/",
    excerpt:
      "Osun State Government and Globacom launch 20,000 closed-user-group Imole Connect lines to enhance public service productivity and inter-agency digital communication.",
  },
  {
    id: "news-guardian-adeleke",
    title:
      "Governor Adeleke Praises Globacom, Urges Telcos and States to Collaborate",
    source: "The Guardian Nigeria",
    date: "May 2024",
    tag: "Public-Private Policy",
    imagePath: "/contents/news_images/art_16.jpg",
    url: "https://guardian.ng/news/adeleke-praises-globacom-wants-telcos-states-to-work-together/",
    excerpt:
      "Osun Governor Adeleke calls for deeper synergy between state governments and telecom operators during executive Globacom delegation visit.",
  },

  // 7. Kwara State
  {
    id: "news-thisislagos-kwara",
    title: "Kwara Governor Lauds Globacom as Telecom Market Leader",
    source: "This Is Lagos",
    date: "January 2025",
    tag: "Market Leadership",
    imagePath: "/contents/glo3.jpeg",
    url: "https://thisislagos.ng/kwara-governor-lauds-globacom-as-telecom-market-leader/",
    excerpt:
      "Kwara State Governor AbdulRahman AbdulRazaq commends Globacom's digital innovation and campus connectivity programs across tertiary institutions.",
  },
  {
    id: "news-guardian-kwasu",
    title: "Glo Launches GloShare & Campus CUG for KWASU Students",
    source: "The Guardian Nigeria",
    date: "August 2025",
    tag: "Campus Telecom",
    imagePath: "/contents/glo2.jpeg",
    url: "https://guardian.ng/news/glo-launches-gloshare-for-kwasu-students/",
    excerpt:
      "Globacom enterprise team led by Niyi Odejobi rolls out dedicated GloShare mobile plans and CUG connectivity for Kwara State University.",
  },
  {
    id: "news-lagosbusiness-kwasu",
    title:
      "Kwara State University to Enjoy GloShare Mobile Community Plan from Glo",
    source: "Lagos Business News",
    date: "July 2025",
    tag: "EdTech Innovation",
    imagePath: "/contents/glo.jpeg",
    url: "https://lagosbusinessnews.ng/2025/07/12/kwara-university-to-enjoy-gloshare-mobile-community-plan-from-glo/",
    excerpt:
      "Comprehensive agreement with KWASU management to provide affordable mobile community plans and digital learning infrastructure.",
  },

  // 8. Business Roundtable
  {
    id: "news-businessday-brt",
    title:
      "Business Roundtable Set to Host Youth Entrepreneurship Summit in Oyo",
    source: "BusinessDay",
    date: "July 2021",
    tag: "BRT Summit",
    imagePath: "/contents/round.jpeg",
    url: "https://businessday.ng/news/article/business-roundtable-set-to-host-youth-entrepreneurship-summit-in-oyo/?amp",
    excerpt:
      "The Business Roundtable (BRT) founded by Niyi Odejobi hosts youth entrepreneurship summit to equip thousands of young Nigerians with market skills.",
  },

  // 9. And the others
  {
    id: "news-ui-dvc",
    title: "Become Our Strategic Partner: UI DVC Tells Globacom",
    source: "University of Ibadan",
    date: "September 2024",
    tag: "Education Tech",
    imagePath: "/contents/news_images/art_2.jpeg",
    url: "https://ui.edu.ng/news/become-our-strategic-partner-ui-dvc-tells-globacom",
    excerpt:
      "UI Deputy Vice-Chancellor calls on Globacom team led by Director of Sales Adeniyi Odejobi to deepen collaboration on smart campus digital infrastructure and LMS e-learning.",
  },
  {
    id: "news-daily-times-olubadan",
    title: "Olubadan-Designate Hails Globacom as Nigeria's Pride",
    source: "Daily Times Nigeria",
    date: "2024",
    tag: "Traditional Leadership",
    imagePath: "/contents/king.jpeg",
    url: "https://dailytimesng.com/olubadan-designate-hails-globacom-as-nigerias-pride/",
    excerpt:
      "Royal commendation for Globacom's executive leadership and commercial impact across Southwestern Nigeria during high-level delegation visit.",
  },
  {
    id: "news-thecable-oyo",
    title: "Oyo State Partners Glo on Innovative Traffic Management Solutions",
    source: "The Cable",
    date: "February 2025",
    tag: "Smart City Tech",
    imagePath: "/contents/news_images/art_7.jpeg",
    url: "https://www.thecable.ng/oyo-state-partners-glo-on-innovative-traffic-management-solutions/",
    excerpt:
      "Oyo State Government partners with Globacom enterprise team to deploy smart digital tracking and traffic management technology for OYRTMA.",
  },
  {
    id: "news-businessday-oyo",
    title:
      "Globacom to Equip Oyo Traffic Managers with Modern Traffic Technologies",
    source: "BusinessDay",
    date: "February 2025",
    tag: "News Features",
    imagePath: "/contents/news_images/art_8.png",
    url: "https://businessday.ng/news/article/globacom-to-equip-oyo-traffic-managers-with-modern-traffic-technologies/?amp",
    excerpt:
      "Enterprise telecom solution partnership providing advanced traffic management tools and digital tracking tech to Oyo State traffic authorities.",
  },
  {
    id: "news-shybell-bowen",
    title: "Bowen University Vice-Chancellor Lauds Glo on Digital Services",
    source: "Shybell Media",
    date: "2025",
    tag: "Campus Broadband",
    imagePath: "/contents/news_images/art_12.jpg",
    url: "https://shybellmedia.com/bowen-university-vc-lauds-glo-on-digital-services/?amp=1",
    excerpt:
      "Bowen University VC commends Globacom for delivering enterprise digital services, high-speed campus internet, and e-learning portals.",
  },
  {
    id: "news-guardian-saturday-youth",
    title: "Odejobi: Opportunities Around Youths Are Endless",
    source: "The Guardian Nigeria",
    date: "Saturday Magazine",
    tag: "Youth Empowerment",
    imagePath: "/contents/youth.jpeg",
    url: "https://guardian.ng/saturday-magazine/odejobi-opportunities-around-youths-are-endless/",
    excerpt:
      "Feature interview with Niyi Odejobi on youth potential, vocational empowerment, entrepreneurship frameworks, and economic capacity building.",
  },
  // {
  //   id: "news-marketing-edge-tag",
  //   title: "Marketing Edge Features: Mr. Adeniyi Odejobi",
  //   source: "Marketing Edge",
  //   date: "2025",
  //   tag: "Digital Economy",
  //   imagePath: "/contents/newimage/ondo/ondo3.jpeg",
  //   url: "https://marketingedge.com.ng/tag/mr-adeniyi-odejobi/",
  //   excerpt: "Marketing Edge press archive highlighting Niyi Odejobi's subnational partnerships, digital revenue platforms, and commercial leadership across Nigeria."
  // },
  // {
  //   id: "news-guardian-tag-1",
  //   title: "Adeniyi Odejobi: Executive Leadership & Telecom Innovation",
  //   source: "The Guardian Nigeria",
  //   date: "2024 – 2026",
  //   tag: "Executive Coverage",
  //   imagePath: "/contents/newimage/ondo/ondo1.jpeg",
  //   url: "https://guardian.ng/tag/adeniyi-odejobi/",
  //   excerpt: "National newspaper coverage featuring Adeniyi Odejobi's executive engagements, commercial sales leadership, and digital transformation initiatives."
  // }
]
