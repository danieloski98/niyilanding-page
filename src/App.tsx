import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  StaticRouter,
} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import WorkExperiencePage from "./pages/WorkExperiencePage"
import MembershipsPage from "./pages/MembershipsPage"
import ImpactPage from "./pages/ImpactPage"
import NewsPage from "./pages/NewsPage"
import PressKitPage from "./pages/PressKitPage"
import ContactPage from "./pages/ContactPage"
import AoAcademyPage from "./pages/AoAcademyPage"
import ConsultingPage from "./pages/ConsultingPage"
import SpeakingPage from "./pages/SpeakingPage"
import SitemapPage from "./pages/SitemapPage"

export function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0d1b3e] font-sans antialiased selection:bg-[#c9a035] selection:text-[#0d1b3e]">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work-experience" element={<WorkExperiencePage />} />
          <Route path="/memberships" element={<MembershipsPage />} />
          <Route path="/ao-academy" element={<AoAcademyPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/speaking-engagements" element={<SpeakingPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/news-and-insights" element={<NewsPage />} />
          <Route path="/press-kit" element={<PressKitPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export function ServerApp({ url }: { url: string }) {
  return (
    <StaticRouter location={url}>
      <ScrollToTop />
      <AppRoutes />
    </StaticRouter>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  )
}
