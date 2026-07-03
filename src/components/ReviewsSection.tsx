import React from "react";
import { motion } from "motion/react";
import { REVIEWS_DATA } from "../content/reviews";
import { Star, Quote, MessageSquare } from "lucide-react";
import { oliveOilEase } from "../lib/animations";

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#1C1A17]/15 bg-[#FAF8F2] relative">
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#5B6343] mb-3">
            <Quote className="w-3.5 h-3.5 text-[#C24E2B]" />
            <span>Voces del Mercado</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-[#1C1A17] tracking-tight">
            Lo Que Dicen Quienes Nos Visitan
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: idx * 0.2, ease: oliveOilEase }}
              className="p-8 bg-[#F8F5EE] border border-[#1C1A17]/15 flex flex-col justify-between shadow-sm hover:border-[#C24E2B]/40 transition-colors"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#C24E2B] mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C24E2B]" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="font-serif italic text-lg text-[#1C1A17]/90 leading-relaxed mb-6">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#1C1A17]/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="font-semibold text-[#1C1A17] block font-sans">
                    {rev.author}
                  </span>
                  <span className="text-[10px] text-[#5B6343] block mt-0.5">
                    {rev.role}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#C24E2B] bg-[#C24E2B]/10 px-2.5 py-1 border border-[#C24E2B]/20">
                  {rev.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
