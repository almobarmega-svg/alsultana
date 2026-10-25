import React, { useState, useEffect } from 'react';
import { DRESS_ITEMS } from './data/fashionData';
import { DressItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CollectionSection } from './components/CollectionSection';
import { DressModal } from './components/DressModal';
import { CustomTailoringSection } from './components/CustomTailoringSection';
import { FabricAndMeasurementSection } from './components/FabricAndMeasurementSection';
import { AppointmentModal } from './components/AppointmentModal';
import { MeasurementModal } from './components/MeasurementModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';

export function App() {
  const [selectedDress, setSelectedDress] = useState<DressItem | null>(null);
  const [tailoringDress, setTailoringDress] = useState<DressItem | null>(null);
  const [favorites, setFavorites] = useState<DressItem[]>([]);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMeasurementModalOpen, setIsMeasurementModalOpen] = useState(false);

  // Load favorites from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sultana_favorites');
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const toggleFavorite = (dress: DressItem) => {
    setFavorites((prev) => {
      const exists = prev.some((d) => d.id === dress.id);
      const next = exists ? prev.filter((d) => d.id !== dress.id) : [...prev, dress];
      try {
        localStorage.setItem('sultana_favorites', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.filter((d) => d.id !== id);
      try {
        localStorage.setItem('sultana_favorites', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleSelectDressForTailoring = (dress: DressItem) => {
    setSelectedDress(null);
    setTailoringDress(dress);
    const element = document.getElementById('custom-tailoring');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-[#241A21] flex flex-col font-sans selection:bg-[#FCE7F0] selection:text-[#9D174D]">
      
      {/* Top Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        favorites={favorites}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('collections')}
          onCustomTailorClick={() => scrollToSection('custom-tailoring')}
        />

        {/* Fashion Collection Showcase */}
        <CollectionSection
          items={DRESS_ITEMS}
          onSelectDress={(dress) => setSelectedDress(dress)}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          onDirectTailor={handleSelectDressForTailoring}
        />

        {/* Bespoke Tailoring & Instant Cost Estimator */}
        <CustomTailoringSection
          preselectedDress={tailoringDress}
          onOpenMeasurementGuide={() => setIsMeasurementModalOpen(true)}
        />

        {/* Fabrics Library & Measurement Guide */}
        <FabricAndMeasurementSection />

        {/* Client Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Modals and Drawers */}
      <DressModal
        dress={selectedDress}
        onClose={() => setSelectedDress(null)}
        onSelectForTailoring={handleSelectDressForTailoring}
        isFavorite={selectedDress ? favorites.some((d) => d.id === selectedDress.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <MeasurementModal
        isOpen={isMeasurementModalOpen}
        onClose={() => setIsMeasurementModalOpen(false)}
      />

      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={removeFavorite}
        onSelectDress={(dress) => setSelectedDress(dress)}
        onTailorDress={handleSelectDressForTailoring}
      />

      {/* Direct Floating WhatsApp Assist Button */}
      <a
        href="https://wa.me/966500000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D8%B1%D9%83%D8%B2%20%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86%D8%A9%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%81%D8%B5%D9%8A%D9%84%20%D9%88%D8%A7%D9%84%D8%A3%D8%B2%D9%8A%D8%A7%D8%A1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20BA59] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 group cursor-pointer"
        aria-label="تواصل مع خبيرة الخياطة عبر واتساب"
        title="تواصل مباشر عبر واتساب"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-semibold px-0 group-hover:px-1">
          مساعدة فورية عبر واتساب
        </span>
      </a>

    </div>
  );
}

export default App;
