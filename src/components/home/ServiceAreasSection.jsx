import React, { useEffect, useRef } from 'react';
import { SERVICE_AREAS, PHONE_NUMBER, WHATSAPP_NUMBER } from '@/data/starComputerData';

export default function ServiceAreasSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="service-areas">
      <div className="container-custom">
        <div className="text-center mb-10 reveal-up">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Coverage</p>
          <h2 className="text-section-heading font-extrabold text-foreground">
            We Provide Doorstep Service In
          </h2>
          <p className="text-sm text-muted-foreground mt-2">Approx. distance from our Kundrathur base</p>
          <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* Area cards with distance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8 reveal-up">
          {SERVICE_AREAS?.map((area) => (
            <div
              key={area?.name}
              className={`relative flex flex-col items-center justify-center text-center gap-1 px-4 py-5 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${
                area?.distance === '0 km'
                  ? 'bg-primary text-white border-primary shadow-md shadow-primary/20'
                  : 'bg-primary/5 border-primary/15 hover:bg-primary/10'
              }`}
            >
              {area?.distance === '0 km' && (
                <span className="absolute -top-2 -right-2 text-[10px] font-bold uppercase tracking-wide bg-accent text-white px-2 py-0.5 rounded-full shadow">
                  Base
                </span>
              )}
              <svg
                className={`w-5 h-5 flex-shrink-0 ${area?.distance === '0 km' ? 'text-white' : 'text-primary'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`font-bold text-sm ${area?.distance === '0 km' ? 'text-white' : 'text-foreground'}`}>
                {area?.name}
              </span>
              <span className={`text-xs font-semibold ${area?.distance === '0 km' ? 'text-white/80' : 'text-primary'}`}>
                {area?.distance}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center justify-center text-center gap-1 px-4 py-5 rounded-xl border border-dashed border-border bg-muted text-muted-foreground">
            <span className="font-bold text-sm">+ Nearby</span>
            <span className="text-xs">Areas</span>
          </div>
        </div>

        {/* Not sure CTA */}
        <div className="text-center reveal-up">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure if we service your location? Call / WhatsApp us.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all shadow-md shadow-primary/20"
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! Do you provide doorstep service at my location?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-bold text-sm hover:bg-green-700 transition-all shadow-md shadow-green-700/20"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}