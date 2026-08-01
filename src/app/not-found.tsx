import Link from "next/link";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-navy-800 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-grey-600">
          Sorry, we couldn't find the page you were looking for. It may have moved or no
          longer exists.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-primary">
            <FiHome /> Back Home
          </Link>
          <Link href="/contact" className="btn-outline">
            <FiArrowLeft /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
