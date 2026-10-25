import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [serviceType, setServiceType] = useState('أخذ مقاسات وتصميم موديل جديد');
  const [date, setDate] = useState('2026-10-27');
  const [timeSlot, setTimeSlot] = useState('الفترة المسائية (5:00 م - 7:00 م)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('يرجى تعبئة الاسم ورقم الجوال');
      return;
    }
    const code = `SLT-APT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    setBooked(true);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `*تأكيد موعد في مركز السلطانة*\n` +
      `رمز الحجز: ${bookingCode}\n` +
      `الاسم: ${name}\n` +
      `رقم الجوال: ${phone}\n` +
      `نوع الخدمة: ${serviceType}\n` +
      `التاريخ: ${date}\n` +
      `الوقت المفضل: ${timeSlot}\n` +
      `ملاحظات: ${notes || 'لا يوجد'}`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#FAD2E1] z-10 my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 rounded-full bg-[#FFF0F4] text-[#543846] hover:text-[#DB2777] transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto mb-4 border border-[#A7F3D0]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-semibold text-[#DB2777] tracking-wider block mb-1">
              تم تثبيت موعدكِ بنجاح
            </span>
            <h3 className="text-2xl font-bold text-[#2A1823] font-serif-luxury mb-2">
              أهلاً بكِ في مركز السلطانة
            </h3>
            <p className="text-xs text-[#6E4B5B] leading-relaxed mb-6">
              تم حجز موعدكِ تحت الرمز <span className="font-mono font-bold text-[#DB2777]">{bookingCode}</span>. فريق الاستقبال بانتظاركِ في التاريخ والوقت المحددين.
            </p>

            <div className="bg-[#FFF9FB] p-4 rounded-2xl border border-[#F8E2EA] text-right mb-6 text-xs text-[#543846] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#8A5A6D]">الخدمة:</span>
                <span className="font-semibold text-[#291722]">{serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A5A6D]">التاريخ:</span>
                <span className="font-semibold text-[#291722]">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A5A6D]">الفترة:</span>
                <span className="font-semibold text-[#291722]">{timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8A5A6D]">الموقع:</span>
                <span className="font-semibold text-[#291722]">فرع صالون السلطانة - العليا، الرياض</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleWhatsAppShare}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-full shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>إرسال تذكرة الموعد عبر واتساب للمشغل</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs font-semibold text-[#734E5F] bg-white border border-[#FAD2E1] rounded-full hover:bg-[#FFF5F8] cursor-pointer"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] text-[#DB2777] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2A1823] font-serif-luxury">
                  حجز موعد قياس واستشارة
                </h3>
                <p className="text-xs text-[#8A5A6D]">صالون ومشغل مركز السلطانة للأزياء النسائية</p>
              </div>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#2A1823] block mb-1">نوع الموعد المطلوب *</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                >
                  <option value="أخذ مقاسات وتصميم موديل جديد">أخذ مقاسات وتصميم موديل جديد</option>
                  <option value="بروفة أولى وتجربة القياس">بروفة أولى وتجربة قياس الفستان</option>
                  <option value="استلام نهائي وتعديل أخير">استلام نهائي وتعديل أخير</option>
                  <option value="استشارة واختيار أقمشة مع المصممة">استشارة واختيار أقمشة مع المصممة</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#2A1823] block mb-1">تاريخ الزيارة المفضل *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#2A1823] block mb-1">الفترة الزمنية *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                  >
                    <option value="الفترة الصباحية (10:00 ص - 1:00 م)">الصباحية (10:00 ص - 1:00 م)</option>
                    <option value="الفترة المسائية (5:00 م - 7:00 م)">المسائية الأولى (5:00 م - 7:00 م)</option>
                    <option value="الفترة المسائية (7:30 م - 10:00 م)">المسائية الثانية (7:30 م - 10:00 م)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2A1823] block mb-1">اسم العميلة الكريمة *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="مثال: د. مها الشمري"
                  className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#2A1823] block mb-1">رقم الجوال لتأكيد الحجز *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XXXXXXXX"
                  className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#2A1823] block mb-1">ملاحظات للمصممة (اختياري)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="هل تودين إحضار قماشكِ الخاص؟ موعد مناسبتكِ..."
                  className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                />
              </div>

              <div className="flex items-center gap-2 p-3 bg-[#FFF9FB] rounded-xl border border-[#F8E2EA] text-[11px] text-[#734E5F]">
                <MapPin className="w-4 h-4 text-[#DB2777] shrink-0" />
                <span>الموقع: الرياض - طريق العليا العام، برج الورود، الطابق الأول.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                تأكيد حجز الموعد
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
