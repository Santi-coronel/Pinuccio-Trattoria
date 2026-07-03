import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS, MenuItem } from "../content/menu";
import { ImageWithFallback } from "./ImageWithFallback";
import { oliveOilEase } from "../lib/animations";
import { Wine, Info, X, MessageCircle } from "lucide-react";

interface FeaturedDishesProps {
  onSelectDishForReservation: (dishName: string) => void;
}

export const FeaturedDishesSection: React.FC<FeaturedDishesProps> = ({
  onSelectDishForReservation,
}) => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "paste" | "antipasti" | "dolci" | "bevande"
  >("all");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredDishes =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 border-b border-[#1C1A17]/15 relative bg-[#F8F5EE]">
      <div className="absolute inset-0 paper-grain pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-[#5B6343] mb-3">
              <span className="w-8 h-[1px] bg-[#5B6343]" />
              <span>La Carta del Puesto 23</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-6xl font-bold text-[#1C1A17] tracking-tight">
              Especialidades del Día
            </h2>
          </div>

          <p className="text-sm font-sans text-[#1C1A17]/70 max-w-[45ch]">
            Cada mañana elaboramos la masa fresca en la barra. Cambiamos la carta según la estacionalidad de las verduras del mercado.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 pb-6 mb-12 border-b border-[#1C1A17]/15 font-mono text-xs tracking-widest uppercase">
          {[
            { id: "all", label: "Toda la Carta" },
            { id: "paste", label: "Paste Fresche" },
            { id: "antipasti", label: "Antipasti" },
            { id: "dolci", label: "Dolci" },
            { id: "bevande", label: "Vini & Bevande" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 border transition-all ${
                activeCategory === tab.id
                  ? "bg-[#1C1A17] text-[#F8F5EE] border-[#1C1A17]"
                  : "bg-transparent text-[#1C1A17]/70 border-[#1C1A17]/20 hover:border-[#C24E2B] hover:text-[#C24E2B]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dish List */}
        <div className="space-y-16">
          {filteredDishes.map((dish, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.0, ease: oliveOilEase }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 bg-[#FAF8F2] border border-[#1C1A17]/15 shadow-sm hover:border-[#C24E2B]/50 transition-colors ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Composition */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div
                    className="relative p-2 bg-[#EFEAE0] border border-[#1C1A17]/20 group cursor-pointer"
                    onClick={() => setSelectedDish(dish)}
                  >
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      aspectRatioClass="aspect-[4/3]"
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />

                    {dish.highlighted && (
                      <span className="absolute top-4 left-4 bg-[#C24E2B] text-[#F8F5EE] text-[10px] font-mono tracking-widest uppercase px-3 py-1 border border-[#C24E2B]">
                        Insignia del Mercado
                      </span>
                    )}
                  </div>
                </div>

                {/* Text & Dish Details */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="border-b border-[#1C1A17]/10 pb-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#5B6343] block">
                      {dish.italianName}
                    </span>
                    <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1A17] mt-0.5">
                      {dish.name}
                    </h3>
                  </div>

                  <p className="text-base text-[#1C1A17]/85 font-sans leading-relaxed max-w-[55ch]">
                    {dish.description}
                  </p>

                  {/* Wine Pairing Ribbon */}
                  <div className="p-3 bg-[#EFEAE0] border border-[#1C1A17]/10 flex items-center gap-3 text-xs text-[#1C1A17]">
                    <Wine className="w-4 h-4 text-[#C24E2B] shrink-0" />
                    <div>
                      <span className="font-mono text-[10px] uppercase text-[#5B6343] block">
                        Maridaje Sugerido por Pinuccio
                      </span>
                      <span className="font-medium">{dish.pairing}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs tracking-widest uppercase">
                    <button
                      onClick={() => setSelectedDish(dish)}
                      className="text-[#1C1A17] hover:text-[#C24E2B] flex items-center gap-1.5 underline underline-offset-4 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Ver Ingredientes Completos</span>
                    </button>

                    <button
                      onClick={() => onSelectDishForReservation(dish.name)}
                      className="bg-[#25D366] text-white px-4 py-2 hover:bg-[#1ebd59] transition-colors flex items-center gap-2 border border-[#25D366]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Reservar por WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dish Ingredient & Story Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F8F5EE] border border-[#1C1A17] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto paper-grain"
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-6 right-6 p-2 border border-[#1C1A17]/20 hover:border-[#C24E2B] hover:text-[#C24E2B] transition-colors text-[#1C1A17]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono tracking-widest uppercase text-[#5B6343] block mb-1">
                  {selectedDish.italianName}
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#1C1A17]">
                  {selectedDish.name}
                </h3>
              </div>

              <div className="mb-6 rounded-none overflow-hidden border border-[#1C1A17]/15">
                <ImageWithFallback
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  aspectRatioClass="aspect-[16/9]"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base text-[#1C1A17]/85 font-sans leading-relaxed mb-6">
                {selectedDish.description}
              </p>

              {/* Ingredients List */}
              <div className="mb-6 p-4 bg-[#EFEAE0] border border-[#1C1A17]/10">
                <h4 className="font-mono text-xs uppercase tracking-widest text-[#5B6343] mb-3 font-semibold">
                  Materia Prima e Ingredientes
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#1C1A17]">
                  {selectedDish.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C24E2B]" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedDish.notes && (
                <div className="mb-6 p-3 border-l-2 border-[#5B6343] text-xs text-[#1C1A17]/80 font-sans italic bg-[#5B6343]/5">
                  Nota del Chef: {selectedDish.notes}
                </div>
              )}

              {/* Action */}
              <div className="flex justify-end gap-4 pt-4 border-t border-[#1C1A17]/15 font-mono text-xs uppercase tracking-widest">
                <button
                  onClick={() => {
                    const dishName = selectedDish.name;
                    setSelectedDish(null);
                    onSelectDishForReservation(dishName);
                  }}
                  className="w-full bg-[#25D366] text-white py-3 hover:bg-[#1ebd59] transition-colors flex items-center justify-center gap-2 font-bold"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Reservar por WhatsApp para probar este plato</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
