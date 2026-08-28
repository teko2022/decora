import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, Play, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, INSTAGRAM_POSTS } from '../data/weddingData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E1306C]/10 via-[#F77737]/10 to-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Profile Card Header */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#EADBCE] p-6 sm:p-8 shadow-sm mb-14 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-right">
              {/* Profile Avatar with Story Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#F58529] via-[#D62976] to-[#962FBF] shadow-md">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF8F5] border-2 border-white flex items-center justify-center overflow-hidden">
                  <span className="text-3xl">💍</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#2B2320]">
                    {BUSINESS_INFO.instagramHandle}
                  </h3>
                  <div className="w-5 h-5 rounded-full bg-[#3897F0] text-white flex items-center justify-center" title="حساب موثق">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#7A6A58] mt-0.5">
                  Decora Art | ديكور وتنسيق أفراح ورومات عرايس
                </p>
              </div>
            </div>

            {/* Instagram Main CTA Button */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-pink-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 shrink-0"
              id="instagram-main-btn"
            >
              <Instagram className="w-4 h-4" />
              <span>شاهدي أعمالنا على Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

          </div>
        </div>

        {/* Feed Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <motion.a
              key={post.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#FAF5EE] border border-[#EADBCE] shadow-sm block"
              id={`ig-post-${post.id}`}
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Video Reel Icon */}
              {post.isVideo && (
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="flex items-center justify-end">
                  <Instagram className="w-4 h-4 text-white/80" />
                </div>

                <div>
                  <p className="text-[10px] line-clamp-2 leading-snug mb-2 text-[#F2ECE1]">
                    {post.caption}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-white/90 pt-1.5 border-t border-white/20">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-rose-400 text-rose-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 fill-white" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center">
          <p className="text-xs text-[#7A6A58] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A028]" />
            <span>يتم تحديث الريلز والستوريات اليومية باستمرار مع كواليس تجهيز المناسبات</span>
          </p>
        </div>

      </div>
    </section>
  );
};
