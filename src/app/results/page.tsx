import Link from "next/link";
import type { Metadata } from "next";
import { toppers, siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FiArrowRight, FiAward, FiTrendingUp, FiSmile } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Results & Toppers",
  description:
    "Celebrate the achievements of Kashyap Tutorial students — board exam toppers, distinctions, and success stories. Consistent 95%+ pass rate year after year.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Results", path: "/results" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent">
            <FiAward className="h-4 w-4 text-accent" /> Our Achievers
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Results that speak for themselves
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300">
            Every percentage here represents hours of hard work — by students, teachers, and
            supportive parents. We're proud of each one.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-grey-200 bg-white">
        <div className="container-x grid grid-cols-1 gap-6 py-12 sm:grid-cols-3">
          {[
            { icon: <FiAward />, val: "120+", label: "Distinction holders (90%+)" },
            { icon: <FiTrendingUp />, val: "95%", label: "Overall pass rate" },
            { icon: <FiSmile />, val: "5000+", label: "Students Mentored" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-xl text-accent-dark">
                {s.icon}
              </span>
              <p className="mt-3 font-display text-3xl font-extrabold text-navy-900">
                {s.val}
              </p>
              <p className="text-sm text-grey-500">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Toppers */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Toppers Board</span>
            <h2 className="heading mt-4">Celebrating our stars</h2>
            <p className="mt-4 text-grey-600">
              A snapshot of recent high achievers. (Replace with your real toppers in{" "}
              <code className="rounded bg-grey-100 px-1.5 py-0.5 text-sm">site.ts</code>.)
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {toppers.map((t, i) => (
              <Reveal key={t.name + t.year} delay={i * 60}>
                <div className="card text-center hover:-translate-y-1 hover:shadow-md">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-800 text-2xl font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <p className="mt-4 font-display text-2xl font-extrabold text-accent-dark">
                    {t.percentage}
                  </p>
                  <p className="mt-1 font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs text-grey-500">{t.class}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-grey-400">
                    Batch {t.year}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Your child could be next
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-grey-300">
              Join the families in {siteConfig.contact.address.city} who chose Kashyap
              Tutorial. The first demo class is on us.
            </p>
            <Link href="/contact" className="btn-accent mt-6">
              Book Free Demo <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
