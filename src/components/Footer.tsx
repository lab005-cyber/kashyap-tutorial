import Link from "next/link";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const c = siteConfig.contact;
  const s = siteConfig.social;
  const addr = c.address;

  return (
    <footer className="bg-navy-900 text-grey-300">
      {/* CTA strip */}
      <div className="border-b border-navy-800">
        <div className="container-x flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to unlock your child's potential?
            </h2>
            <p className="mt-2 text-grey-400">
              Book a free demo class today and experience the difference.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn-accent">
              Book Free Demo
            </Link>
            <a
              href={`https://wa.me/${c.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex bg-white text-navy-900 hover:bg-grey-100"
            >
              <FaWhatsapp className="h-5 w-5 text-green-600" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm leading-relaxed text-grey-400">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {s.facebook && (
              <SocialIcon href={s.facebook} label="Facebook">
                <FiFacebook />
              </SocialIcon>
            )}
            {s.instagram && (
              <SocialIcon href={s.instagram} label="Instagram">
                <FiInstagram />
              </SocialIcon>
            )}
            {s.youtube && (
              <SocialIcon href={s.youtube} label="YouTube">
                <FiYoutube />
              </SocialIcon>
            )}
            {s.linkedin && (
              <SocialIcon href={s.linkedin} label="LinkedIn">
                <FiLinkedin />
              </SocialIcon>
            )}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-grey-400 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Popular Courses
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/courses" className="text-grey-400 hover:text-accent">
                Class 9 &amp; 10 Boards
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-grey-400 hover:text-accent">
                Class 11 &amp; 12 PCM (Maths)
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-grey-400 hover:text-accent">
                Class 11 &amp; 12 PCB (Biology / NEET)
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-grey-400 hover:text-accent">
                Home Tuition (1-on-1)
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-grey-400 hover:text-accent">
                IIT-JEE / NEET / CUET
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-grey-400">
                {addr.line1}, {addr.line2}, {addr.city}, {addr.state} - {addr.pincode}
              </span>
            </li>
            <li>
              <a
                href={`tel:${c.phoneHref}`}
                className="flex items-center gap-3 text-grey-400 hover:text-accent"
              >
                <FiPhone className="h-5 w-5 shrink-0 text-accent" />
                {c.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-3 text-grey-400 hover:text-accent"
              >
                <FiMail className="h-5 w-5 shrink-0 text-accent" />
                {c.email}
              </a>
            </li>
            <li className="flex gap-3">
              <FiClock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-grey-400">
                Mon - Sun: 9:00 AM - 10:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-grey-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Designed for student success. Made with care in {addr.city}, {addr.state}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-grey-300 transition-all hover:bg-accent hover:text-navy-900"
    >
      {children}
    </a>
  );
}
