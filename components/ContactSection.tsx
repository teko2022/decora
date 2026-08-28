import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  ShieldCheck,
  Instagram,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/weddingData';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const handleDirectInstagram = () => {
    window.open(BUSINESS_INFO.instagramUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7EFCF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FCEEE9]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>تواصل فوري واستشارة مجانية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            تواصل معنا لتصميم مناسبتك
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#66564B] leading-relaxed">
            يسعدنا استقبال جميع استفساراتكم وتفاصيل مناسبتكم مباشرة عبر حسابنا الرسمي على إنستغرام، وسنكون معكِ خطوة بخطوة لتحويل حلمك إلى حقيقة ساحرة ✨
          </p>
        </div>

        {/* Centered Main Contact Card */}
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Direct Instagram Hero Card */}
          <div className="bg-gradient-to-br from-[#E1306C]/10 via-[#E1306C]/5 to-white rounded-3xl p-8 sm:p-10 border border-[#E1306C]/30 shadow-xl text-center space-y-6">
            
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF] text-white flex items-center justify-center text-3xl shadow-xl mx-auto">
              <Instagram className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2320]">
                تواصل مباشر عبر Instagram
              </h3>
              <p className="text-sm text-[#5C4E43] mt-2">
                رد سريع واستشارات فورية مع منسقة الديكور
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#57493F] leading-relaxed max-w-xl mx-auto">
              أرسلي لنا صور قاعتك أو غرفتك، تاريخ المناسبة، والرؤية التي تحلمين بها، وسنزودكِ بالباقات المتاحة والتصميمات الأنسب فوراً!
            </p>

            <button
              onClick={handleDirectInstagram}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#F58529] via-[#D62976] to-[#962FBF] text-white font-bold text-base sm:text-lg shadow-xl hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 cursor-pointer"
              id="contact-direct-instagram-btn"
            >
              <Instagram className="w-6 h-6" />
              <span>محادثة عبر Instagram {BUSINESS_INFO.instagramHandle}</span>
              <ExternalLink className="w-5 h-5 opacity-80" />
            </button>
          </div>

          {/* Business Features Grid */}
          <div className="bg-white rounded-3xl p-8 border border-[#EADBCE] shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-right">
            
            <div className="flex items-start gap-3.5 text-xs text-[#5C4E43]">
              <Clock className="w-6 h-6 text-[#C5A028] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2B2320] text-sm mb-1">ساعات العمل:</strong>
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-xs text-[#5C4E43]">
              <MapPin className="w-6 h-6 text-[#C5A028] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2B2320] text-sm mb-1">نطاق التغطية والقاعات:</strong>
                <span>{BUSINESS_INFO.city}</span>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-xs text-[#5C4E43]">
              <ShieldCheck className="w-6 h-6 text-[#C5A028] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#2B2320] text-sm mb-1">خدمة متميزة:</strong>
                <span>خصوصية تامة واهتمام بأدق تفاصيل مناسبتك</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
