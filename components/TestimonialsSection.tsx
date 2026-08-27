import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/weddingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Heart className="w-3.5 h-3.5 text-[#C5A028] fill-[#C5A028]" />
            <span>قصص نجاح وسعادة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            آراء العرائس وعملائنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#66564B] leading-relaxed">
            كلمات من القلب نعتز بها من عرائس وعائلات شاركناهم أجمل لحظات العمر
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/95 rounded-3xl p-6 border border-[#EADBCE] shadow-sm hover:shadow-lg hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between"
              id={`testimonial-card-${item.id}`}
            >
              <div>
                {/* Rating & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/30" />
                </div>

                <p className="text-sm text-[#4A3E38] leading-relaxed mb-6 italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-[#F2ECE1] flex items-center gap-3">
                <img
                  src={item.avatarUrl}
                  alt={item.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#2B2320]">
                    {item.clientName}
                  </h4>
                  <div className="text-[11px] text-[#866616] font-medium">
                    {item.eventType} • {item.city}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
