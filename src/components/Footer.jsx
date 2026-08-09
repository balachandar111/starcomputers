import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '@/components/ui/AppLogo';
import { PHONE_NUMBER, PHONE_NUMBER_2, EMAIL, ADDRESS, WHATSAPP_NUMBER } from '@/data/starComputerData';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <AppLogo size={40} />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent uppercase leading-none">FastFix</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Your one-stop solution for all computer & laptop needs. Sales, Service & Support – We&apos;ve got you covered!
            </p>
            <div className="flex gap-3">
              {[
                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
                { name: 'WhatsApp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
              ]?.map((s) => (
                <a
                  key={s?.name}
                  href={s?.name === 'WhatsApp' ? `https://wa.me/${WHATSAPP_NUMBER}` : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s?.name}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s?.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Laptops', href: '/products' },
                { label: 'Desktops', href: '/products' },
                { label: 'Services', href: '/services' },
                { label: 'Doorstep Service', href: '/#doorstep' },
                { label: 'About Us', href: '/#about' },
                { label: 'Contact Us', href: '/#contact' },
              ]?.map((l) => (
                <li key={l?.label}>
                  <Link to={l?.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Our Services</h3>
            <ul className="space-y-3">
              {['Laptop Repair', 'Desktop Repair', 'Screen Replacement', 'Data Recovery', 'SSD / RAM Upgrade', 'Windows Installation', 'Virus Removal']?.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-white/70 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${PHONE_NUMBER?.replace(/\s/g, '')}`} className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER_2?.replace(/\s/g, '')}`} className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER_2}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-sm text-white/70 hover:text-white transition-colors break-all">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {ADDRESS}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">© 2026 FastFix. All Rights Reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}