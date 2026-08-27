import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/weddingData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>إجابات واضحة لراحتك</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            الأسئلة الشائعة
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#66564B]">
            كل ما يهمك معرفته حول خطوات الحجز، المواعيد، والتنسيق المسبق
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#D4AF37] shadow-md'
                    : 'bg-white/80 border-[#EADBCE] hover:border-[#D4AF37]/50'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer"
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="text-sm sm:text-base font-bold text-[#2B2320] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C5A028] shrink-0" />
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#FAF5EE] text-[#866616] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#D4AF37] text-[#2B2320]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#5C4E43] leading-relaxed border-t border-[#F2ECE1] pr-11">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
