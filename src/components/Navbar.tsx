import React, { useState, useEffect } from "react";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-[#F8F5EE]/95 backdrop-blur-md py-4 border-b border-[#1C1A17]/10 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo & Location badge */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-left group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full border border-[#1C1A17]/30 flex items-center justify-center bg-[#F8F5EE] group-hover:border-[#C24E2B] transition-colors">
            <span className="font-serif italic font-bold text-lg text-[#C24E2B]">P</span>
          </div>
          <div>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1A17] block leading-none">
              {PINUCCIO_DATA.name.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#5B6343] block mt-0.5">
              Mercado de Belgrano · Puesto 23
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-[#1C1A17]/80">
          <button
            onClick={() => scrollToSection("manifesto")}
            className="hover:text-[#C24E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C24E2B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Manifiesto
          </button>
          <button
            onClick={() => scrollToSection("menu")}
            className="hover:text-[#C24E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C24E2B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            La Carta
          </button>
          <button
            onClick={() => scrollToSection("mercado")}
            className="hover:text-[#C24E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C24E2B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            El Mercado
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="bg-[#25D366] text-white px-5 py-2.5 text-xs font-mono tracking-widest uppercase hover:bg-[#1ebd59] transition-colors flex items-center gap-2 group shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
            <span>Reservar por WhatsApp</span>
          </button>
        </div>
      </div>
    </header>
  );
};
