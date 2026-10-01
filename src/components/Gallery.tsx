import React, { useState, useRef, useEffect } from 'react';
import { Camera, Maximize2, Upload, RotateCcw, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import defaultImg1 from '../assets/images/gallery_1.png';
import defaultImg2 from '../assets/images/gallery_2.png';
import defaultImg3 from '../assets/images/gallery_3.png';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  defaultSrc: string;
  src: string;
}

const INITIAL_PHOTOS: GalleryItem[] = [
  {
    id: 1,
    title: 'Strength & Free Weights',
    category: 'Heavy Lifting Zone',
    defaultSrc: defaultImg1,
    src: defaultImg1,
  },
  {
    id: 2,
    title: 'Cardio & Conditioning Floor',
    category: 'Modern Fitness Arena',
    defaultSrc: defaultImg2,
    src: defaultImg2,
  },
  {
    id: 3,
    title: 'Functional Training & Machines',
    category: 'Biomechanic Equipment',
    defaultSrc: defaultImg3,
    src: defaultImg3,
  },
];

export const Gallery: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('wolf_gym_gallery_photos');
      if (saved) {
        const parsed = JSON.parse(saved);
        return INITIAL_PHOTOS.map((p, idx) => ({
          ...p,
          src: parsed[idx]?.src || p.defaultSrc,
        }));
      }
    } catch {
      // ignore JSON or localStorage errors
    }
    return INITIAL_PHOTOS;
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeReplaceIndex, setActiveReplaceIndex] = useState<number | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [uploadSuccessToast, setUploadSuccessToast] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync to localStorage
  const savePhotos = (updated: GalleryItem[]) => {
    setPhotos(updated);
    try {
      localStorage.setItem('wolf_gym_gallery_photos', JSON.stringify(updated));
    } catch {
      // Storage quota exceeded or disabled
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, photoIndex: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please choose a valid image file (PNG, JPG, WebP).');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const updated = [...photos];
        updated[photoIndex] = { ...updated[photoIndex], src: result };
        savePhotos(updated);
        showToast('Photo successfully updated!');
        setActiveReplaceIndex(null);
      };
      reader.readAsDataURL(file);
    }
    // reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleUrlSubmit = (photoIndex: number) => {
    if (!urlInput.trim()) return;

    // Handle Google Drive link if user pasted drive view link
    let finalUrl = urlInput.trim();
    const driveMatch = finalUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      finalUrl = `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }

    const updated = [...photos];
    updated[photoIndex] = { ...updated[photoIndex], src: finalUrl };
    savePhotos(updated);
    setUrlInput('');
    setActiveReplaceIndex(null);
    showToast('Photo URL updated!');
  };

  const handleResetPhoto = (photoIndex: number) => {
    const updated = [...photos];
    updated[photoIndex] = { ...updated[photoIndex], src: updated[photoIndex].defaultSrc };
    savePhotos(updated);
    setActiveReplaceIndex(null);
    showToast('Reset to original photo.');
  };

  const showToast = (msg: string) => {
    setUploadSuccessToast(msg);
    setTimeout(() => {
      setUploadSuccessToast(null);
    }, 3000);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, photos.length]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0B0B0C] border-t border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="text-[#FF5A1F] font-semibold text-xs uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            <span>Our Facility</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            Inside <span className="text-[#FF5A1F]">Wolf Fitness Gym</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            Take a look at our clean training floors, top-grade machinery, and high-energy workout atmosphere.
          </p>
        </div>

        {/* 3 Photos in Single Row on Desktop, Responsive on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {photos.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#151517] border border-white/[0.08] hover:border-[#FF5A1F]/40 shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF5A1F]/10 flex flex-col"
            >
              {/* Image Frame with Consistent Aspect Ratio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-900 cursor-pointer">
                <img
                  src={item.src}
                  alt={`${item.title} at Wolf Fitness Gym`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  onClick={() => setLightboxIndex(index)}
                  onError={(e) => {
                    // Fallback to default if custom link breaks
                    if (e.currentTarget.src !== item.defaultSrc) {
                      e.currentTarget.src = item.defaultSrc;
                    }
                  }}
                />

                {/* Dark Vignette Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"
                />

                {/* Quick Action Overlay Buttons (Top Right) */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveReplaceIndex(index);
                      setUrlInput('');
                    }}
                    className="p-2 rounded-xl bg-[#151517]/90 hover:bg-[#FF5A1F] text-white text-xs backdrop-blur-md border border-white/[0.12] transition-colors shadow-lg"
                    title="Replace / Upload photo"
                    aria-label={`Replace photo ${index + 1}`}
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(index);
                    }}
                    className="p-2 rounded-xl bg-[#151517]/90 hover:bg-[#FF5A1F] text-white text-xs backdrop-blur-md border border-white/[0.12] transition-colors shadow-lg"
                    title="Enlarge photo"
                    aria-label={`Enlarge photo ${index + 1}`}
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Text Overlay on Bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A1F] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide drop-shadow-md">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Bar with Replace / Reset trigger for easy access */}
              <div className="p-3 bg-[#151517] border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-medium">Photo 0{index + 1}</span>
                <div className="flex items-center gap-3">
                  {item.src !== item.defaultSrc && (
                    <button
                      onClick={() => handleResetPhoto(index)}
                      className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                      title="Reset to default image"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setActiveReplaceIndex(index);
                      setUrlInput('');
                    }}
                    className="text-[#FF5A1F] hover:text-white inline-flex items-center gap-1 font-semibold transition-colors"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Replace</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden File Input for uploading images */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (activeReplaceIndex !== null) {
            handleFileUpload(e, activeReplaceIndex);
          }
        }}
      />

      {/* Replace / Upload Photo Modal */}
      {activeReplaceIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="replace-photo-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveReplaceIndex(null)}
        >
          <div
            className="w-full max-w-md bg-[#151517] border border-white/[0.12] rounded-2xl p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <h3 id="replace-photo-title" className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                  Replace Photo 0{activeReplaceIndex + 1}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  {photos[activeReplaceIndex].title}
                </p>
              </div>
              <button
                onClick={() => setActiveReplaceIndex(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.08]"
                aria-label="Close replace photo modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {/* Option 1: Upload from Device */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Upload From Your Device
                </label>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#FF5A1F] hover:bg-[#E04D16] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#FF5A1F]/20 active:scale-98"
                >
                  <Upload className="w-4 h-4" />
                  <span>Choose Image File (JPG, PNG)</span>
                </button>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-white/[0.08]"></div>
                <span className="flex-shrink mx-3 text-neutral-500 text-xs uppercase tracking-wider font-semibold">
                  OR
                </span>
                <div className="flex-grow border-t border-white/[0.08]"></div>
              </div>

              {/* Option 2: Image URL or Google Drive Link */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  Paste Image or Google Drive Link
                </label>
                <div className="space-y-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://... or Google Drive share link"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0B0B0C] border border-white/[0.12] text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F]"
                  />
                  <button
                    type="button"
                    onClick={() => handleUrlSubmit(activeReplaceIndex)}
                    disabled={!urlInput.trim()}
                    className="w-full py-2.5 bg-white/[0.08] hover:bg-white/[0.15] disabled:opacity-40 disabled:hover:bg-white/[0.08] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors border border-white/[0.08]"
                  >
                    Apply URL
                  </button>
                </div>
              </div>

              {/* Option 3: Reset to Default */}
              {photos[activeReplaceIndex].src !== photos[activeReplaceIndex].defaultSrc && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleResetPhoto(activeReplaceIndex)}
                    className="w-full py-2 text-neutral-400 hover:text-white text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Original Gym Photo</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Fullscreen Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#151517] text-white hover:bg-[#FF5A1F] border border-white/[0.12] transition-colors z-50"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#151517]/80 hover:bg-[#FF5A1F] text-white backdrop-blur-md border border-white/[0.12] transition-all z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#151517]/80 hover:bg-[#FF5A1F] text-white backdrop-blur-md border border-white/[0.12] transition-all z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption */}
          <div
            className="max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain border border-white/[0.08] shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs font-bold text-[#FF5A1F] uppercase tracking-wider">
                {photos[lightboxIndex].category}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
                {photos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Photo {lightboxIndex + 1} of {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification Toast */}
      {uploadSuccessToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-emerald-500/40 shadow-2xl flex items-center gap-2 backdrop-blur-md animate-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{uploadSuccessToast}</span>
        </div>
      )}
    </section>
  );
};
