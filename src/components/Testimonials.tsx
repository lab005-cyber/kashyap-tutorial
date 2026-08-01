import { testimonials } from "@/config/site";
import StarRating from "./StarRating";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="section bg-grey-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Testimonials</span>
          <h2 className="heading mt-4">Loved by Students &amp; Parents</h2>
          <p className="mt-4 text-grey-600">
            Real stories from the families who trusted us with their children's education.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="card h-full hover:-translate-y-1 hover:shadow-md">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-grey-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-grey-100 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-800 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                    <div className="text-xs text-grey-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
