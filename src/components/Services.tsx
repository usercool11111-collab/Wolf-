import React from 'react';
import { Activity, Flame, Dumbbell, UserCheck, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  whatsappQuery: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'fitness-training',
      title: 'Fitness Training',
      description: 'General fitness programs for a healthy lifestyle, stamina, mobility, and cardiovascular health.',
      icon: Activity,
      whatsappQuery: 'Fitness Training',
    },
    {
      id: 'weight-loss',
      title: 'Weight Loss Training',
      description: 'Specially designed workouts to help you burn fat, boost metabolism, and lose weight efficiently.',
      icon: Flame,
      whatsappQuery: 'Weight Loss Training',
    },
    {
      id: 'bodybuilding',
      title: 'Bodybuilding Training',
      description: 'Advanced training for muscle gain, progressive overload, hypertrophy, and maximum strength.',
      icon: Dumbbell,
      whatsappQuery: 'Bodybuilding Training',
    },
    {
      id: 'personal-training',
      title: 'Personal Training',
      description: 'One-on-one guidance from expert trainers for customized workout plans, form correction, and fast results.',
      icon: UserCheck,
      whatsappQuery: 'Personal Training',
    },
  ];

  const handleEnquire = (serviceName: string) => {
    const text = encodeURIComponent(`Hi Wolf Fitness Gym, I want to enquire about ${serviceName}`);
    window.open(`https://wa.me/918559998688?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0B0B0C] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="text-[#FF5A1F] font-semibold text-xs uppercase tracking-widest mb-3">
            Our Programs
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Specialized Training For <span className="text-[#FF5A1F]">Every Goal</span>
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Choose the regimen that fits your aspirations. Every program includes personalized coaching and posture guidance.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#151517] border border-white/[0.08] hover:border-[#FF5A1F]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FF5A1F]/5"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#0B0B0C] border border-white/[0.06] group-hover:border-[#FF5A1F]/30 group-hover:bg-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F] transition-colors duration-200 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#FF5A1F] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Enquire Action */}
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => handleEnquire(service.whatsappQuery)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A1F] hover:text-white uppercase tracking-wider transition-colors duration-150 group/link"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
