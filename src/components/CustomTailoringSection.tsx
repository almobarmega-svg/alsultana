import React, { useState, useEffect } from 'react';
import { DressItem } from '../types';
import { Scissors, Ruler, Sparkles, CheckCircle2, MessageCircle, HelpCircle } from 'lucide-react';

interface CustomTailoringSectionProps {
  preselectedDress: DressItem | null;
  onOpenMeasurementGuide: () => void;
}

export const CustomTailoringSection: React.FC<CustomTailoringSectionProps> = ({
  preselectedDress,
  onOpenMeasurementGuide,
}) => {
  const [garmentType, setGarmentType] = useState<string>('evening');
  const [fabricSource, setFabricSource] = useState<'from_atelier' | 'client_provided'>('from_atelier');
  const [fabricType, setFabricType] = useState<string>('حرير ميكادو إيطالي فاخر');
  const [measurementsType, setMeasurementsType] = useState<'standard' | 'custom'>('custom');
  const [standardSize, setStandardSize] = useState<string>('M (38)');
  
  // Custom measurements in cm
  const [bust, setBust] = useState<string>('92');
  const [waist, setWaist] = useState<string>('72');
  const [hips, setHips] = useState<string>('98');
  const [shoulder, setShoulder] = useState<string>('39');
  const [sleeve, setSleeve] = useState<string>('58');
  const [totalLength, setTotalLength] = useState<string>('145');

  const [embroideryLevel, setEmbroideryLevel] = useState<'none' | 'subtle' | 'luxury_hand'>('subtle');
  const [notes, setNotes] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [city, setCity] = useState<string>('الرياض');

  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<string>('');

  // Update if preselected dress changes
  useEffect(() => {
    if (preselectedDress) {
      setGarmentType(preselectedDress.category);
      setNotes(`تفصيل مستوحى من موديل: ${preselectedDress.title}`);
    }
  }, [preselectedDress]);

  // Price Calculation Logic
  const calculateEstimate = () => {
    let basePrice = 750; // base tailoring labor
    if (garmentType === 'evening') basePrice = 1400;
    else if (garmentType === 'caftan') basePrice = 1200;
    else if (garmentType === 'suit') basePrice = 950;
    else if (garmentType === 'abaya') basePrice = 600;

    // Fabric cost if from atelier
    const fabricCost = fabricSource === 'from_atelier' ? 450 : 0;

    // Embroidery level
    let embroideryCost = 0;
    if (embroideryLevel === 'subtle') embroideryCost = 250;
    else if (embroideryLevel === 'luxury_hand') embroideryCost = 650;

    // Custom bespoke pattern making
    const bespokePatternCost = measurementsType === 'custom' ? 100 : 0;

    const total = basePrice + fabricCost + embroideryCost + bespokePatternCost;

    let days = 7;
    if (garmentType === 'evening') days = 10;
    if (embroideryLevel === 'luxury_hand') days += 3;

    return { total, days };
  };

  const { total: calculatedPrice, days: calculatedDays } = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      alert('يرجى كتابة الاسم ورقم الجوال للتواصل');
      return;
    }

    const randomId = `SLT-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(randomId);
    setOrderConfirmed(true);
  };

  const handleWhatsAppSend = () => {
    const measurementsText =
      measurementsType === 'custom'
        ? `المقاسات الدقيقة (سم):\n- الصدر: ${bust} سم\n- الخصر: ${waist} سم\n- الورك: ${hips} سم\n- الكتف: ${shoulder} سم\n- طول الكم: ${sleeve} سم\n- الطول الكلي: ${totalLength} سم`
        : `المقاس القياسي: ${standardSize}`;

    const message = encodeURIComponent(
      `*طلب تفصيل جديد - مركز السلطانة*\n` +
      `رقم الطلب: #${orderId}\n` +
      `اسم العميلة: ${customerName}\n` +
      `رقم التواصل: ${customerPhone}\n` +
      `المدينة: ${city}\n` +
      `نوع القطعة: ${garmentType === 'evening' ? 'فستان سهرة' : garmentType === 'caftan' ? 'قفطان راقٍ' : garmentType === 'abaya' ? 'عباية عصرية' : 'بدلة رسمية'}\n` +
      `مصدر القماش: ${fabricSource === 'from_atelier' ? `من المركز (${fabricType})` : 'قماش خاص من العميلة'}\n` +
      `مستوى التطريز: ${embroideryLevel === 'none' ? 'بدون تطريز' : embroideryLevel === 'subtle' ? 'تطريز ناعم' : 'تطريز يدوي ملكي فاخر'}\n` +
      `${measurementsText}\n` +
      `ملاحظات خاصة: ${notes || 'لا يوجد'}\n` +
      `التكلفة التقديرية: ${calculatedPrice} ريال\n` +
      `مدة الإنجاز المتوقعة: ${calculatedDays} أيام عمل`
    );

    window.open(`https://wa.me/966500000000?text=${message}`, '_blank');
  };

  return (
    <section id="custom-tailoring" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDFE] via-[#FFF5F8] to-[#FFFDFE] border-t border-[#F8E2EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#DB2777] mb-2 tracking-wide">
            <Scissors className="w-4 h-4" />
            <span>خدمة الخياطة والتفصيل المخصص</span>
            <span aria-hidden="true">·</span>
            <span>حاسبة التكلفة الفورية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2A1823] font-serif-luxury tracking-tight mb-4">
            صممي قطعة أحلامكِ بمقاساتكِ الخاصة
          </h2>
          <p className="text-base text-[#6E4B5B] leading-relaxed">
            اختاري نوع التصميم، نوع القماش، وحددي مقاساتكِ بدقة. فريق خبيرات الخياطة في مركز السلطانة سيتولى رسم الباترون وقص القماش وتطريزه بعناية فائقة.
          </p>
        </div>

        {orderConfirmed ? (
          /* Confirmation Success Card */
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#FAD2E1] shadow-xl text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto mb-5 border border-[#A7F3D0]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-semibold text-[#DB2777] tracking-wider uppercase block mb-1">
              تم تسجيل تفاصيل طلبكِ بنجاح
            </span>
            <h3 className="text-2xl font-bold text-[#2A1823] font-serif-luxury mb-3">
              شكراً لكِ، عزيزتي {customerName}
            </h3>
            <p className="text-sm text-[#6E4B5B] leading-relaxed mb-6">
              رقم ملف التفصيل الخاص بكِ هو <span className="font-mono font-bold text-[#DB2777]">#{orderId}</span>. يمكنكِ الآن إرسال بيانات طلبكِ مباشرة إلى مشرفة التفصيل عبر واتساب لمراجعة الأقمشة وتحديد موعد البروفة الأولى.
            </p>

            {/* Receipt Summary Strip */}
            <div className="bg-[#FFF9FB] p-5 rounded-2xl border border-[#F8E2EA] text-right mb-6 space-y-2 text-xs text-[#543846]">
              <div className="flex justify-between items-center py-1 border-b border-[#F5DEE7]">
                <span className="text-[#8A5A6D]">نوع القطعة:</span>
                <span className="font-semibold text-[#291722]">{garmentType === 'evening' ? 'فستان سهرة فاخر' : garmentType === 'caftan' ? 'قفطان راقٍ' : garmentType === 'abaya' ? 'عباية عصرية' : 'بدلة رسمية'}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#F5DEE7]">
                <span className="text-[#8A5A6D]">مصدر القماش:</span>
                <span className="font-semibold text-[#291722]">{fabricSource === 'from_atelier' ? `من تشكيلة السلطانة (${fabricType})` : 'قماش خاص من العميلة'}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#F5DEE7]">
                <span className="text-[#8A5A6D]">نمط القياس:</span>
                <span className="font-semibold text-[#291722]">{measurementsType === 'custom' ? 'مقاسات شخصية دقيقة (مفصلة)' : `مقاس قياسي ${standardSize}`}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#F5DEE7]">
                <span className="text-[#8A5A6D]">التكلفة التقديرية الشاملة:</span>
                <span className="font-bold text-[#9D174D] font-mono text-sm">{calculatedPrice.toLocaleString()} ريال</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#8A5A6D]">مدة العمل المتوقعة:</span>
                <span className="font-semibold text-[#291722]">{calculatedDays} أيام عمل</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-full shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال تفاصيل التفصيل عبر واتساب</span>
              </button>
              <button
                onClick={() => setOrderConfirmed(false)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-[#734E5F] bg-white border border-[#FAD2E1] rounded-full hover:bg-[#FFF5F8] transition-colors cursor-pointer"
              >
                تعديل الطلب أو حساب موديل آخر
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Form & Cost Calculator */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Fields (8 cols) */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#F8E2EA] shadow-sm space-y-8">
              
              {/* Step 1: Garment Type */}
              <div>
                <label className="text-sm font-bold text-[#2A1823] flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#DB2777] text-xs font-bold flex items-center justify-center border border-[#FAD2E1]">
                    ١
                  </span>
                  نوع القطعة المراد تفصيلها:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'evening', label: 'فستان سهرة' },
                    { id: 'caftan', label: 'قفطان ملكي' },
                    { id: 'abaya', label: 'عباية عصرية' },
                    { id: 'suit', label: 'بدلة نسائية' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGarmentType(item.id)}
                      className={`p-3 text-xs sm:text-sm font-semibold rounded-2xl border text-center transition-all cursor-pointer ${
                        garmentType === item.id
                          ? 'border-[#DB2777] bg-[#FFF0F4] text-[#9D174D] shadow-xs'
                          : 'border-[#F4DCE5] bg-white text-[#6E4B5B] hover:bg-[#FFF9FB]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Fabric Selection */}
              <div>
                <label className="text-sm font-bold text-[#2A1823] flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#DB2777] text-xs font-bold flex items-center justify-center border border-[#FAD2E1]">
                    ٢
                  </span>
                  مصدر ونوع القماش:
                </label>
                
                <div className="flex gap-4 mb-3">
                  <label className="flex items-center gap-2 text-xs sm:text-sm text-[#543846] cursor-pointer">
                    <input
                      type="radio"
                      name="fabricSource"
                      checked={fabricSource === 'from_atelier'}
                      onChange={() => setFabricSource('from_atelier')}
                      className="accent-[#DB2777]"
                    />
                    <span>من تشكيلة مركز السلطانة الفاخرة</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs sm:text-sm text-[#543846] cursor-pointer">
                    <input
                      type="radio"
                      name="fabricSource"
                      checked={fabricSource === 'client_provided'}
                      onChange={() => setFabricSource('client_provided')}
                      className="accent-[#DB2777]"
                    />
                    <span>سأحضر قماشي الخاص للمشغل</span>
                  </label>
                </div>

                {fabricSource === 'from_atelier' && (
                  <div className="bg-[#FFF9FB] p-3.5 rounded-2xl border border-[#F8E2EA]">
                    <span className="text-xs text-[#8A5A6D] block mb-2 font-medium">نوع القماش المختار من المركز:</span>
                    <select
                      value={fabricType}
                      onChange={(e) => setFabricType(e.target.value)}
                      className="w-full text-xs sm:text-sm bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:ring-2 focus:ring-[#DB2777]/30"
                    >
                      <option value="حرير ميكادو إيطالي فاخر">حرير ميكادو إيطالي فاخر (للفساتين الهيكلية والمناسبات)</option>
                      <option value="شيفون جورجيت حريري نقي">شيفون جورجيت حريري نقي (انسيابي ناعم جداً)</option>
                      <option value="كريب صالونا الملكي">كريب صالونا الملكي (بارد ومقاوم للتجعد)</option>
                      <option value="تول فرنسي مطرز بالخرز والكريستال">تول فرنسي مطرز بالخرز والكريستال</option>
                      <option value="صوف بارد مع ساتان ناعم">صوف بارد ناعم (للبدلات الراقية)</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Step 3: Measurements Guide & Inputs */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <label className="text-sm font-bold text-[#2A1823] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#DB2777] text-xs font-bold flex items-center justify-center border border-[#FAD2E1]">
                      ٣
                    </span>
                    تحديد القياسات:
                  </label>
                  
                  <button
                    type="button"
                    onClick={onOpenMeasurementGuide}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DB2777] hover:underline cursor-pointer"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>كيف آخذ مقاساتي بدقة؟ (الدليل الإرشادي)</span>
                  </button>
                </div>

                {/* Measurements toggle */}
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setMeasurementsType('custom')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      measurementsType === 'custom'
                        ? 'border-[#DB2777] bg-[#FFF0F4] text-[#9D174D]'
                        : 'border-[#F3DEE6] bg-white text-[#6E4B5B]'
                    }`}
                  >
                    مقاسات شخصية دقيقة بالسنتيمتر (موصى به)
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeasurementsType('standard')}
                    className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      measurementsType === 'standard'
                        ? 'border-[#DB2777] bg-[#FFF0F4] text-[#9D174D]'
                        : 'border-[#F3DEE6] bg-white text-[#6E4B5B]'
                    }`}
                  >
                    اختيار مقاس قياسي جاهز (S - XXL)
                  </button>
                </div>

                {measurementsType === 'custom' ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#FFF9FB] p-4 rounded-2xl border border-[#F8E2EA]">
                    <div>
                      <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">الصدر (Bust cm)</label>
                      <input
                        type="number"
                        value={bust}
                        onChange={(e) => setBust(e.target.value)}
                        className="w-full text-xs bg-white border border-[#F4DCE5] rounded-lg px-2.5 py-1.5 font-mono text-center focus:outline-none focus:border-[#DB2777]"
                        placeholder="92"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">الخصر (Waist cm)</label>
                      <input
                        type="number"
                        value={waist}
                        onChange={(e) => setWaist(e.target.value)}
                        className="w-full text-xs bg-white border border-[#F4DCE5] rounded-lg px-2.5 py-1.5 font-mono text-center focus:outline-none focus:border-[#DB2777]"
                        placeholder="72"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">الورك (Hips cm)</label>
                      <input
                        type="number"
                        value={hips}
                        onChange={(e) => setHips(e.target.value)}
                        className="w-full text-xs bg-white border border-[#F4DCE5] rounded-lg px-2.5 py-1.5 font-mono text-center focus:outline-none focus:border-[#DB2777]"
                        placeholder="98"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">عرض الكتف (cm)</label>
                      <input
                        type="number"
                        value={shoulder}
                        onChange={(e) => setShoulder(e.target.value)}
                        className="w-full text-xs bg-white border border-[#F4DCE5] rounded-lg px-2.5 py-1.5 font-mono text-center focus:outline-none focus:border-[#DB2777]"
                        placeholder="39"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">طول الكم (cm)</label>
                      <input
                        type="number"
                        value={sleeve}
                        onChange={(e) => setSleeve(e.target.value)}
                        className="w-full text-xs bg-white border border-[#F4DCE5] rounded-lg px-2.5 py-1.5 font-mono text-center focus:outline-none focus:border-[#DB2777]"
                        placeholder="58"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">الطول الكلي المطلوب (cm)</label>
                      <input
                        type="number"
                        value={totalLength}
                        onChange={(e) => setTotalLength(e.target.value)}
                        className="w-full text-xs bg-white border border-[#F4DCE5] rounded-lg px-2.5 py-1.5 font-mono text-center focus:outline-none focus:border-[#DB2777]"
                        placeholder="145"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-5 gap-2 bg-[#FFF9FB] p-4 rounded-2xl border border-[#F8E2EA]">
                    {['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setStandardSize(sz)}
                        className={`py-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                          standardSize === sz
                            ? 'border-[#DB2777] bg-[#DB2777] text-white shadow-xs'
                            : 'border-[#F4DCE5] bg-white text-[#6E4B5B] hover:bg-[#FFF0F4]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Step 4: Embroidery & Hand Finish */}
              <div>
                <label className="text-sm font-bold text-[#2A1823] flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#DB2777] text-xs font-bold flex items-center justify-center border border-[#FAD2E1]">
                    ٤
                  </span>
                  مستوى التطريز والشك اليدوي:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'none', label: 'قصة ناعمة بدون تطريز', desc: 'تركيز على انسيابية القماش وخياطة خطوط الموديل' },
                    { id: 'subtle', label: 'تطريز ناعم خفيف (+250 ريال)', desc: 'لمسات كريستالية أو خرزية على الأكمام أو العنق' },
                    { id: 'luxury_hand', label: 'تطريز يدوي ملكي كامل (+650 ريال)', desc: 'شك يدوي مكثف بخيوط الحرير والخرز الحر' },
                  ].map((emb) => (
                    <button
                      key={emb.id}
                      type="button"
                      onClick={() => setEmbroideryLevel(emb.id as any)}
                      className={`p-3 text-right rounded-2xl border transition-all cursor-pointer ${
                        embroideryLevel === emb.id
                          ? 'border-[#DB2777] bg-[#FFF0F4] text-[#9D174D]'
                          : 'border-[#F4DCE5] bg-white text-[#6E4B5B] hover:bg-[#FFF9FB]'
                      }`}
                    >
                      <span className="text-xs font-bold block mb-1">{emb.label}</span>
                      <span className="text-[11px] text-[#8A5A6D] block leading-snug">{emb.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Contact Details */}
              <div className="pt-4 border-t border-[#F8E2EA]">
                <label className="text-sm font-bold text-[#2A1823] block mb-3">
                  معلومات التواصل لاستلام الموديل وحجز البروفة:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">اسم العميلة الكريمة *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="مثال: سارة العبدالله"
                      className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">رقم الجوال (واتساب) *</label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">المدينة</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="الرياض"
                      className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#6E4B5B] block mb-1">ملاحظات إضافية أو تفاصيل خاصة ترغبين بها:</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="اكتبي أي تعديل ترغبين به، كنوع السحاب أو طول الذيل أو لون القماش المفضل..."
                    className="w-full text-xs bg-white border border-[#F3CAD8] rounded-xl px-3 py-2 text-[#291722] focus:outline-none focus:border-[#DB2777]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-[#DB2777] to-[#BE185D] hover:from-[#BE185D] hover:to-[#9D174D] rounded-full shadow-md transition-all cursor-pointer"
              >
                تأكيد طلب التفصيل وحساب الفاتورة التقديرية
              </button>

            </form>

            {/* Instant Estimator Sticky Box (4 cols) */}
            <div className="lg:col-span-4 sticky top-28 bg-white rounded-3xl p-6 border-2 border-[#FAD2E1] shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#DB2777] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>ملخص التكلفة التقديرية الفورية</span>
              </div>
              <h3 className="text-xl font-bold text-[#2A1823] font-serif-luxury mb-4">
                مركز السلطانة للخياطة الراقية
              </h3>

              <div className="space-y-3 text-xs text-[#543846] pb-4 border-b border-[#F8E2EA]">
                <div className="flex justify-between items-center">
                  <span>القطعة:</span>
                  <span className="font-semibold">{garmentType === 'evening' ? 'فستان سهرة' : garmentType === 'caftan' ? 'قفطان راقٍ' : garmentType === 'abaya' ? 'عباية عصرية' : 'بدلة نسائية'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>مصدر القماش:</span>
                  <span className="font-semibold">{fabricSource === 'from_atelier' ? 'من مشغل المركز' : 'قماش العميلة'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>طريقة القياس:</span>
                  <span className="font-semibold">{measurementsType === 'custom' ? 'باترون شخصي مفصل' : 'مقاس قياسي'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>مستوى التطريز:</span>
                  <span className="font-semibold">{embroideryLevel === 'none' ? 'سادة ناعم' : embroideryLevel === 'subtle' ? 'تطريز خفيف' : 'تطريز ملكي كامل'}</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="py-4 border-b border-[#F8E2EA]">
                <span className="text-xs text-[#8A5A6D] block mb-1">المجموع التقديري:</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#9D174D] font-mono tabular-nums">
                    {calculatedPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-[#6E4B5B]">ريال سعودي</span>
                </div>
                <span className="text-[11px] text-[#A66B81] mt-1 block">يشمل بروفة القياس الأولى وتعديلات اللمسة النهائية</span>
              </div>

              {/* Turnaround Time */}
              <div className="py-3 flex items-center justify-between text-xs text-[#543846]">
                <span>مدة التنفيذ التقريبية:</span>
                <span className="font-bold text-[#DB2777]">{calculatedDays} أيام عمل</span>
              </div>

              {/* Reassurances list */}
              <div className="mt-4 pt-4 border-t border-[#F8E2EA] space-y-2 text-[11px] text-[#734E5F]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>ضمان تناسق القماش ودقة الخياطة 100%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>إمكانية تعديل القياس أثناء البروفة الأولى مجاناً</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                  <span>استلام في بوكس فاخر خاص بمركز السلطانة</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
