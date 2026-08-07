import React, { useEffect, useRef } from 'react';
import { WHATSAPP_NUMBER, LOCATIONS } from '@/data/starComputerData';

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
      { threshold: 0.2 }
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left — Technician Icon */}
          <div className="reveal-left flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
              <span className="text-6xl md:text-7xl">🏠</span>
            </div>
          </div>

          {/* Center — Text */}
          <div className="text-center flex-1 reveal-up">
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-3">
              Our #1 Service
            </span>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">We Come To You</p>
            <h2 className="text-section-heading font-extrabold text-white mb-3">
              Doorstep Computer Service Booking
            </h2>
            <p className="text-base text-white/80 mb-4 max-w-md mx-auto">
              This is what we do best — book a slot and our technician arrives at your home or office to fix it on the spot. No travel, no drop-off, no waiting in a shop.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg className="w-4 h-4 text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-white/90 font-semibold">{LOCATIONS?.join(' · ')}</p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need doorstep computer service.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 blue-glow"
            >
              <span className="text-lg">📱</span>
              Book Doorstep Service
            </a>
          </div>

          {/* Right — Scooter Icon */}
          <div className="reveal-right flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
              <span className="text-6xl md:text-7xl">🛵</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}