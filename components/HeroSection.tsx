import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle, Eye, Star, Heart, Award, ShieldCheck, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/weddingData';

interface HeroSectionProps {
  onContactClick: () => void;
  onGalleryClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onGalleryClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="ديكورات وتنسيق أفراح فاخرة"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
        />
        {/* Multilayer Soft Gradient Overlays for Readability and Elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#2B2320]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#2B2320]/40 to-[#1F1816]/80" />
      </div>

      {/* Floating Decorative Gold Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-[#FCEEE9]/20 blur-3xl pointer-events-none animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Brand Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#D4AF37]/40 text-[#F7EFCF] text-xs sm:text-sm font-semibold mb-6 shadow-lg"
          id="hero-badge"
        >
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Decora Art | إبداع لا متناهٍ في كل تفصيلة</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-white/90">@decora_art111</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.3] sm:leading-[1.25] mb-6 drop-shadow-md text-[#FFFDF9]"
          id="hero-headline"
        >
          خلي يومك المميز أجمل مع <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#F7EFCF] via-[#E6C875] to-[#D4AF37] bg-clip-text text-transparent underline decoration-[#D4AF37]/40 decoration-wavy underline-offset-8">
            أجمل تفاصيل الديكور ✨💍
          </span>
        </motion.h1>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#F5EDE3] max-w-3xl mx-auto leading-relaxed mb-10 font-normal drop-shadow"
          id="hero-description"
        >
          نصمم وننسق ديكورات الأفراح والخطوبات وتجهيز رومات العرايس بأفكار مميزة تناسب ذوقك وميزانيتك.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12"
        >
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-[#D4AF37] via-[#E6C875] to-[#C5A028] text-[#2B2320] shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group cursor-pointer pulse-gold"
            id="hero-cta-contact"
          >
            <MessageCircle className="w-5 h-5 text-[#2B2320] group-hover:rotate-12 transition-transform" />
            <span>تواصلي معنا</span>
          </button>

          <button
            onClick={onGalleryClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/40 shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            id="hero-cta-gallery"
          >
            <Eye className="w-5 h-5 text-white/90" />
            <span>شاهدي أعمالنا</span>
          </button>
        </motion.div>

        {/* Social Proof & Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/20"
        >
          <div className="bg-black/30 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-right">
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#E6C875]">
              <Star className="w-5 h-5 fill-[#E6C875]" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">100%</div>
              <div className="text-xs text-[#E6DFD5]">تقييمات العرائس</div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-right">
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#E6C875]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">+350</div>
              <div className="text-xs text-[#E6DFD5]">مناسبة منسقة بحب</div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-right">
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#E6C875]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">حسب الطلب</div>
              <div className="text-xs text-[#E6DFD5]">لكل ميزانية وذوق</div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 flex items-center justify-center gap-3 text-right">
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#E6C875]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-white leading-tight">إشراف كامل</div>
              <div className="text-xs text-[#E6DFD5]">من البداية للنهاية</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
