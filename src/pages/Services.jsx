import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileActionBar from '@/components/MobileActionBar';
import ServicesPageContent from '@/components/services/ServicesPageContent';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesPageContent />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}