import React from "react";
import { motion } from "motion/react";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { ImageWithFallback } from "./ImageWithFallback";
import { fadeInSlow, oliveOilEase } from "../lib/animations";
import { ArrowDownRight, MapPin, Clock, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden border-b border-[#1C1A17]/15">
      {/* Background Subtle Paper Texture */}
      <div className="absolute inset-0 paper-grain pointer-events-none z-10" />

      {/* Hero Visual Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto z-20">
        
        {/* Left Column: Massive Editorial Typography */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInSlow}
          className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6"
        >
          {/* Top Location Tag with Location Pin Emoji / Icon */}
          <div className="flex flex-wrap items-center gap-3 mb-6 font-mono text-xs tracking-widest uppercase text-[#5B6343]">
            <span className="flex items-center gap-1.5 bg-[#5B6343]/10 px-3 py-1 border border-[#5B6343]/20">
              <span className="text-sm">📍</span>
              <span className="text-[#1C1A17] font-semibold">Mercado de Belgrano</span>
            </span>
            <span className="hidden sm:inline text-[#1C1A17]/40">•</span>
            <span className="text-[#1C1A17]/70">Puesto 23 · Buenos Aires</span>
          </div>

          {/* Main Title - Massive Serif Display */}
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-bold leading-[0.92] tracking-tight text-[#1C1A17] mb-8">
            PASTA <span className="italic font-normal text-[#C24E2B]">FRESCA</span>.
            <br />
            MANI ITALIANE.
            <br />
            AL MERCADO.
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg text-[#1C1A17]/80 max-w-[55ch] font-sans font-normal leading-relaxed mb-10">
            {PINUCCIO_DATA.tagline}. Harina seleccionada, yemas de campo y cocción
            al instante en el corazón de Belgrano. Sin manteles. Con alma de trattoria.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-5 font-mono text-xs tracking-widest uppercase">
            <button
              onClick={onOpenReservation}
              className="bg-[#25D366] text-white px-8 py-4 hover:bg-[#1ebd59] transition-colors flex items-center gap-3 border border-[#25D366] group shadow-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Reservar por WhatsApp</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>

            <a
              href="#menu"
              className="px-6 py-4 border border-[#1C1A17]/30 text-[#1C1A17] hover:border-[#1C1A17] hover:bg-[#1C1A17]/5 transition-colors flex items-center gap-2"
            >
              <span>Ver La Carta del Día</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Hero Image with Subtle Steam Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: oliveOilEase, delay: 0.2 }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          {/* Framed Editorial Image */}
          <div className="relative p-3 bg-[#EFEAE0] border border-[#1C1A17]/20 shadow-lg">
            <ImageWithFallback
              src="/images/hero.jpg"
              alt="Pasta fresca recién amasada en Pinuccio"
              aspectRatioClass="aspect-[4/5]"
              className="w-full h-full object-cover grayscale-[10%] contrast-[105%]"
            />

            {/* Subtle Steam Simulation Animation Overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <div className="absolute bottom-0 left-1/4 w-32 h-64 bg-gradient-to-t from-white/40 via-white/10 to-transparent blur-xl animate-pulse" />
              <div className="absolute bottom-10 right-1/3 w-24 h-48 bg-gradient-to-t from-white/30 via-white/10 to-transparent blur-lg animate-pulse delay-700" />
            </div>

            {/* Print Stamp Corner Overlay */}
            <div className="absolute -bottom-4 -left-4 bg-[#1C1A17] text-[#F8F5EE] p-4 text-left border border-[#1C1A17] max-w-[200px] shadow-md hidden sm:block">
              <span className="font-serif italic text-lg text-[#C24E2B] block leading-none">Pinuccio</span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#F8F5EE]/70 block mt-1">
                Fatto a mano a vista
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Information Ticker Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 w-full pt-12 border-t border-[#1C1A17]/10 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-[#1C1A17]/70 z-20">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#C24E2B]" />
          <span>Juramento 2527, Puesto 23 (Mercado de Belgrano)</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-[#5B6343]" />
          <span>Almuerzo: 12:00 — 16:30 hs | Cena: 20:00 — 23:30 hs</span>
        </div>

        <a
          href={PINUCCIO_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#C24E2B] underline underline-offset-4 transition-colors"
        >
          Abrir en Google Maps ↗
        </a>
      </div>
    </section>
  );
};
