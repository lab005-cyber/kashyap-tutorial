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
  const subColor = variant === "light" ? "text-grey-300" : "text-navy-600 font-semibold";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`group inline-flex items-center gap-2.5 sm:gap-3 ${className}`}
    >
      <span className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full overflow-hidden shadow-md ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-105">
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
        <span className="flex flex-col justify-center leading-[1.15]">
          <span className={`font-display text-base sm:text-[17px] font-black tracking-tight ${textColor}`}>
            Kashyap Tutorial
          </span>
          <span className={`font-display text-[10px] sm:text-[11px] font-bold tracking-wide ${subColor}`}>
            &amp; Home Tuition
          </span>
        </span>
      )}
    </Link>
  );
}

