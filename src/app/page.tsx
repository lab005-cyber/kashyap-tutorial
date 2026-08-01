import Link from "next/link";
import Image from "next/image";
import { siteConfig, courses, features, faqs } from "@/config/site";
import { getAllPosts } from "@/lib/blog";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import TutoringPresence from "@/components/TutoringPresence";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPhone,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiMapPin,
  FiStar,
  FiCheck,
  FiBookOpen,
} from "react-icons/fi";
import { FaWhatsapp, FaGlobe, FaGraduationCap } from "react-icons/fa";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  const c = siteConfig.contact;

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white">
        {/* Glowing background lights & grids */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -bottom-32 -left-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7">
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-accent backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                Admissions Open Now · Offline &amp; Online Classes
                <span className="hidden sm:inline text-white/40">|</span>
                <span className="hidden sm:inline-flex items-center gap-1 text-amber-300">
                  <FiStar className="fill-amber-400 text-amber-400" /> 200+ 5-Star Reviews
                </span>
              </div>

              <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                Building Strong Concepts, <br className="hidden sm:block" />
                Shaping <span className="text-accent underline decoration-accent/40 decoration-wavy decoration-2">Bright Futures</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-grey-300">
                Quality education from <span className="font-semibold text-white">Basics to Brilliance</span>. Classroom coaching at <span className="text-amber-300 font-semibold">Alpha 1, Greater Noida</span> &amp; 1-on-1 Home Tuitions in 5 cities — guided by <span className="font-semibold text-white">Er. N. Jha Sir &amp; Teams</span>.
              </p>

              {/* Quick Course Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Class 6 – 8",
                  "Class 9 & 10 Boards",
                  "Class 11 & 12",
                  "IIT-JEE",
                  "NEET (UG)",
                  "CUET",
                  "Home Tuition (KG-12th)",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-grey-200 border border-white/10 hover:border-accent/40 transition-colors"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-accent text-base px-6 py-3.5 shadow-lg shadow-amber-500/20">
                  Book Free Demo Class <FiArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent("Hello! I want to enquire about classes & demo session.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base px-6 py-3.5 shadow-lg shadow-emerald-600/20"
                >
                  <FaWhatsapp className="h-5 w-5" /> WhatsApp Us
                </a>
                <a
                  href={`tel:${c.phoneHref}`}
                  className="btn inline-flex bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-5 py-3.5 border border-white/15"
                >
                  <FiPhone className="h-5 w-5 text-accent" /> Call {c.phone}
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 pt-6 text-xs sm:text-sm text-grey-300">
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent shrink-0" /> Personal Attention
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent shrink-0" /> Doubt Sessions
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent shrink-0" /> Smart Learning
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent shrink-0" /> Regular Tests
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent shrink-0" /> Verified Tutors
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-accent shrink-0" /> Parent Updates
                </span>
              </div>
            </div>

            {/* Right Column: Faculty Feature Card with Er. N. Jha Sir's Official Photo */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Glowing card border container */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-4 sm:p-5 backdrop-blur-xl shadow-2xl">
                    
                    {/* Faculty Photo */}
                    <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl bg-navy-950">
                      <Image
                        src="/images/faculty-njha.webp"
                        alt="Er. N. Jha Sir - Maths Faculty & Founder Mentor at Kashyap Tutorial"
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-navy-900/90 px-3.5 py-1.5 text-xs font-bold text-white border border-white/20 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Lead Mentor &amp; Faculty
                      </div>

                      {/* Bottom Photo Overlay Info */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-display text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
                          Er. N. Jha Sir
                        </h3>
                        <p className="text-sm font-semibold text-accent drop-shadow">
                          Maths Faculty | Mentor | Guide | Motivator
                        </p>
                        <p className="mt-1 text-xs text-grey-300">
                          12+ Years Experience · 1200+ Students Mentored
                        </p>
                      </div>
                    </div>

                    {/* Bottom Stats inside Card */}
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md border border-white/10">
                        <div className="flex justify-center text-amber-400 gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="h-4 w-4 fill-amber-400" />
                          ))}
                        </div>
                        <p className="font-display text-base font-extrabold text-white">200+ Google Reviews</p>
                        <p className="text-[11px] text-grey-300">Trusted by Parents</p>
                      </div>

                      <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-md border border-white/10">
                        <p className="font-display text-xl font-extrabold text-accent">100% Focus</p>
                        <p className="text-xs font-semibold text-white">Concept Clarity</p>
                        <p className="text-[11px] text-grey-300">From Basics to Brilliance</p>
                      </div>
                    </div>

                    {/* Floating Doorstep Badge */}
                    <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-white/20 bg-navy-900/95 p-3.5 shadow-2xl backdrop-blur-xl sm:flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-navy-950 font-bold">
                        <FaGraduationCap className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Home Tuition Available</p>
                        <p className="text-[11px] text-accent">Quality Education at Your Doorstep!</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============ METRICS BAR ============ */}
      <section className="border-y border-grey-200 bg-gradient-to-r from-navy-50 via-white to-navy-50">
        <div className="container-x grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
          {siteConfig.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="text-center">
              <p className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-grey-600">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ OFFICIAL BANNER & POSTER SHOWCASE ============ */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Official Programs &amp; Offerings</span>
            <h2 className="heading mt-4">
              Explore Our <span className="text-navy-600">Coaching Classes &amp; Home Tuitions</span>
            </h2>
            <p className="mt-4 text-grey-600 text-base sm:text-lg">
              Structured batch coaching at our Alpha 1 Greater Noida center, or personalized 1-on-1 home tuitions delivered right at your doorstep.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-center">
            {/* Poster Image Container */}
            <Reveal className="lg:col-span-6">
              <div className="relative group overflow-hidden rounded-3xl border-4 border-navy-900 shadow-2xl">
                <Image
                  src="/images/poster-courses.webp"
                  alt="Kashyap Tutorial Official Course Banner & Classroom"
                  width={800}
                  height={1100}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy-950">
                    Official Banner &amp; Center Overview
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold">
                    Alpha 1, Greater Noida (Near Alpha 1 Market)
                  </h3>
                  <p className="text-xs text-grey-200 mt-1">
                    Call / WhatsApp: <span className="text-amber-300 font-bold">7903244838</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Poster Feature Bullet Points */}
            <div className="lg:col-span-6 space-y-6">
              <div className="rounded-2xl border border-grey-200 bg-grey-50/80 p-6 transition-all hover:border-navy-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white font-bold text-lg">
                    6-8
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Class 6th to 8th (Foundation)
                    </h3>
                    <p className="text-xs font-semibold text-navy-600">CBSE &amp; ICSE (All Subjects)</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-grey-600">
                  Building strong concepts early from basics to brilliance. Maths, Science, English &amp; Social Science.
                </p>
              </div>

              <div className="rounded-2xl border border-grey-200 bg-grey-50/80 p-6 transition-all hover:border-navy-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-lg">
                    9-10
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Class 9th &amp; 10th (Board Excellence)
                    </h3>
                    <p className="text-xs font-semibold text-emerald-700">Board Excellence with Concept Clarity</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-grey-600">
                  Complete NCERT coverage, chapter-wise test series, sample paper drills, and board exam strategies.
                </p>
              </div>

              <div className="rounded-2xl border border-grey-200 bg-grey-50/80 p-6 transition-all hover:border-navy-300 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white font-bold text-lg">
                    11-12
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Class 11th &amp; 12th (Topper&apos;s Preparation)
                    </h3>
                    <p className="text-xs font-semibold text-purple-700">CBSE &amp; ICSE Boards (PCM / PCB / Commerce)</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-grey-600">
                  Subject expert faculty led by Er. N. Jha Sir. Physics, Chemistry, Mathematics, Biology, Accounts &amp; Economics.
                </p>
              </div>

              <div className="rounded-2xl border border-accent/40 bg-amber-500/10 p-6 transition-all hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-navy-950 font-bold text-lg">
                    🎯
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      IIT-JEE | NEET (UG) | CUET &amp; Competitive
                    </h3>
                    <p className="text-xs font-semibold text-accent-dark">Engineering &amp; Medical Entrance</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-grey-700">
                  Expert faculty, smart entrance techniques, formula shortcuts, regular mock test analytics, and personal guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/courses" className="btn-primary">
                  View All Courses <FiArrowRight />
                </Link>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FaWhatsapp className="text-emerald-600 h-5 w-5" /> Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE KASHYAP TUTORIAL ============ */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading mt-4">
              Proven Approach Built for <span className="text-navy-600">Top Results</span>
            </h2>
            <p className="mt-4 text-grey-600">
              We combine subject mastery, individual student care, and regular parent reports to build confidence and top scores.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card group h-full hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg transition-all duration-300">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-2xl transition-transform group-hover:scale-110 group-hover:bg-accent/20">
                    {f.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-600">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Highlight Banner from Poster */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-950 p-8 text-white shadow-xl">
            <div className="grid items-center gap-6 md:grid-cols-12">
              <div className="md:col-span-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                  <FiCheck className="h-4 w-4" /> Home Tuition: KG to 12th
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl text-white">
                  Quality Education at Your Doorstep!
                </h3>
                <p className="mt-2 text-sm text-grey-300">
                  All Subjects (KG to 12th) · Experienced &amp; Verified Tutors · Personalised Attention · Flexible Timing across Greater Noida, Ghaziabad, Gurgaon, Delhi &amp; Patna.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                <Link href="/contact" className="btn-accent w-full text-center">
                  Book Home Tutor
                </Link>
                <a
                  href={`tel:${c.phoneHref}`}
                  className="btn inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  <FiPhone /> Call 7903244838
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============ COURSES PREVIEW ============ */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Our Courses</span>
              <h2 className="heading mt-4">Find the right program for your goal</h2>
              <p className="mt-4 text-grey-600">
                From middle school foundation to board mastery, entrance exams, and 1-on-1 home tuitions.
              </p>
            </div>
            <Link href="/courses" className="btn-outline shrink-0">
              View All Courses <FiArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 6).map((course, i) => (
              <Reveal key={course.slug} delay={i * 60}>
                <Link
                  href="/courses"
                  className="card group block h-full hover:-translate-y-1.5 hover:border-navy-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{course.icon}</span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900 group-hover:text-navy-600">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-grey-600 leading-relaxed">{course.blurb}</p>

                  <ul className="mt-4 space-y-1.5 text-xs text-grey-600 border-t border-grey-100 pt-3">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <FiCheck className="text-emerald-600 shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 group-hover:text-accent-dark">
                    Explore course <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESULTS HIGHLIGHT ============ */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Proven Results</span>
              <h2 className="heading mt-4">Our Toppers &amp; Success Stories</h2>
              <p className="mt-4 text-grey-600">
                Year after year, Kashyap Tutorial students achieve outstanding board percentages and entrance ranks. Our commitment to concept clarity delivers real success.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: <FiAward />, val: "120+", label: "Distinctions" },
                  { icon: <FiTrendingUp />, val: "100%", label: "Concept Focus" },
                  { icon: <FiUsers />, val: "1500+", label: "Happy Students" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-grey-200 bg-white p-5 text-center shadow-sm"
                  >
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-navy-950 font-bold">
                      {stat.icon}
                    </span>
                    <p className="mt-3 font-display text-2xl font-bold text-navy-900">
                      {stat.val}
                    </p>
                    <p className="text-xs text-grey-500 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/results" className="btn-primary mt-8">
                See Complete Results <FiArrowRight />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { p: "98.4%", n: "Aarav P.", c: "Class 10 CBSE", emoji: "🥇" },
                  { p: "96.2%", n: "Diya S.", c: "Class 12 Science", emoji: "🥈" },
                  { p: "95.8%", n: "Ishaan G.", c: "Class 10 ICSE", emoji: "🏆" },
                  { p: "95.0%", n: "Sneha R.", c: "Class 12 Commerce", emoji: "⭐" },
                ].map((t) => (
                  <div
                    key={t.n}
                    className="rounded-2xl bg-navy-900 p-5 text-white shadow-md border border-white/10"
                  >
                    <span className="text-3xl">{t.emoji}</span>
                    <p className="mt-3 font-display text-2xl font-extrabold text-accent">
                      {t.p}
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">{t.n}</p>
                    <p className="text-xs text-grey-300">{t.c}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TUTORING PRESENCE (Offline + Online) ============ */}
      <TutoringPresence />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ BLOG PREVIEW ============ */}
      {latestPosts.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <span className="eyebrow">From Our Blog</span>
                <h2 className="heading mt-4">Tips, guides &amp; study strategies</h2>
              </div>
              <Link href="/blog" className="btn-outline shrink-0">
                Read All Posts <FiArrowRight />
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {latestPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 80}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card group flex h-full flex-col hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
                  >
                    <span className="flex h-32 items-center justify-center rounded-xl bg-navy-50 text-5xl">
                      {post.coverEmoji}
                    </span>
                    <div className="mt-4 flex items-center gap-2 text-xs text-grey-500">
                      <span>{post.readingTime}</span>
                      <span>·</span>
                      <span>
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-navy-700">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-grey-600">
                      {post.description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ FAQ ============ */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="heading mt-4">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <details className="group rounded-2xl border border-grey-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden shadow-sm">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-navy-900 text-base">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-transform group-open:rotate-45 font-extrabold">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-grey-600 border-t border-grey-100 pt-3">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16 shadow-2xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300">
                <FiStar className="fill-amber-400" /> Start Your Journey Today
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl text-white">
                Take the first step towards a better future!
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-grey-300 text-base sm:text-lg">
                Book a free demo class with <span className="font-semibold text-white">Er. N. Jha Sir &amp; Teams</span> at Alpha 1, Greater Noida or request a 1-on-1 Home Tutor.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-accent text-base px-6 py-3.5">
                  Book Free Demo Class <FiArrowRight />
                </Link>
                <a
                  href={`tel:${c.phoneHref}`}
                  className="btn inline-flex bg-white/10 text-white backdrop-blur hover:bg-white/20 border border-white/20 text-base px-6 py-3.5"
                >
                  <FiPhone className="text-accent" /> Call {c.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

