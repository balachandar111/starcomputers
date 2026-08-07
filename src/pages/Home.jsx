import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import DoorstepSection from '@/components/home/DoorstepSection';
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
        <ProductsSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}