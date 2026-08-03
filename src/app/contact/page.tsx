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
  FiStar,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us - Kashyap Tutorial & Home Tuition",
  description:
    "Contact Kashyap Tutorial at Alpha 1, Commercial Belt, Greater Noida. Call / WhatsApp 7903244838 to book a free demo class or arrange 1-on-1 Home Tuition.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const c = siteConfig.contact;
  const a = c.address;
  const mapQuery = encodeURIComponent(
    `Kashyap Tutorial, ${a.line1}, ${a.line2}, ${a.city}, ${a.state} ${a.pincode}`
  );

  const contactCards = [
    {
      icon: <FiPhone />,
      label: "Call Us Direct",
      value: c.phone,
      href: `tel:${c.phoneHref}`,
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp Chat",
      value: c.phone,
      href: `https://wa.me/${c.whatsapp}?text=${encodeURIComponent("Hello! I want to enquire about classes/home tuition.")}`,
    },
    {
      icon: <FiMapPin />,
      label: "Center Location",
      value: `${a.line1}, ${a.city}`,
      href: `https://maps.google.com/?q=${mapQuery}`,
    },
    {
      icon: <FiStar />,
      label: "Google Rating",
      value: "200+ 5-Star Reviews",
      href: "#",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-800 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="container-x relative text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-accent">
            Get in Touch
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Book Your <span className="text-accent">Free Demo Class</span> Today
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-grey-300 text-base sm:text-lg">
            Visit our center at <span className="text-white font-semibold">Alpha 1, Greater Noida</span> or request a 1-on-1 Home Tutor. Call / WhatsApp us directly at <span className="text-amber-300 font-bold">7903244838</span>.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="-mt-10 relative z-10">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card flex items-center gap-4 hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg transition-all"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy-50 text-xl text-navy-800">
                  {card.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-grey-500">
                    {card.label}
                  </p>
                  <p className="truncate text-sm font-bold text-navy-900 mt-0.5">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card shadow-md">
                <h2 className="heading-sm">Request Demo / Enquiry</h2>
                <p className="mt-2 text-sm text-grey-600">
                  Fill in the form below and Er. N. Jha Sir &amp; Team will connect with you shortly.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2">
              <div className="card shadow-md">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Main Coaching Center
                </h3>
                <ul className="mt-4 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span className="text-grey-700 font-medium leading-relaxed">
                      <strong className="text-navy-900 font-bold">Kashyap Tutorial</strong><br />
                      {a.line1}, {a.line2}<br />
                      {a.city}, {a.state} - {a.pincode}
                    </span>
                  </li>
                  <li>
                    <a
                      href={`tel:${c.phoneHref}`}
                      className="flex items-center gap-3 text-grey-700 hover:text-navy-900 font-medium"
                    >
                      <FiPhone className="h-5 w-5 shrink-0 text-amber-500" />
                      {c.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://wa.me/${c.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-grey-700 hover:text-navy-900 font-medium"
                    >
                      <FaWhatsapp className="h-5 w-5 shrink-0 text-emerald-600" />
                      {c.phone} (WhatsApp)
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex items-center gap-3 text-grey-700 hover:text-navy-900 font-medium"
                    >
                      <FiMail className="h-5 w-5 shrink-0 text-amber-500" />
                      {c.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-6 border-t border-grey-100 pt-6">
                  <h4 className="flex items-center gap-2 font-bold text-navy-900">
                    <FiClock className="text-amber-500" /> Working Hours
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {c.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-4 text-grey-600"
                      >
                        <span className="font-medium">{h.day}</span>
                        <span className="text-right font-bold text-navy-900">
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
          <div className="mt-12 overflow-hidden rounded-3xl border-2 border-grey-200 shadow-md">
            <iframe
              title="Kashyap Tutorial location in Alpha 1 Greater Noida"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="400"
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

