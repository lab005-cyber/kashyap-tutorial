import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

type LogoProps = {
  className?: string;
  showText?: boolean;
  /** color of the monogram mark text */
  variant?: "default" | "light";
};

/**
 * Official Kashyap Tutorial Logo: Circular 3D Emblem Badge with brand typography.
 */
export default function Logo({
  className = "",
  showText = true,
  variant = "default",
}: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-950";
  const subColor = variant === "light" ? "text-navy-600 font-bold" : "text-navy-600 font-semibold";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 py-1 ${className}`}
    >
      <span className="relative flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-sm">
        <Image
          src="/images/logo-original.webp"
          alt="Kashyap Tutorial Logo"
          width={48}
          height={48}
          priority
          className="h-full w-full rounded-full object-cover"
        />
      </span>
      {showText && (
        <span className="flex flex-col justify-center leading-tight">
          <span className={`font-display text-sm sm:text-base font-extrabold tracking-tight ${textColor}`}>
            KASHYAP TUTORIAL
          </span>
          <span className={`text-[10px] sm:text-[11px] tracking-wider uppercase ${subColor}`}>
            &amp; HOME TUITION
          </span>
        </span>
      )}
    </Link>
  );
}

