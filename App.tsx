import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { InteractivePlanner } from './components/InteractivePlanner';
import { InstagramSection } from './components/InstagramSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LightboxModal } from './components/LightboxModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GalleryItem, ServiceItem } from './types';
import { BUSINESS_INFO } from './data/weddingData';

export default function App() {
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [preselectedService, setPreselectedService] = useState<string>('ديكور وتنظيم الأفراح 💍');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    scrollToContact(`${service.title} ${service.emoji}`);
  };

  const handleInquireGalleryItem = (item: GalleryItem) => {
    window.open(BUSINESS_INFO.instagramUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B2320] font-sans antialiased selection:bg-[#EED5B7] selection:text-[#3D2C1D]" dir="rtl">
      
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => scrollToContact()} />

      {/* Hero Section */}
      <HeroSection 
        onContactClick={() => scrollToContact()} 
        onGalleryClick={scrollToGallery} 
      />

      {/* Services Section */}
      <ServicesSection 
        onSelectService={handleSelectService}
        onOpenDetails={(service) => setActiveServiceModal(service)}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection 
        onContactClick={() => scrollToContact()} 
      />

      {/* Gallery Section */}
      <GallerySection 
        onOpenLightbox={(item) => setActiveLightboxItem(item)}
        onInquireItem={handleInquireGalleryItem}
      />

      {/* Interactive Event Decor Planner & Calculator */}
      <InteractivePlanner 
        onCustomConsultation={(details) => scrollToContact(details)}
      />

      {/* Instagram @decora_art111 Section */}
      <InstagramSection />

      {/* Real Brides & Clients Testimonials */}
      <TestimonialsSection />

      {/* Booking & Contact Section */}
      <ContactSection 
        preselectedService={preselectedService} 
      />

      {/* FAQs */}
      <FAQSection />

      {/* Footer */}
      <Footer onOpenBooking={() => scrollToContact()} />

      {/* Floating WhatsApp & Instagram Actions */}
      <FloatingActions onOpenBooking={() => scrollToContact()} />

      {/* Lightbox Modal for Gallery */}
      <LightboxModal 
        item={activeLightboxItem} 
        onClose={() => setActiveLightboxItem(null)} 
        onInquire={(item) => {
          setActiveLightboxItem(null);
          handleInquireGalleryItem(item);
        }}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal 
        service={activeServiceModal} 
        onClose={() => setActiveServiceModal(null)} 
        onBookService={(service) => {
          setActiveServiceModal(null);
          handleSelectService(service);
        }}
      />

    </div>
  );
}
