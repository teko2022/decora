import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, MessageCircle, Heart, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/weddingData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onInquireItem: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenLightbox, onInquireItem }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'wedding', label: 'حفلات زفاف 💍' },
    { id: 'engagement', label: 'خطوبة وملكة 🌸' },
    { id: 'bride_room', label: 'رومات عرايس 👰' },
    { id: 'kosha', label: 'كوشات ومسارح 👑' },
    { id: 'flowers', label: 'طاولات وزهور 🌹' },
    { id: 'photocorner', label: 'أركان تصوير 📸' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#866616] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>معرض الصور الحي</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2320] tracking-tight mb-4">
            من أعمالنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#66564B] leading-relaxed">
            استكشفي أحدث تنسيقاتنا وديكوراتنا التي صُنعت بحب وإتقان لتمنح عرائسنا أجمل الذكريات
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#2B2320] text-white shadow-md scale-105'
                    : 'bg-white text-[#66564B] border border-[#EADBCE] hover:border-[#D4AF37] hover:text-[#2B2320]'
                }`}
                id={`gallery-filter-${cat.id}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-[#EADBCE] shadow-sm hover:shadow-xl hover:border-[#D4AF37]/70 transition-all duration-500 cursor-pointer"
                onClick={() => onOpenLightbox(item)}
                id={`gallery-item-${item.id}`}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2320]/90 via-[#2B2320]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Bar on Image: Category Badge & Like */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                      {item.categoryLabel}
                    </span>

                    <button
                      onClick={(e) => toggleLike(item.id, e)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all ${
                        likedItems[item.id]
                          ? 'bg-rose-500 text-white'
                          : 'bg-black/30 text-white hover:bg-black/50'
                      }`}
                      aria-label="إعجاب"
                    >
                      <Heart className={`w-4 h-4 ${likedItems[item.id] ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Overlay Text */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10">
                    <h3 className="text-base font-bold text-white mb-1.5 leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F2ECE1] line-clamp-2 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Tags & Direct Inquire */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/20">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#F3E5AB]">
                        <Tag className="w-3 h-3 text-[#D4AF37]" />
                        <span>{item.tags[0]}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onInquireItem(item);
                        }}
                        className="px-3 py-1 rounded-full bg-[#D4AF37] hover:bg-[#E6C875] text-[#2B2320] text-[11px] font-bold flex items-center gap-1 transition-all shadow"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>استفسري عنه</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
