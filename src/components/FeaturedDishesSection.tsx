import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS, MenuItem } from "../content/menu";
import { ImageWithFallback } from "./ImageWithFallback";
import { Reveal } from "./motionPrimitives";
import { Wine, Plus, X, ArrowUpRight } from "lucide-react";

interface FeaturedDishesProps {
  onSelectDishForReservation: (dishName: string) => void;
}

type Category = "all" | "paste" | "antipasti" | "dolci" | "bevande";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "all", label: "Toda la carta" },
  { id: "paste", label: "Paste Fresche" },
  { id: "antipasti", label: "Antipasti" },
  { id: "dolci", label: "Dolci" },
  { id: "bevande", label: "Vini & Bevande" },
];

const cardEase = "cubic-bezier(0.23,1,0.32,1)";

// ---------------------------------------------------------------------------
// Dish card — técnica cutout-card (scale on hover, overlay, reveal action)
// ---------------------------------------------------------------------------
interface DishCardProps {
  dish: MenuItem;
  featured?: boolean;
  flip?: boolean;
  onOpen: () => void;
  onReserve: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, featured, flip, onOpen, onReserve }) => {
  const Media = (
    <div
      className={`relative overflow-hidden cursor-pointer ${
        featured ? "aspect-[4/3] md:aspect-auto md:h-full md:min-h-[24rem]" : "aspect-[4/3]"
      }`}
      onClick={onOpen}
    >
      <ImageWithFallback
        src={dish.image}
        alt={dish.name}
        aspectRatioClass="h-full w-full"
        imgClassName="transition-transform duration-[900ms] group-hover:scale-[1.06]"
        imgStyle={{ transitionTimingFunction: cardEase }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

      {dish.highlighted && (
        <span className="absolute top-4 left-4 bg-terracotta text-paper text-[10px] font-mono tracking-[0.18em] uppercase px-3 py-1">
          Insignia del mercado
        </span>
      )}

      <span className="absolute top-4 right-4 bg-paper/95 text-ink font-mono text-sm font-medium px-3 py-1 shadow-sm">
        {dish.price}
      </span>

      {/* Reveal action on hover */}
      <div className="absolute inset-x-4 bottom-4 flex translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onReserve();
          }}
          className="w-full bg-paper text-ink hover:bg-terracotta hover:text-paper transition-colors py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase inline-flex items-center justify-center gap-2"
        >
          Reservar este plato
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  const Body = (
    <div className={`flex flex-col gap-3 ${featured ? "p-8 sm:p-10 justify-center" : "p-6 flex-1"}`}>
      <div>
        <span className="eyebrow block text-ink-faint">{dish.italianName}</span>
        <h3
          className={`font-serif font-semibold text-ink mt-1 leading-tight ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {dish.name}
        </h3>
      </div>

      <p className={`text-ink-soft leading-relaxed ${featured ? "text-base max-w-[46ch]" : "text-sm"}`}>
        {dish.description}
      </p>

      <div className="mt-auto pt-4 border-t border-ink/10 flex flex-col gap-3">
        <div className="flex items-start gap-2.5 text-xs text-ink-soft">
          <Wine className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
          <span>
            <span className="eyebrow block text-olive mb-0.5">Maridaje sugerido</span>
            {dish.pairing}
          </span>
        </div>

        <button
          onClick={onOpen}
          className="self-start inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.16em] uppercase text-ink hover:text-terracotta transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          Ingredientes y detalle
        </button>
      </div>
    </div>
  );

  return (
    <article
      className={`group relative bg-cream border border-ink/12 hover:border-terracotta/50 transition-[border-color,box-shadow] duration-500 hover:shadow-[0_28px_56px_-30px_rgba(33,30,26,0.5)] ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2 flex flex-col" : "flex flex-col"
      }`}
    >
      {featured && flip ? (
        <>
          <div className="md:order-2">{Media}</div>
          <div className="md:order-1">{Body}</div>
        </>
      ) : (
        <>
          {Media}
          {Body}
        </>
      )}
    </article>
  );
};

// ---------------------------------------------------------------------------
export const FeaturedDishesSection: React.FC<FeaturedDishesProps> = ({
  onSelectDishForReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredDishes =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  let featuredCount = 0;

  return (
    <section id="menu" className="py-24 sm:py-28 relative bg-paper border-t border-ink/10">
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Header asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="eyebrow rule-tick text-olive">La carta del Puesto 23</span>
            <Reveal>
              <h2 className="font-display text-4xl sm:text-6xl font-semibold text-ink tracking-[-0.02em] mt-4 leading-[1]">
                Especialidades del día
              </h2>
            </Reveal>
          </div>
          <p className="lg:col-span-4 text-sm text-ink-soft leading-relaxed">
            Cada mañana elaboramos la masa fresca en la barra. La carta cambia según la
            estacionalidad de las verduras del mercado.
          </p>
        </div>

        {/* Tabs con bubble animado */}
        <div className="flex flex-wrap gap-1.5 mb-14 border-y border-ink/10 py-4">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="relative px-4 py-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="menu-tab"
                    className="absolute inset-0 bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    active ? "text-paper" : "text-ink/55 hover:text-terracotta"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid de platos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => {
              const isFeatured = !!dish.highlighted;
              const flip = isFeatured && featuredCount++ % 2 === 1;
              return (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className={isFeatured ? "md:col-span-2" : ""}
                >
                  <DishCard
                    dish={dish}
                    featured={isFeatured}
                    flip={flip}
                    onOpen={() => setSelectedDish(dish)}
                    onReserve={() => onSelectDishForReservation(dish.name)}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de ingredientes */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-sm"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper border border-ink max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-paper/90 border border-ink/20 hover:border-terracotta hover:text-terracotta transition-colors text-ink"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  aspectRatioClass="h-full w-full"
                  className="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <span className="eyebrow block text-paper/80">{selectedDish.italianName}</span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-paper mt-1 leading-tight">
                    {selectedDish.name}
                  </h3>
                </div>
                <span className="absolute top-5 left-6 bg-paper text-ink font-mono text-sm px-3 py-1">
                  {selectedDish.price}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-base text-ink-soft leading-relaxed mb-6">
                  {selectedDish.description}
                </p>

                <div className="mb-6">
                  <h4 className="eyebrow text-olive mb-3">Materia prima e ingredientes</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-ink">
                    {selectedDish.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-terracotta shrink-0" />
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-paper-2 border-l-2 border-terracotta flex items-start gap-3">
                  <Wine className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                  <span className="text-sm text-ink">
                    <span className="eyebrow block text-olive mb-0.5">Maridaje de Pinuccio</span>
                    {selectedDish.pairing}
                  </span>
                </div>

                {selectedDish.notes && (
                  <p className="mb-6 text-sm text-ink-soft italic font-serif text-lg leading-snug border-l-2 border-olive pl-4">
                    {selectedDish.notes}
                  </p>
                )}

                <button
                  onClick={() => {
                    const name = selectedDish.name;
                    setSelectedDish(null);
                    onSelectDishForReservation(name);
                  }}
                  className="w-full bg-terracotta text-paper py-3.5 hover:bg-terracotta-dark transition-colors font-mono text-xs tracking-[0.18em] uppercase inline-flex items-center justify-center gap-2"
                >
                  Reservar por WhatsApp para probar este plato
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
