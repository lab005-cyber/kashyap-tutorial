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
            {courses.map((course, i) => (
              <Reveal key={course.slug} delay={i * 60}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-grey-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy-900/30 hover:shadow-xl">
                  {/* Top gold accent stripe */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-amber-400 shadow-md">
                      <BrandIcon name={course.icon} className="h-7 w-7" />
                    </span>
                    <span className="rounded-full bg-navy-50 border border-navy-100 px-3.5 py-1 text-xs font-bold text-navy-800">
                      {course.level}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-navy-900">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-grey-600">
                    {course.blurb}
                  </p>

                  <ul className="mt-5 space-y-2.5 flex-1">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-grey-700">
                        <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent-dark font-bold" />
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
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 hover:text-accent-dark transition-colors"
                    >
                      Enquire <FiArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
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
