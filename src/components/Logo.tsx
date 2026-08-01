import Link from "next/link";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  showText?: boolean;
  /** color of the monogram mark stroke */
  variant?: "default" | "light";
};

/**
 * Minimalist logo: an open-book / "K" monogram inside a rounded navy tile.
 * Conveys knowledge + the brand initial. Uses brand palette only.
 */
export default function Logo({
  className = "",
  showText = true,
  variant = "default",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-grey-300" : "text-grey-500";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 48 48"
          className="h-7 w-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* open book base */}
          <path
            d="M24 13c-3-2.2-7-3-11-2.6-1 .1-1.7.9-1.7 1.9v16.2c0 1.1.9 2 2 1.9 3.4-.3 7 .4 10.7 2.7 3.7-2.3 7.3-3 10.7-2.7 1.1.1 2-.8 2-1.9V12.3c0-1-.7-1.8-1.7-1.9-4-.4-8 .4-11 2.6Z"
            fill="#ffffff"
            opacity="0.18"
          />
          {/* K monogram */}
          <path
            d="M19 14v20M19 24l8-10M19 24l8 10"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* graduation accent dot */}
          <circle cx="33" cy="15" r="2.4" fill="#f0b429" />
        </svg>
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`font-display text-base font-bold tracking-tight ${textColor}`}>
            Kashyap Tutorial
          </span>
          <span className={`text-[11px] font-medium tracking-wide ${subColor}`}>
            &amp; Home Tuition
          </span>
        </span>
      )}
    </Link>
  );
}
