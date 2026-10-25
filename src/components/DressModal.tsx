import React, { useState } from 'react';
import { DressItem } from '../types';
import { X, Heart, Clock, Scissors, ShieldCheck, Check, Send, Sparkles } from 'lucide-react';

interface DressModalProps {
  dress: DressItem | null;
  onClose: () => void;
  onSelectForTailoring: (dress: DressItem, customizations: Record<string, string>) => void;
  isFavorite: boolean;
  onToggleFavorite: (dress: DressItem) => void;
}

export const DressModal: React.FC<DressModalProps> = ({
  dress,
  onClose,
  onSelectForTailoring,
  isFavorite,
  onToggleFavorite,
}) => {
  if (!dress) return null;

  const [selectedColor, setSelectedColor] = useState(dress.availableColors[0]?.name || '');
  const [sleeveCustomization, setSleeveCustomization] = useState('أكمام الموديل الأصلية');
  const [necklineCustomization, setNecklineCustomization] = useState('ياقة الموديل الأصلية');

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `مرحباً مركز السلطانة، أود الاستفسار عن تفصيل موديل: "${dress.title}"\nالكود: ${dress.id}\nاللون المفضل: ${selectedColor}\nتعديل الأكمام: ${sleeveCustomization}\nتعديل الياقة: ${necklineCustomization}\nالتكلفة التقديرية: ${dress.priceEstimate} ريال.`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  const handleTailorSubmit = () => {
    onSelectForTailoring(dress, {
      color: selectedColor,
      sleeves: sleeveCustomization,
      neckline: necklineCustomization,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#FAD2E1] z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2 rounded-full bg-white/90 text-[#543846] hover:text-[#DB2777] shadow-sm hover:scale-105 transition-all cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Image Column */}
          <div className="md:col-span-5 bg-[#FFF5F8] relative min-h-[340px] md:min-h-full">
            <img
              src={dress.image}
              alt={dress.title}
              className="w-full h-full object-cover object-center max-h-[520px] md:max-h-none"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#FAD2E1] text-[11px] font-medium text-[#734E5F] flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DB2777]" />
              <span>تصوير حي من مشغل السلطانة</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Category & Status */}
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 text-xs text-[#8A5A6D] font-medium">
                  <span>{dress.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>منشأ القماش: {dress.fabricOrigin}</span>
                </div>
                
                <button
                  onClick={() => onToggleFavorite(dress)}
                  className="flex items-center gap-1 text-xs text-[#734E5F] hover:text-[#DB2777] cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorite ? 'fill-[#DB2777] text-[#DB2777]' : ''
                    }`}
                  />
                  <span>{isFavorite ? 'محفوظ' : 'حفظ'}</span>
                </button>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#2A1823] font-serif-luxury mb-3 leading-snug">
                {dress.title}
              </h2>

              {/* Price & Duration Strip */}
              <div className="flex items-center gap-6 py-3 px-4 bg-[#FFF9FB] rounded-xl border border-[#F9E6EE] mb-4">
                <div>
                  <span className="text-[11px] text-[#8A5A6D] block">التكلفة التقديرية</span>
                  <span className="text-xl font-bold text-[#9D174D] font-mono tabular-nums">
                    {dress.priceEstimate.toLocaleString()} ريال
                  </span>
                </div>
                <div className="h-8 w-px bg-[#FAD2E1]" />
                <div className="flex items-center gap-1.5 text-xs text-[#6E4B5B]">
                  <Clock className="w-4 h-4 text-[#DB2777]" />
                  <span>مدة الإنجاز: {dress.durationDays} أيام عمل</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#614553] leading-relaxed mb-5">
                {dress.description}
              </p>

              {/* Tailoring & Craftsmanship details */}
              <div className="mb-5">
                <h4 className="text-xs font-bold text-[#291722] mb-2.5 flex items-center gap-1.5">
                  <Scissors className="w-4 h-4 text-[#DB2777]" />
                  مواصفات الخياطة والحرفية اليدوية:
                </h4>
                <ul className="space-y-1.5">
                  {dress.tailoringDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#6E4B5B]">
                      <Check className="w-3.5 h-3.5 text-[#DB2777] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Customization */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#291722] block mb-2">
                  الألوان المقترحة للتفصيل: ({selectedColor})
                </span>
                <div className="flex items-center gap-2">
                  {dress.availableColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? 'border-2 border-[#DB2777] bg-[#FFF0F4] font-semibold text-[#9D174D]'
                          : 'border border-[#F0D5DF] bg-white text-[#6E4B5B] hover:bg-[#FFF5F8]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Customization Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-[#FCF8FA] p-3.5 rounded-xl border border-[#F5DEE7]">
                <div>
                  <label className="text-[11px] font-semibold text-[#734E5F] block mb-1">
                    تعديل نمط الأكمام:
                  </label>
                  <select
                    value={sleeveCustomization}
                    onChange={(e) => setSleeveCustomization(e.target.value)}
                    className="w-full text-xs bg-white border border-[#F3CAD8] rounded-lg px-2.5 py-1.5 text-[#291722] focus:outline-none focus:ring-1 focus:ring-[#DB2777]"
                  >
                    <option value="أكمام الموديل الأصلية">أكمام الموديل الأصلية</option>
                    <option value="أكمام طويلة كاملة">أكمام طويلة كاملة (حشمة)</option>
                    <option value="أكمام ثلاثة أرباع">أكمام ثلاثة أرباع (3/4)</option>
                    <option value="أكمام كاب منسدلة">إضافة أكمام كاب منسدلة</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#734E5F] block mb-1">
                    تعديل نمط الياقة:
                  </label>
                  <select
                    value={necklineCustomization}
                    onChange={(e) => setNecklineCustomization(e.target.value)}
                    className="w-full text-xs bg-white border border-[#F3CAD8] rounded-lg px-2.5 py-1.5 text-[#291722] focus:outline-none focus:ring-1 focus:ring-[#DB2777]"
                  >
                    <option value="ياقة الموديل الأصلية">ياقة الموديل الأصلية</option>
                    <option value="ياقة مقفلة عالية (High Neck)">ياقة مقفلة عالية (High Neck)</option>
                    <option value="ياقة قارب ناعمة (Boat Neck)">ياقة قارب ناعمة (Boat Neck)</option>
                    <option value="ياقة V ساترة وناعمة">ياقة V ناعمة</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#F8E2EA] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={handleTailorSubmit}
                className="flex-1 py-3 px-5 text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] rounded-full shadow-xs hover:shadow-md transition-all text-center cursor-pointer"
              >
                طلب تفصيل هذا الموديل الآن
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="py-3 px-4 text-xs font-semibold text-[#25D366] bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#BBF7D0] rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>استفسار واتساب سريع</span>
              </button>
            </div>

            {/* Reassurance footer note */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-[#8A5A6D]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DB2777]" />
              <span>يتضمن السعر بروفة القياس الأولى والتعديلات الدقيقة مجاناً</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
