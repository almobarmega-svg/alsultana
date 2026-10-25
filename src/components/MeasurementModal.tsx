import React from 'react';
import { X, Ruler, CheckCircle2 } from 'lucide-react';
import { MEASUREMENT_STEPS } from '../data/fashionData';

interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementModal: React.FC<MeasurementModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />
      
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#FAD2E1] z-10 my-8 max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-[#FFF0F4] text-[#543846] hover:text-[#DB2777] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center">
            <Ruler className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#2A1823] font-serif-luxury">
              دليل قياسات مركز السلطانة
            </h3>
            <p className="text-xs text-[#8A5A6D]">كيفية أخذ المقاسات بالسنتيمتر للحصول على نتيجة مثالية</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {MEASUREMENT_STEPS.map((s) => (
            <div key={s.step} className="p-4 rounded-2xl bg-[#FFF9FB] border border-[#F8E2EA]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-[#DB2777] text-white text-xs font-bold flex items-center justify-center">
                  {s.step}
                </span>
                <span className="text-sm font-bold text-[#2A1823]">{s.title}</span>
              </div>
              <p className="text-xs text-[#6E4B5B] leading-relaxed mr-8">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
          <p className="text-xs text-[#166534] leading-relaxed">
            ملاحظة من المشغل: لا تقلقي من وجود فرق بسيط بنصف سنتيمتر؛ نحن نترك هامشاً داخلياً (Inside Margin) بحدود 4 سم في كل قطعة ليتيح التوسيع أو التضييق بسهولة تامة.
          </p>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-full shadow-xs cursor-pointer"
          >
            فهمت، العودة لنموذج التفصيل
          </button>
        </div>

      </div>
    </div>
  );
};
