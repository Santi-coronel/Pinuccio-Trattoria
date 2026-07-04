import React from "react";
import { motion } from "motion/react";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { ImageWithFallback } from "./ImageWithFallback";
import { oliveOilEase } from "../lib/animations";
import { ArrowDownRight, MapPin, Clock } from "lucide-react";

interface HeroSectionProps {
  onOpenReservation: () => void;
}

const HEADLINE_LINES = [
  { text: "Pasta fresca,", accent: false },
  { text: "mani italiane,", accent: false },
  { text: "al mercato.", accent: true },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-14 flex flex-col overflow-x-clip">
      <div className="absolute inset-0 paper-grain pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center flex-1 content-start lg:content-center z-20">
        {/* Columna editorial */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow con locación (sin emoji) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: oliveOilEase }}
            className="flex flex-wrap items-center gap-3 mb-7 eyebrow text-ink-faint"
          >
            <span className="inline-flex items-center gap-1.5 border border-olive/30 bg-olive/10 px-3 py-1">
              <MapPin className="w-3 h-3 text-olive" />
              <span className="text-ink">Mercado de Belgrano</span>
            </span>
            <span className="hidden sm:inline">Puesto 23 · Buenos Aires</span>
          </motion.div>

          {/* Titular Fraunces con reveal por línea */}
          <h1 className="font-display text-[3.25rem] leading-[0.94] sm:text-7xl lg:text-[5.4rem] font-semibold tracking-[-0.02em] text-ink mb-8">
            {HEADLINE_LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="inline-block will-change-transform"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: oliveOilEase, delay: 0.15 + i * 0.12 }}
                >
                  {line.accent ? (
                    <span className="italic font-normal text-terracotta">{line.text}</span>
                  ) : (
                    line.text
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="text-base sm:text-lg text-ink-soft max-w-[52ch] leading-relaxed mb-10"
          >
            {PINUCCIO_DATA.tagline}. Harina seleccionada, yemas de campo y cocción
            al instante en el corazón de Belgrano. Sin manteles, con alma de trattoria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: oliveOilEase }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              onClick={onOpenReservation}
              className="group inline-flex items-center gap-3 bg-terracotta text-paper px-8 py-4 font-mono text-xs tracking-[0.18em] uppercase hover:bg-terracotta-dark transition-colors"
            >
              <span>Reservar por WhatsApp</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#menu"
              className="font-mono text-xs tracking-[0.18em] uppercase text-ink border-b border-ink/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors"
            >
              Ver la carta del día
            </a>
          </motion.div>
        </div>

        {/* Foto protagonista */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.3, ease: oliveOilEase, delay: 0.25 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            <ImageWithFallback
              src="/images/hero.webp"
              alt="Pasta fresca recién amasada humeando en Pinuccio"
              aspectRatioClass="aspect-[4/5]"
              className="w-full shadow-[0_30px_60px_-24px_rgba(33,30,26,0.45)]"
              loading="eager"
            />

            {/* Vapor sutil */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
              <div className="absolute bottom-0 left-1/4 w-32 h-64 bg-gradient-to-t from-white/50 via-white/10 to-transparent blur-2xl animate-pulse" />
              <div className="absolute bottom-8 right-1/3 w-24 h-52 bg-gradient-to-t from-white/40 via-white/10 to-transparent blur-xl animate-pulse [animation-delay:0.8s]" />
            </div>

            {/* Placa impresa */}
            <div className="absolute -bottom-5 -left-5 bg-ink text-paper px-5 py-4 max-w-[210px] hidden sm:block shadow-lg">
              <span className="font-display italic text-lg text-terracotta block leading-none">
                Fatto a mano
              </span>
              <span className="eyebrow block mt-1.5 text-paper/70">
                Amasado a la vista, cada día
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker de información */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-10 mt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-5 font-mono text-[11px] text-ink-faint z-20">
        <span className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-terracotta" />
          Juramento 2527, Puesto 23 — Mercado de Belgrano
        </span>
        <span className="hidden md:flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-olive" />
          Almuerzo 12:00–16:30 · Cena 20:00–23:30
        </span>
        <a
          href={PINUCCIO_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase tracking-[0.14em] border-b border-ink/20 pb-0.5 hover:text-terracotta hover:border-terracotta transition-colors"
        >
          Abrir en Google Maps ↗
        </a>
      </div>
    </section>
  );
};
