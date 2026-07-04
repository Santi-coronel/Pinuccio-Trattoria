import React from "react";
import { MARKET_DATA } from "../content/market";
import { PINUCCIO_DATA } from "../content/pinuccio";
import { ImageWithFallback } from "./ImageWithFallback";
import { Reveal, TextReveal } from "./motionPrimitives";
import { ArrowUpRight, MapPin } from "lucide-react";

const GALLERY = [
  { src: "/images/gallery/mercado.jpg", label: "El Mercado de Belgrano", meta: "Pasillo central, 1889" },
  { src: "/images/manifesto/masa.jpg", label: "Amasado a la vista", meta: "Cada mañana en la barra" },
  { src: "/images/menu/tagliatelle.jpg", label: "Tagliatelle al ragù", meta: "Osobuco, 8 horas" },
  { src: "/images/gallery/wine.jpg", label: "Vino en jarra", meta: "Pequeños productores" },
  { src: "/images/menu/ravioli.jpg", label: "Ravioli di zucca", meta: "Receta de Mantova" },
  { src: "/images/menu/tiramisu.jpg", label: "Tiramisù della casa", meta: "Mascarpone y Marsala" },
];

export const MarketAtmosphereSection: React.FC = () => {
  return (
    <section id="mercado" className="relative bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-28">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="eyebrow rule-tick text-ochre">La vida de mercado</span>
            <TextReveal
              as="h2"
              text="Pinuccio vive en el Mercado de Belgrano"
              className="font-display text-4xl sm:text-6xl font-semibold tracking-[-0.02em] mt-4 leading-[1.02] text-paper"
            />
          </div>
          <p className="lg:col-span-4 text-sm text-paper/70 leading-relaxed">
            {MARKET_DATA.historyDescription}
          </p>
        </div>

        {/* Galería expandible en hover (hover-grow) */}
        <Reveal className="mb-20">
          <div className="grid grid-cols-2 gap-2 md:flex md:h-[520px] md:gap-2.5">
            {GALLERY.map((item, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden h-56 md:h-auto md:flex-1 md:hover:flex-[2.8] transition-[flex] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.label}
                  aspectRatioClass="h-full w-full"
                  imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 grayscale-[35%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <span className="eyebrow block text-ochre md:opacity-0 md:-translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
                    {item.meta}
                  </span>
                  <span className="font-serif text-lg md:text-xl text-paper leading-tight block mt-0.5">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="hidden md:block eyebrow text-paper/40 mt-3 text-right">
            Pasá el cursor sobre cada imagen
          </p>
        </Reveal>

        {/* Atmósfera — lista editorial numerada (no cards con ícono) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 border-t border-paper/15 pt-14">
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-paper leading-tight">
              Cuatro rituales del Puesto 23
            </h3>
            <p className="text-sm text-paper/60 mt-3 leading-relaxed">
              Materia prima de proximidad, comprada cada mañana a los puestos vecinos:
              {" "}
              {MARKET_DATA.neighborStalls.slice(0, 3).join(" · ")}.
            </p>
          </div>

          <ol className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {MARKET_DATA.atmosphereFeatures.map((feat, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <li className="flex gap-5 border-t border-paper/10 pt-5">
                  <span className="font-display text-3xl text-ochre leading-none shrink-0 tabular-nums">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-serif text-xl text-paper mb-1.5">{feat.title}</h4>
                    <p className="text-sm text-paper/65 leading-relaxed">{feat.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Ubicación / mapa */}
        <div className="mt-16 p-8 sm:p-10 bg-paper text-ink flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="eyebrow text-terracotta flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4" />
              Cómo llegar a Pinuccio
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-2">
              Mercado de Belgrano · Juramento 2527
            </h3>
            <p className="text-sm text-ink-soft max-w-[52ch] leading-relaxed">
              Entrada por Av. Juramento o Ciudad de la Paz. Estamos en el Puesto 23 del
              pasillo central, frente a la panadería de masa madre.
            </p>
          </div>

          <a
            href={PINUCCIO_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full md:w-auto bg-ink text-paper px-7 py-4 hover:bg-terracotta transition-colors inline-flex items-center justify-center gap-2 font-mono text-xs tracking-[0.18em] uppercase"
          >
            Ver ubicación en Maps
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
