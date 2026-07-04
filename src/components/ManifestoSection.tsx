import React from "react";
import { motion } from "motion/react";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { ImageWithFallback } from "./ImageWithFallback";
import { Reveal, TextReveal, AnimatedCounter } from "./motionPrimitives";
import { oliveOilEase } from "../lib/animations";

const STATS: { value: number; suffix: string; label: string; plain?: boolean }[] = [
  { value: 1889, suffix: "", label: "El mercado, desde", plain: true },
  { value: 8, suffix: "hs", label: "Braceado del ragù" },
  { value: 24, suffix: "meses", label: "Curado del Parmigiano" },
  { value: 100, suffix: "%", label: "Pasta hecha a mano" },
];

export const ManifestoSection: React.FC = () => {
  const { manifesto } = PINUCCIO_DATA;

  return (
    <section id="manifesto" className="relative bg-paper-2 py-24 sm:py-28 border-t border-ink/10">
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <span className="eyebrow rule-tick text-olive">El manifiesto de Pinuccio</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          {/* Historia */}
          <div className="lg:col-span-7">
            <TextReveal
              as="h2"
              text={manifesto.headline}
              className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-semibold text-ink leading-[1.04] tracking-[-0.02em] max-w-[18ch]"
            />

            <div className="space-y-6 text-base sm:text-lg text-ink-soft leading-relaxed max-w-[58ch] mt-8">
              {manifesto.bodyParagraphs.map((paragraph, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <p
                    className={
                      idx === 0
                        ? "first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-terracotta first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:mt-1"
                        : ""
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Imagen del amasado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: oliveOilEase }}
            className="lg:col-span-5 relative lg:mt-4"
          >
            <ImageWithFallback
              src={PINUCCIO_DATA.images.manifesto}
              alt="Manos amasando la pasta fresca en Pinuccio"
              aspectRatioClass="aspect-[4/5]"
              className="shadow-[0_28px_56px_-30px_rgba(33,30,26,0.5)]"
              imgClassName="hover:scale-[1.03] transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
              loading="lazy"
            />
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <span className="eyebrow text-olive">Cultura de la masa</span>
              <span className="font-serif italic text-sm text-ink-soft text-right max-w-[26ch]">
                Amasado diario a la vista, en el Puesto 23.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pull-quote */}
        <Reveal className="max-w-4xl mx-auto text-center mt-20 sm:mt-24">
          <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug">
            “{manifesto.quote.text}”
          </p>
          <span className="eyebrow text-terracotta block mt-6">— {manifesto.quote.author}</span>
        </Reveal>

        {/* Franja de datos con contadores */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 mt-20 sm:mt-24 border-t border-ink/12 pt-12">
          {STATS.map((stat, idx) => (
            <Reveal
              key={idx}
              delay={idx * 0.08}
              className={`text-center px-4 ${idx < STATS.length - 1 ? "lg:border-r border-ink/12" : ""}`}
            >
              <span className="font-display text-4xl sm:text-5xl font-semibold text-ink tabular-nums inline-flex items-baseline gap-1">
                <AnimatedCounter
                  value={stat.value}
                  format={
                    stat.plain
                      ? (v) => Math.round(v).toString()
                      : undefined
                  }
                />
                {stat.suffix && (
                  <span className="text-2xl sm:text-3xl text-terracotta">{stat.suffix}</span>
                )}
              </span>
              <span className="eyebrow block text-ink-faint mt-3">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
