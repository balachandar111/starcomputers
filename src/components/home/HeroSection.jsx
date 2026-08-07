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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1dce3f628-1772832763694.png"
          alt="Modern computer workstation setup with multiple monitors in dim atmospheric tech office, dark steel walls, low-key industrial lighting"
          fill
          priority
          className="object-cover opacity-40"
        />

        {/* Gradient scrim — dark on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
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
              <span className="text-xs font-semibold text-white/90 uppercase tracking-widest">🏠 Kundrathur's #1 Doorstep Computer Service</span>
            </div>

            <h1 className="text-hero-xl font-extrabold text-white mb-4 leading-tight">
              <span className="text-primary-light">DOORSTEP</span>{' '}
              COMPUTER SERVICE
            </h1>
            <p className="text-lg md:text-xl font-semibold text-white/90 mb-2">Book a Repair — We Come to You</p>
            <p className="text-base text-white/70 mb-4">Laptops · Desktops · Same-Day Doorstep Visits · New &amp; Second-Hand Sales</p>

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
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to book a doorstep computer service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-white font-bold text-base hover:bg-green-700 transition-all shadow-lg shadow-green-700/30">

                <span className="text-lg">📱</span>
                Book Doorstep Service
              </a>
              <a
                href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-primary text-white font-bold text-base hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 blue-glow">

                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="relative w-full max-w-md animate-float">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <AppImage
                  src="https://images.unsplash.com/photo-1723370013096-a6ca0679180a"
                  alt="Laptop and desktop computer setup with colorful screen display against dark background"
                  width={600}
                  height={400}
                  priority
                  className="object-cover w-full h-64 md:h-72" />

                {/* Scan line effect */}
                <div className="scan-line" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-border">
                <p className="text-xs text-muted-foreground font-medium">Serving since 2010</p>
                <p className="text-lg font-extrabold text-primary">5000+ Repairs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}