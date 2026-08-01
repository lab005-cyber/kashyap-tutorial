"use client";

import { FiPhone } from "react-icons/fi";
import { siteConfig } from "@/config/site";

export default function TopBar() {
  return (
    <div className="bg-[#050b16] border-b border-white/10 text-white text-xs py-2">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left Side: Admissions Announcement */}
        <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
          </span>
          <span className="text-sm">🎓</span>
          <p className="tracking-wide">
            <strong className="font-bold text-white">Admissions Open 2026-27:</strong>{" "}
            <span className="text-grey-300">
              Scholarship Test &amp; Free 3-Day Demo Classes in Alpha 1, Greater Noida!
            </span>
          </p>
        </div>

        {/* Right Side: Phone & Timing */}
        <div className="flex items-center justify-center gap-3 text-grey-300 text-[11px] sm:text-xs shrink-0">
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors font-semibold text-white"
          >
            <FiPhone className="h-3.5 w-3.5 text-amber-400" />
            <span>079032 44838</span>
          </a>
          <span className="text-white/20">|</span>
          <span className="inline-flex items-center gap-1.5 text-grey-300">
            <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
          </span>
        </div>
      </div>
    </div>
  );
}
