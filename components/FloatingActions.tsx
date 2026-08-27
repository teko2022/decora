import React from 'react';
import { Instagram, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/weddingData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3 items-end" dir="ltr">
      
      {/* Floating Instagram with Pulsing Glow */}
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        title="تواصل مباشر عبر إنستغرام"
        id="floating-instagram"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#D62976] opacity-75 animate-ping pointer-events-none" />

        <Instagram className="w-7 h-7 relative z-10" />

        {/* Hover Tooltip */}
        <span className="absolute left-16 bg-[#2B2320] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md flex items-center gap-1.5" dir="rtl">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>تواصل عبر إنستغرام @decora_art111</span>
        </span>
      </a>

    </div>
  );
};
