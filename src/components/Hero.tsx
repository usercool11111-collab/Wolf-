import React, { useState } from 'react';
import { ArrowRight, Star, MessageSquare } from 'lucide-react';
import heroImage from '../assets/images/hero_gym_interior_1790858207387.jpg';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleJoinWhatsApp = () => {
    window.open(
      'https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20join',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B0C]"
    >
      {/* Background Image with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        {!imgError ? (
          <img
            src={heroImage}
            alt="Wolf Fitness Gym interior with modern equipment"
            className="w-full h-full object-cover object-center filter brightness-60"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#151517] via-[#0B0B0C] to-[#1a1310]" />
        )}

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/75 to-[#0B0B0C]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/85 via-transparent to-[#0B0B0C]/80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center flex flex-col items-center">
        {/* Subtle Brand Kicker */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase">
          <span>Pratap Nagar, Jaipur</span>
          <span aria-hidden="true" className="text-white/40">·</span>
          <span>Unisex Fitness Club</span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white max-w-4xl leading-[0.95] text-balance">
          Transform Your Body, <span className="text-[#FF5A1F]">Elevate Your Fitness.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance">
          Premium unisex gym with modern equipment, expert trainers and a clean, friendly environment.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={handleJoinWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A1F] hover:bg-[#E04D16] text-white text-base font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-xl shadow-[#FF5A1F]/25 hover:shadow-2xl hover:shadow-[#FF5A1F]/40 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5A1F] focus-visible:ring-offset-[#0B0B0C]"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Join Us Today</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 hover:border-[#FF5A1F] text-white hover:text-[#FF5A1F] text-base font-bold uppercase tracking-wider rounded-xl transition-all duration-200 hover:bg-white/[0.04] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
          >
            Contact Us
          </a>
        </div>

        {/* Trust Strip Below */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/[0.08] w-full max-w-xl flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-neutral-300">
          <div className="flex items-center gap-1.5 text-neutral-200">
            <Star className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]" />
            <span className="font-semibold text-white">4.9/5</span>
            <span className="text-neutral-400">Google Rating</span>
          </div>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-neutral-200 font-semibold">100+ Members</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="text-neutral-300">Unisex Gym</span>
        </div>
      </div>
    </section>
  );
};
