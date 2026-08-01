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
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-grey-300" : "text-grey-500";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full p-0.5 bg-gradient-to-tr from-accent via-blue-500 to-navy-800 shadow-md transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo-original.jpg"
          alt="Kashyap Tutorial Logo"
          width={44}
          height={44}
          priority
          className="h-full w-full rounded-full object-cover"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-tight">
          <span className={`font-display text-base font-extrabold tracking-tight ${textColor}`}>
            KASHYAP TUTORIAL
          </span>
          <span className={`text-[11px] font-semibold tracking-wide uppercase ${subColor}`}>
            &amp; Home Tuition
          </span>
        </span>
      )}
    </Link>
  );
}

