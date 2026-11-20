import { useState } from "react"
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  Award,
  Clock,
  Loader2,
} from "lucide-react"
import SEO from "../components/SEO"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Adeniyi Odejobi Consulting Advisory",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/ao@adeniyiodejobi.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `Executive Inquiry: ${formData.inquiryType} - ${formData.name}`,
            _captcha: "false",
            _template: "table",
            "Full Name": formData.name,
            "Work Email": formData.email,
            "Organization / Ministry": formData.organization || "N/A",
            "Inquiry Category": formData.inquiryType,
            Message: formData.message,
          }),
        },
      )

      if (response.ok) {
        setSubmitted(true)
      } else {
        const subject = encodeURIComponent(
          `Executive Inquiry: ${formData.inquiryType} - ${formData.name}`,
        )
        const body = encodeURIComponent(
          `Full Name: ${formData.name}\n` +
            `Work Email: ${formData.email}\n` +
            `Organization/Ministry: ${formData.organization || "N/A"}\n` +
            `Inquiry Category: ${formData.inquiryType}\n\n` +
            `Message:\n${formData.message}`,
        )
        window.location.href = `mailto:ao@adeniyiodejobi.com?subject=${subject}&body=${body}`
        setSubmitted(true)
      }
    } catch (err) {
      const subject = encodeURIComponent(
        `Executive Inquiry: ${formData.inquiryType} - ${formData.name}`,
      )
      const body = encodeURIComponent(
        `Full Name: ${formData.name}\n` +
          `Work Email: ${formData.email}\n` +
          `Organization/Ministry: ${formData.organization || "N/A"}\n` +
          `Inquiry Category: ${formData.inquiryType}\n\n` +
          `Message:\n${formData.message}`,
      )
      window.location.href = `mailto:ao@adeniyiodejobi.com?subject=${subject}&body=${body}`
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-[#111827]">
      <SEO
        title="Contact & Executive Advisory"
        description="Connect with Adeniyi Odejobi for commercial executive leadership, board advisory, enterprise telecoms sales, and subnational public sector partnerships."
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
              <span className="text-[7px] font-sans font-bold uppercase tracking-widest text-[#e07a2c] block mt-1">
                CONTACT
              </span>
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full border border-amber-400/30">
            Executive Office Communications
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight max-w-4xl leading-tight">
            Contact Executive Advisory & Leadership
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-3xl font-sans font-light leading-relaxed">
            Direct communications channel for state government digital
            partnerships, commercial enterprise negotiations, Adeniyi Odejobi
            Consulting engagements, AO Academy enrollment, and keynote speaking.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: MAIN CONTENT SECTION ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Card 1: Executive Office Details */}
              <div className="bg-[#0F2C59] text-white p-8 md:p-10 rounded-sm shadow-xl space-y-8">
                <div className="space-y-2 border-b border-blue-900/80 pb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-sans">
                    Executive Headquarters
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white">
                    Executive Communications
                  </h3>
                </div>

                <div className="space-y-6 text-sm font-sans">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-medium text-base mb-0.5">
                        Location Base
                      </strong>
                      <span className="text-gray-300">
                        Lagos, Nigeria (Commercial Headquarters)
                      </span>
                      <span className="block text-xs text-gray-400 mt-1">
                        Operating across West Africa & International Markets
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-medium text-base mb-0.5">
                        Executive Email
                      </strong>
                      <a
                        href="mailto:ao@adeniyiodejobi.com"
                        className="text-amber-400 hover:underline"
                      >
                        ao@adeniyiodejobi.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-white font-medium text-base mb-0.5">
                        Public Sector & Enterprise Desk
                      </strong>
                      <span className="text-gray-300">
                        Government Relations & Cabinet Consultations
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-blue-900/80 flex items-center gap-2 text-xs text-gray-400 font-sans">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Inquiries are reviewed by the Executive Office within 24–48
                    business hours.
                  </span>
                </div>
              </div>

              {/* Card 2: Special Inquiries (AO Academy & Consulting) */}
              <div className="bg-[#FDF4E7] p-8 border border-amber-200/80 rounded-sm space-y-4">
                <div className="flex items-center gap-3 text-[#8B5A2B]">
                  <Award className="w-6 h-6 shrink-0" />
                  <h4 className="font-serif font-bold text-xl text-[#8B5A2B]">
                    AO Academy & Consulting Inquiries
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                  Interested in enrolling for the upcoming AO Academy sales
                  cohort or booking a strategic commercial consultation with
                  Adeniyi Odejobi Consulting? Select the appropriate category in
                  the form.
                </p>
              </div>

              {/* Card 3: Press & Media Relations */}
              <div className="bg-[#E6EEFA] p-8 border border-blue-100 rounded-sm space-y-4">
                <div className="flex items-center gap-3 text-[#1D4ED8]">
                  <MessageSquare className="w-6 h-6 shrink-0" />
                  <h4 className="font-serif font-bold text-xl text-[#1D4ED8]">
                    Press & Keynote Inquiries
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                  For official interview requests, keynote speaker bookings at
                  global technology summits, or press photography access.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:press@adeniyiodejobi.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] text-white text-xs font-sans font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                  >
                    Email Press Desk
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Executive Message Form */}
            <div className="lg:col-span-7 bg-[#fafafa] p-8 sm:p-12 border border-gray-200 rounded-sm shadow-sm space-y-8">
              <div className="space-y-2 border-b border-gray-200 pb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e07a2c]">
                  Direct Message
                </span>
                <h2 className="font-serif text-3xl font-normal text-[#111827] tracking-tight">
                  Send Direct Executive Message
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm font-sans">
                  Please complete the form below to initiate dialogue with the
                  Executive Office.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-sm space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                  <h3 className="font-serif font-bold text-2xl">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm leading-relaxed font-sans">
                    Your message has been successfully transmitted to the
                    Executive Office of Adeniyi Odejobi. A member of our
                    executive team will review your inquiry and respond
                    promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-[#111827] text-white text-xs font-sans font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Dr. Samuel Alabi"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#0F2C59] focus:ring-1 focus:ring-[#0F2C59] focus:outline-none text-sm text-[#111827] transition-colors rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 font-sans">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@organization.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#0F2C59] focus:ring-1 focus:ring-[#0F2C59] focus:outline-none text-sm text-[#111827] transition-colors rounded-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 font-sans">
                        Organization / Ministry
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        placeholder="e.g. Ministry of Innovation / Global Telco"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#0F2C59] focus:ring-1 focus:ring-[#0F2C59] focus:outline-none text-sm text-[#111827] transition-colors rounded-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 font-sans">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            inquiryType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#0F2C59] focus:ring-1 focus:ring-[#0F2C59] focus:outline-none text-sm text-[#111827] transition-colors rounded-xs"
                      >
                        <option>Adeniyi Odejobi Consulting Advisory</option>
                        <option>AO Academy Next Cohort Enrollment</option>
                        <option>
                          Commercial Deal / Enterprise Partnership
                        </option>
                        <option>Public Sector Digital Infrastructure</option>
                        <option>Keynote Speaking / Summit Panel</option>
                        <option>Press & Media Interview</option>
                        <option>General Executive Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111827] mb-2 font-sans">
                      Message / Partnership Proposal *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please provide details regarding your inquiry or proposed commercial engagement..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#0F2C59] focus:ring-1 focus:ring-[#0F2C59] focus:outline-none text-sm text-[#111827] transition-colors rounded-xs"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#0F2C59] text-white text-xs font-sans font-bold uppercase tracking-widest hover:bg-[#e07a2c] disabled:opacity-70 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 shadow-md rounded-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />{" "}
                        Transmitting Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Executive Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
