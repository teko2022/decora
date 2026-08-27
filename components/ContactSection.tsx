import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  MessageCircle, 
  Send, 
  User, 
  Phone, 
  Calendar, 
  MapPin, 
  FileText, 
  Heart, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Instagram
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/weddingData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    eventType: preselectedService || 'ديكور وتنظيم الأفراح 💍',
    eventDate: '',
    location: '',
    budgetRange: 'مناسبة ومرنة',
    additionalDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, eventType: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#E6C875', '#F6DAD1', '#FFFFFF', '#C5A028']
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('الرجاء إدخال الاسم ورقم الهاتف للمتابعة');
      return;
    }

    setIsSubmitting(true);
    
    // Construct automated Instagram Message
    const message = 
      `مرحباً Decora Art ✨\n` +
      `أرغب في حجز وتنسيق مناسبة بالبيانات التالية:\n\n` +
      `👤 الاسم: ${formData.name}\n` +
      `📱 رقم الهاتف: ${formData.phone}\n` +
      `🎉 نوع المناسبة: ${formData.eventType}\n` +
      `📅 تاريخ المناسبة: ${formData.eventDate || 'لم يحدد بعد'}\n` +
      `📍 مكان المناسبة (المدينة / القاعة): ${formData.location || 'غير محدد'}\n` +
      `💰 الميزانية المقترحة: ${formData.budgetRange}\n` +
      `📝 تفاصيل ورؤية إضافية: ${formData.additionalDetails || 'لا توجد تفاصيل إضافية'}\n\n` +
      `أرجو التواصل معي لتأكيد الحجز وتفاصيل الديكور. شكراً لكم!`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      triggerConfetti();

      window.open(BUSINESS_INFO.instagramUrl, '_blank');
    }, 600);
  };

  const handleDirectInstagram = () => {
    window.open(BUSINESS_INFO.instagramUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7EFCF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FCEEE9]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>حجز فوري واستشارة مجانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            ابدئي في تصميم مناسبتك دلوقتي
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#66564B] leading-relaxed">
            املأي النموذج التالي أو تواصلي معنا مباشرة عبر حسابنا على إنستغرام، وسنكون معكِ خطوة بخطوة لتحويل حلمك إلى حقيقة ساحرة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details & Direct Instagram Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Instagram Hero Card */}
            <div className="bg-gradient-to-br from-[#E1306C]/10 via-[#E1306C]/5 to-transparent rounded-3xl p-8 border border-[#E1306C]/30 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF] text-white flex items-center justify-center text-2xl shadow-lg shrink-0">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2320]">
                    تواصلي معنا عبر Instagram
                  </h3>
                  <p className="text-xs text-[#5C4E43] mt-0.5">
                    رد سريع وتنسيق فوري عبر الرسائل المباشرة
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#57493F] leading-relaxed mb-6">
                هل تفضلين المحادثة السريعة وإرسال صور ومقاسات القاعة أو الروم مباشرة؟ اضغطي الزر بالأسفل للذهاب لصفحتنا وتواصل معنا فوراً.
              </p>

              <button
                onClick={handleDirectInstagram}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#D62976] to-[#962FBF] text-white font-bold text-base shadow-lg hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer"
                id="contact-direct-instagram-btn"
              >
                <Instagram className="w-6 h-6" />
                <span>محادثة عبر Instagram @decora_art111</span>
              </button>
            </div>

            {/* Business Features */}
            <div className="bg-white rounded-3xl p-8 border border-[#EADBCE] shadow-sm space-y-5">
              <h4 className="text-base font-bold text-[#2B2320] pb-3 border-b border-[#F2ECE1]">
                معلومات ومواعيد الخدمة
              </h4>

              <div className="flex items-start gap-3.5 text-xs text-[#5C4E43]">
                <Clock className="w-5 h-5 text-[#C5A028] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#2B2320] text-sm">ساعات العمل:</strong>
                  <span>{BUSINESS_INFO.workingHours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-[#5C4E43]">
                <MapPin className="w-5 h-5 text-[#C5A028] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#2B2320] text-sm">نطاق التغطية والقاعات:</strong>
                  <span>{BUSINESS_INFO.city}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs text-[#5C4E43]">
                <Instagram className="w-5 h-5 text-[#E1306C] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#2B2320] text-sm">حساب الإنستغرام الرسمي:</strong>
                  <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#C5A028] font-bold underline">
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F2ECE1] flex items-center gap-2 text-xs text-[#866616] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#C5A028]" />
                <span>خصوصية تامة لبياناتك وتفاصيل مناسبتك</span>
              </div>
            </div>

          </div>

          {/* Booking Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] shadow-xl relative">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-20 h-20 rounded-full bg-[#FAF5EE] text-[#C5A028] mx-auto flex items-center justify-center text-3xl shadow-inner border border-[#D4AF37]/30">
                    💍
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2320]">
                    تم استلام طلبك بنجاح!
                  </h3>
                  <p className="text-sm text-[#66564B] max-w-md mx-auto leading-relaxed">
                    تم تحويلك لصفحة إنستغرام لفتح المحادثة وتأكيد الحجز فوراً مع منسقة الديكور.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-[#D4AF37] text-[#866616] hover:bg-[#FAF8F5] text-xs font-bold transition-all"
                    >
                      إرسال طلب آخر
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6" id="booking-form">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE1]">
                    <span className="text-base font-bold text-[#2B2320]">نموذج حجز واستفسار تفصيلي</span>
                    <span className="text-xs text-[#C5A028] font-bold">خطوة واحدة فقط ✨</span>
                  </div>

                  {/* 1. Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A3E38] mb-2 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#C5A028]" />
                        <span>الاسم الكريم *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: سارة محمد"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all"
                        id="input-name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A3E38] mb-2 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-[#C5A028]" />
                        <span>رقم التواصل / الهاتف *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        placeholder="010XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] text-right focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all"
                        id="input-phone"
                      />
                    </div>
                  </div>

                  {/* 2. Event Type & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A3E38] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
                        <span>نوع المناسبة *</span>
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => handleChange('eventType', e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all"
                        id="select-event-type"
                      >
                        <option value="ديكور وتنظيم الأفراح 💍">ديكور وتنظيم الأفراح 💍</option>
                        <option value="ديكور حفلات الخطوبة 🌸">ديكور حفلات الخطوبة 🌸</option>
                        <option value="تجهيز وديكور رومات العرايس 👰">تجهيز وديكور رومات العرايس 👰</option>
                        <option value="كوشات وأركان تصوير 📸">كوشات وأركان تصوير 📸</option>
                        <option value="تنسيق طاولات وورود 🌹">تنسيق طاولات وورود 🌹</option>
                        <option value="ديكور مناسبة خاصة مخصصة ✨">ديكور مناسبة خاصة مخصصة ✨</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A3E38] mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A028]" />
                        <span>تاريخ المناسبة التقريبي</span>
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleChange('eventDate', e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all"
                        id="input-date"
                      />
                    </div>
                  </div>

                  {/* 3. Location & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#4A3E38] mb-2 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A028]" />
                        <span>مكان المناسبة / القاعة</span>
                      </label>
                      <input
                        type="text"
                        placeholder="مثال: المنصورة - القاعة الماسية / قاعة مارشال / طلخا"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all"
                        id="input-location"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#4A3E38] mb-2">
                        الميزانية المقترحة
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => handleChange('budgetRange', e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all"
                        id="select-budget"
                      >
                        <option value="باقة ناعمة اقتصادية">باقة ناعمة واقتصادية</option>
                        <option value="باقة مميزة متكاملة">باقة مميزة متكاملة</option>
                        <option value="باقة VIP ملكية فاخرة">باقة VIP ملكية فاخرة</option>
                        <option value="حسب التصميم والاقتراح">حسب التصميم والاقتراح</option>
                      </select>
                    </div>
                  </div>

                  {/* 4. Additional Details */}
                  <div>
                    <label className="block text-xs font-bold text-[#4A3E38] mb-2 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#C5A028]" />
                      <span>تفاصيل إضافية ورؤيتك للديكور</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="اذكري أي ألوان مفضلة، عدد الطاولات، متطلبات خاصة بالعروس..."
                      value={formData.additionalDetails}
                      onChange={(e) => handleChange('additionalDetails', e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#EADBCE] rounded-xl px-4 py-3 text-sm text-[#2B2320] focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none transition-all resize-none"
                      id="input-details"
                    />
                  </div>

                  {/* Large Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E6C875] to-[#B89332] text-[#2B2320] font-bold text-base shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer pulse-gold disabled:opacity-50"
                    id="submit-booking-btn"
                  >
                    {isSubmitting ? (
                      <span>جاري تحويل طلبك...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>إرسال الطلب والتواصل على Instagram</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-[#7A6A58]">
                    ✨ بمجرد الإرسال يمكنك التواصل معنا على حساب إنستغرام لسرعة الرد والمتابعة.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
