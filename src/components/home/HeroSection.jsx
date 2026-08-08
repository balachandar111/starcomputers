import React, { useEffect, useRef } from 'react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, LOCATIONS } from '@/data/starComputerData';

const services = [
  { icon: '💻', label: 'LAPTOP & DESKTOP SERVICE' },
  { icon: '🔧', label: 'CHIP LEVEL REPAIR' },
  { icon: '💿', label: 'OS INSTALLATION & SOFTWARE' },
  { icon: '💾', label: 'HARD DISK/SSD UPGRADE' },
  { icon: '🛡️', label: 'VIRUS REMOVAL & DATA RECOVERY' },
  { icon: '🚪', label: 'DOORSTEP SERVICE' },
];

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
    <section className="relative min-h-[640px] md:min-h-[680px] flex items-center overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f1b33] to-[#060a14]">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        >
          <source
            src="https://res.cloudinary.com/ds4i8pujs/video/upload/v1786184514/Technician_repairing_laptop_202608081546_processed_1_o1cpzm.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060a14]/90 via-transparent to-[#0a0e1a]/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-14 md:py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Text side */}
          <div ref={headlineRef}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">TRUSTED SINCE 2010</span>
            </div>

            {/* Main Headline */}
            <div className="mb-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                WE FIX IT
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FAST!</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl font-semibold text-white/80 mb-2">
              LAPTOP & COMPUTER SERVICE
            </p>
            <p className="text-base md:text-lg text-cyan-300/80 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Fast & Reliable Doorstep Service
            </p>

            {/* Services Grid - Glass morphism */}
            <div className="grid grid-cols-2 gap-2 mb-8">
              {services.map((service) => (
                <div 
                  key={service.label}
                  className="group flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{service.icon}</span>
                  <span className="text-[10px] md:text-xs font-bold text-white/90 leading-tight group-hover:text-cyan-300 transition-colors">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`}
                className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                <span className="text-lg group-hover:rotate-12 transition-transform">📞</span>
                +91 88388 10132
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I want to book a doorstep computer service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">💬</span>
                WhatsApp Now
              </a>
            </div>

            {/* Stats with animated counters */}
            <div className="flex items-center gap-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="group cursor-pointer">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">5000+</span>
                  <span className="text-xs text-cyan-400/60 font-medium">↑</span>
                </div>
                <span className="text-sm font-medium text-white/70 group-hover:text-white/90 transition-colors">Repairs Done</span>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-lg">📍</span>
                  <span className="text-sm font-bold text-white/90">{LOCATIONS?.join(' • ')}</span>
                </div>
                <span className="text-xs text-white/60">& Nearby Areas</span>
              </div>
            </div>
          </div>

          {/* Right side - Video in floating box */}
          <div className="relative hidden lg:block">
            {/* Main video floating box */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing rings behind video */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-2xl animate-pulse" />
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-600/10 blur-3xl animate-pulse delay-1000" />
              
              {/* Video Container with glass effect */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0e1a] to-[#0f1b33] border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 float-card-main">
                {/* Video */}
                <div className="relative aspect-video">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/ds4i8pujs/video/upload/v1786184514/Technician_repairing_laptop_202608081546_processed_1_o1cpzm.mp4"
                      type="video/mp4"
                    />
                  </video>
                  
                  {/* Gradient overlay on video */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent" />
                  
                

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/30 rounded-br-2xl" />
                </div>

                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0e1a] to-transparent">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Live Demo</span>
                      </div>
                      <div className="w-px h-4 bg-white/10" />
                      <p className="text-sm font-bold text-white">Professional Repair Service</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] font-medium text-white/70">Playing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges with blue theme */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0f1b33] to-[#0a0e1a] backdrop-blur-md border border-cyan-400/30 rounded-xl p-3 shadow-2xl shadow-cyan-500/20 float-card-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase">Trusted</p>
                    <p className="text-[10px] font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text uppercase">Service</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 top-1/3 bg-gradient-to-br from-[#0f1b33] to-[#0a0e1a] backdrop-blur-md border border-cyan-400/30 rounded-xl p-3 shadow-2xl shadow-cyan-500/20 float-card-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚪</span>
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase">Doorstep</p>
                    <p className="text-[10px] font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text uppercase">Service</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-gradient-to-br from-[#0f1b33] to-[#0a0e1a] backdrop-blur-md border border-cyan-400/30 rounded-xl p-3 shadow-2xl shadow-cyan-500/20 float-card-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase">100%</p>
                    <p className="text-[10px] font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text uppercase">Satisfaction</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#0f1b33] to-[#0a0e1a] backdrop-blur-md border border-cyan-400/30 rounded-xl p-3 shadow-2xl shadow-cyan-500/20 float-card-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase">Fast</p>
                    <p className="text-[10px] font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text uppercase">Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-cyan-500/10 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-blue-500/5 animate-spin-slow-reverse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-cyan-500/5" />
            
            {/* Floating particles */}
            <div className="absolute -top-10 -right-10 w-3 h-3 bg-cyan-400 rounded-full blur-sm animate-pulse" />
            <div className="absolute top-1/4 -left-8 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse delay-500" />
            <div className="absolute bottom-1/4 -right-6 w-2.5 h-2.5 bg-cyan-300 rounded-full blur-sm animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-y-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes spin-slow-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        .float-card-main {
          animation: float-y 4s ease-in-out infinite;
          animation-delay: 0s;
        }

        .float-card-1 {
          animation: float-y 3.5s ease-in-out infinite;
          animation-delay: 0.2s;
        }

        .float-card-2 {
          animation: float-y-slow 4s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .float-card-3 {
          animation: float-y 3.8s ease-in-out infinite;
          animation-delay: 1.0s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}