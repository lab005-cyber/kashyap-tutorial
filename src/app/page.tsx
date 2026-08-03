import Link from "next/link";
import Image from "next/image";
import { siteConfig, courses, features, faqs, tutors } from "@/config/site";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import StarRating from "@/components/StarRating";
import TutoringPresence from "@/components/TutoringPresence";
import JsonLd from "@/components/JsonLd";
import BrandIcon from "@/components/BrandIcon";
import CountUp from "@/components/CountUp";
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
  FiTarget,
} from "react-icons/fi";
import { FaWhatsapp, FaGlobe, FaGraduationCap } from "react-icons/fa";

export default function HomePage() {
  const c = siteConfig.contact;

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 text-white">
        {/* Animated Background Blobs & Particle Lighting */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-[550px] w-[550px] rounded-full bg-accent/20 blur-[130px] animate-pulse-glow" />
          <div className="absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
          {/* Ambient Particle Grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container-x relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column: Punchline Headlines & CTAs */}
            <div className="lg:col-span-7">
              {/* Header Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs sm:text-sm font-bold text-accent backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                Trusted by 5000+ Students
                <span className="text-white/30">|</span>
                <span className="inline-flex items-center gap-1 text-amber-300">
                  <FiStar className="fill-amber-400 text-amber-400 h-3.5 w-3.5" /> 5-Star Rating
                </span>
                <span className="text-white/30">|</span>
                <span className="inline-flex items-center gap-1 text-amber-300">
                  🏆 12+ Years Experience
                </span>
              </div>

              {/* Punchline Main Title */}
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl text-white">
                Rankers Don&apos;t Study Hard. <br />
                <span className="bg-gradient-to-r from-amber-300 via-accent to-amber-400 bg-clip-text text-transparent underline decoration-accent/40 decoration-wavy decoration-2">
                  They Study Smart.
                </span>
              </h1>

              {/* Sub-headline / Tagline */}
              <p className="mt-4 font-display text-lg sm:text-xl font-bold text-amber-300">
                India&apos;s Premium Home Tuition &amp; Coaching Platform.
              </p>

              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-grey-300">
                Quality education from <span className="font-semibold text-white">Basics to Brilliance</span>. Classroom coaching at <span className="text-white font-semibold">Alpha 1, Greater Noida</span> &amp; 1-on-1 Home Tuitions in 5 cities — guided by <span className="font-semibold text-white">Er. N. Jha Sir &amp; Teams</span>.
              </p>

              {/* Trust Metric Stat Badges Strip */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-4 max-w-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 text-lg border border-white/15">
                    ⭐
                  </span>
                  <div>
                    <p className="font-display text-base font-extrabold text-white">4.9 Rating</p>
                    <p className="text-[11px] text-grey-300">Google Reviews</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-l border-white/10 pl-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400 text-lg border border-white/15">
                    👨‍🎓
                  </span>
                  <div>
                    <p className="font-display text-base font-extrabold text-white">5000+</p>
                    <p className="text-[11px] text-grey-300">Students Mentored</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-l border-white/10 pl-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-300 text-lg border border-white/15">
                    🏆
                  </span>
                  <div>
                    <p className="font-display text-base font-extrabold text-white">12+ Yrs</p>
                    <p className="text-[11px] text-grey-300">Experience</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-accent text-base px-7 py-3.5 shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-transform font-extrabold">
                  Book Free Demo <FiArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/results"
                  className="btn inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-6 py-3.5 border border-white/20 backdrop-blur-md transition-all shadow-md"
                >
                  <FiAward className="h-5 w-5 text-amber-400" /> Watch Success Stories
                </Link>

                <a
                  href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent("Hello! I want to enquire about classes & demo session.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base px-5 py-3.5 shadow-lg shadow-emerald-600/20"
                >
                  <FaWhatsapp className="h-5 w-5" /> WhatsApp Us
                </a>
              </div>

              {/* Quick Trust Checks */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-grey-300">
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-amber-400 shrink-0" /> Personal Attention
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-amber-400 shrink-0" /> Doubt Solving Sessions
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-amber-400 shrink-0" /> Verified Tutors
                </span>
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-amber-400 shrink-0" /> Regular Test Series
                </span>
              </div>
            </div>

            {/* Right Column: Glassmorphic Faculty Card with Floating 3D Micro-Elements */}
            <div className="lg:col-span-5 relative">
              
              {/* Floating 3D Micro-Element 1: Top Floating Badge */}
              <div className="hidden sm:flex absolute -top-6 -left-6 z-20 items-center gap-2.5 rounded-2xl border border-white/20 bg-navy-900/90 px-4 py-2.5 backdrop-blur-xl shadow-xl animate-float">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400 text-navy-950 font-bold">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Top Ranks 2024</p>
                  <p className="text-[11px] text-amber-300">98.4% CBSE Topper</p>
                </div>
              </div>

              {/* Floating 3D Micro-Element 2: Right Floating Badge */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 z-20 items-center gap-2.5 rounded-2xl border border-white/20 bg-navy-900/90 px-4 py-2.5 backdrop-blur-xl shadow-xl animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold">
                  <FaGraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">100% Concept Focus</p>
                  <p className="text-[11px] text-emerald-300">Basics to Brilliance</p>
                </div>
              </div>

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

                    {/* Doorstep Home Tuition Badge */}
                    <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/15 bg-navy-900/90 p-3 backdrop-blur-md">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-navy-950 font-bold">
                        <FaGraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Home Tuition Available</p>
                        <p className="text-[11px] text-amber-300">Quality Education at Your Doorstep!</p>
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
                <CountUp end={m.num} suffix={m.suffix} />
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
                    Alpha 1, Commercial Belt, Greater Noida
                  </h3>
                  <p className="text-xs text-grey-200 mt-1">
                    Call / WhatsApp: <span className="text-amber-300 font-bold">7903244838</span>
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Premium Course Cards */}
            <div className="lg:col-span-6 space-y-5">

              {/* ---- Class 6-8 Card ---- */}
              <Reveal delay={60}>
                <div className="group relative overflow-hidden rounded-2xl border border-navy-200/60 bg-gradient-to-r from-navy-50 via-white to-navy-50/50 p-5 transition-all duration-300 hover:border-navy-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-navy-100/50 blur-2xl transition-all group-hover:bg-navy-200/60" />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-white font-bold text-sm shadow-lg shadow-navy-900/20">
                      6-8
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        Class 6th to 8th (Foundation)
                      </h3>
                      <p className="text-xs font-semibold text-navy-500 mt-0.5">CBSE &amp; ICSE · All Subjects</p>
                      <p className="mt-2 text-sm text-grey-600 leading-relaxed">
                        Building strong concepts early — Maths, Science, English &amp; Social Science with clarity-first teaching.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ---- Class 9-10 Card ---- */}
              <Reveal delay={120}>
                <div className="group relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-r from-emerald-50 via-white to-emerald-50/50 p-5 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-100/60 blur-2xl transition-all group-hover:bg-emerald-200/70" />
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20">
                      9-10
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        Class 9th &amp; 10th (Board Excellence)
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600 mt-0.5">Board Excellence · Concept Clarity</p>
                      <p className="mt-2 text-sm text-grey-600 leading-relaxed">
                        Complete NCERT coverage, chapter-wise tests, sample paper drills, and board exam strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ---- ⭐ Class 11-12 PREMIUM HERO CARD ---- */}
              <Reveal delay={180}>
                <div className="group relative overflow-hidden rounded-3xl border border-navy-700 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 sm:p-7 text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  {/* Glowing background accents */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
                    <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-navy-600/20 blur-3xl" />
                  </div>

                  <div className="relative">
                    {/* Badge row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                        </span>
                        Most Popular
                      </span>
                      <span className="rounded-full bg-amber-400/20 border border-amber-400/30 px-3 py-1 text-xs font-bold text-amber-300">
                        CBSE &amp; ICSE Boards
                      </span>
                    </div>

                    {/* Heading */}
                    <div className="flex items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-navy-950 font-extrabold text-lg shadow-lg shadow-amber-500/30">
                        11-12
                      </span>
                      <div>
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
                          Class 11th &amp; 12th (Topper&apos;s Prep)
                        </h3>
                        <p className="text-sm font-semibold text-grey-300 mt-1">
                          Physics · Chemistry · Mathematics · Biology
                        </p>
                      </div>
                    </div>

                    {/* Subject pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Physics", "Chemistry", "Mathematics", "Biology"].map((label) => (
                        <span key={label} className="rounded-lg bg-white/10 text-grey-200 border border-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {[
                        "Expert Faculty led by Er. N. Jha Sir",
                        "Concept + Numerical Practice",
                        "Previous Year Drills",
                        "Personal Mentoring & Doubts",
                      ].map((feat) => (
                        <span key={feat} className="flex items-start gap-2 text-xs text-grey-200">
                          <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" /> {feat}
                        </span>
                      ))}
                    </div>

                    {/* CTA row */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <Link href="/contact" className="btn-accent px-5 py-2.5 text-sm">
                        Enquire Now <FiArrowRight className="h-4 w-4" />
                      </Link>
                      <a
                        href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent("I'm interested in Class 11-12 coaching.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                      >
                        <FaWhatsapp className="h-4 w-4 text-emerald-400" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* ---- JEE / NEET / CUET Card ---- */}
              <Reveal delay={240}>
                <div className="group relative overflow-hidden rounded-2xl border border-grey-200 bg-white p-5 transition-all duration-300 hover:border-navy-900/30 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="relative flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-amber-400 shadow-md">
                      <FiTarget className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-navy-900">
                        IIT-JEE | NEET (UG) | CUET &amp; Competitive
                      </h3>
                      <p className="text-xs font-bold text-accent-dark mt-0.5">Engineering &amp; Medical Entrance</p>
                      <p className="mt-2 text-sm text-grey-600 leading-relaxed">
                        Expert faculty, smart entrance techniques, formula shortcuts, regular mock test analytics, and personal guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="flex flex-wrap gap-4 pt-3">
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 border border-navy-100/60 shadow-xs transition-transform group-hover:scale-110 group-hover:bg-accent/20">
                    <BrandIcon name={f.icon} className="h-6 w-6 text-accent-dark" />
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
                  className="group relative block h-full overflow-hidden rounded-2xl border border-grey-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy-900/30 hover:shadow-xl"
                >
                  {/* Top gold accent stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-400 shadow-md">
                      <BrandIcon name={course.icon} className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-navy-50 border border-navy-100 px-3 py-1 text-xs font-bold text-navy-800">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900 group-hover:text-navy-700 transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-grey-600 leading-relaxed">{course.blurb}</p>

                  <ul className="mt-4 space-y-1.5 text-xs text-grey-600 border-t border-grey-100 pt-3">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <FiCheck className="text-accent-dark shrink-0 font-bold" /> {h}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 group-hover:text-accent-dark transition-colors">
                    Explore course <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEAD EDUCATORS SECTION ============ */}
      <section className="section bg-white border-t border-grey-100">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Expert Faculty &amp; Mentors</span>
              <h2 className="heading mt-4">Meet Our Lead Educators</h2>
              <p className="mt-4 text-grey-600">
                Learn from experienced subject experts delivering personalized offline classroom coaching, 1-on-1 home tuitions, and live online interactive classes.
              </p>
            </div>
            <Link href="/tutors" className="btn-outline shrink-0">
              View Our Expert Faculty <FiArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {tutors.slice(0, 2).map((t, i) => (
              <Reveal key={t.id} delay={i * 100}>
                <article className="card group flex h-full flex-col hover:-translate-y-1.5 hover:border-navy-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={84}
                        height={84}
                        priority
                        className="h-20 w-20 shrink-0 rounded-2xl object-cover object-top border-2 border-amber-400 shadow-md"
                      />
                    ) : (
                      <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-navy-900 font-display text-xl font-bold text-accent">
                        {t.name.slice(0, 2)}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-extrabold text-navy-900 group-hover:text-navy-700">
                        {t.name}
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1 text-xs font-semibold text-grey-600">
                        <FiMapPin className="h-3.5 w-3.5 text-accent-dark" /> {t.city}
                      </p>
                      <p className="text-xs font-bold text-accent-dark mt-0.5">{t.classes}</p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <StarRating rating={t.rating} size={15} />
                        <span className="text-xs font-bold text-navy-950">5.0 Star Rated</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-grey-600 font-medium">{t.highlight}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg bg-navy-50 px-2.5 py-1 text-xs font-bold text-navy-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-grey-100 pt-4 text-sm">
                    <div>
                      <p className="font-display font-bold text-navy-900">{t.experience}+ Years</p>
                      <p className="text-xs text-grey-500">Experience</p>
                    </div>
                    <div>
                      {t.id === "pankaj-jha-sir-md" ? (
                        <>
                          <p className="font-display font-bold text-navy-900">Management</p>
                          <p className="text-xs text-grey-500">Leadership</p>
                        </>
                      ) : (
                        <>
                          <p className="font-display font-bold text-navy-900">{t.studentsTaught}+</p>
                          <p className="text-xs text-grey-500">Students Taught</p>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 rounded-xl bg-amber-500/10 border border-amber-400/30 px-3 py-2 text-center text-xs font-bold text-navy-950">
                    Mode: {t.mode}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <Link href="/contact" className="btn-primary w-full text-xs py-2.5">
                      Book Free Demo
                    </Link>
                    <a
                      href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(`Hi! I would like to enquire about classes with ${t.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn inline-flex items-center justify-center gap-1 bg-emerald-600 text-white hover:bg-emerald-500 text-xs py-2.5"
                    >
                      <FaWhatsapp className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </article>
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
                  { icon: <FiUsers />, val: "5000+", label: "Students Mentored" },
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
                  { p: "98.4%", n: "Aarav P.", c: "Class 10 CBSE", icon: "rank-1" },
                  { p: "96.2%", n: "Diya S.", c: "Class 12 Science", icon: "rank-2" },
                  { p: "95.8%", n: "Ishaan G.", c: "Class 10 ICSE", icon: "trophy" },
                  { p: "95.0%", n: "Sneha R.", c: "Class 12 PCB Science", icon: "star" },
                ].map((t) => (
                  <div
                    key={t.n}
                    className="rounded-2xl bg-navy-900 p-5 text-white shadow-md border border-white/10"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                      <BrandIcon name={t.icon} className="h-6 w-6" />
                    </span>
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

