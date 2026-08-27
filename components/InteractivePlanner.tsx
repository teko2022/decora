import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calculator, Check, MessageCircle, Heart, Palette, Layers, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/weddingData';

interface InteractivePlannerProps {
  onCustomConsultation: (details: string) => void;
}

export const InteractivePlanner: React.FC<InteractivePlannerProps> = ({ onCustomConsultation }) => {
  const [eventType, setEventType] = useState<'wedding' | 'engagement' | 'bride_room' | 'kosha'>('wedding');
  const [styleTheme, setStyleTheme] = useState<'royal_gold' | 'romantic_blush' | 'boho_ivory' | 'modern_minimal'>('royal_gold');
  const [guestScale, setGuestScale] = useState<'intimate' | 'medium' | 'grand'>('medium');
  
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'تنسيق ورد طبيعي فاخر',
    'إضاءات رومانسية دافئة'
  ]);

  const eventTypes = [
    { id: 'wedding', label: 'حفل زفاف ملكي', emoji: '💍' },
    { id: 'engagement', label: 'حفلة خطوبة / ملكة', emoji: '🌸' },
    { id: 'bride_room', label: 'تجهيز روم العروسة', emoji: '👰' },
    { id: 'kosha', label: 'كوشة وركن تصوير', emoji: '👑' },
  ];

  const styleThemes = [
    { id: 'royal_gold', name: 'ملكي ذهبي وأبيض', color: 'from-[#D4AF37] to-[#F3E5AB]', desc: 'فخامة كلاسيكية ملكية تخطف الأنظار' },
    { id: 'romantic_blush', name: 'رومانسي روز غولد وباستيل', color: 'from-[#F6DAD1] to-[#E49B89]', desc: 'نعومة فائقة وأجواء مفعمة بالدفء' },
    { id: 'boho_ivory', name: 'بوهو عاجي وبيج عصري', color: 'from-[#EEDBBE] to-[#D9C4A2]', desc: 'طبيعي مع ورود مجففة وبامباس' },
    { id: 'modern_minimal', name: 'مينيمال فاخر ونقي', color: 'from-[#FFFFFF] to-[#E2E8F0]', desc: 'بساطة عصرية راقية وإضاءات نقية' },
  ];

  const addonsList = [
    'تنسيق ورد طبيعي فاخر',
    'كوشة بتصميم ثلاثي الأبعاد',
    'ركن تصوير فوتوبوث مضيء',
    'إضاءات رومانسية دافئة وشموع',
    'بالونات هيليوم فاخرة مع طباعة الأسماء',
    'طاولة استقبال Welcome Table فخمة',
  ];

  const toggleAddon = (addon: string) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== addon));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleSendToWhatsApp = () => {
    const eventName = eventTypes.find(e => e.id === eventType)?.label || '';
    const themeName = styleThemes.find(t => t.id === styleTheme)?.name || '';
    const scaleName = guestScale === 'intimate' ? 'حفل عائلي / صغير' : guestScale === 'medium' ? 'متوسط (100 - 250 ضيف)' : 'كبير وفاخر (+300 ضيف)';

    const message = `مرحباً ديكورا آرت ✨\nلقد قمت بتنسيق رغبتي للديكور عبر الموقع:\n\n` +
      `• نوع المناسبة: ${eventName}\n` +
      `• الثيم المفضل: ${themeName}\n` +
      `• حجم المناسبة: ${scaleName}\n` +
      `• الإضافات المختارة:\n${selectedAddons.map(a => `  - ${a}`).join('\n')}\n\n` +
      `أرغب في معرفة التكلفة التقريبية وتوفر الموعد. شكراً لكم!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="planner" className="py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F6F1E8] to-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>حاسبة وتنسيق الباقة التفاعلية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            نسقي ديكور ليلتك واحصلي على استشارة فورية
          </h2>
          <p className="text-sm sm:text-base text-[#66564B]">
            اختاري تفاصيل مناسبتك المفضلة، واكتشفي الثيم الذي يمثلك واحصلي على عرض مخصص على الواتساب بضغطة زر
          </p>
        </div>

        {/* Interactive Box */}
        <div className="bg-white rounded-3xl border border-[#EADBCE] shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Controls Side */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Event Type */}
              <div>
                <label className="block text-xs font-black text-[#866616] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#C5A028]" />
                  <span>١. ما هو نوع مناسبتك؟</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setEventType(type.id as any)}
                      className={`p-3.5 rounded-2xl border text-right transition-all flex items-center gap-3 cursor-pointer ${
                        eventType === type.id
                          ? 'border-[#D4AF37] bg-[#FDF9EE] text-[#2B2320] shadow-sm ring-2 ring-[#D4AF37]/30'
                          : 'border-[#EADBCE] bg-[#FAF8F5] text-[#66564B] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <span className="text-2xl">{type.emoji}</span>
                      <span className="text-xs sm:text-sm font-bold">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Theme / Style */}
              <div>
                <label className="block text-xs font-black text-[#866616] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#C5A028]" />
                  <span>٢. ما هو الثيم والباليتة المفضلة لديكِ؟</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {styleThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setStyleTheme(theme.id as any)}
                      className={`p-3.5 rounded-2xl border text-right transition-all cursor-pointer ${
                        styleTheme === theme.id
                          ? 'border-[#D4AF37] bg-[#FDF9EE] text-[#2B2320] ring-2 ring-[#D4AF37]/30'
                          : 'border-[#EADBCE] bg-[#FAF8F5] text-[#66564B] hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-tr ${theme.color} border border-black/10`} />
                        <span className="text-xs sm:text-sm font-bold">{theme.name}</span>
                      </div>
                      <p className="text-[11px] text-[#7A6A58]">{theme.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons */}
              <div>
                <label className="block text-xs font-black text-[#866616] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C5A028]" />
                  <span>٣. اختاري الإضافات والتجهيزات المرغوبة:</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addonsList.map((addon) => {
                    const isSelected = selectedAddons.includes(addon);
                    return (
                      <button
                        key={addon}
                        onClick={() => toggleAddon(addon)}
                        className={`p-2.5 px-3 rounded-xl border text-right text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-[#2B2320] text-white border-[#2B2320]'
                            : 'bg-[#FAF8F5] text-[#5C4E43] border-[#EADBCE] hover:border-[#D4AF37]'
                        }`}
                      >
                        <span>{addon}</span>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center ${isSelected ? 'bg-[#D4AF37] text-[#2B2320]' : 'border border-gray-300'}`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Summary & WhatsApp Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#FAF5EE] to-[#F3EADB] rounded-2xl p-6 border border-[#E0D2C0] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#D8C6B0] mb-4">
                  <span className="text-xs font-bold text-[#866616]">ملخص رغبات الديكور</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#866616] text-[11px] font-bold">
                    عرض فوري مخصص
                  </span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between py-1.5 border-b border-[#E8DCcb]">
                    <span className="text-[#7A6A58]">نوع المناسبة:</span>
                    <span className="font-bold text-[#2B2320]">
                      {eventTypes.find(e => e.id === eventType)?.label}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-[#E8DCcb]">
                    <span className="text-[#7A6A58]">الثيم البصري:</span>
                    <span className="font-bold text-[#2B2320]">
                      {styleThemes.find(t => t.id === styleTheme)?.name}
                    </span>
                  </div>

                  <div className="py-1.5">
                    <span className="text-[#7A6A58] block mb-2">الإضافات ({selectedAddons.length}):</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedAddons.length > 0 ? (
                        selectedAddons.map((a, i) => (
                          <span key={i} className="px-2 py-1 rounded-md bg-white/80 border border-[#D4AF37]/30 text-[10px] text-[#2B2320] font-medium">
                            {a}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-[11px]">لم يتم تحديد إضافات</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Free Consultation Callout */}
                <div className="p-4 rounded-xl bg-white/70 border border-[#D4AF37]/40 mb-6">
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C5A028] shrink-0 mt-0.5" />
                    <p className="text-[11px] text-[#5C4E43] leading-relaxed">
                      <strong>استشارة مجانية:</strong> نوفر لكِ معاينة صور ونماذج وتحديد الميزانية المناسبة عبر الواتساب فور إرسال اختياراتك!
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#E6C875] to-[#B89332] text-[#2B2320] font-bold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer pulse-gold"
                id="planner-send-whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-[#2B2320]" />
                <span>إرسال هذا التنسيق لمنسقة الواتساب</span>
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
