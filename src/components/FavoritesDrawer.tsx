import React from 'react';
import { DressItem } from '../types';
import { X, Heart, Trash2, ArrowLeft, MessageCircle } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: DressItem[];
  onRemoveFavorite: (id: string) => void;
  onSelectDress: (dress: DressItem) => void;
  onTailorDress: (dress: DressItem) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onSelectDress,
  onTailorDress,
}) => {
  if (!isOpen) return null;

  const handleShareFavoritesWhatsApp = () => {
    if (favorites.length === 0) return;
    const names = favorites.map((f, i) => `${i + 1}. ${f.title} (${f.priceEstimate} ريال)`).join('\n');
    const msg = encodeURIComponent(`مرحباً مركز السلطانة، هذه قائمة الموديلات التي نالت إعجابي وأود الاستفسار عنها:\n${names}`);
    window.open(`https://wa.me/966500000000?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-start animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl border-l border-[#FAD2E1] z-10 flex flex-col justify-between animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-[#F8E2EA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center">
              <Heart className="w-4 h-4 fill-[#DB2777]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#2A1823] font-serif-luxury">التصاميم المحفوظة</h3>
              <p className="text-[11px] text-[#8A5A6D]">{favorites.length} موديل محفوظ</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FFF0F4] text-[#543846] transition-colors cursor-pointer"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16 text-[#8A5A6D]">
              <Heart className="w-12 h-12 mx-auto mb-3 text-[#FAD2E1]" />
              <p className="text-sm font-semibold text-[#291722] mb-1">قائمة المفضلة فارغة حالياً</p>
              <p className="text-xs text-[#734E5F]">اضغطي على رمز القلب في أي تصميم لحفظه ومقارنته لاحقاً.</p>
            </div>
          ) : (
            favorites.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-[#FFF9FB] rounded-2xl border border-[#F8E2EA] hover:border-[#FAD2E1] transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-20 object-cover rounded-xl shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4
                    onClick={() => {
                      onClose();
                      onSelectDress(item);
                    }}
                    className="text-xs font-bold text-[#291722] truncate hover:text-[#DB2777] cursor-pointer"
                  >
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#8A5A6D] mb-1">{item.categoryLabel}</p>
                  <p className="text-xs font-bold text-[#9D174D] font-mono tabular-nums">
                    {item.priceEstimate.toLocaleString()} ريال
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => {
                        onClose();
                        onTailorDress(item);
                      }}
                      className="text-[11px] font-semibold text-[#DB2777] hover:underline"
                    >
                      طلب تفصيل
                    </button>
                    <span className="text-[#FAD2E1]">·</span>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="text-[11px] text-[#A66B81] hover:text-[#EF4444] flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>حذف</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="p-4 border-t border-[#F8E2EA] bg-[#FFFDFE] space-y-2">
            <button
              onClick={handleShareFavoritesWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-full shadow-xs cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>مشاركة القائمة عبر واتساب مع المركز</span>
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 text-xs font-medium text-[#734E5F] hover:text-[#291722]"
            >
              متابعة التصفح
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
