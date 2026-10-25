import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle, ShieldCheck, Ruler, Clock } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onCustomTailorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCustomTailorClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FFFAFC] to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#F9E6EE]">
      {/* Delicate background decorative ambient circles */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#FFE4EC]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFF0F5]/60 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Subtle editorial kicker without pill badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#BE185D] tracking-wide mb-4">
              <Sparkles className="w-4 h-4 text-[#DB2777]" />
              <span>دار السلطانة للأزياء الراقية والقصات الحصرية</span>
              <span aria-hidden="true" className="text-[#F4A8C0]">·</span>
              <span className="text-[#8A5A6D]">موسم 2026 - 2027</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#291722] font-serif-luxury leading-[1.3] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              إطلالة تعكس بهاءكِ الملكي.. خياطة نسائية فاخرة بتفاصيل عصرية متقنة
            </h1>

            {/* Body paragraph */}
            <p className="text-base sm:text-lg text-[#614553] leading-relaxed mb-8 max-w-2xl">
              في مركز السلطانة، نحول خيوط الحرير وأجود الأقمشة العالمية إلى تصاميم حصرية تُفصَّل خصيصاً لمقاساتكِ. من فساتين السهرة المبهرة والقفاطين الملكية، إلى العبايات العصرية والبدلات الرسمية، لتتألقي بثقة لا تضاهى في كل مناسبة.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>استكشفي تشكيلة الأزياء الحديثة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onCustomTailorClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#8B2352] bg-[#FFF0F4] hover:bg-[#FCE2EB] border border-[#FAD2E1] rounded-full transition-colors cursor-pointer"
              >
                <span>طلب تفصيل وحساب التكلفة</span>
              </button>
            </div>

            {/* Highlights Mini Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#734E5F] pt-4 border-t border-[#F8E2EA] w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#DB2777]" />
                <span>خياطة يدوية دقيقة</span>
              </div>
              <span className="text-[#E7B5C7]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-[#DB2777]" />
                <span>ضمان دقة المقاس 100%</span>
              </div>
              <span className="text-[#E7B5C7]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DB2777]" />
                <span>أقمشة مستوردة أصلية</span>
              </div>
              <span className="text-[#E7B5C7]" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#DB2777]" />
                <span>التزام تام بمواعيد التسليم</span>
              </div>
            </div>

          </div>

          {/* Visual Atelier Media Column (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative soft pink halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FCE7F0] to-[#FFF0F5] rounded-3xl transform rotate-1 scale-102 filter blur-xs" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-[#FFF5F8]">
                <img
                  src="/src/assets/images/hero_sultana_atelier_1792959514861.jpg"
                  alt="مشغل وصالون مركز السلطانة لتصميم الأزياء النسائية"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Quiet media caption box */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/75 via-black/35 to-transparent text-white">
                  <p className="text-xs font-semibold text-[#FFD6E4]">مشغل وصالون السلطانة</p>
                  <p className="text-[13px] text-white/90 font-medium">حيث تلتقي حرفة الخياطة اليدوية بأحدث خطوط الموضة المعاصرة</p>
                </div>
              </div>

              {/* Floating trust badge on image edge */}
              <div className="absolute -bottom-5 -right-4 bg-white/95 backdrop-blur-md border border-[#FAD2E1] p-3.5 rounded-xl shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center font-bold text-base">
                  ١٠٠٪
                </div>
                <div>
                  <p className="text-xs font-bold text-[#291722]">تفصيل متقن وبروفة قياس</p>
                  <p className="text-[11px] text-[#8A5A6D]">تعديلات مجانية حتى الرضا التام</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
