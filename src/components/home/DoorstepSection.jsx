import React, { useEffect, useRef } from 'react';
import { WHATSAPP_NUMBER, PHONE_NUMBER, LOCATIONS, doorstepServicesList } from '@/data/starComputerData';

export default function DoorstepSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary relative overflow-hidden" id="doorstep">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 grain-overlay" />
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 reveal-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-3">
            Our #1 Service
          </span>
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-4xl md:text-5xl">🏠</span>
            <h2 className="text-section-heading font-extrabold text-white">
              Professional Computer Service at Your Doorstep
            </h2>
          </div>
          <p className="text-base text-white/80 max-w-md mx-auto">
            Book a slot and our technician arrives at your home or office — no travel, no drop-off, no waiting in a shop.
          </p>
        </div>

        {/* Service list grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-10 reveal-up">
          {doorstepServicesList.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2.5 text-left"
            >
              <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm text-white/90 font-medium leading-tight">{item}</span>
            </div>
          ))}
        </div>

        {/* Locations + CTA */}
        <div className="text-center reveal-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <svg className="w-4 h-4 text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm text-white/90 font-semibold">{LOCATIONS?.join(' · ')}</p>
          </div>

          <p className="text-white font-bold text-lg mb-4">Book Doorstep Service – Call / WhatsApp Now</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 blue-glow"
            >
              <span className="text-lg">📞</span>
              Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need doorstep computer service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-accent text-white font-bold text-base hover:bg-green-700 transition-all shadow-lg shadow-green-700/30"
            >
              <span className="text-lg">💬</span>
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}