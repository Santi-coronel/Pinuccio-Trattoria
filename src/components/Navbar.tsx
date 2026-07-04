import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenReservation: () => void;
}

const NAV_LINKS = [
  { id: "manifesto", label: "Manifiesto" },
  { id: "menu", label: "La Carta" },
  { id: "mercado", label: "El Mercado" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: marca la sección visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md py-3 border-b border-ink/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-6">
        {/* Marca */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-3 text-left focus:outline-none"
          aria-label="Ir al inicio"
        >
          <span className="w-9 h-9 shrink-0 rounded-full border border-ink/25 grid place-items-center bg-paper group-hover:border-terracotta transition-colors">
            <span className="font-display italic font-semibold text-lg text-terracotta leading-none">
              P
            </span>
          </span>
          <span className="leading-none">
            <span className="font-display text-2xl font-semibold tracking-tight text-ink block">
              {PINUCCIO_DATA.name}
            </span>
            <span className="eyebrow block mt-1 text-ink-faint">
              Trattoria · Puesto 23
            </span>
          </span>
        </button>

        {/* Links con indicador activo animado */}
        <nav className="hidden md:flex items-center gap-9 font-mono text-[11px] tracking-[0.18em] uppercase text-ink/75">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative py-1 transition-colors hover:text-terracotta ${
                active === id ? "text-terracotta" : ""
              }`}
            >
              {label}
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-terracotta"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={onOpenReservation}
          className="shrink-0 group inline-flex items-center gap-2 bg-ink text-paper px-5 py-2.5 text-[11px] font-mono tracking-[0.18em] uppercase hover:bg-terracotta transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reservar</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>
    </header>
  );
};
