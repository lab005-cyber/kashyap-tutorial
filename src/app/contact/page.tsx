import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Kashyap Tutorial & Home Tuition to book a free demo class, enquire about courses, or arrange home tuition. Call, WhatsApp, or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const c = siteConfig.contact;
  const a = c.address;
  const mapQuery = encodeURIComponent(
    `${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pincode}`
  );

  const contactCards = [
    {
      icon: <FiPhone />,
      label: "Call Us",
      value: c.phone,
      href: `tel:${c.phoneHref}`,
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: c.phone,
      href: `https://wa.me/${c.whatsapp}`,
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: c.email,
      href: `mailto:${c.email}`,
    },
    {
      icon: <FiMapPin />,
      label: "Visit",
      value: `${a.city}, ${a.state}`,
      href: `https://maps.google.com/?q=${mapQuery}`,
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-accent">
            Get in Touch
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let's talk about your goals
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300">
            Book a free demo class, ask about courses, or arrange home tuition. We usually
            reply within a few hours.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="-mt-10">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card flex items-center gap-4 hover:-translate-y-1 hover:border-navy-200 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-lg text-navy-700">
                  {card.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-grey-500">
                    {card.label}
                  </p>
                  <p className="truncate text-sm font-semibold text-navy-900">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card">
                <h2 className="heading-sm">Send us a message</h2>
                <p className="mt-2 text-sm text-grey-600">
                  Fill in the form and we'll reach out to you shortly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="card">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Contact Details
                </h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-dark" />
                    <span className="text-grey-700">
                      {a.line1}, {a.line2}
                      <br />
                      {a.city}, {a.state} - {a.pincode}
                      <br />
                      {a.country}
                    </span>
                  </li>
                  <li>
                    <a
                      href={`tel:${c.phoneHref}`}
                      className="flex items-center gap-3 text-grey-700 hover:text-navy-800"
                    >
                      <FiPhone className="h-5 w-5 shrink-0 text-accent-dark" />
                      {c.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-3 text-grey-700 hover:text-navy-800"
                    >
                      <FiMail className="h-5 w-5 shrink-0 text-accent-dark" />
                      {c.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-6 border-t border-grey-100 pt-6">
                  <h4 className="flex items-center gap-2 font-semibold text-navy-900">
                    <FiClock className="text-accent-dark" /> Opening Hours
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {c.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-4 text-grey-600"
                      >
                        <span>{h.day}</span>
                        <span className="text-right font-medium text-grey-700">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-grey-200">
            <iframe
              title="Kashyap Tutorial location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
