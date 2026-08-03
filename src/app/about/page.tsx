import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig, tutors } from "@/config/site";
import Reveal from "@/components/Reveal";
import StarRating from "@/components/StarRating";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiMapPin,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "About Us - Er. N. Jha Sir & Teams",
  description:
    "Learn about Kashyap Tutorial & Home Tuition in Alpha 1, Greater Noida — led by Er. N. Jha Sir. Our mission, teaching philosophy, 200+ 5-star reviews, and commitment to concept clarity.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: <FiTarget />,
    title: "100% Concept Clarity",
    desc: "We focus on building deep conceptual understanding from basics to brilliance — eliminating rote memorisation.",
  },
  {
    icon: <FiEye />,
    title: "Personal Attention",
    desc: "Small batch size in classroom coaching and 1-on-1 focus in home tuitions ensures every doubt is resolved.",
  },
  {
    icon: <FiHeart />,
    title: "Honest Guidance",
    desc: "Transparent parent reports, regular chapter assessments, and genuine care for student confidence.",
  },
];

export default function AboutPage() {
  const c = siteConfig.contact;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-accent">
            About Kashyap Tutorial
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            12+ Years of Academic Excellence
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300 text-base sm:text-lg">
            Led by <span className="text-white font-bold">Er. N. Jha Sir &amp; Teams</span> at Alpha 1, Greater Noida. Trusted by 5000+ students and parents with <span className="text-amber-300 font-bold">200+ 5-Star Google Reviews</span>.
          </p>
        </div>
      </section>

      {/* Story with Faculty Image */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Faculty Photo Card */}
            <Reveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border-4 border-navy-900 shadow-2xl bg-navy-950">
                <Image
                  src="/images/faculty-njha.webp"
                  alt="Er. N. Jha Sir - Maths Faculty & Founder Mentor"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-navy-950">
                    Lead Mentor &amp; Faculty
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold text-white">
                    Er. N. Jha Sir
                  </h3>
                  <p className="text-xs font-semibold text-amber-300">
                    Maths Faculty | Mentor | Guide | Motivator
                  </p>
                  <p className="text-xs text-grey-300 mt-1">
                    Alpha 1, Greater Noida · Call/WA: 7903244838
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Story Text */}
            <div className="lg:col-span-7">
              <span className="eyebrow">Our Mission &amp; Journey</span>
              <h2 className="heading mt-4">
                Building Strong Concepts, <span className="text-navy-600">Shaping Bright Futures</span>
              </h2>
              <div className="mt-6 space-y-4 text-grey-600 text-base leading-relaxed">
                <p>
                  Kashyap Tutorial &amp; Home Tuition was founded with a dedicated goal: to make high-quality, concept-oriented education accessible to every student, whether in classroom batches or through 1-on-1 home tuitions.
                </p>
                <p>
                  Under the leadership of <strong className="text-navy-900">Er. N. Jha Sir</strong>, we have mentored over 5000+ students across Class 6th to 12th (CBSE &amp; ICSE), IIT-JEE, NEET (UG), and CUET. Our main coaching center is located in <strong className="text-navy-900">Alpha 1, Greater Noida (Near Alpha 1 Market)</strong>.
                </p>
                <p>
                  Additionally, our Home Tuition wing delivers verified, expert tutors to your doorstep across Greater Noida, Ghaziabad, Gurgaon, Delhi, and Patna for all subjects from KG to 12th.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-grey-200 pt-6 text-center">
                <div className="rounded-xl bg-navy-50 p-4">
                  <p className="font-display text-3xl font-extrabold text-navy-900">200+</p>
                  <p className="text-xs font-semibold text-grey-600">5-Star Reviews</p>
                </div>
                <div className="rounded-xl bg-navy-50 p-4">
                  <p className="font-display text-3xl font-extrabold text-navy-900">12+</p>
                  <p className="text-xs font-semibold text-grey-600">Years Experience</p>
                </div>
                <div className="rounded-xl bg-navy-50 p-4">
                  <p className="font-display text-3xl font-extrabold text-navy-900">5000+</p>
                  <p className="text-xs font-semibold text-grey-600">Students Mentored</p>
                </div>
                <div className="rounded-xl bg-navy-50 p-4">
                  <p className="font-display text-3xl font-extrabold text-amber-500">100%</p>
                  <p className="text-xs font-semibold text-grey-600">Concept Clarity</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Free Demo Class <FiArrowRight />
                </Link>
                <a
                  href={`https://wa.me/${c.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FaWhatsapp className="text-emerald-600 h-5 w-5" /> WhatsApp Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="section bg-white border-t border-grey-200">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Expert Faculty &amp; Mentors</span>
            <h2 className="heading mt-4">Meet Our Lead Educators</h2>
            <p className="mt-3 text-grey-600">
              Experienced, dedicated subject experts delivering personalized offline classroom, 1-on-1 home tuition, and live online coaching.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {tutors.slice(0, 4).map((t, i) => (
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
                      <p className="font-display font-bold text-navy-900">{t.studentsTaught}+</p>
                      <p className="text-xs text-grey-500">Students Taught</p>
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
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(`Hi! I would like to enquire about classes with ${t.name}.`)}`}
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

          <div className="mt-8 text-center">
            <Link href="/tutors" className="btn-outline inline-flex items-center gap-2">
              View Our Expert Faculty <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="section bg-grey-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Core Philosophy</span>
            <h2 className="heading mt-4">Why Parents Trust Kashyap Tutorial?</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-xl text-navy-800 font-bold">
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

      {/* Why trust us list */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Our Commitments</span>
              <h2 className="heading-sm mt-4">Quality Education with Full Accountability</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "Expert faculty led by Er. N. Jha Sir for Maths & subject specialists for Physics, Chemistry & Biology",
                  "Class 6 to 12 (CBSE & ICSE Boards), IIT-JEE, NEET (UG), CUET preparation",
                  "Home Tuitions (KG to 12th) with verified & experienced tutors",
                  "Small batch size for personal attention & doubt resolution",
                  "Weekly chapter tests and performance updates to parents",
                  "200+ 5-Star Google Reviews — trusted by parents & toppers",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-grey-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Reveal delay={120}>
              <div className="rounded-3xl border border-navy-900 bg-navy-900 p-8 text-white shadow-xl">
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-5 w-5 fill-amber-400" />
                  ))}
                </div>
                <p className="font-display text-xl font-bold text-white">
                  Message from Er. N. Jha Sir
                </p>
                <blockquote className="mt-4 text-grey-200 italic leading-relaxed text-base">
                  &ldquo;Our mission is simple: to make every student understand concepts so deeply that exam stress turns into genuine confidence. From basics to brilliance, we are with your child at every step.&rdquo;
                </blockquote>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-accent">Er. N. Jha Sir</p>
                    <p className="text-xs text-grey-400">Maths Faculty | Lead Mentor</p>
                  </div>
                  <span className="text-xs font-semibold text-grey-300 bg-white/10 px-3 py-1.5 rounded-lg">
                    Kashyap Tutorial, Alpha 1
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0 bg-white">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-r from-navy-950 to-navy-800 px-6 py-12 text-center text-white sm:px-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Experience Our Teaching Firsthand
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-grey-300">
              Book a Free Demo Class at Alpha 1, Greater Noida or request a Home Tutor today.
            </p>
            <Link href="/contact" className="btn-accent mt-6">
              Book Free Demo Class <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

