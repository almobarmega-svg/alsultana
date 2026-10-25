import React, { useState } from 'react';
import { FABRIC_LIBRARY, MEASUREMENT_STEPS } from '../data/fashionData';
import { Ruler, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export const FabricAndMeasurementSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'measurements' | 'fabrics'>('measurements');

  return (
    <section id="guide-section" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#DB2777] mb-2 tracking-wide">
            <Ruler className="w-4 h-4" />
            <span>معايير الجودة والحرفية</span>
            <span aria-hidden="true">·</span>
            <span>دليل السلطانة المتخصص</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2A1823] font-serif-luxury tracking-tight mb-4">
            دليل القياسات الدقيقة وأسرار الأقمشة الفاخرة
          </h2>
          <p className="text-base text-[#6E4B5B] leading-relaxed">
            لأن سر جمال أي تصميم يكمن في دقة المقاس وملاءمة نوع القماش للموديل، نقدم لكِ دليلاً تفاعلياً لضمان أفضل تجربة خياطة مخصصة.
          </p>

          {/* Segmented Control Tabs */}
          <div className="inline-flex p-1 bg-[#FFF0F4] rounded-full border border-[#FAD2E1] mt-6">
            <button
              onClick={() => setActiveTab('measurements')}
              className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'measurements'
                  ? 'bg-white text-[#9D174D] shadow-xs'
                  : 'text-[#734E5F] hover:text-[#9D174D]'
              }`}
            >
              دليل أخذ المقاسات المنزلية
            </button>
            <button
              onClick={() => setActiveTab('fabrics')}
              className={`px-6 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeTab === 'fabrics'
                  ? 'bg-white text-[#9D174D] shadow-xs'
                  : 'text-[#734E5F] hover:text-[#9D174D]'
              }`}
            >
              مكتبة الأقمشة والخامات الملكية
            </button>
          </div>
        </div>

        {/* Tab 1: Measurements */}
        {activeTab === 'measurements' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Visual Guide Box (4 cols) */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#FFF5F8] to-[#FFF0F5] p-6 sm:p-8 rounded-3xl border border-[#FAD2E1] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white text-[#DB2777] flex items-center justify-center shadow-xs mb-4">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#2A1823] font-serif-luxury mb-3">
                  نصائح ذهبية لقياس مثالي من أول مرة
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-[#614553] leading-relaxed mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DB2777] font-bold">١.</span>
                    <span>استخدمي شريط قياس مرن (مازورة قماشية) وتأكدي من أنه مستوٍ وليس مائلاً أثناء القياس.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DB2777] font-bold">٢.</span>
                    <span>ارتدي حذاء بكعب مقارب لنفس الكعب الذي سترتدينه مع الفستان لتحديد الطول بدقة.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DB2777] font-bold">٣.</span>
                    <span>قفي بشكل مستقيم وطبيعي دون حبس أنفاسكِ أو شد عضلات البطن لضمان راحة الموديل.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F8E2EA] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#DB2777] shrink-0" />
                <p className="text-xs text-[#734E5F]">
                  هل تفضلين أخذ القياسات حضورياً؟ تفضلي بزيارة صالون السلطانة وسيقوم فريق الخبيرات بأخذ القياسات بدقة متناهية.
                </p>
              </div>
            </div>

            {/* Steps List (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              {MEASUREMENT_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white p-5 rounded-2xl border border-[#F8E2EA] hover:border-[#FAD2E1] hover:shadow-xs transition-all flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFF0F4] text-[#DB2777] font-bold text-xs flex items-center justify-center shrink-0 border border-[#FAD2E1]">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2A1823] mb-1">{step.title}</h4>
                    <p className="text-xs text-[#6E4B5B] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 2: Fabrics Library */}
        {activeTab === 'fabrics' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FABRIC_LIBRARY.map((fab) => (
              <div
                key={fab.id}
                className="bg-white p-6 rounded-3xl border border-[#F8E2EA] hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="w-7 h-7 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: fab.swatchColor }}
                    />
                    <span className="text-[11px] text-[#A66B81] font-medium">{fab.season}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#2A1823] mb-2">{fab.name}</h3>
                  <p className="text-xs text-[#6E4B5B] leading-relaxed mb-4">{fab.description}</p>
                </div>

                <div className="pt-3 border-t border-[#F8E2EA] space-y-1.5 text-[11px] text-[#734E5F]">
                  <div>
                    <span className="font-semibold text-[#9D174D]">الأنسب لـ: </span>
                    <span>{fab.bestFor}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#9D174D]">مستوى الانسيابية: </span>
                    <span>{fab.drapeQuality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
