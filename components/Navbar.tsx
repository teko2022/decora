import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Menu, X, Instagram, Heart, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/weddingData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'ليه تختارينا؟', href: '#why-us' },
    { name: 'أعمالنا', href: '#gallery' },
    { name: 'حاسبة المناسبة', href: '#planner' },
    { name: 'إنستغرام', href: '#instagram' },
    { name: 'آراء العرائس', href: '#testimonials' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8DFD0]/60 py-3'
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3 group text-right"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#B89332] p-[2px] shadow-md transition-transform group-hover:scale-105">
              <div className={`w-full h-full rounded-full flex items-center justify-center ${isScrolled ? 'bg-white' : 'bg-[#2B2320]/80'}`}>
                <Sparkles className="w-5 h-5 text-[#C5A028]" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-[#2B2320]' : 'text-white'}`}>
                  Decora Art
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#C5A028] font-semibold">
                  @decora_art111
                </span>
              </div>
              <span className={`text-[11px] ${isScrolled ? 'text-[#7A6A58]' : 'text-white/80'}`}>
                ديكور وتنسيق الأفراح والمناسبات
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-[#C5A028] cursor-pointer ${
                  isScrolled ? 'text-[#4A3E38]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full transition-all flex items-center gap-1.5 text-xs font-semibold ${
                isScrolled
                  ? 'bg-[#F2ECE1] text-[#2B2320] hover:bg-[#E8DFD0]'
                  : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
              }`}
              id="nav-instagram-btn"
              title="صفحتنا على إنستغرام"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span className="hidden xl:inline">@decora_art111</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#D4AF37] via-[#E6C875] to-[#B89332] text-[#2B2320] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              id="nav-book-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>احجزي مناسبتك</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#D4AF37] to-[#B89332] text-[#2B2320] flex items-center gap-1 shadow-sm"
              id="mobile-quick-book"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>تواصل</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-[#2B2320] bg-[#F2ECE1]' : 'text-white bg-white/20'
              }`}
              aria-label="القائمة"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFD0] px-4 pt-3 pb-6 space-y-3 shadow-xl text-[#2B2320] animate-fadeIn"
        >
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-right px-3 py-2 rounded-lg text-sm font-semibold text-[#4A3E38] hover:bg-[#F2ECE1] hover:text-[#C5A028] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8DFD0]/80 flex flex-col gap-2">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-[#F2ECE1] text-[#2B2320] flex items-center justify-center gap-2 text-sm font-semibold"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>تابعونا على إنستغرام @decora_art111</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89332] text-[#2B2320] flex items-center justify-center gap-2 text-sm font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصلي معنا عبر الواتساب</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
