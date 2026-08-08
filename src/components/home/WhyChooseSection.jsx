import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { whyChooseUs } from '@/data/starComputerData';

const iconMap = {
  ShieldCheckIcon: 'ShieldCheckIcon',
  CurrencyRupeeIcon: 'CurrencyRupeeIcon',
  UserGroupIcon: 'UserGroupIcon',
  BoltIcon: 'BoltIcon',
  HomeIcon: 'HomeIcon',
  CpuChipIcon: 'CpuChipIcon',
};

export default function WhyChooseSection() {
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
    <section ref={sectionRef} className="section-padding bg-white" id="about">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Strengths</p>
          <h2 className="text-section-heading font-extrabold text-foreground">
            Why Choose <span className="text-primary">FastFix?</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className={`reveal-up stagger-${i + 1} group text-center p-5 rounded-xl border border-border bg-muted hover:border-primary hover:bg-white transition-all duration-300 card-hover`}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 relative">
                <Icon name={iconMap[item.icon]} size={22} variant="outline" />
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-accent text-white text-[10px] flex items-center justify-center">✓</span>
              </div>
              <h3 className="text-xs font-bold text-foreground group-hover:text-primary transition-colors mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-tight">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}