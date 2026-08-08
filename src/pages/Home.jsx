import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileActionBar from '@/components/MobileActionBar';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import DoorstepSection from '@/components/home/DoorstepSection';
import ServicesSection from '@/components/home/ServicesSection';
import ServiceAreasSection from '@/components/home/ServiceAreasSection';
import ProductsSection from '@/components/home/ProductsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <DoorstepSection />
        <ServicesSection />
        <ServiceAreasSection />
        <ProductsSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}