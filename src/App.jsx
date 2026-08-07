import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/Home';
import ProductsPage from '@/pages/Products';
import ServicesPage from '@/pages/Services';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
