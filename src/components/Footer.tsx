import React from "react";
import { PINUCCIO_DATA, getWhatsAppReservationUrl } from "../content/pinuccio";
import { TextReveal } from "./motionPrimitives";
import { ArrowUpRight, Instagram, MessageCircle, Heart } from "lucide-react";

export const Footer: React.FC<{ onOpenReservation: () => void }> = ({ onOpenReservation }) => {
  const { openingHours, contact } = PINUCCIO_DATA;

  return (
    <footer className="relative bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-10">
        {/* CTA banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-paper/15 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow text-ochre">Te esperamos en el mercado</span>
            <TextReveal
              as="h2"
              text="Sentate en la barra. Pedí una jarra de vino. Disfrutá la pasta fresca."
              className="font-display text-3xl sm:text-5xl font-semibold text-paper leading-[1.05] tracking-[-0.01em] mt-4 max-w-[20ch]"
            />
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <button
              onClick={onOpenReservation}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-terracotta text-paper px-8 py-4 hover:bg-terracotta-dark transition-colors font-mono text-xs tracking-[0.18em] uppercase"
            >
              <MessageCircle className="w-4 h-4" />
              Reservar por WhatsApp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Detalles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-paper/15">
          <div className="space-y-3">
            <h3 className="eyebrow text-paper/50">Ubicación</h3>
            <p className="text-sm text-paper/90 leading-relaxed">
              {PINUCCIO_DATA.marketName}
              <br />
              {PINUCCIO_DATA.address}
              <br />
              {PINUCCIO_DATA.city}, {PINUCCIO_DATA.country}
            </p>
            <a
              href={PINUCCIO_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ochre hover:text-terracotta transition-colors eyebrow pt-1"
            >
              Ver mapa <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="space-y-3">
            <h3 className="eyebrow text-paper/50">Horarios</h3>
            <p className="text-sm text-paper/90 leading-relaxed">
              <span className="font-semibold">{openingHours.days}</span>
              <br />
              Almuerzo · {openingHours.lunch}
              <br />
              Cena · {openingHours.dinner}
            </p>
            <span className="text-xs text-paper/55 block leading-relaxed">{openingHours.notes}</span>
          </div>

          <div className="space-y-3">
            <h3 className="eyebrow text-paper/50">Contacto & redes</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={PINUCCIO_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-paper/90 hover:text-ochre transition-colors"
                >
                  <Instagram className="w-4 h-4 text-ochre" />
                  @pinucciobelgrano
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppReservationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-paper/90 hover:text-ochre transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-ochre" />
                  {contact.formattedPhone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="eyebrow text-paper/50">Filosofía</h3>
            <p className="font-serif italic text-base text-paper/75 leading-relaxed">
              “Pastificio artesanal de mercado. Harina pura, huevo de campo y la alegría
              de comer juntos.”
            </p>
          </div>
        </div>

        {/* Watermark */}
        <div className="pt-12 pb-4 text-center overflow-hidden">
          <span className="font-display font-semibold tracking-[-0.03em] leading-none text-[15vw] text-paper/[0.07] select-none block">
            PINUCCIO
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-paper/10 font-mono text-[11px] text-paper/55">
          <span>© {new Date().getFullYear()} Pinuccio Trattoria e Pastificio</span>
          <span className="inline-flex items-center gap-1.5">
            Fatto a mano con <Heart className="w-3 h-3 text-terracotta fill-terracotta" /> en el
            Mercado de Belgrano
          </span>
        </div>
      </div>
    </footer>
  );
};
