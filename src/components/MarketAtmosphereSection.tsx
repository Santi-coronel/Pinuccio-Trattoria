import React from "react";
import { motion } from "motion/react";
import { MARKET_DATA } from "../content/market";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { ImageWithFallback } from "./ImageWithFallback";
import { fadeInSlow, oliveOilEase } from "../lib/animations";
import { MapPin, ChefHat, Utensils, Wine, Store, ExternalLink } from "lucide-react";

export const MarketAtmosphereSection: React.FC = () => {
  return (
    <section id="mercado" className="py-24 border-b border-[#1C1A17]/15 bg-[#F8F5EE] relative">
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[#5B6343] mb-3">
            <span className="w-8 h-[1px] bg-[#5B6343]" />
            <span>La Vida de Mercado</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-[#1C1A17] tracking-tight leading-[1.05] mb-6">
            Pinuccio Vive en el Mercado de Belgrano
          </h2>
          <p className="text-base sm:text-lg text-[#1C1A17]/85 font-sans leading-relaxed max-w-[55ch]">
            {MARKET_DATA.historyDescription}
          </p>
        </div>

        {/* Feature Grid & Photos Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left: Atmosphere Highlights */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {MARKET_DATA.atmosphereFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: idx * 0.15, ease: oliveOilEase }}
                className="p-6 bg-[#FAF8F2] border border-[#1C1A17]/15 space-y-3"
              >
                <div className="w-10 h-10 bg-[#EFEAE0] border border-[#1C1A17]/20 flex items-center justify-center text-[#C24E2B]">
                  {idx === 0 && <ChefHat className="w-5 h-5" />}
                  {idx === 1 && <Utensils className="w-5 h-5" />}
                  {idx === 2 && <Wine className="w-5 h-5" />}
                  {idx === 3 && <Store className="w-5 h-5" />}
                </div>

                <h3 className="font-editorial text-2xl font-bold text-[#1C1A17]">
                  {feat.title}
                </h3>

                <p className="text-xs text-[#1C1A17]/80 font-sans leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Overlapping Photography */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <div className="p-2 bg-[#EFEAE0] border border-[#1C1A17]/20 shadow-md">
              <ImageWithFallback
                src="/images/gallery/mercado.jpg"
                alt="Ambiente en la barra de Pinuccio en Mercado de Belgrano"
                aspectRatioClass="aspect-[4/5]"
                className="w-full h-full object-cover"
              />
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#5B6343] block mt-2 text-center">
                Puesto 23 · Pasillo Central
              </span>
            </div>

            <div className="p-2 bg-[#EFEAE0] border border-[#1C1A17]/20 shadow-md mt-0 sm:mt-8">
              <ImageWithFallback
                src="/images/gallery/wine.jpg"
                alt="Vino en jarra y pasta fresca"
                aspectRatioClass="aspect-[4/5]"
                className="w-full h-full object-cover"
              />
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#5B6343] block mt-2 text-center">
                Vino en Jarra y Scarpetta
              </span>
            </div>
          </div>

        </div>

        {/* Mercado Location & Map Info Box */}
        <div className="p-8 sm:p-10 bg-[#EFEAE0] border border-[#1C1A17] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#C24E2B] mb-2">
              <MapPin className="w-4 h-4" />
              <span>Cómo Llegar a Pinuccio</span>
            </div>

            <h3 className="font-editorial text-3xl font-bold text-[#1C1A17] mb-2">
              Mercado de Belgrano · Juramento 2527
            </h3>

            <p className="text-sm text-[#1C1A17]/80 font-sans max-w-[50ch]">
              Entrada principal por Av. Juramento o Ciudad de la Paz. Pinuccio se encuentra en el Puesto 23 del pasillo central, frente a la panadería artesanal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto font-mono text-xs uppercase tracking-widest">
            <a
              href={PINUCCIO_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#1C1A17] text-[#F8F5EE] px-6 py-4 hover:bg-[#C24E2B] transition-colors flex items-center justify-center gap-2 border border-[#1C1A17]"
            >
              <span>Ver Ubicación en Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
