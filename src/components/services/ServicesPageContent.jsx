import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { services, WHATSAPP_NUMBER, LOCATIONS } from '@/data/starComputerData';

const faqs = [
  { q: 'How long does a laptop repair take?', a: 'Most repairs are completed within 1–2 working days. Screen replacements and keyboard replacements are often same-day service.' },
  { q: 'Do you offer doorstep service?', a: 'Yes! We offer doorstep computer service across Kundrathur, Pallavaram, Pammal, Chromepet, and Tambaram. Book via WhatsApp.' },
  { q: 'What warranty do you provide on repairs?', a: 'We provide a 30-day warranty on all repair work. If the same issue recurs, we fix it free of charge.' },
  { q: 'Do you use original spare parts?', a: 'We use original and high-quality compatible spare parts sourced from authorized distributors. We always inform you before using compatible parts.' },
  { q: 'How do I book a service?', a: 'Simply WhatsApp us at +91 88388 10132, describe your issue, and we\'ll schedule a convenient time. You can also call us directly.' },
  { q: 'Can you recover data from a dead laptop?', a: 'Yes, we offer professional data recovery services for crashed hard drives, SSDs, and failed storage devices. Success rate depends on the type of failure.' },
];

export default function ServicesPageContent() {
  const [openFaq, setOpenFaq] = useState(null);
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
    <div ref={sectionRef}>
      {/* Page Hero */}
      <div className="bg-secondary text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="reveal-up">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">Expert Repairs</p>
            <h1 className="text-section-heading font-extrabold text-white mb-3">Computer & Laptop Services</h1>
            <p className="text-base text-white/70 max-w-xl">
              Professional repair and maintenance services for all brands. Fast turnaround, genuine parts, and 30-day warranty on all work.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12 reveal-up">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Do</p>
            <h2 className="text-section-heading font-extrabold text-foreground">
              All <span className="text-primary">Services</span>
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`reveal-up stagger-${Math.min(i + 1, 10)} group bg-card rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-300 card-hover`}
              >
                {/* Icon */}
                <div className="service-icon-wrap w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl mb-4">
                  {service.emoji}
                </div>

                <h3 className="font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.time}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                    {service.originalPrice && (
                      <span className="text-muted-foreground/60 line-through font-medium mr-0.5">{service.originalPrice}</span>
                    )}
                    {service.price}
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I need ${service.title}. Please let me know the availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all"
                >
                  Book This Service
                </a>
              </div>
            ))}
          </div>

          {/* Doorstep Banner */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden reveal-up">
            <div className="absolute inset-0 grain-overlay" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-3">
                  <span className="text-4xl">🏠</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white">Doorstep Computer Service</h2>
                </div>
                <p className="text-white/70 mb-4 max-w-md">We come to your place &amp; fix your problems — no travel needed!</p>
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
                  <svg className="w-4 h-4 text-primary-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-white/90 font-semibold">{LOCATIONS.join(' · ')}</span>
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need doorstep computer service. Please confirm availability.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30"
                >
                  <span className="text-lg">📱</span>
                  Book Doorstep Service
                </a>
              </div>
              <div className="flex gap-6 items-center">
                <div className="text-center">
                  <span className="text-6xl block mb-2">👨‍💻</span>
                  <p className="text-xs text-white/70 font-semibold">Expert Tech</p>
                </div>
                <div className="text-center">
                  <span className="text-6xl block mb-2">🛵</span>
                  <p className="text-xs text-white/70 font-semibold">Fast Arrival</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 reveal-up">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Common Questions</p>
              <h2 className="text-section-heading font-extrabold text-foreground">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
            </div>

            <div className="space-y-3 reveal-up">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl overflow-hidden bg-card transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground hover:text-primary transition-colors"
                  >
                    <span className="text-sm pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center reveal-up">
            <p className="text-sm text-muted-foreground mb-4">Ready to get your computer fixed?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need computer service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-700/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </a>
              <a
                href="tel:+918838810132"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call Now
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-bold hover:border-primary hover:text-primary transition-all"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}