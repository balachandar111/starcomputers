import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services, WHATSAPP_NUMBER } from '@/data/starComputerData';

export default function ServicesSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-muted dot-grid" id="services">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Fix</p>
          <h2 className="text-section-heading font-extrabold text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid — 5 cols desktop, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {services.map((service, i) => (
            <a
              key={service.id}
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I need ${service.title} service.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal-up stagger-${Math.min(i + 1, 10)} group bg-card rounded-xl border border-border p-4 text-center hover:border-primary hover:shadow-md transition-all duration-300 cursor-pointer`}
            >
              <div className="service-icon-wrap w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                {service.emoji}
              </div>
              <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
              <div className="mt-1 flex items-center justify-center gap-1.5 flex-wrap">
                {service.originalPrice && (
                  <span className="text-[11px] text-muted-foreground/60 line-through font-medium">{service.originalPrice}</span>
                )}
                <span className="text-xs text-primary font-bold">{service.price}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center reveal-up">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}