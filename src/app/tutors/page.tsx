import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig, tutors } from "@/config/site";
import Reveal from "@/components/Reveal";
import StarRating from "@/components/StarRating";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FiArrowRight, FiCheckCircle, FiAward, FiUsers, FiMapPin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Our Tutors",
  description:
    "Meet the expert faculty of Kashyap Tutorial & Home Tuition — experienced, verified tutors across Greater Noida, Ghaziabad, Gurgaon, Delhi & Patna for classes 6–12, CBSE/ICSE, boards, JEE/NEET and home tuition.",
  alternates: { canonical: "/tutors" },
};

export default function TutorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Tutors", path: "/tutors" },
        ])}
      />

      {/* Header */}
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent">
            Our Faculty
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Meet the teachers behind the results
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300">
            Qualified, background-verified subject experts across all 5 cities — plus online
            for students worldwide. Each tutor is chosen for deep subject knowledge and a
            genuine love of teaching.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-grey-200 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {[
            { icon: <FiUsers />, val: "10+", label: "Expert Tutors" },
            { icon: <FiAward />, val: "10+ yrs", label: "Avg. Experience" },
            { icon: <FiCheckCircle />, val: "100%", label: "Background Verified" },
            { icon: <FiMapPin />, val: "5", label: "Cities Covered" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                {s.icon}
              </span>
              <div>
                <p className="font-display text-xl font-bold text-navy-900">{s.val}</p>
                <p className="text-xs text-grey-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tutors grid */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutors.map((t, i) => (
              <Reveal key={t.id} delay={(i % 3) * 70}>
                <article className="card group flex h-full flex-col hover:-translate-y-1 hover:border-navy-200 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-800 font-display text-xl font-bold text-accent">
                      {initials(t.name)}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-lg font-bold text-navy-900 group-hover:text-navy-700">
                        {t.name}
                      </h2>
                      <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-grey-500">
                        <FiMapPin className="h-3.5 w-3.5 text-accent" /> {t.city} · {t.classes}
                      </p>
                      <div className="mt-1.5">
                        <StarRating rating={t.rating} size={14} />
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-grey-600">{t.highlight}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {t.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-grey-100 px-2.5 py-1 text-xs font-medium text-grey-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-grey-100 pt-5 text-sm">
                    <div>
                      <p className="font-display font-bold text-navy-900">{t.experience}+ yrs</p>
                      <p className="text-xs text-grey-500">Experience</p>
                    </div>
                    <div>
                      <p className="font-display font-bold text-navy-900">{t.studentsTaught}+</p>
                      <p className="text-xs text-grey-500">Students Taught</p>
                    </div>
                  </div>

                  <p className="mt-4 rounded-lg bg-navy-50 px-3 py-2 text-center text-xs font-semibold text-navy-700">
                    {t.mode}
                  </p>

                  <Link href="/contact" className="btn-primary mt-5 w-full">
                    Book a Demo <FiArrowRight />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How hiring works */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Standards</span>
            <h2 className="heading mt-4">Every tutor is thoroughly vetted</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Rigorous Screening",
                desc: "Teaching demo, subject test and background verification before any tutor joins our panel.",
              },
              {
                step: "02",
                title: "Matched to Your Child",
                desc: "We pair your child with a tutor based on subject, board, locality and learning style.",
              },
              {
                step: "03",
                title: "Monitored & Rated",
                desc: "Progress is tracked with weekly reports, and every session is rated by parents.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="card h-full text-center">
                  <span className="font-display text-4xl font-extrabold text-accent">
                    {s.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Looking for a tutor in your area?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-grey-300">
              Tell us the subject and locality — we'll match you with the right {siteConfig.shortName}{" "}
              tutor, usually within 24 hours.
            </p>
            <Link href="/contact" className="btn-accent mt-6">
              Request a Tutor <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
