import React, { useState } from 'react';
import { Heart, Calendar, Menu, X, Scissors } from 'lucide-react';
import { DressItem } from '../types';

interface NavbarProps {
  onOpenBooking: () => void;
  favorites: DressItem[];
  onOpenFavorites: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, favorites, onOpenFavorites }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F7E1E8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-[#FFF0F4] border border-[#FAD2E1] flex items-center justify-center text-[#DB2777] shadow-sm group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5 -rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#2B1B24] font-serif-luxury whitespace-nowrap">
                مركز السلطانة
              </span>
              <span className="text-[11px] text-[#A66B81] tracking-wider font-medium whitespace-nowrap">
                للخياطة وتصميم الأزياء النسائية
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#543846]">
            <a href="#collections" className="hover:text-[#DB2777] transition-colors whitespace-nowrap">
              المجموعات الحديثة
            </a>
            <a href="#custom-tailoring" className="hover:text-[#DB2777] transition-colors whitespace-nowrap">
              تفصيل حسب الطلب
            </a>
            <a href="#guide-section" className="hover:text-[#DB2777] transition-colors whitespace-nowrap">
              دليل القياسات والأقمشة
            </a>
            <a href="#reviews" className="hover:text-[#DB2777] transition-colors whitespace-nowrap">
              آراء العميلات
            </a>
            <a href="#contact" className="hover:text-[#DB2777] transition-colors whitespace-nowrap">
              موقع المركز والتواصل
            </a>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Wishlist toggle */}
            <button
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-full text-[#734E5F] hover:text-[#DB2777] hover:bg-[#FFF0F4] transition-colors cursor-pointer"
              title="التصاميم المحفوظة"
              aria-label="التصاميم المفضلة"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#DB2777] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>حجز موعد قياس</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#543846] hover:text-[#DB2777] rounded-lg cursor-pointer"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#F8E2EA] bg-white px-5 py-4 space-y-3">
          <a
            href="#collections"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#543846] hover:text-[#DB2777] font-medium"
          >
            المجموعات الحديثة
          </a>
          <a
            href="#custom-tailoring"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#543846] hover:text-[#DB2777] font-medium"
          >
            تفصيل حسب الطلب
          </a>
          <a
            href="#guide-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#543846] hover:text-[#DB2777] font-medium"
          >
            دليل القياسات والأقمشة
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#543846] hover:text-[#DB2777] font-medium"
          >
            آراء العميلات
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#543846] hover:text-[#DB2777] font-medium"
          >
            موقع المركز والتواصل
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#DB2777] rounded-full shadow-xs cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>حجز موعد قياس في المشغل</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
