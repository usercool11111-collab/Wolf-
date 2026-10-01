import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface NavbarProps {
  onJoinClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  const handleJoinNow = () => {
    setIsOpen(false);
    if (onJoinClick) {
      onJoinClick();
    } else {
      window.open(
        'https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20join',
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'bg-[#0B0B0C]/80 backdrop-blur-sm border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded-lg p-1"
            aria-label="Wolf Fitness Gym Home"
          >
            <span className="p-2 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white transition-colors duration-200">
              <Dumbbell className="w-5 h-5" />
            </span>
            <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
              WOLF <span className="text-[#FF5A1F]">FITNESS</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#FF5A1F] transition-colors duration-150 py-1 border-b-2 border-transparent hover:border-[#FF5A1F] focus:outline-none focus-visible:text-[#FF5A1F]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action (Desktop) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleJoinNow}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#FF5A1F] hover:bg-[#E04D16] text-white font-semibold text-sm uppercase tracking-wider rounded-xl transition-all duration-150 shadow-md shadow-[#FF5A1F]/20 hover:shadow-lg hover:shadow-[#FF5A1F]/30 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-[#0B0B0C]"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={handleJoinNow}
              className="px-4 py-1.5 bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider rounded-lg active:scale-95"
            >
              Join
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#151517] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-neutral-200 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={handleJoinNow}
              className="w-full flex items-center justify-center py-3 bg-[#FF5A1F] hover:bg-[#E04D16] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-md shadow-[#FF5A1F]/20"
            >
              Join Us on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
