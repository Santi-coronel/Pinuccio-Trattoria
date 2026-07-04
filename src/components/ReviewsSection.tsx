import React from "react";
import { REVIEWS_DATA, ReviewItem } from "../content/reviews";
import { Star, Quote } from "lucide-react";
import { Reveal } from "./motionPrimitives";

const Stars: React.FC<{ n: number }> = ({ n }) => (
  <div className="flex items-center gap-0.5 text-terracotta" aria-label={`${n} de 5`}>
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-terracotta" />
    ))}
  </div>
);

const Meta: React.FC<{ rev: ReviewItem }> = ({ rev }) => (
  <div className="flex items-center justify-between gap-3 pt-5 mt-5 border-t border-ink/10">
    <div>
      <span className="font-sans font-semibold text-ink text-sm block">{rev.author}</span>
      <span className="eyebrow text-ink-faint block mt-0.5">{rev.role}</span>
    </div>
    <span className="eyebrow text-terracotta border border-terracotta/25 bg-terracotta/8 px-2.5 py-1 shrink-0">
      {rev.source}
    </span>
  </div>
);

export const ReviewsSection: React.FC = () => {
  const [lead, ...rest] = REVIEWS_DATA;

  return (
    <section className="relative bg-paper py-24 sm:py-28 border-t border-ink/10">
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="eyebrow rule-tick text-olive">Voces del mercado</span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-[-0.02em] mt-4 leading-[1.02]">
              Lo que dicen quienes
              <br className="hidden sm:block" /> nos visitan
            </h2>
          </div>
          <div className="flex items-center gap-3 text-ink-soft">
            <Stars n={5} />
            <span className="font-mono text-xs tracking-[0.14em] uppercase">
              5,0 · Google Maps
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Reseña destacada */}
          <Reveal className="lg:col-span-7">
            <figure className="relative h-full bg-cream border border-ink/12 p-8 sm:p-10 flex flex-col">
              <Quote className="w-9 h-9 text-terracotta/30 mb-5" />
              <Stars n={lead.rating} />
              <blockquote className="font-serif text-2xl sm:text-3xl italic text-ink leading-snug mt-5 mb-auto">
                “{lead.content}”
              </blockquote>
              <Meta rev={lead} />
            </figure>
          </Reveal>

          {/* Reseñas secundarias */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {rest.map((rev, idx) => (
              <Reveal key={rev.id} delay={0.1 + idx * 0.08} className="flex-1">
                <figure className="h-full bg-cream border border-ink/12 p-6 sm:p-7 flex flex-col hover:border-terracotta/40 transition-colors">
                  <Stars n={rev.rating} />
                  <blockquote className="font-serif text-lg italic text-ink/90 leading-relaxed mt-4 mb-auto">
                    “{rev.content}”
                  </blockquote>
                  <Meta rev={rev} />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
