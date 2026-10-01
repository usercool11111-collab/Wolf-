import React from 'react';
import { Sparkles, Dumbbell, Car, Users } from 'lucide-react';

export const Amenities: React.FC = () => {
  const amenities = [
    {
      title: 'Modern & Top-Quality Machines',
      desc: 'Biomechanically tested resistance machines, power racks & free weights.',
      icon: Dumbbell,
    },
    {
      title: 'Clean & Eco-friendly Environment',
      desc: 'Regularly sanitized, well-ventilated space with clean hygiene standards.',
      icon: Sparkles,
    },
    {
      title: 'Dedicated Parking Area',
      desc: 'Hassle-free parking space for your two-wheelers and vehicles at Royal Complex.',
      icon: Car,
    },
    {
      title: 'Unisex Gym Facilities',
      desc: 'Safe, respectful, welcoming community space for both men and women.',
      icon: Users,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0B0B0C] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-[#FF5A1F] font-semibold text-xs uppercase tracking-widest mb-2">
            Why Train With Us
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
            Premium <span className="text-[#FF5A1F]">Amenities</span>
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            Engineered to give you a distraction-free workout environment every single day.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#151517] border border-white/[0.08] hover:border-[#FF5A1F]/30 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
