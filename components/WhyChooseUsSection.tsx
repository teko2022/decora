import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, HeartHandshake, BadgePercent, Lightbulb, Check, ShieldCheck, Clock, Crown } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/weddingData';

interface WhyChooseUsSectionProps {
  onContactClick: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ onContactClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C5A028]" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-[#C5A028]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#C5A028]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-[#C5A028]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#C5A028]" />;
      default:
        return <Crown className="w-6 h-6 text-[#C5A028]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full border border-[#D4AF37]/20 pointer-events-none" />
      <div className="absolute top-1/2 -right-10 w-72 h-72 rounded-full border border-[#D4AF37]/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Crown className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>ثقة وإتقان في كل خطوة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            ليه تختارينا؟
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#66564B] leading-relaxed">
            نحن ندرك أن يومك الكبير هو لحظة العمر التي لا تتكرر، لذا نضع شغفنا وخبرتنا لنصنع لكِ تجربة استثنائية تفوق توقعاتك.
          </p>
        </div>

        {/* 5 Main Pillars Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-[#EADBCE] hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-white via-white to-[#FDF9EE]' : ''
              }`}
              id={`why-card-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#F7EFCF]/70 border border-[#D4AF37]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.icon)}
                  </div>
                  {item.metric && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF5EE] text-[#866616] border border-[#EADBCE]">
                      {item.metric}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#2B2320] mb-3 group-hover:text-[#866616] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5C4E43] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center gap-2 text-xs font-semibold text-[#866616]">
                <Check className="w-4 h-4 text-[#C5A028]" />
                <span>ضمان الجودة والتميز مع Decora Art</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#2B2320] via-[#3A2F2B] to-[#2B2320] text-white p-8 sm:p-12 shadow-2xl border border-[#D4AF37]/30"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-right">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#F3E5AB] text-xs font-semibold mb-3">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>ضمان راحة بالك 100%</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#FFFDF9]">
                جاهزون لتحويل قاعتك أو غرفتك إلى تحفة ملكية ✨
              </h3>
              <p className="text-sm sm:text-base text-[#E5DDD3] leading-relaxed">
                تفرغي للحظاتك السعيدة واستمتعي بكل ثانية، ودعي فريقنا المتخصص يتولى كل تفاصيل الديكور والتركيب والإشراف بدقة متناهية.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={onContactClick}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E6C875] to-[#B89332] text-[#2B2320] font-bold text-sm shadow-xl hover:shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                id="why-us-cta-book"
              >
                احجزي موعد استشارتك الآن
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
