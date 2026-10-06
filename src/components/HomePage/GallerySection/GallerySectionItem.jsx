import React, { useEffect, useState } from "react";
import { Maximize2, MapPin } from "lucide-react";

const GallerySectionItem = ({ item, index, className = "", onOpen }) => {
  const [visible, setVisible] = useState(false);
  const [failed, setFailed] = useState(false);

  // Halka fade-in (stagger) animation
  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${item.title}`}
      style={{ transitionDelay: visible ? `${(index % 6) * 70}ms` : "0ms" }}
      className={`group relative block overflow-hidden rounded-[20px] bg-linear-to-br from-[#3a1f3d] to-[#741717] text-left shadow-md transition-all duration-700 hover:shadow-2xl hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e9722a] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {/* IMAGE */}
      {!failed && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-110"
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

      {/* HOVER BORDER GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-2 ring-inset ring-[#e9722a]/0 transition-all duration-500 group-hover:ring-[#e9722a]/70" />

      {/* CATEGORY CHIP */}
      <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] font-medium tracking-wide text-white backdrop-blur-md transition-colors duration-300 group-hover:border-[#e9722a] group-hover:bg-[#e9722a]">
        {item.category}
      </span>

      {/* ZOOM ICON */}
      <span className="absolute right-4 top-4 flex h-10 w-10 scale-50 items-center justify-center rounded-full bg-white text-[#1f1a18] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
        <Maximize2 size={17} />
      </span>

      {/* CAPTION */}
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="font-serif text-[18px] font-semibold leading-snug text-white sm:text-[20px]">
          {item.title}
        </h3>

        <p className="mt-1.5 flex max-h-0 items-center gap-1.5 overflow-hidden text-[12px] text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-6 group-hover:opacity-100">
          <MapPin size={13} className="text-[#f28c4a]" />
          {item.location}
        </p>
      </div>
    </button>
  );
};

export default GallerySectionItem;
