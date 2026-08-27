import React from 'react';
import { MessageCircle, Instagram, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/weddingData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const handleWhatsAppClick = () => {
    const defaultMsg = encodeURIComponent(
      `مرحباً Decora Art ✨\nأرغب في الاستفسار عن تفاصيل وحجز ديكور لمناسبتي القادمة.`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 items-end" dir="ltr">
      
      {/* Floating Instagram */}
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group"
        title="حساب إنستغرام @decora_art111"
        id="floating-instagram"
      >
        <Instagram className="w-6 h-6" />
        <span className="absolute left-14 bg-[#2B2320] text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md" dir="rtl">
          تابعونا على Instagram
        </span>
      </a>

      {/* Floating WhatsApp with Pulsing Glow */}
      <button
        onClick={handleWhatsAppClick}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group cursor-pointer"
        title="تواصل مباشر عبر الواتساب"
        id="floating-whatsapp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute left-16 bg-[#2B2320] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md flex items-center gap-1.5" dir="rtl">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>محادثة واتساب فورية</span>
        </span>
      </button>

    </div>
  );
};
