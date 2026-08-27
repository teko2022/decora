import React from 'react';
import { Sparkles, Instagram, MessageCircle, Heart, Phone, Mail, ArrowUp, Crown } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/weddingData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1816] text-[#E0D8D0] pt-16 pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden" dir="rtl">
      
      {/* Subtle Glow */}
      <div className="absolute -top-24 right-1/2 translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B89332] p-[2px]">
                <div className="w-full h-full rounded-full bg-[#2B2320] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#E6C875]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Decora Art
                </h3>
                <span className="text-xs text-[#C5A028] font-semibold">
                  ديكور وتنظيم الأفراح والمناسبات
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B8ACA0] leading-relaxed max-w-md">
              نصنع من مناسبتك ذكرى استثنائية تفوق الخيال، بتصاميم كوشات، رومات عرايس، ورود طبيعية وتنسيقات ملكية تلبي أرقى الأذواق.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#E1306C] text-white text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F58529] via-[#D62976] to-[#962FBF] text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>تواصل على إنستغرام</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-sm font-bold text-[#F7EFCF] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>خدماتنا الفاخرة</span>
            </h4>
            <ul className="space-y-2 text-xs text-[#B8ACA0]">
              {SERVICES_DATA.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#E6C875] transition-colors flex items-center gap-1.5">
                    <span>{s.emoji}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3 text-right">
            <h4 className="text-sm font-bold text-[#F7EFCF] uppercase tracking-wider mb-2">
              تواصل ومتابعة
            </h4>
            <p className="text-xs text-[#B8ACA0] leading-relaxed">
              يسعدنا استقبال استفساراتكم وحجوزاتكم يومياً على مدار الأسبوع عبر حسابنا الرسمي.
            </p>
            
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-[#E6C875]">
                <Instagram className="w-4 h-4 text-[#E1306C]" />
                <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram: {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#E6C875]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>الرسائل المباشرة على إنستغرام متاحة 24/7</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7D71]">
          <div className="flex items-center gap-1">
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()}</span>
            <strong className="text-white">Decora Art ({BUSINESS_INFO.instagramHandle})</strong>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#2B2320] text-white transition-all flex items-center gap-2 cursor-pointer"
            id="back-to-top-btn"
          >
            <span>للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
