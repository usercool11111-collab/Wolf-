import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const scrollToContact = () => {
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

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-100 flex flex-col selection:bg-[#FF5A1F] selection:text-white pb-16 md:pb-0">
      {/* Sticky Header */}
      <Navbar onJoinClick={scrollToContact} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Amenities />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements (WhatsApp + Mobile Bottom Call Bar) */}
      <FloatingActions />
    </div>
  );
}
