import React from "react";
import { PINUCCIO_DATA, getWhatsAppReservationUrl } from "../content/pinuccio";
import { ArrowUpRight, Instagram, MessageCircle, Heart } from "lucide-react";

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer className="bg-[#1C1A17] text-[#F8F5EE] pt-20 pb-12 border-t border-[#1C1A17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Top Invitation Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F8F5EE]/15 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs tracking-widest uppercase text-[#C24E2B] block font-semibold">
              Te Esperamos en el Mercado
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-[#F8F5EE] leading-tight tracking-tight">
              Sentate en la barra. Pedí una jarra de vino. Disfrutá de la pasta fresca.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center font-mono text-xs uppercase tracking-widest">
            <button
              onClick={onOpenReservation}
              className="bg-[#25D366] text-white px-8 py-4 hover:bg-[#1ebd59] transition-colors flex items-center gap-3 shadow-md w-full sm:w-auto justify-center font-bold border border-[#25D366]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Reservar por WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Links & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-16 border-b border-[#F8F5EE]/15 text-xs font-sans">
          
          {/* Col 1: Location */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#5B6343] font-semibold">
              Ubicación
            </h3>
            <p className="text-[#F8F5EE]/90 leading-relaxed font-medium">
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
              className="inline-flex items-center gap-1 text-[#C24E2B] hover:underline pt-1 font-mono uppercase text-[10px] tracking-wider"
            >
              <span>Ver Mapa en Google</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Col 2: Hours */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#5B6343] font-semibold">
              Horarios de Atención
            </h3>
            <p className="text-[#F8F5EE]/90 leading-relaxed">
              <span className="font-semibold">{PINUCCIO_DATA.openingHours.days}</span>
              <br />
              Almuerzo: {PINUCCIO_DATA.openingHours.lunch}
              <br />
              Cena: {PINUCCIO_DATA.openingHours.dinner}
            </p>
            <span className="text-[10px] text-[#F8F5EE]/60 block font-mono">
              {PINUCCIO_DATA.openingHours.notes}
            </span>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#5B6343] font-semibold">
              Contacto & Redes
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={PINUCCIO_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F8F5EE]/90 hover:text-[#C24E2B] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C24E2B]" />
                  <span>@pinucciobelgrano</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppReservationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#F8F5EE]/90 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                  <span>Reservas por WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Philosophy Note */}
          <div className="space-y-3">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[#5B6343] font-semibold">
              Filosofía Pinuccio
            </h3>
            <p className="text-[#F8F5EE]/70 leading-relaxed italic font-serif text-sm">
              "Pastificio artesanal de mercado. Harina pura, huevo de campo y la alegría de comer juntos."
            </p>
          </div>

        </div>

        {/* Massive Footer Display Brand Name */}
        <div className="pt-12 pb-6 text-center">
          <h1 className="font-editorial text-[14vw] sm:text-[13vw] font-bold tracking-tighter leading-none text-[#F8F5EE]/10 select-none">
            PINUCCIO
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#F8F5EE]/10 text-[11px] font-mono text-[#F8F5EE]/60">
          <span>© {new Date().getFullYear()} PINUCCIO TRATTORIA E PASTIFICIO. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1">
            Fatto a mano con <Heart className="w-3 h-3 text-[#C24E2B] fill-[#C24E2B]" /> en el Mercado de Belgrano, Buenos Aires
          </span>
        </div>

      </div>
    </footer>
  );
};
