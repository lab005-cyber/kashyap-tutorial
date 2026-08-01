"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Logo from "./Logo";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => {
    if (href.includes("#")) {
      return pathname === "/" && typeof window !== "undefined" && window.location.hash === href.split("/")[1];
    }
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-grey-200 bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between lg:h-20"
        aria-label="Main navigation"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-colors xl:px-3.5 xl:text-sm ${
                  isActive(item.href)
                    ? "bg-navy-50 text-navy-900"
                    : "text-grey-600 hover:bg-grey-100 hover:text-navy-800"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="hidden items-center gap-2 text-sm font-semibold text-navy-800 hover:text-navy-900 xl:inline-flex"
          >
            <FiPhone className="h-4 w-4" />
            {siteConfig.contact.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Book Free Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 hover:bg-grey-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? "block" : "hidden"
        } border-t border-grey-200 bg-white`}
      >
        <div className="container-x space-y-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-3 text-base font-medium ${
                isActive(item.href)
                  ? "bg-navy-50 text-navy-900"
                  : "text-grey-700 hover:bg-grey-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-3">
            <a href={`tel:${siteConfig.contact.phoneHref}`} className="btn-outline">
              <FiPhone /> Call
            </a>
            <Link href="/contact" className="btn-primary">
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
