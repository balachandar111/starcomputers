import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AppImage from '@/components/ui/AppImage';
import { products } from '@/data/starComputerData';

export default function ProductsSection() {
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="products">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What We Sell</p>
          <h2 className="text-section-heading font-extrabold text-foreground">
            Our <span className="text-primary">Products</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product, i) => (
            <div
              key={product?.id}
              className={`reveal-up stagger-${i + 1} bg-card rounded-xl border border-border overflow-hidden card-hover shadow-sm`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-muted">
                <AppImage
                  src={product?.image}
                  alt={product?.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white ${product?.badgeColor === 'primary' ? 'bg-primary' : 'bg-accent'}`}>
                  {product?.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-card-heading font-extrabold text-foreground mb-1">{product?.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{product?.description}</p>
                <p className="text-base font-bold text-primary mb-4">{product?.priceRange}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {product?.features?.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/products"
                  className={`block text-center py-2.5 rounded-lg text-sm font-bold transition-all ${
                    product?.badgeColor === 'primary' ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-accent text-white hover:bg-green-700'
                  }`}
                >
                  View {product?.title?.includes('Laptop') ? 'Laptops' : 'Desktops'} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
