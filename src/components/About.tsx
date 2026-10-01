import React, { useState } from 'react';
import { Award, Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import aboutImage from '../assets/images/wolf_fitness_about.png';

export const About: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(aboutImage);
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    // If local asset somehow fails, fallback to direct Google Drive CDN URL
    if (imgSrc !== 'https://lh3.googleusercontent.com/d/14OSdXpfo15hZIep47ZypCszkThndLyy3') {
      setImgSrc('https://lh3.googleusercontent.com/d/14OSdXpfo15hZIep47ZypCszkThndLyy3');
    } else {
      setImgError(true);
    }
  };

  const highlights = [
    {
      title: 'Expert Trainers',
      desc: 'Certified guidance & tailored diet plans',
      icon: Award,
    },
    {
      title: 'Modern Equipment',
      desc: 'State-of-the-art strength & cardio gear',
      icon: Zap,
    },
    {
      title: 'Clean Environment',
      desc: 'Spotless, hygienic & welcoming atmosphere',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#151517] aspect-[4/3] group">
              {!imgError ? (
                <img
                  src={imgSrc}
                  alt="Wolf Fitness Gym interior facility and strength training machines"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-full bg-[#151517] flex items-center justify-center p-8 text-center">
                  <div>
                    <Award className="w-12 h-12 text-[#FF5A1F] mx-auto mb-3" />
                    <p className="font-heading text-xl text-white">Wolf Fitness Facility</p>
                    <p className="text-xs text-neutral-400 mt-1">Sector 8, Pratap Nagar, Jaipur</p>
                  </div>
                </div>
              )}
              {/* Subtle lighting overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 bg-[#151517]/90 backdrop-blur-md border border-white/[0.1] rounded-xl p-4 shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF5A1F]/15 flex items-center justify-center text-[#FF5A1F] shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-white tracking-wide">
                    100% UNISEX
                  </p>
                  <p className="text-xs text-neutral-400">Safe, respectful & community-driven</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Content & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="text-[#FF5A1F] font-semibold text-xs uppercase tracking-widest mb-3">
              About Wolf Fitness Gym
            </div>

            {/* Section Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight text-balance">
              Where Commitment Meets <span className="text-[#FF5A1F]">Transformation</span>
            </h2>

            {/* Exact User Text */}
            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              Welcome to Wolf Fitness Gym! We are a premium unisex gym dedicated to helping you
              achieve your fitness goals. With a great atmosphere, clean environment, and modern,
              well-maintained equipment, we provide the perfect space for fitness, strength
              training, and overall body transformation. Our highly professional and supportive
              trainers are always here to guide you with the right exercises and diet plans.
            </p>

            {/* 3 Highlight Chips / Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-[#151517] border border-white/[0.08] hover:border-[#FF5A1F]/40 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
