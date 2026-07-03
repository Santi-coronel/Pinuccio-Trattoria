import React from "react";
import { motion } from "motion/react";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { ImageWithFallback } from "./ImageWithFallback";
import { fadeInSlow, oliveOilEase } from "../lib/animations";

export const ManifestoSection: React.FC = () => {
  const { manifesto } = PINUCCIO_DATA;

  return (
    <section id="manifesto" className="py-24 border-b border-[#1C1A17]/15 relative bg-[#FAF8F2]">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[#5B6343] mb-12">
          <span className="w-8 h-[1px] bg-[#5B6343]" />
          <span>El Manifiesto de Pinuccio</span>
        </div>

        {/* Broken Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: High-impact Headline & Story Paragraphs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInSlow}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1A17] leading-[1.05] tracking-tight">
              {manifesto.headline}
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#1C1A17]/85 max-w-[55ch] font-sans leading-relaxed">
              {manifesto.bodyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-4xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#C24E2B] first-letter:font-bold">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Handcrafted Quote Box */}
            <div className="mt-10 p-8 border-l-2 border-[#C24E2B] bg-[#EFEAE0]/80 relative">
              <p className="font-serif italic text-xl sm:text-2xl text-[#1C1A17] leading-snug mb-4">
                "{manifesto.quote.text}"
              </p>
              <span className="font-mono text-xs tracking-widest uppercase text-[#5B6343] block">
                — {manifesto.quote.author}
              </span>
            </div>
          </motion.div>

          {/* Column Right: Overlapping Editorial Photography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: oliveOilEase }}
            className="lg:col-span-5 relative mt-6 lg:mt-12"
          >
            {/* Primary Overlapping Photo */}
            <div className="relative p-2 bg-[#EFEAE0] border border-[#1C1A17]/20 shadow-md">
              <ImageWithFallback
                src="/images/manifesto/masa.jpg"
                alt="Manos amasando la pasta en Pinuccio"
                aspectRatioClass="aspect-[4/5]"
                className="w-full h-full object-cover"
              />

              {/* Caption Tag */}
              <div className="mt-3 p-3 bg-[#1C1A17] text-[#F8F5EE] text-left">
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#C24E2B] block">
                  Cultura de la Masa
                </span>
                <span className="font-serif italic text-sm text-[#F8F5EE]/90 block mt-0.5">
                  Amasado diario a la vista en el Puesto 23 del Mercado de Belgrano.
                </span>
              </div>
            </div>

            {/* Accent Stamp Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[#C24E2B]/40 flex items-center justify-center p-2 text-center pointer-events-none hidden sm:flex">
              <span className="font-serif italic text-xs text-[#C24E2B] uppercase tracking-wider leading-tight">
                Farina & Uova 100%
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
