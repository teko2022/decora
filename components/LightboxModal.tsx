import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Tag, Sparkles, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import { GalleryItem } from '../types';
import { BUSINESS_INFO } from '../data/weddingData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onInquire: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
        onClick={onClose}
        id="lightbox-overlay"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#EADBCE] text-right flex flex-col md:flex-row max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
          dir="rtl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all cursor-pointer"
            id="lightbox-close-btn"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Large Image */}
          <div className="md:w-3/5 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover max-h-[80vh]"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              {item.categoryLabel}
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto custom-scrollbar">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#866616] text-[11px] font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
                <span>تصميم حصري من Decora Art</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#2B2320] leading-snug mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5C4E43] leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Tags */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold text-[#7A6A58] block">المميزات والتفاصيل:</span>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white border border-[#EADBCE] text-xs font-medium text-[#2B2320] flex items-center gap-1.5 shadow-2xl"
                    >
                      <Tag className="w-3 h-3 text-[#D4AF37]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquire Action */}
            <div className="pt-4 border-t border-[#EADBCE] space-y-3">
              <button
                onClick={() => onInquire(item)}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#F58529] via-[#D62976] to-[#962FBF] text-white text-xs sm:text-sm font-bold shadow-lg hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="lightbox-inquire-btn"
              >
                <span>طلب تصميم مشابه على Instagram</span>
              </button>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl border border-[#EADBCE] text-xs font-semibold text-[#5C4E43] hover:bg-white flex items-center justify-center gap-2 transition-all"
              >
                <span>مشاهدة المزيد على إنستغرام @decora_art111</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
