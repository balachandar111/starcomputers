import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { PHONE_NUMBER, WHATSAPP_NUMBER, LOCATIONS } from '@/data/starComputerData';

export default function HeroSection() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef?.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden bg-hero-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://res.cloudinary.com/ds4i8pujs/video/upload/v1786184514/Technician_repairing_laptop_202608081546_processed_1_o1cpzm.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient scrim — dark on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35" />
        {/* Grain texture */}
        <div className="absolute inset-0 grain-overlay" />
      </div>
      {/* Animated glow blob */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text side */}
          <div ref={headlineRef}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">Real Repairs, By Real Technicians</span>
            </div>

            <h1 className="text-hero-xl font-extrabold text-white mb-4 leading-tight">
              <span className="text-primary-light">EXPERT REPAIRS</span>{' '}
              AT YOUR DOORSTEP
            </h1>
            <p className="text-lg md:text-xl font-semibold text-white/90 mb-2">Skilled Technicians Fix It Right — At Your Home or Office</p>
            <p className="text-base text-white/70 mb-4">🔧 Doorstep Computer & Laptop Service</p>

            {/* Locations */}
            <div className="flex items-center gap-2 mb-8">
              <svg className="w-4 h-4 text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-white/80 font-medium">Doorstep visits in {LOCATIONS?.join(' · ')}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 blue-glow">

                <span className="text-lg">📞</span>
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to book a doorstep computer service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-bold text-base hover:bg-green-700 transition-all shadow-lg shadow-green-700/30">

                <span className="text-lg">💬</span>
                WhatsApp Now
              </a>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
}