import React from 'react';
import { Dumbbell, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Training Programs', href: '#services' },
    { name: 'Photo Gallery', href: '#gallery' },
    { name: 'Member Reviews', href: '#reviews' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#0B0B0C] border-t border-white/[0.08] text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 text-[#FF5A1F]">
                <Dumbbell className="w-5 h-5" />
              </span>
              <span className="font-heading text-2xl font-extrabold tracking-wider text-white">
                WOLF <span className="text-[#FF5A1F]">FITNESS</span>
              </span>
            </div>
            <p className="font-heading text-base font-semibold text-white/90 uppercase tracking-wide">
              "Transform Your Body, Elevate Your Fitness."
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Premium unisex fitness center equipped with cutting-edge equipment, certified personal trainers, and tailored nutritional programs in Pratap Nagar, Jaipur.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#FF5A1F] transition-colors duration-150 inline-block text-xs uppercase font-medium tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs uppercase font-medium tracking-wider">
              <li>
                <a
                  href="https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20enquire%20about%20Fitness%20Training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5A1F] transition-colors"
                >
                  Fitness Training
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20enquire%20about%20Weight%20Loss%20Training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5A1F] transition-colors"
                >
                  Weight Loss Training
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20enquire%20about%20Bodybuilding%20Training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5A1F] transition-colors"
                >
                  Bodybuilding Training
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20enquire%20about%20Personal%20Training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF5A1F] transition-colors"
                >
                  Personal Training
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Contact */}
          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-white uppercase tracking-wider mb-4">
              Gym Details
            </h4>
            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-neutral-300">
              <MapPin className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
              <span>
                2nd Floor, Main Market, 86/155, Royal Complex, near Saint Soldier School, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300 pt-1">
              <Phone className="w-4 h-4 text-[#FF5A1F] shrink-0" />
              <a href="tel:+918559998688" className="hover:text-[#FF5A1F] font-semibold text-white">
                +91 85599 98688
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300 pt-1">
              <Clock className="w-4 h-4 text-[#FF5A1F] shrink-0" />
              <span>Open daily, closes at 9:30 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Wolf Fitness Gym. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Jaipur, Rajasthan</span>
            <span aria-hidden="true">·</span>
            <span>Unisex Fitness Club</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
