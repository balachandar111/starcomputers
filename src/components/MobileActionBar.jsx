import React from 'react';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '@/data/starComputerData';

export default function MobileActionBar() {
  return (
    <div className="mobile-action-bar md:hidden fixed bottom-0 left-0 right-0 z-[998] grid grid-cols-2 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`}
        className="flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold text-sm active:bg-primary-dark"
      >
        <span className="text-base">📞</span>
        Call Now
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need computer service.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-3.5 bg-accent text-white font-bold text-sm active:bg-green-700"
      >
        <span className="text-base">💬</span>
        WhatsApp
      </a>
    </div>
  );
}