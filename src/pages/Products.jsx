import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import MobileActionBar from '@/components/MobileActionBar';
import ProductsPageContent from '@/components/products/ProductsPageContent';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsPageContent />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </>
  );
}