import { useState } from "react"
import { Calendar, Tag, ExternalLink } from "lucide-react"
import SEO from "../components/SEO"
import { EXTENDED_NEWS, NewsArticleItem } from "../data/newsData"

export default function NewsPage() {
  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="News & Press Features"
        description="Press coverage, newspaper features, and official news mentions of Adeniyi Odejobi and his executive telecom partnerships."
      />

      {/* ── SECTION 1: HEADER TITLE ── */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111827] tracking-tight leading-tight">
            News & Insights
          </h1>
          <p className="text-gray-700 text-sm sm:text-base font-sans tracking-wide">
            Stay updated on News and Insights for/from Adeniyi Odejobi.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: 3-COLUMN NEWS CARDS GRID (1:1 ACCORDING TO SCREENSHOTS) ── */}
      <section className="bg-white pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {EXTENDED_NEWS.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-4">
                  {/* Top Image */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 flex items-center justify-center p-1">
                    <img
                      src={article.imagePath}
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Metadata Row: Date & Tag */}
                  <div className="flex items-center gap-4 text-xs font-sans text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-800" />
                      <span>{article.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-gray-800" />
                      <span>{article.tag}</span>
                    </div>
                  </div>

                  {/* Headline Title */}
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111827] group-hover:text-[#e07a2c] transition-colors leading-snug tracking-tight">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-xs font-sans font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#e07a2c] transition-colors">
                  <span>Read Article ({article.source})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
