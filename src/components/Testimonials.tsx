"use client";

import { useEffect, useState, useRef } from "react";
import { testimonials } from "@/config/site";
import StarRating from "./StarRating";
import Reveal from "./Reveal";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per view: 1 on mobile, 2 on tablet, 3 on desktop
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  // Touch Swipe Handlers for Mobile & Tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext(); // swipe left
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev(); // swipe right
    }
  };

  return (
    <section className="section bg-gradient-to-b from-grey-50 via-white to-navy-50/40 overflow-hidden">
      <div className="container-x">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-navy-900 border border-amber-400/40">
              <FiStar className="fill-amber-400 text-amber-500" /> 200+ 5-Star Google Reviews
            </div>
            <h2 className="heading mt-3">Loved by Students &amp; Parents</h2>
            <p className="mt-2 text-grey-600">
              Real stories from the families who trusted us with their children&apos;s education.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-300 bg-white text-navy-900 shadow-sm transition-all hover:bg-navy-900 hover:text-white hover:border-navy-900"
            >
              <FiChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-grey-300 bg-white text-navy-900 shadow-sm transition-all hover:bg-navy-900 hover:text-white hover:border-navy-900"
            >
              <FiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Container */}
        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageTestimonials = testimonials.slice(
                pageIdx * itemsPerPage,
                (pageIdx + 1) * itemsPerPage
              );

              return (
                <div
                  key={pageIdx}
                  className="grid w-full shrink-0 gap-6 px-1"
                  style={{
                    gridTemplateColumns: `repeat(${itemsPerPage}, minmax(0, 1fr))`,
                  }}
                >
                  {pageTestimonials.map((t) => (
                    <figure
                      key={t.name}
                      className="card flex h-full flex-col justify-between hover:-translate-y-1.5 hover:border-navy-300 hover:shadow-xl transition-all duration-300 bg-white border border-grey-200"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <StarRating rating={t.rating} />
                          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                            Verified Review
                          </span>
                        </div>
                        <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-grey-700 font-medium italic">
                          &ldquo;{t.quote}&rdquo;
                        </blockquote>
                      </div>

                      <figcaption className="mt-6 flex items-center gap-3 border-t border-grey-100 pt-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-accent shadow-sm">
                          {t.name.charAt(0)}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-navy-900">
                            {t.name}
                          </div>
                          <div className="text-xs font-semibold text-grey-500">
                            {t.role}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-8 bg-accent-dark"
                  : "w-2.5 bg-grey-300 hover:bg-grey-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
