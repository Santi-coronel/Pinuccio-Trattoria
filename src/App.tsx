import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ManifestoSection } from "./components/ManifestoSection";
import { FeaturedDishesSection } from "./components/FeaturedDishesSection";
import { MarketAtmosphereSection } from "./components/MarketAtmosphereSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { Footer } from "./components/Footer";
import { getWhatsAppReservationUrl } from "./content/pinuccio";

export default function App() {
  const handleOpenReservation = (dishName?: string) => {
    const url = getWhatsAppReservationUrl(dishName);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1C1A17] font-sans selection:bg-[#C24E2B] selection:text-[#F8F5EE] relative overflow-x-hidden paper-grain">
      {/* Navigation Header */}
      <Navbar onOpenReservation={() => handleOpenReservation()} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero */}
        <HeroSection onOpenReservation={() => handleOpenReservation()} />

        {/* 2. Manifesto */}
        <ManifestoSection />

        {/* 3. Featured Dishes / Carta */}
        <FeaturedDishesSection
          onSelectDishForReservation={(dishName) =>
            handleOpenReservation(dishName)
          }
        />

        {/* 4. Mercado de Belgrano Atmosphere & Map */}
        <MarketAtmosphereSection />

        {/* 5. Authentic Reviews */}
        <ReviewsSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => handleOpenReservation()} />
    </div>
  );
}
