import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, CheckCircle2, MessageCircle, Info } from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/weddingData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenDetails }) => {
  return (
    <section id="services" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#F7EFCF]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#FCEEE9]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>باقات وتنسيقات استثنائية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            خدماتنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#66564B] leading-relaxed">
            نقدم لكِ تشكيلة متكاملة من أرقى خدمات الديكور والتنسيق لتكون مناسبتك لوحة فنية ساحرة لا تُنسى
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-[#EADBCE] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2320]/80 via-transparent to-black/20" />
                  
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#866616] text-xs font-bold shadow-md border border-[#D4AF37]/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#C5A028]" />
                      <span>{service.badge}</span>
                    </div>
                  )}

                  {/* Emoji & Quick Title on Image */}
                  <div className="absolute bottom-4 right-4 left-4 text-white">
                    <span className="text-2xl mb-1 inline-block drop-shadow">{service.emoji}</span>
                    <h3 className="text-xl font-bold drop-shadow leading-tight text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-[#C5A028] mb-2">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-sm text-[#57493F] line-clamp-3 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F2ECE1]">
                    {service.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#4A3E38]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onSelectService(service)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89332] text-[#2B2320] text-xs font-bold hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id={`btn-book-${service.id}`}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>طلب هذا الديكور</span>
                </button>

                <button
                  onClick={() => onOpenDetails(service)}
                  className="p-3 rounded-xl border border-[#EADBCE] hover:bg-[#FAF5EE] text-[#66564B] hover:text-[#2B2320] transition-colors cursor-pointer"
                  title="عرض التفاصيل الكاملة"
                  id={`btn-info-${service.id}`}
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Event Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#FFFDF9] via-[#FBF7EE] to-[#F5ECE1] border border-[#D4AF37]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-right"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#C5A028] shrink-0 text-2xl">
              🎨
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#2B2320]">
                عندك فكرة أو ديزاين خاص حابة تنفذيه؟
              </h4>
              <p className="text-sm text-[#66564B] mt-1">
                نصمم ديكورات مخصصة بنسبة 100% بناءً على صورك ومقاسات المكان وبالميزانية اللي تناسبك.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService(SERVICES_DATA[SERVICES_DATA.length - 1])}
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#2B2320] text-white hover:bg-black text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
            id="custom-design-inquiry"
          >
            <span>استشارة وتصميم خاص</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
