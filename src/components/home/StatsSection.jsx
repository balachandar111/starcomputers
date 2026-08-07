import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10000, suffix: '+', label: 'Repairs Completed' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 5, suffix: '', label: 'Areas Served' },
  { value: 500, suffix: '+', label: 'Happy Customers / Month' },
];

function useCountUp(target, isVisible, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);
  return count;
}

function StatItem({ value, suffix, label, isVisible, delay }) {
  const count = useCountUp(value, isVisible);
  return (
    <div
      className="text-center reveal-up"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-4xl md:text-5xl font-extrabold text-primary mb-1">
        {count.toLocaleString('en-IN')}{suffix}
      </p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          entry.target.querySelectorAll('.reveal-up').forEach((el) => el.classList.add('visible'));
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 border-y border-border bg-white">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <StatItem key={s.label} {...s} isVisible={visible} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
