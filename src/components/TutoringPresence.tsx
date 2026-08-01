"use client";

import { useState } from "react";
import Link from "next/link";
import { offlineCities, onlineCoaching, siteConfig } from "@/config/site";
import type { TutorCity } from "@/config/site";
import Reveal from "@/components/Reveal";
import BrandIcon from "@/components/BrandIcon";
import CountUp from "@/components/CountUp";
import {
  FiCheck,
  FiMapPin,
  FiMonitor,
  FiChevronRight,
  FiClock,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import { FaGlobe, FaWhatsapp } from "react-icons/fa";

/* ---- SVG network geometry (460×310 viewBox) ---- */
const HUB = { x: 230, y: 165 };
const NODE_POS: Record<string, { x: number; y: number }> = {
  Delhi: { x: 108, y: 100 },
  Ghaziabad: { x: 268, y: 90 },
  "Greater Noida": { x: 260, y: 200 },
  Gurgaon: { x: 85, y: 185 },
  Patna: { x: 365, y: 228 },
};

const CITY_COLORS: Record<string, { fill: string; glow: string }> = {
  Delhi: { fill: "#6366f1", glow: "rgba(99,102,241,0.5)" },
  Ghaziabad: { fill: "#10b981", glow: "rgba(16,185,129,0.5)" },
  "Greater Noida": { fill: "#a855f7", glow: "rgba(168,85,247,0.5)" },
  Gurgaon: { fill: "#f59e0b", glow: "rgba(245,158,11,0.5)" },
  Patna: { fill: "#ef4444", glow: "rgba(239,68,68,0.5)" },
};

function nodePath(city: string) {
  const n = NODE_POS[city];
  const mx = (HUB.x + n.x) / 2;
  const my = (HUB.y + n.y) / 2;
  const dx = n.x - HUB.x;
  const dy = n.y - HUB.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const cx = mx - (dy / len) * 22;
  const cy = my + (dx / len) * 22;
  return `M ${HUB.x} ${HUB.y} Q ${cx} ${cy} ${n.x} ${n.y}`;
}

function CityNode({
  city,
  selected,
  onClick,
}: {
  city: TutorCity;
  selected: boolean;
  onClick: () => void;
}) {
  const n = NODE_POS[city.name];
  const color = CITY_COLORS[city.name] || { fill: "#8da9d4", glow: "rgba(141,169,212,0.4)" };

  return (
    <g
      onClick={onClick}
      className="group cursor-pointer"
      role="button"
      aria-label={city.name}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      {/* Outer glow ring when selected */}
      {selected && (
        <>
          <circle
            cx={n.x}
            cy={n.y}
            r={28}
            fill={color.glow}
            className="animate-ping"
            style={{ transformBox: "fill-box", transformOrigin: "center", animationDuration: "2s" }}
          />
          <circle cx={n.x} cy={n.y} r={22} fill={color.glow} opacity={0.4} />
        </>
      )}
      {/* Node circle */}
      <circle
        cx={n.x}
        cy={n.y}
        r={selected ? 16 : 13}
        fill={selected ? color.fill : "#1e3a5f"}
        stroke={selected ? color.fill : "#3b82f6"}
        strokeWidth={selected ? 0 : 1.5}
        strokeOpacity={0.4}
        style={{ transition: "all 0.3s ease" }}
      />
      {/* Inner dot */}
      <circle
        cx={n.x}
        cy={n.y}
        r={selected ? 5.5 : 4}
        fill={selected ? "#fff" : "#93c5fd"}
        style={{ transition: "all 0.3s ease" }}
      />
      {/* City name */}
      <text
        x={n.x}
        y={n.y + 32}
        textAnchor="middle"
        fontSize={11}
        fontWeight={selected ? 700 : 600}
        fill={selected ? color.fill : "#94a3b8"}
        style={{ transition: "fill 0.3s ease" }}
      >
        {city.name}
      </text>
      {/* Tutor count */}
      <text
        x={n.x}
        y={n.y + 45}
        textAnchor="middle"
        fontSize={9.5}
        fill={selected ? "#fbbf24" : "#64748b"}
        style={{ transition: "fill 0.3s ease" }}
      >
        {city.tutorCount} tutors
      </text>
    </g>
  );
}

const CITY_BADGE_COLORS: Record<string, string> = {
  Delhi: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
  Ghaziabad: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  "Greater Noida": "bg-purple-500/20 text-purple-300 border-purple-400/30",
  Gurgaon: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  Patna: "bg-red-500/20 text-red-300 border-red-400/30",
};

export default function TutoringPresence() {
  const [selectedCity, setSelectedCity] = useState<string>(offlineCities[0].name);
  const [showOnline, setShowOnline] = useState(false);
  const city = offlineCities.find((c) => c.name === selectedCity)!;
  const c = siteConfig.contact;
  const cityColor = CITY_COLORS[selectedCity] || CITY_COLORS["Delhi"];

  return (
    <section id="presence" className="section overflow-hidden bg-grey-50/40">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Coaching &amp; Home Tuition</span>
          <h2 className="heading mt-4">
            Offline tutors in 5 cities.{" "}
            <span className="text-accent">Online classes worldwide.</span>
          </h2>
          <p className="mt-4 text-grey-600">
            Tap a city pin to explore our offline coverage — or flip to Online to join
            live classes from anywhere on Earth.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-2xl border border-grey-200 bg-white p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setShowOnline(false)}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                !showOnline
                  ? "bg-navy-900 text-white shadow-md"
                  : "text-grey-600 hover:text-navy-800"
              }`}
            >
              <FiMapPin className="h-4 w-4" /> Offline Tutors
            </button>
            <button
              type="button"
              onClick={() => setShowOnline(true)}
              className={`flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                showOnline
                  ? "bg-navy-900 text-white shadow-md"
                  : "text-grey-600 hover:text-navy-800"
              }`}
            >
              <FiMonitor className="h-4 w-4" /> Online Classes
            </button>
          </div>
        </div>

        {/* ============ OFFLINE VIEW ============ */}
        {!showOnline && (
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-5">
            {/* === NETWORK MAP === */}
            <Reveal className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 p-5 shadow-2xl">
                {/* Background ambient glows */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />
                </div>
                {/* Subtle dot grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Header bar */}
                <div className="relative flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Coverage Network
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                {/* SVG Map */}
                <svg
                  viewBox="0 0 460 310"
                  className="relative mt-3 w-full"
                  role="img"
                  aria-label="Map of cities where Kashyap Tutorial offers home tuition"
                >
                  {/* SVG defs for gradients */}
                  <defs>
                    {offlineCities.map((oc) => {
                      const col = CITY_COLORS[oc.name] || CITY_COLORS["Delhi"];
                      return (
                        <linearGradient
                          key={oc.name}
                          id={`line-grad-${oc.name.replace(/\s/g, "")}`}
                          gradientUnits="userSpaceOnUse"
                          x1={HUB.x}
                          y1={HUB.y}
                          x2={NODE_POS[oc.name].x}
                          y2={NODE_POS[oc.name].y}
                        >
                          <stop offset="0%" stopColor="#f0b429" stopOpacity="0.7" />
                          <stop offset="100%" stopColor={col.fill} stopOpacity="0.7" />
                        </linearGradient>
                      );
                    })}
                    <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f0b429" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#f0b429" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Connecting lines */}
                  {offlineCities.map((oc) => (
                    <path
                      key={oc.name}
                      d={nodePath(oc.name)}
                      fill="none"
                      stroke={
                        selectedCity === oc.name
                          ? `url(#line-grad-${oc.name.replace(/\s/g, "")})`
                          : "#334155"
                      }
                      strokeWidth={selectedCity === oc.name ? 2 : 1}
                      strokeDasharray={selectedCity === oc.name ? "none" : "5 5"}
                      strokeOpacity={selectedCity === oc.name ? 1 : 0.5}
                      style={{ transition: "all 0.4s ease" }}
                    />
                  ))}

                  {/* HUB: Greater Noida HQ */}
                  <g className="pointer-events-none">
                    <circle cx={HUB.x} cy={HUB.y} r={48} fill="url(#hub-glow)" />
                    <circle cx={HUB.x} cy={HUB.y} r={32} fill="#0d1826" stroke="#f0b429" strokeWidth={1.5} strokeOpacity={0.4} />
                    <circle cx={HUB.x} cy={HUB.y} r={22} fill="#142339" />
                    <circle cx={HUB.x} cy={HUB.y} r={10} fill="#f0b429" />
                    <circle cx={HUB.x} cy={HUB.y} r={4} fill="#0d1826" />
                    <text x={HUB.x} y={HUB.y + 52} textAnchor="middle" fontSize={11} fontWeight={700} fill="#f0b429">
                      Kashyap HQ
                    </text>
                    <text x={HUB.x} y={HUB.y + 65} textAnchor="middle" fontSize={9.5} fill="#64748b">
                      Alpha 1, Greater Noida
                    </text>
                  </g>

                  {/* City nodes */}
                  {offlineCities.map((oc) => (
                    <CityNode
                      key={oc.name}
                      city={oc}
                      selected={selectedCity === oc.name}
                      onClick={() => setSelectedCity(oc.name)}
                    />
                  ))}
                </svg>

                <p className="relative px-2 text-center text-[11px] text-slate-500">
                  Tap any city pin to explore tutor availability
                </p>

                {/* City Quick Select Pills */}
                <div className="relative mt-4 flex flex-wrap justify-center gap-2 border-t border-white/5 pt-4">
                  {offlineCities.map((oc) => {
                    const col = CITY_COLORS[oc.name] || CITY_COLORS["Delhi"];
                    const isActive = selectedCity === oc.name;
                    return (
                      <button
                        key={oc.name}
                        type="button"
                        onClick={() => setSelectedCity(oc.name)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 border ${
                          isActive
                            ? "border-white/20 text-white shadow-sm"
                            : "border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200"
                        }`}
                        style={
                          isActive
                            ? { backgroundColor: col.fill + "33", borderColor: col.fill + "66" }
                            : {}
                        }
                      >
                        {oc.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* === CITY SPOTLIGHT === */}
            <Reveal delay={100} className="lg:col-span-2">
              <div
                key={selectedCity}
                className="animate-fade-up overflow-hidden rounded-3xl border border-white/5 shadow-xl"
                style={{
                  background: `linear-gradient(135deg, #0d1826 0%, #142339 60%, ${cityColor.fill}22 100%)`,
                }}
              >
                {/* Top accent stripe */}
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(to right, ${cityColor.fill}, #f0b429)` }}
                />

                <div className="p-6 text-white">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${CITY_BADGE_COLORS[city.name] || "bg-white/10 text-white border-white/20"}`}
                    >
                      <FiMapPin className="h-3 w-3" /> {city.state}
                    </span>
                    <span className="text-xs text-slate-500">Since {city.since}</span>
                  </div>

                  {/* City name */}
                  <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight">
                    {city.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{city.tagline}</p>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div
                      className="rounded-2xl border p-4 text-center"
                      style={{ backgroundColor: cityColor.fill + "18", borderColor: cityColor.fill + "40" }}
                    >
                      <p className="font-display text-3xl font-extrabold" style={{ color: cityColor.fill }}>
                        {city.tutorCount}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">Verified Tutors</p>
                    </div>
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                      <p className="font-display text-3xl font-extrabold text-amber-400">
                        {city.areas.length * 4}+
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">Areas Covered</p>
                    </div>
                  </div>

                  {/* Areas */}
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Popular Areas
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {city.areas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                      >
                        <FiCheck className="h-3 w-3 flex-shrink-0 text-amber-400" />
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="mt-6 flex flex-col gap-2.5">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-sm font-bold text-navy-950 shadow-lg shadow-amber-500/20 transition-all hover:shadow-amber-500/30 hover:scale-[1.01]"
                    >
                      <FiZap className="h-4 w-4" />
                      Get a {city.name} Tutor
                    </Link>
                    <a
                      href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(
                        `Hi! I need a home tutor in ${city.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                    >
                      <FaWhatsapp className="h-4 w-4 text-emerald-400" />
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* ============ ONLINE VIEW ============ */}
        {showOnline && (
          <div className="mt-10">
            {/* Hero banner */}
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 p-8 text-white shadow-2xl sm:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/20">
                    <FaGlobe className="h-10 w-10 text-accent" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                      {onlineCoaching.tagline}
                    </h3>
                    <p className="mt-2 max-w-xl text-grey-300">
                      {onlineCoaching.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Online stats */}
            <Reveal delay={80}>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {onlineCoaching.stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-3.5 rounded-2xl border border-grey-200 bg-white p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span className="inline-flex min-w-[60px] px-3.5 py-2 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 font-display text-base sm:text-lg font-extrabold text-navy-950 border border-amber-400/40 whitespace-nowrap">
                      {s.num ? (
                        <CountUp end={s.num} suffix={s.suffix || ""} decimals={s.decimals || 0} />
                      ) : (
                        s.value
                      )}
                    </span>
                    <div>
                      <p className="font-display font-bold text-navy-900 text-base">{s.value}</p>
                      <p className="text-xs font-medium text-grey-600">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Time slots */}
            <Reveal delay={140}>
              <div className="mt-8">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="flex items-center gap-2 font-display text-lg font-bold text-navy-900">
                    <FiClock className="text-accent" /> Popular batch timings
                  </h4>
                  <span className="text-xs text-grey-500">
                    All timings IST — we adapt to your local timezone
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {onlineCoaching.slots.map((s) => (
                    <div
                      key={s.time}
                      className="rounded-2xl border border-grey-200 bg-white p-4 text-center transition-all hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-md"
                    >
                      <p className="font-display text-xl font-extrabold text-navy-900">
                        {s.time}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-accent-dark">{s.label}</p>
                      <p className="mt-0.5 text-[11px] text-grey-400">{s.zone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Feature grid */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {onlineCoaching.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <div className="card group h-full hover:-translate-y-1 hover:border-navy-200 hover:shadow-md">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 border border-navy-100/60 shadow-xs transition-transform group-hover:scale-110">
                      <BrandIcon name={f.icon} className="h-6 w-6 text-navy-800" />
                    </span>
                    <h4 className="mt-4 font-display text-lg font-bold text-navy-900">
                      {f.title}
                    </h4>
                    <p className="mt-2 text-sm text-grey-600">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Switch back */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary">
                <FaGlobe /> Enrol for Online Classes
              </Link>
              <button type="button" onClick={() => setShowOnline(false)} className="btn-outline">
                <FiMapPin /> See Offline Locations Instead
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
