import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20want%20to%20join';

  return (
    <>
      {/* Floating WhatsApp Button (All Screens) */}
      <aside aria-label="Quick contact" className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#FF5A1F] hover:bg-[#E04D16] text-white rounded-full shadow-2xl shadow-[#FF5A1F]/40 hover:shadow-[#FF5A1F]/60 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Chat with Wolf Fitness Gym on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* Sticky Bottom Action Bar (Mobile Only - Under 15% viewport height cap) */}
      <nav
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#151517]/95 backdrop-blur-md border-t border-white/[0.08] px-3 py-2.5 flex items-center gap-2.5 shadow-2xl"
      >
        <a
          href="tel:+918559998688"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-white/[0.08] active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-[#FF5A1F]" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-[#FF5A1F] hover:bg-[#E04D16] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md shadow-[#FF5A1F]/20 active:scale-[0.98]"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Join WhatsApp</span>
        </a>
      </nav>
    </>
  );
};
