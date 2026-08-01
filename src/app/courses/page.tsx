import Link from "next/link";
import type { Metadata } from "next";
import { courses, features, faqs } from "@/config/site";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import BrandIcon from "@/components/BrandIcon";
import { breadcrumbJsonLd, courseJsonLd } from "@/lib/seo";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Explore coaching and home tuition programs at Kashyap Tutorial: Classes 6–8, 9–10 boards, 11–12 PCM & PCB Science, competitive exams, and 1-on-1 home tuition.",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
        ])}
      />
      <JsonLd data={courseJsonLd(courses)} />
      {/* Header */}
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-60 w-60 rounded-full bg-royal-500/20 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent">
            Academic Programs
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Courses designed for every learner
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300">
            From building strong foundations to cracking board exams and beyond — choose the
            program that fits your goal, or opt for personalised home tuition.
          </p>
        </div>
      </section>

      {/* Courses grid */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => {
              const themes: Record<string, { gradient: string; iconBg: string; border: string; badge: string; badgeText: string; check: string; cta: string; stripe: string }> = {
                "class-6-to-8": {
                  gradient: "from-navy-50/80 to-white",
                  iconBg: "bg-gradient-to-br from-navy-700 to-navy-900",
                  border: "hover:border-navy-300",
                  badge: "bg-navy-50/80",
                  badgeText: "text-navy-700",
                  check: "text-navy-600",
                  cta: "text-navy-700 hover:text-navy-900",
                  stripe: "from-navy-600 via-navy-800 to-navy-600",
                },
                "class-9-10": {
                  gradient: "from-emerald-50/60 to-white",
                  iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
                  border: "hover:border-emerald-300",
                  badge: "bg-emerald-50/80",
                  badgeText: "text-emerald-700",
                  check: "text-emerald-600",
                  cta: "text-emerald-700 hover:text-emerald-900",
                  stripe: "from-emerald-500 via-emerald-600 to-emerald-500",
                },
                "class-11-12-science": {
                  gradient: "from-royal-50/80 to-white",
                  iconBg: "bg-gradient-to-br from-royal-600 to-indigo-700",
                  border: "hover:border-royal-300",
                  badge: "bg-royal-50/80",
                  badgeText: "text-royal-700",
                  check: "text-royal-600",
                  cta: "text-royal-700 hover:text-royal-900",
                  stripe: "from-royal-500 via-royal-700 to-indigo-600",
                },
                "jee-neet-cuet": {
                  gradient: "from-amber-50/60 to-white",
                  iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
                  border: "hover:border-amber-300",
                  badge: "bg-amber-50/80",
                  badgeText: "text-amber-700",
                  check: "text-amber-600",
                  cta: "text-amber-700 hover:text-amber-900",
                  stripe: "from-amber-400 via-orange-500 to-amber-400",
                },
                "home-tuition": {
                  gradient: "from-sky-50/60 to-white",
                  iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
                  border: "hover:border-sky-300",
                  badge: "bg-sky-50/80",
                  badgeText: "text-sky-700",
                  check: "text-sky-600",
                  cta: "text-sky-700 hover:text-sky-900",
                  stripe: "from-sky-400 via-blue-500 to-sky-400",
                },
                "pcb-11-12": {
                  gradient: "from-pink-50/60 to-white",
                  iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
                  border: "hover:border-pink-300",
                  badge: "bg-pink-50/80",
                  badgeText: "text-pink-700",
                  check: "text-pink-600",
                  cta: "text-pink-700 hover:text-pink-900",
                  stripe: "from-pink-400 via-rose-500 to-pink-400",
                },
              };
              const t = themes[course.slug] || themes["class-6-to-8"];
              const is1112 = course.slug === "class-11-12-science" || course.slug === "pcb-11-12";

              return (
                <Reveal key={course.slug} delay={i * 60}>
                  <div className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b ${t.gradient} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${t.border} ${is1112 ? "border-royal-200/60 ring-1 ring-royal-100/50" : "border-grey-200"}`}>
                    {/* Top gradient stripe */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.stripe}`} />

                    <div className="flex items-center justify-between">
                      <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${t.iconBg} text-white shadow-lg`}>
                        <BrandIcon name={course.icon} className="h-7 w-7" />
                      </span>
                      <span className={`rounded-full ${t.badge} px-3 py-1 text-xs font-semibold ${t.badgeText}`}>
                        {course.level}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-xl font-bold text-navy-900">
                      {course.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-grey-600">
                      {course.blurb}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-grey-700">
                          <FiCheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${t.check}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between border-t border-grey-100 pt-5">
                      <span className="text-sm text-grey-500">
                        {course.fee ? (
                          <>
                            <span className="font-semibold text-navy-800">{course.fee}</span> plans
                          </>
                        ) : (
                          "Flexible plans"
                        )}
                      </span>
                      <Link
                        href="/contact"
                        className={`inline-flex items-center gap-1 text-sm font-semibold ${t.cta}`}
                      >
                        Enquire <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Teaching Methodology</span>
            <h2 className="heading mt-4">How we help you succeed</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 border border-navy-100/60 shadow-xs">
                    <BrandIcon name={f.icon} className="h-6 w-6 text-accent-dark" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-grey-600">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Course FAQ</span>
            <h2 className="heading mt-4">Before you enrol</h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-grey-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-navy-900">
                  {faq.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-grey-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Not sure which course is right?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-grey-300">
              Talk to us. We'll assess your needs and recommend the perfect program — no
              pressure, no obligation.
            </p>
            <Link href="/contact" className="btn-accent mt-6">
              Get a Free Consultation <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
