import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import { products, WHATSAPP_NUMBER } from '@/data/starComputerData';

const tabs = ['All', 'Laptops', 'Desktops'];

const mockItems = [
  // New Laptops
  { id: 'nl1', category: 'new-laptops', tab: 'Laptops', brand: 'HP', model: 'Laptop 15s', specs: 'Intel Core i5-12th Gen · 8GB RAM · 512GB SSD · 15.6" FHD', price: '₹52,990', badge: 'NEW', badgeColor: 'primary', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cbb18939-1772270618337.png', alt: 'HP silver laptop open showing bright screen on white desk in well-lit office' },
  { id: 'nl2', category: 'new-laptops', tab: 'Laptops', brand: 'Dell', model: 'Inspiron 14', specs: 'AMD Ryzen 5 · 8GB RAM · 256GB SSD · 14" FHD', price: '₹45,990', badge: 'NEW', badgeColor: 'primary', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed', alt: 'Dell laptop with colorful screen display on bright open desk' },
  { id: 'nl3', category: 'new-laptops', tab: 'Laptops', brand: 'Lenovo', model: 'IdeaPad 3', specs: 'Intel Core i3-12th Gen · 8GB RAM · 512GB SSD · 15.6" HD', price: '₹38,490', badge: 'NEW', badgeColor: 'primary', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e0e91430-1774359438677.png', alt: 'Lenovo laptop with glowing screen on clean white surface in bright room' },
  { id: 'nl4', category: 'new-laptops', tab: 'Laptops', brand: 'Asus', model: 'VivoBook 15', specs: 'Intel Core i5 · 16GB RAM · 512GB SSD · 15.6" FHD', price: '₹58,990', badge: 'NEW', badgeColor: 'primary', image: 'https://images.unsplash.com/photo-1616847285265-0ad0fd7c8861', alt: 'Asus VivoBook laptop thin and light on wooden desk in bright airy workspace' },
  // Second-Hand Laptops
  { id: 'sl1', category: 'used-laptops', tab: 'Laptops', brand: 'HP', model: 'ProBook 440 G7', specs: 'Intel Core i5-10th Gen · 8GB RAM · 256GB SSD · 14" FHD', price: '₹18,500', badge: 'TESTED', badgeColor: 'accent', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cbb18939-1772270618337.png', alt: 'Refurbished HP business laptop open on desk in bright clean office environment' },
  { id: 'sl2', category: 'used-laptops', tab: 'Laptops', brand: 'Dell', model: 'Latitude 5490', specs: 'Intel Core i7-8th Gen · 16GB RAM · 512GB SSD · 14" FHD', price: '₹22,000', badge: 'TESTED', badgeColor: 'accent', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13dd29d5e-1784648778249.png', alt: 'Used Dell business laptop with code on screen on bright wooden desk' },
  { id: 'sl3', category: 'used-laptops', tab: 'Laptops', brand: 'Lenovo', model: 'ThinkPad E480', specs: 'Intel Core i5-8th Gen · 8GB RAM · 256GB SSD · 14" HD', price: '₹14,000', badge: 'TESTED', badgeColor: 'accent', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15182ed61-1767469901832.png', alt: 'Refurbished Lenovo ThinkPad laptop on clean bright office surface' },
  // New Desktops
  { id: 'nd1', category: 'new-desktops', tab: 'Desktops', brand: 'HP', model: 'Slim Desktop S01', specs: 'Intel Core i5-12th Gen · 8GB RAM · 512GB SSD · UHD Graphics', price: '₹42,990', badge: 'NEW', badgeColor: 'primary', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_110f8acea-1784564793913.png', alt: 'New HP desktop tower with LED lighting in bright clean technology office' },
  { id: 'nd2', category: 'new-desktops', tab: 'Desktops', brand: 'Custom Build', model: 'Gaming PC', specs: 'AMD Ryzen 5 5600X · 16GB RAM · 1TB SSD · RTX 3060', price: '₹85,000', badge: 'NEW', badgeColor: 'primary', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f50baeee-1784565323384.png', alt: 'Custom gaming desktop computer with RGB lighting in dark gaming room with colorful ambient light' },
  // Used Desktops
  { id: 'ud1', category: 'used-desktops', tab: 'Desktops', brand: 'HP', model: 'EliteDesk 800 G3', specs: 'Intel Core i5-7th Gen · 8GB RAM · 256GB SSD · Win 11', price: '₹12,500', badge: 'TESTED', badgeColor: 'accent', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_11dcbafcf-1772789832580.png', alt: 'Refurbished HP desktop computer with monitor keyboard and mouse on bright office desk' },
  { id: 'ud2', category: 'used-desktops', tab: 'Desktops', brand: 'Dell', model: 'OptiPlex 7050', specs: 'Intel Core i7-7th Gen · 16GB RAM · 512GB SSD · Win 11', price: '₹16,000', badge: 'TESTED', badgeColor: 'accent', image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ebfb3173-1768229783028.png', alt: 'Used Dell desktop setup with dual monitors on bright open office desk' },
];

export default function ProductsPageContent() {
  const [activeTab, setActiveTab] = useState('All');
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const filtered = activeTab === 'All' ? mockItems : mockItems?.filter((item) => item?.tab === activeTab);

  return (
    <div ref={sectionRef}>
      {/* Page Hero */}
      <div className="bg-secondary text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="reveal-up">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-light mb-2">Browse & Buy</p>
            <h1 className="text-section-heading font-extrabold text-white mb-3">Our Products</h1>
            <p className="text-base text-white/70 max-w-xl">
              New &amp; second-hand laptops and desktops — all quality-checked, warranty included, best prices guaranteed.
            </p>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-10 reveal-up flex-wrap">
            {tabs?.map((tab) =>
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab ?
                    'bg-primary text-white shadow-md shadow-primary/20' :
                    'bg-card border border-border text-muted-foreground hover:border-primary hover:text-primary'}`
                }>

                {tab}
              </button>
            )}
            <span className="text-sm text-muted-foreground ml-2">{filtered?.length} items</span>
          </div>

          {/* Category summaries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {products?.map((p, i) =>
              <div key={p?.id} className={`reveal-up stagger-${i + 1} p-5 rounded-xl border-2 ${activeTab === 'All' || activeTab === 'Laptops' && p?.id?.includes('laptop') || activeTab === 'Desktops' && p?.id?.includes('desktop') ? 'border-primary/30 bg-primary/5' : 'border-border bg-card'} transition-all`}>
                <div className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-2 ${p?.badgeColor === 'primary' ? 'bg-primary text-white' : 'bg-accent text-white'}`}>{p?.badge}</div>
                <h3 className="font-extrabold text-foreground mb-1">{p?.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{p?.priceRange}</p>
                <p className="text-xs text-muted-foreground">{p?.description}</p>
              </div>
            )}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered?.map((item, i) =>
              <div
                key={item?.id}
                className={`reveal-up stagger-${Math.min(i + 1, 10)} bg-card rounded-xl border border-border overflow-hidden card-hover shadow-sm`}>

                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <AppImage
                    src={item?.image}
                    alt={item?.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white ${item?.badgeColor === 'primary' ? 'bg-primary' : 'bg-accent'}`}>
                    {item?.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">{item?.brand}</p>
                  <h3 className="font-extrabold text-foreground mb-2">{item?.model}</h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item?.specs}</p>
                  <p className="text-lg font-extrabold text-primary mb-4">{item?.price}</p>

                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in ${item?.brand} ${item?.model} (${item?.price}). Is it available?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all">

                      Enquire Now
                    </a>
                    <a
                      href={`tel:+918838810132`}
                      className="px-3 py-2.5 rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all"
                      aria-label="Call us">

                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden reveal-up">
            <div className="absolute inset-0 grain-overlay" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Can&apos;t find what you&apos;re looking for?</h2>
              <p className="text-white/70 mb-6 max-w-md mx-auto text-sm">Tell us your requirements and budget — we&apos;ll source the perfect computer for you.</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello! I need help finding the right computer.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30">

                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}