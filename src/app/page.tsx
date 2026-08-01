import Link from "next/link";
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
} from "react-icons/fi";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  const c = siteConfig.contact;

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        {/* background decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-navy-500/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="container-x relative py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Admissions open · Offline &amp; Online both available
              </div>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Home Tutors in <span className="text-accent">5 Cities</span> &amp;{" "}
                <span className="text-accent">Online Classes</span> Worldwide
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey-300">
                Expert faculty at your doorstep in Greater Noida, Ghaziabad, Gurgaon, Delhi &amp; Patna — or join live online classes from anywhere in the world. Classes 6–12, CBSE &amp; ICSE.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-accent">
                  Book Free Demo <FiArrowRight />
                </Link>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex bg-white/10 text-white backdrop-blur hover:bg-white/15"
                >
                  <FaWhatsapp className="h-5 w-5 text-green-400" /> WhatsApp Us
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-grey-400">
                <span className="inline-flex items-center gap-2">
                  <FiCheckCircle className="text-accent" /> No registration fee
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiCheckCircle className="text-accent" /> Study material included
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiCheckCircle className="text-accent" /> Weekly parent reports
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiMapPin className="text-accent" /> Home tutors in 5 cities
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaGlobe className="text-accent" /> Online classes worldwide
                </span>
              </div>
            </div>

            {/* Hero visual card */}
            <Reveal className="relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-2xl">
                  {/* mock "report card" */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-grey-400">
                        Student Progress
                      </p>
                      <p className="font-display text-xl font-bold text-white">
                        Live Dashboard
                      </p>
                    </div>
                    <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
                      +24% ↑
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      { subj: "Mathematics", score: 92, color: "bg-accent" },
                      { subj: "Science", score: 88, color: "bg-green-400" },
                      { subj: "English", score: 95, color: "bg-blue-400" },
                    ].map((row) => (
                      <div key={row.subj}>
                        <div className="flex justify-between text-sm">
                          <span className="text-grey-300">{row.subj}</span>
                          <span className="font-semibold text-white">{row.score}%</span>
                        </div>
                        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <div
                            className={`h-full rounded-full ${row.color}`}
                            style={{ width: `${row.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-4 text-center">
                      <p className="font-display text-2xl font-bold text-accent">A+</p>
                      <p className="mt-1 text-xs text-grey-400">Class Rank</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4 text-center">
                      <p className="font-display text-2xl font-bold text-accent">5.0</p>
                      <p className="mt-1 text-xs text-grey-400">Tutor Rating</p>
                    </div>
                  </div>
                </div>

                {/* floating badge */}
                <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-grey-100 bg-white p-4 shadow-xl sm:block">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-2xl">
                      🎓
                    </span>
                    <div>
                      <p className="font-display text-lg font-bold text-navy-900">95%</p>
                      <p className="text-xs text-grey-500">Pass Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ METRICS BAR ============ */}
      <section className="border-b border-grey-200 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {siteConfig.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="text-center">
              <p className="font-display text-3xl font-extrabold text-navy-800 sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm font-medium text-grey-500">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading mt-4">
              An approach built for <span className="text-navy-500">real results</span>
            </h2>
            <p className="mt-4 text-grey-600">
              We combine expert teaching, personal attention, and honest feedback so every
              student can reach their full potential.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card group h-full hover:-translate-y-1 hover:border-navy-200 hover:shadow-md">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-2xl transition-transform group-hover:scale-110">
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
        </div>
      </section>

      {/* ============ COURSES PREVIEW ============ */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <span className="eyebrow">Our Courses</span>
              <h2 className="heading mt-4">Find the right program for your goal</h2>
              <p className="mt-4 text-grey-600">
                From foundation to boards to competitive exams — and home tuition for every
                class and subject.
              </p>
            </div>
            <Link href="/courses" className="btn-outline shrink-0">
              View All Courses <FiArrowRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course, i) => (
              <Reveal key={course.slug} delay={i * 80}>
                <Link
                  href="/courses"
                  className="card group block h-full hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{course.icon}</span>
                    <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-grey-600">{course.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 group-hover:text-navy-900">
                    Learn more <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ RESULTS HIGHLIGHT ============ */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Proven Results</span>
              <h2 className="heading mt-4">Numbers that build trust</h2>
              <p className="mt-4 text-grey-600">
                Year after year, our students top their boards and competitive exams. We
                celebrate every milestone — big and small.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: <FiAward />, val: "120+", label: "Distinctions" },
                  { icon: <FiTrendingUp />, val: "95%", label: "Pass Rate" },
                  { icon: <FiUsers />, val: "1500+", label: "Students" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-grey-200 bg-white p-5 text-center"
                  >
                    <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent-dark">
                      {stat.icon}
                    </span>
                    <p className="mt-3 font-display text-2xl font-bold text-navy-900">
                      {stat.val}
                    </p>
                    <p className="text-xs text-grey-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/results" className="btn-primary mt-8">
                See Our Toppers <FiArrowRight />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { p: "98.4%", n: "Aarav P.", c: "Class 10 CBSE", emoji: "🥇" },
                  { p: "96.2%", n: "Diya S.", c: "Class 12 Sci", emoji: "🥈" },
                  { p: "95.8%", n: "Ishaan G.", c: "Class 10 ICSE", emoji: "🏆" },
                  { p: "95.0%", n: "Sneha R.", c: "Class 12 Comm", emoji: "⭐" },
                ].map((t) => (
                  <div
                    key={t.n}
                    className="rounded-2xl bg-navy-900 p-5 text-white shadow-sm"
                  >
                    <span className="text-3xl">{t.emoji}</span>
                    <p className="mt-3 font-display text-2xl font-extrabold text-accent">
                      {t.p}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{t.n}</p>
                    <p className="text-xs text-grey-400">{t.c}</p>
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
        <section className="section">
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
            <h2 className="heading mt-4">Questions parents often ask</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <details className="group rounded-xl border border-grey-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy-900">
                    {faq.q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-grey-600">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-navy-500/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
                Let's start your success story today
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-grey-300">
                Book a free demo class and see why families across {c.address.city} trust
                Kashyap Tutorial for their children's education.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-accent">
                  Book Free Demo <FiArrowRight />
                </Link>
                <a
                  href={`tel:${c.phoneHref}`}
                  className="btn inline-flex bg-white/10 text-white backdrop-blur hover:bg-white/15"
                >
                  <FiPhone /> {c.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
