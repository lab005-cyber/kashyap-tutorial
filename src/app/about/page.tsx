import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kashyap Tutorial & Home Tuition — our mission, teaching philosophy, and why families trust us for quality education and personalised home tuition.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: <FiTarget />,
    title: "Our Mission",
    desc: "To make quality, personalised education accessible to every student — regardless of their starting point — and help them achieve their highest potential.",
  },
  {
    icon: <FiEye />,
    title: "Our Vision",
    desc: "To be the most trusted coaching and home-tuition provider in the region, known for honest guidance and consistent, measurable student progress.",
  },
  {
    icon: <FiHeart />,
    title: "Our Values",
    desc: "Integrity, patience, and genuine care for each learner. We measure our success by our students' confidence, not just their marks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent">
            About Us
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            12+ years of guiding students to success
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300">
            {siteConfig.name} began with a simple belief: every student learns differently, and
            great teaching meets them where they are.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow">Our Story</span>
              <h2 className="heading mt-4">Built on personal attention</h2>
              <div className="mt-5 space-y-4 text-grey-600">
                <p>
                  What started as one teacher helping a few neighbourhood children has grown
                  into a trusted name in coaching and home tuition across{" "}
                  {siteConfig.contact.address.city}.
                </p>
                <p>
                  Over the years we've taught 1500+ students — from Class 6 beginners to Class
                  12 board toppers. Through it all, our philosophy hasn't changed: small
                  batches, personal mentoring, and honest communication with parents.
                </p>
                <p>
                  Whether your child needs classroom coaching or one-on-one home tuition, we
                  match them with the right teacher and walk alongside them all the way to
                  results day.
                </p>
              </div>
              <Link href="/contact" className="btn-primary mt-8">
                Get in Touch <FiArrowRight />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-navy-900 p-6 text-white">
                  <p className="font-display text-4xl font-extrabold text-accent">12+</p>
                  <p className="mt-1 text-sm text-grey-300">Years of teaching</p>
                </div>
                <div className="rounded-2xl bg-grey-100 p-6">
                  <p className="font-display text-4xl font-extrabold text-navy-800">1500+</p>
                  <p className="mt-1 text-sm text-grey-500">Students taught</p>
                </div>
                <div className="rounded-2xl bg-grey-100 p-6">
                  <p className="font-display text-4xl font-extrabold text-navy-800">95%</p>
                  <p className="mt-1 text-sm text-grey-500">Pass rate</p>
                </div>
                <div className="rounded-2xl bg-navy-900 p-6 text-white">
                  <p className="font-display text-4xl font-extrabold text-accent">4.9★</p>
                  <p className="mt-1 text-sm text-grey-300">Parent rating</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What Drives Us</span>
            <h2 className="heading mt-4">More than just marks</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-xl text-navy-700">
                    {v.icon}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-grey-600">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Why Parents Trust Us</span>
              <h2 className="heading-sm mt-4">Education with accountability</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Qualified, experienced teachers for every subject",
                  "Small batches for genuine personal attention",
                  "Weekly tests with detailed reports to parents",
                  "Transparent, affordable fees — no hidden costs",
                  "Home tuition option across the city",
                  "Free demo class before you commit",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                    <span className="text-grey-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-grey-200 bg-grey-50 p-8">
                <p className="font-display text-lg font-bold text-navy-900">
                  A note from the founder
                </p>
                <blockquote className="mt-4 text-grey-700 italic leading-relaxed">
                  &ldquo;Teaching isn't a job for us — it's a responsibility. When a parent
                  hands us their child's future, we take it personally. That's why we keep
                  batches small, communicate openly, and never give up on a student.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-navy-800">
                  — The Kashyap Tutorial Team
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="rounded-3xl bg-navy-900 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Come see the difference for yourself
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-grey-300">
              Visit us or book a free demo class. We'd love to meet you and your child.
            </p>
            <Link href="/contact" className="btn-accent mt-6">
              Book a Free Demo <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
