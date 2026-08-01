"use client";

import { useState } from "react";
import Link from "next/link";
import { offlineCities, onlineCoaching, siteConfig } from "@/config/site";
import type { TutorCity } from "@/config/site";
import Reveal from "@/components/Reveal";
import BrandIcon from "@/components/BrandIcon";
import {
  FiCheck,
  FiMapPin,
  FiMonitor,
  FiChevronRight,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";

/* ---- SVG network geometry ---- */
const HUB = { x: 225, y: 155 };
const NODE_POS: Record<string, { x: number; y: number }> = {
  Delhi: { x: 140, y: 105 },
  Ghaziabad: { x: 255, y: 112 },
  "Greater Noida": { x: 250, y: 200 },
  Gurgaon: { x: 108, y: 172 },
  Patna: { x: 340, y: 232 },
};

function nodePath(city: string) {
  const n = NODE_POS[city];
  const mx = (HUB.x + n.x) / 2;
  const my = (HUB.y + n.y) / 2;
  const dx = n.x - HUB.x;
  const dy = n.y - HUB.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const cx = mx - (dy / len) * 18;
  const cy = my + (dx / len) * 18;
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
      {selected && (
        <circle
          cx={n.x}
          cy={n.y}
          r={20}
          fill="none"
          stroke="#f0b429"
          strokeWidth={2}
          className="animate-ping"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      )}
      <circle
        cx={n.x}
        cy={n.y}
        r={16}
        className={`transition-all duration-200 ${
          selected ? "fill-accent" : "fill-navy-800 group-hover:fill-navy-600"
        }`}
      />
      <circle cx={n.x} cy={n.y} r={4.5} className={selected ? "fill-navy-900" : "fill-white"} />
      <text
        x={n.x}
        y={n.y + 34}
        textAnchor="middle"
        fontSize={12}
        className={`font-semibold ${selected ? "fill-navy-900" : "fill-grey-700"}`}
      >
        {city.name}
      </text>
      <text
        x={n.x}
        y={n.y + 48}
        textAnchor="middle"
        fontSize={10}
        className={selected ? "fill-accent-dark" : "fill-grey-400"}
      >
        {city.tutorCount} tutors
      </text>
    </g>
  );
}

export default function TutoringPresence() {
  const [selectedCity, setSelectedCity] = useState<string>(offlineCities[0].name);
  const [showOnline, setShowOnline] = useState(false);
  const city = offlineCities.find((c) => c.name === selectedCity)!;
  const c = siteConfig.contact;

  return (
    <section id="presence" className="section overflow-hidden">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Coaching &amp; Home Tuition</span>
          <h2 className="heading mt-4">
            Offline tutors in 5 cities.{" "}
            <span className="text-accent">Online classes worldwide.</span>
          </h2>
          <p className="mt-4 text-grey-600">
            Tap a city on the map to explore our offline coverage — or flip to Online and join
            live classes from anywhere on Earth.
          </p>
        </div>

        {/* Offline / Online toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full bg-grey-100 p-1">
            <button
              type="button"
              onClick={() => setShowOnline(false)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                !showOnline
                  ? "bg-navy-800 text-white shadow-sm"
                  : "text-grey-600 hover:text-navy-800"
              }`}
            >
              <FiMapPin className="h-4 w-4" /> Offline Tutors
            </button>
            <button
              type="button"
              onClick={() => setShowOnline(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                showOnline
                  ? "bg-navy-800 text-white shadow-sm"
                  : "text-grey-600 hover:text-navy-800"
              }`}
            >
              <FiMonitor className="h-4 w-4" /> Online Classes
            </button>
          </div>
        </div>

        {/* ============ OFFLINE VIEW ============ */}
        {!showOnline && (
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
            {/* Network map */}
            <Reveal>
              <div className="relative rounded-3xl border border-grey-200 bg-gradient-to-br from-navy-50 via-white to-grey-50 p-4 sm:p-6">
                <div className="flex items-center justify-between px-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-grey-500">
                    Coverage Network
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-[11px] font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    Live
                  </span>
                </div>
                <svg viewBox="0 0 460 300" className="mt-2 w-full" role="img" aria-label="Map of cities where Kashyap Tutorial offers offline home tuition">
                  {/* connecting lines */}
                  {offlineCities.map((c) => (
                    <path
                      key={c.name}
                      d={nodePath(c.name)}
                      fill="none"
                      stroke="#8da9d4"
                      strokeWidth={1.5}
                      strokeDasharray="5 5"
                      className={selectedCity === c.name ? "stroke-accent" : ""}
                    />
                  ))}
                  {/* hub */}
                  <g className="pointer-events-none">
                    <circle cx={HUB.x} cy={HUB.y} r={26} fill="#142339" opacity={0.08} />
                    <circle cx={HUB.x} cy={HUB.y} r={20} fill="#142339" />
                    <circle cx={HUB.x} cy={HUB.y} r={8} fill="#f0b429" />
                    <text x={HUB.x} y={HUB.y + 44} textAnchor="middle" fontSize={11} fontWeight={700} className="fill-navy-800">
                      Kashyap HQ
                    </text>
                    <text x={HUB.x} y={HUB.y + 58} textAnchor="middle" fontSize={10} className="fill-grey-500">
                      Greater Noida
                    </text>
                  </g>
                  {/* city nodes */}
                  {offlineCities.map((c) => (
                    <CityNode
                      key={c.name}
                      city={c}
                      selected={selectedCity === c.name}
                      onClick={() => setSelectedCity(c.name)}
                    />
                  ))}
                </svg>
                <p className="px-2 text-center text-[11px] text-grey-400">
                  Tap any city pin to see what's available there
                </p>
              </div>
            </Reveal>

            {/* City spotlight */}
            <Reveal delay={120}>
              <div key={selectedCity} className="animate-fade-up">
                <div className="rounded-3xl bg-navy-900 p-7 text-white sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent">
                      <FiMapPin className="h-3.5 w-3.5" /> {city.state}
                    </span>
                    <span className="text-xs text-grey-400">Since {city.since}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-extrabold">
                    {city.name}
                  </h3>
                  <p className="mt-1.5 text-grey-300">{city.tagline}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="flex items-center gap-1.5 font-display text-2xl font-bold text-accent">
                        <FiUsers className="h-5 w-5" /> {city.tutorCount}
                      </p>
                      <p className="mt-0.5 text-xs text-grey-400">Verified tutors</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="font-display text-2xl font-bold text-accent">
                        {city.areas.length * 4}+
                      </p>
                      <p className="mt-0.5 text-xs text-grey-400">Localities covered</p>
                    </div>
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-grey-400">
                    Popular areas
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {city.areas.map((area) => (
                      <span
                        key={area}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-medium text-grey-200"
                      >
                        <FiCheck className="h-3 w-3 text-accent" />
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href="/contact" className="btn-accent">
                      Get a {city.name} Tutor <FiChevronRight />
                    </Link>
                    <a
                      href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(`Hi! I need a home tutor in ${city.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn inline-flex bg-white/10 text-white backdrop-blur hover:bg-white/15"
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Quick chips of other cities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {offlineCities
                    .filter((c) => c.name !== selectedCity)
                    .map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedCity(c.name)}
                        className="rounded-full border border-grey-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-grey-600 transition-colors hover:border-navy-400 hover:text-navy-800"
                      >
                        {c.name}
                      </button>
                    ))}
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
              <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white sm:p-12">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-navy-500/30 blur-3xl" />
                <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-amber-400">
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
                    className="flex items-center gap-3 rounded-2xl border border-grey-200 bg-white p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 font-display text-lg font-extrabold text-accent-dark">
                      {s.value.split("+")[0]}
                      {s.value.includes("+") ? "+" : ""}
                    </span>
                    <div>
                      <p className="font-display font-bold text-navy-900">{s.value}</p>
                      <p className="text-xs text-grey-500">{s.label}</p>
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
