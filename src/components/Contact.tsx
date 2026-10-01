import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Navigation, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Fitness');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [successMessage, setSuccessMessage] = useState('');

  const fullAddress =
    '2nd Floor, Main Market, 86/155, Royal Complex, near Saint Soldier School, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033';
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Wolf Fitness Gym, 86/155, Royal Complex, Sector 8, Pratap Nagar, Jaipur, Rajasthan 302033'
  )}`;

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Clean phone number (strip whitespace, dashes, country code prefix)
    const cleanedPhone = phone.replace(/\D/g, '');
    const tenDigitPhone = cleanedPhone.length > 10 ? cleanedPhone.slice(-10) : cleanedPhone;

    if (!phone.trim()) {
      newErrors.phone = 'Please enter your 10-digit mobile number';
    } else if (tenDigitPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, '');
    const tenDigitPhone = cleanedPhone.length > 10 ? cleanedPhone.slice(-10) : cleanedPhone;

    const message = `Hi Wolf Fitness Gym, my name is ${name.trim()}, phone: ${tenDigitPhone}, and I want to enquire about ${goal}.`;
    const whatsappUrl = `https://wa.me/918559998688?text=${encodeURIComponent(message)}`;

    setSuccessMessage('Thanks! Opening WhatsApp to send your enquiry.');

    // Give user brief visual feedback then open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B0B0C] border-t border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="text-[#FF5A1F] font-semibold text-xs uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight">
            Start Your Fitness Journey <span className="text-[#FF5A1F]">Today</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            If you want to start your fitness journey, get in touch with us today! We would love to serve you.
          </p>
        </div>

        {/* Contact Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Cards: Address, Phone, Hours */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="rounded-2xl bg-[#151517] border border-white/[0.08] p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                    Our Location
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                    {fullAddress}
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] hover:bg-[#FF5A1F] hover:text-white text-neutral-200 text-xs font-bold uppercase tracking-wider rounded-xl border border-white/[0.08] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-[#151517] border border-white/[0.08] p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                    Phone & WhatsApp
                  </h3>
                  <p className="mt-1 text-lg font-bold text-white tracking-wide">
                    +91 85599 98688
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="tel:+918559998688"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5A1F] hover:bg-[#E04D16] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md shadow-[#FF5A1F]/20"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/918559998688?text=Hi%20Wolf%20Fitness%20Gym,%20I%20have%20an%20enquiry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-bold uppercase tracking-wider rounded-xl border border-white/[0.08] transition-colors"
                    >
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl bg-[#151517] border border-white/[0.08] p-6 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF5A1F]/10 text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                    Operating Hours
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#FF5A1F]">
                    Open daily, closes at 9:30 PM
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Morning & evening workout slots available 7 days a week.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#151517] border border-white/[0.08] p-7 sm:p-9 shadow-xl">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide">
                Send An Enquiry
              </h3>
              <p className="text-sm text-neutral-400 mt-1 mb-6">
                Fill in your details and we will connect with you immediately via WhatsApp.
              </p>

              {successMessage ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg font-bold text-white uppercase">
                      Enquiry Prepared!
                    </h4>
                    <p className="text-sm text-emerald-300 mt-1">{successMessage}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSuccessMessage('');
                        setName('');
                        setPhone('');
                      }}
                      className="mt-4 text-xs font-semibold text-white underline hover:text-neutral-300"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="client-name"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Your Name <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-white/[0.12] focus:border-[#FF5A1F]'
                      } text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label
                      htmlFor="client-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Phone Number (10 Digits) <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 text-sm font-medium">
                        +91
                      </span>
                      <input
                        id="client-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                        }}
                        placeholder="85599 98688"
                        maxLength={14}
                        className={`w-full pl-14 pr-4 py-3 rounded-xl bg-[#0B0B0C] border ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-white/[0.12] focus:border-[#FF5A1F]'
                        } text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] transition-all`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Goal Dropdown */}
                  <div>
                    <label
                      htmlFor="fitness-goal"
                      className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2"
                    >
                      Primary Fitness Goal
                    </label>
                    <select
                      id="fitness-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0C] border border-white/[0.12] text-white text-sm focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-all cursor-pointer"
                    >
                      <option value="Fitness" className="bg-[#151517]">Fitness Training</option>
                      <option value="Weight Loss" className="bg-[#151517]">Weight Loss Training</option>
                      <option value="Bodybuilding" className="bg-[#151517]">Bodybuilding Training</option>
                      <option value="Personal Training" className="bg-[#151517]">Personal Training</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FF5A1F] hover:bg-[#E04D16] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-150 shadow-lg shadow-[#FF5A1F]/20 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>
                    <p className="text-center text-xs text-neutral-500 mt-3">
                      We respect your privacy. No spam guaranteed.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Google Maps Section */}
        <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#151517]">
          <div className="p-4 sm:p-5 border-b border-white/[0.06] flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF5A1F]" />
              <span className="font-heading text-base font-bold text-white uppercase tracking-wide">
                Map Location · Royal Complex, Sector 8, Pratap Nagar
              </span>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#FF5A1F] hover:underline"
            >
              Open in Google Maps App →
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              title="Wolf Fitness Gym Location Map"
              src="https://maps.google.com/maps?q=86%2F155%20Royal%20Complex%20Sector%208%20Pratap%20Nagar%20Jaipur&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
