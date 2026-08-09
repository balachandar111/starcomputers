import React from 'react';

/**
 * Mobile-only "Our Promise — 100% Doorstep Service" banner.
 * Mirrors the FastFix promo card, shown directly under the hero on
 * small/medium screens (the desktop hero already carries this message
 * as a floating card, so this is hidden at lg+).
 */
export default function DoorstepPromiseBanner() {
  return (
    <section className="block lg:hidden bg-background px-4 pt-5 pb-1">
      <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-white to-[#eefaf1] shadow-md">
        <div className="flex items-stretch">
          {/* Text side */}
          <div className="flex-1 min-w-0 p-4 sm:p-5">
            <span className="inline-block rounded-full bg-accent text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 mb-2.5">
              Our Promise
            </span>
            <h3 className="font-extrabold leading-tight text-foreground">
              <span className="block text-lg sm:text-xl">100% DOORSTEP</span>
              <span className="block text-lg sm:text-xl text-accent">SERVICE</span>
            </h3>
            <span className="block w-8 h-1 rounded-full bg-accent my-2" />
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
              No need to travel. No need to wait. Our expert technician will visit your home or office and fix it on the spot!
            </p>
          </div>

          {/* Illustration side */}
          <div className="relative w-40 sm:w-52 flex-shrink-0 overflow-visible">
            {/* sky/ground */}
            <div className="absolute inset-0 bg-[#eaf7ee]" />
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-accent/25 rounded-tl-[50%] rounded-tr-[50%]" />

            {/* location pin */}
            <svg viewBox="0 0 24 24" className="absolute top-2 right-6 w-7 h-7 text-accent drop-shadow-sm" fill="currentColor">
              <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.11 11.34 6.37 11.6a1.5 1.5 0 0 0 2.26 0c.26-.26 6.37-6.35 6.37-11.6C19.5 5.36 16.14 2 12 2zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
            </svg>

            {/* house */}
            <svg viewBox="0 0 60 46" className="absolute top-3 left-2 w-9 h-9 sm:w-11 sm:h-11 text-slate-300" fill="none">
              <path d="M4 24 L30 4 L56 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="10" y="22" width="40" height="22" rx="2" fill="#fff" stroke="currentColor" strokeWidth="3" />
              <rect x="24" y="30" width="12" height="14" fill="currentColor" opacity="0.5" />
            </svg>

            {/* FastFix Logo - centered in the middle - INCREASED HEIGHT & WIDTH */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[65%] z-20">
              <img 
                src="https://res.cloudinary.com/ds4i8pujs/image/upload/v1786184621/Gemini_Generated_Image_mch5g7mch5g7mch5-removebg-preview_t7gr0i.png" 
                alt="FastFix Logo" 
                className="object-contain drop-shadow-lg max-w-none max-h-none"
                style={{
                  width: 'clamp(110px, 13vw, 150px)',
                  height: 'clamp(110px, 13vw, 150px)',
                  minHeight:'none',
                  minWidth:'none',
                  maxWidth: 'none',
                  maxHeight: 'none',
                }}
              />
            </div>

            {/* bike / scooter with FastFix branding, replacing the van */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="relative">
                <span className="text-4xl sm:text-5xl leading-none drop-shadow-md" role="img" aria-label="Doorstep technician on a scooter">
                  🛵
                </span>
              </div>
              <div className="mt-0.5 bg-white rounded px-1.5 py-0.5 shadow-sm border border-accent/20 text-center leading-none">
                <p className="text-[8px] sm:text-[9px] font-extrabold text-foreground tracking-tight">
                  FAST<span className="text-accent">FIX</span>
                </p>
                <p className="text-[6px] sm:text-[7px] font-semibold text-muted-foreground uppercase tracking-wide">
                  Doorstep Fix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}