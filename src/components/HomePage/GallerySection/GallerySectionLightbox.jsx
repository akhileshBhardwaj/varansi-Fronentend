import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const GallerySectionLightbox = ({ items, index, onClose, onChange }) => {
  const [failed, setFailed] = useState(false);
  const total = items.length;
  const item = items[index];

  const goPrev = () => onChange((index - 1 + total) % total);
  const goNext = () => onChange((index + 1) % total);

  // Nayi image par error reset
  useEffect(() => {
    setFailed(false);
  }, [index]);

  // Keyboard + scroll lock
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total]);

  if (!item) return null;

  const navClass =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#e9722a] active:scale-95";

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:rotate-90 hover:bg-[#e9722a]"
      >
        <X size={20} />
      </button>

      {/* COUNTER */}
      <p className="absolute left-5 top-6 z-10 text-sm font-medium tracking-widest text-white/80">
        {String(index + 1).padStart(2, "0")}
        <span className="text-white/40">
          {" "}
          / {String(total).padStart(2, "0")}
        </span>
      </p>

      {/* PREV / NEXT */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
        aria-label="Previous image"
        className={`${navClass} left-3 md:left-6`}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
        aria-label="Next image"
        className={`${navClass} right-3 md:right-6`}
      >
        <ChevronRight size={22} />
      </button>

      {/* IMAGE + CAPTION */}
      <figure
        className="flex max-h-full w-full max-w-250 flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-[76vh] min-h-60 w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#3a1f3d] to-[#741717] shadow-2xl">
          {failed ? (
            <p className="p-10 text-white/70">Image load nahi ho payi</p>
          ) : (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              onError={() => setFailed(true)}
              className="max-h-[76vh] w-full object-contain"
            />
          )}
        </div>

        <figcaption className="mt-5 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#f28c4a]">
            {item.category}
          </p>

          <h3 className="mt-1.5 font-serif text-[24px] font-semibold text-white">
            {item.title}
          </h3>

          <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-white/70">
            <MapPin size={14} className="text-[#f28c4a]" />
            {item.location}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default GallerySectionLightbox;
