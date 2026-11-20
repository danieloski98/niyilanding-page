import { useState } from "react"
import {
  Download,
  X,
  Mail,
  Calendar,
  Tag,
  ExternalLink,
  Newspaper,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react"
import SEO from "../components/SEO"
import { PHOTO_ALBUMS, PhotoAlbum } from "../data/photoAlbumData"
import { EXTENDED_NEWS } from "../data/newsData"

export default function PressKitPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeAlbum, setActiveAlbum] = useState<PhotoAlbum | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  const photoAlbums = PHOTO_ALBUMS
  const pressArticles = EXTENDED_NEWS

  const categories = [
    "All",
    ...Array.from(new Set(photoAlbums.map((a) => a.category))),
  ]

  const filteredAlbums =
    selectedCategory === "All"
      ? photoAlbums
      : photoAlbums.filter((album) => album.category === selectedCategory)

  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Executive Press Kit, News & Media Assets"
        description="Official press kit for Adeniyi Odejobi containing news features, press releases, approved portraits, executive bio, and photo engagement archive."
      />

      {/* ── SECTION 1: CENTERED HEADER FOLD ── */}
      <section className="pt-20 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#111827] tracking-tight leading-tight">
            Press Kit & Media Center
          </h1>
          <p className="text-gray-700 text-sm sm:text-base font-sans tracking-wide">
            High-resolution press photos, executive biographic assets, official
            news coverage, and photo archive.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: PRESS BIO ASSETS BOX ── */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-[#fafafa] p-8 sm:p-10 border border-gray-200 rounded-2xl shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#e07a2c]">
                Official Executive Biography
              </span>
              <h2 className="font-serif font-bold text-2xl text-[#111827]">
                Downloadable Media Biography
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl leading-relaxed font-sans">
                Includes full official short & extended executive biographies,
                high-resolution approved press portraits, and formal speaker
                introductions.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:press@adeniyiodejobi.com"
                className="px-6 py-3 bg-[#111827] text-white text-xs font-sans font-medium uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2 rounded-xs"
              >
                <Mail className="w-4 h-4" /> Media Inquiries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: NEWS & INSIGHTS ── */}
      <section className="py-16 bg-[#fafafa] border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#e07a2c] font-bold">
              <Newspaper className="w-4 h-4" />
              <span>Media Coverage & Features</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111827] tracking-tight">
              News & Insights
            </h2>
            <p className="text-gray-600 text-sm font-sans">
              Recent national newspaper coverage, press features, and executive
              media engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 border border-gray-200 rounded-xl flex flex-col justify-between space-y-4 hover:shadow-md hover:border-amber-300 transition-all"
              >
                <div className="space-y-3">
                  <div className="w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-100 border border-gray-100 flex items-center justify-center p-1">
                    <img
                      src={article.imagePath}
                      alt={article.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-sans text-gray-500 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-700" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-semibold text-[#e07a2c]">
                      <Tag className="w-3.5 h-3.5" />
                      <span>{article.tag}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#111827] group-hover:text-[#e07a2c] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed font-sans line-clamp-3">
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

      {/* ── SECTION 4: PHOTO ENGAGEMENTS ARCHIVE (PHOTO BOOKS / COLLAGES) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#111827] tracking-tight">
                Photo Engagements Archive
              </h2>
              <p className="text-gray-600 text-sm font-sans">
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
            {filteredAlbums.map((album) => (
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
        </div>
      </section>

      {/* ── SECTION 5: PHOTO BOOK LIGHTBOX MODAL ── */}
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
