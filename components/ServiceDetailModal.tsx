import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Crown, ArrowLeft } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/weddingData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBookService }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        id="service-modal-overlay"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-2xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#EADBCE] text-right max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
          dir="rtl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black text-white transition-all cursor-pointer"
            id="service-modal-close"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner */}
          <div className="relative h-48 sm:h-60 overflow-hidden shrink-0">
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2320]/90 via-[#2B2320]/40 to-transparent" />
            
            <div className="absolute bottom-4 right-6 left-6 text-white">
              <span className="text-3xl mb-1 inline-block drop-shadow">{service.emoji}</span>
              <h3 className="text-2xl font-bold drop-shadow leading-tight">
                {service.title}
              </h3>
              <p className="text-xs text-[#E6C875] font-semibold mt-1">
                {service.subtitle}
              </p>
            </div>
          </div>

          {/* Body content */}
          <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
            <div>
              <h4 className="text-xs font-bold text-[#866616] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#C5A028]" />
                <span>عن الخدمة والتنفيذ</span>
              </h4>
              <p className="text-sm text-[#4A3E38] leading-relaxed">
                {service.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#866616] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A028]" />
                <span>ما تشمله هذه الباقة الديكورية:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-[#EADBCE] flex items-start gap-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#3D332A] font-medium leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7EFCF]/40 border border-[#D4AF37]/30 text-xs text-[#6B5117] leading-relaxed flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#C5A028] shrink-0 mt-0.5" />
              <div>
                <strong>تنسيق مرن:</strong> يمكن إضافة أو تعديل أي تفاصيل، باليتة ألوان، أو مساحات بناءً على طلبك وتفضيلك الخاص.
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onBookService(service);
                }}
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E6C875] to-[#B89332] text-[#2B2320] font-bold text-sm shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                id="modal-book-service-btn"
              >
                <MessageCircle className="w-5 h-5 text-[#2B2320]" />
                <span>احجزي واستفسري عن هذه الخدمة</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
