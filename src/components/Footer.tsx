import React from 'react';
import { Scissors, MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="contact" className="bg-[#FFF5F8] border-t border-[#F8E2EA] text-[#4F3643]">
      
      {/* Guarantees Bar */}
      <div className="border-b border-[#F5DEE7] bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-[#2A1823]">ضمان ضبط المقاس 100%</h4>
              <p className="text-[11px] text-[#8A5A6D]">تعديلات بروفة مجانية حتى الرضا</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center mb-2">
                <Scissors className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-[#2A1823]">خياطة يدوية متقنة</h4>
              <p className="text-[11px] text-[#8A5A6D]">بأيدي خبيرات تفصيل متخصصات</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-[#2A1823]">التزام دقيق بالمواعيد</h4>
              <p className="text-[11px] text-[#8A5A6D]">تسليم في الوقت المتفق عليه دون تأخير</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-[#DB2777]" />
              </div>
              <h4 className="text-xs font-bold text-[#2A1823]">تغليف ملكي فاخر</h4>
              <p className="text-[11px] text-[#8A5A6D]">يصلكِ الفستان في بوكس السلطانة الفاخر</p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white border border-[#FAD2E1] flex items-center justify-center text-[#DB2777] shadow-xs">
                <Scissors className="w-5 h-5 -rotate-45" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#2B1B24] font-serif-luxury">
                  مركز السلطانة
                </span>
                <span className="text-[11px] text-[#A66B81] block">
                  للخياطة وتصميم الأزياء النسائية
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#6E4B5B] leading-relaxed mb-6">
              وجهتكِ الأولى في عالم التفصيل النسائي الرفيع. نجمع بين أصالة الحرفة ولمسات الموضة العصرية لنقدم لكِ إطلالة ملكية تليق بجمالكِ في كل مناسبة.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#DB2777] hover:bg-[#BE185D] rounded-full shadow-xs transition-colors cursor-pointer"
            >
              <span>حجز موعد بروفة في المشغل</span>
            </button>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-[#2A1823] mb-4">أقسام المركز</h4>
            <ul className="space-y-2.5 text-xs text-[#6E4B5B]">
              <li>
                <a href="#collections" className="hover:text-[#DB2777] transition-colors">فساتين السهرة</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DB2777] transition-colors">القفاطين الملكية</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DB2777] transition-colors">العبايات العصرية</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#DB2777] transition-colors">البدلات النسائية</a>
              </li>
              <li>
                <a href="#custom-tailoring" className="hover:text-[#DB2777] transition-colors">حاسبة التفصيل</a>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#2A1823] mb-4">معلومات التواصل والمشغل</h4>
            <div className="space-y-3 text-xs text-[#6E4B5B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DB2777] shrink-0 mt-0.5" />
                <span>الرياض - شارع العليا العام، مجمع برج الورود، الطابق الأول.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DB2777] shrink-0" />
                <span dir="ltr" className="font-mono">+966 11 456 7890</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span dir="ltr" className="font-mono">+966 50 123 4567 (واتساب مباشر)</span>
              </div>
            </div>
          </div>

          {/* Working Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-[#2A1823] mb-4">ساعات العمل والزيارة</h4>
            <div className="space-y-2 text-xs text-[#6E4B5B] bg-white p-4 rounded-2xl border border-[#F8E2EA]">
              <div className="flex justify-between py-1 border-b border-[#F5DEE7]">
                <span>السبت - الخميس:</span>
                <span className="font-semibold text-[#291722]">10:00 ص - 10:00 م</span>
              </div>
              <div className="flex justify-between py-1">
                <span>يوم الجمعة:</span>
                <span className="font-semibold text-[#291722]">4:00 م - 10:30 م</span>
              </div>
              <p className="text-[11px] text-[#DB2777] pt-1">
                * يُفضل حجز موعد مسبق لضمان تفرغ خبيرة التصميم لكِ.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-[#F8E2EA] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A5A6D] gap-4">
          <p>© 2026 مركز السلطانة لتصميم وخياطة الأزياء النسائية. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <span>الخياطة الراقية بمقاييس عالمية</span>
            <span>·</span>
            <span>تصميم حصري وموثق</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
