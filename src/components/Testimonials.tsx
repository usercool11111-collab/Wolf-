import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Thakur Sahab Abheet Singh',
      role: 'Google Verified Member',
      comment:
        'Amazing gym with a great atmosphere. The trainers are highly professional, supportive, and always ready to help. Equipment is modern, well-maintained, and the gym is very clean. Perfect place for fitness, strength training, and overall transformation. Highly recommended!',
      rating: 5,
    },
    {
      id: '2',
      name: 'Tushar Rawat',
      role: 'Google Verified Member',
      comment:
        "The gym is really great, the trainer also provides the right exercises and diet. The machines are the best, and the interior is good too. It's a very friendly environment.",
      rating: 5,
    },
    {
      id: '3',
      name: 'Agrim Jain',
      role: 'Google Verified Member',
      comment:
        'Very good gym and the gym trainer and owner are calm and supportive.',
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0B0B0C] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 mb-3 text-sm text-[#FF5A1F] font-bold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]" />
              ))}
            </div>
            <span className="text-white ml-1 font-heading text-lg tracking-wide">4.9 / 5.0</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Google Rating <span className="text-[#FF5A1F]">4.9/5</span> From 100+ Members
          </h2>

          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Real feedback from members who train every day at Wolf Fitness Gym in Pratap Nagar.
          </p>
        </div>

        {/* Desktop View: 3-column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-[#151517] border border-white/[0.08] hover:border-[#FF5A1F]/30 p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide">
                    {review.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5">{review.role}</p>
                </div>
                <Quote className="w-6 h-6 text-white/10" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Swipeable / Carousel Card */}
        <div className="md:hidden">
          <div className="relative rounded-2xl bg-[#151517] border border-white/[0.08] p-6 min-h-[260px] flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF5A1F] text-[#FF5A1F]" />
                ))}
              </div>
              <p className="text-sm text-neutral-200 leading-relaxed italic">
                "{reviews[activeIndex].comment}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide">
                  {reviews[activeIndex].name}
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">{reviews[activeIndex].role}</p>
              </div>
              <Quote className="w-6 h-6 text-white/10" />
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-5 px-2">
            <div className="flex items-center gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-200 ${
                    idx === activeIndex ? 'w-6 bg-[#FF5A1F]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-[#151517] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#FF5A1F]"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-[#151517] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#FF5A1F]"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
