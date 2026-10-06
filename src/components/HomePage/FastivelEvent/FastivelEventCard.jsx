import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const FastivelEventCard = ({ event, index, visible }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link
      to={event.path}
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
      className={`group relative flex flex-col overflow-hidden rounded-[22px] bg-white shadow-md shadow-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/15 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* IMAGE */}
      <div className="relative h-55 overflow-hidden bg-linear-to-br from-[#3a1f3d] to-[#741717]">
        {!imageFailed && (
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-110"
          />
        )}

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 transition-opacity duration-500 group-hover:from-black/55" />

        {/* DATE BADGE / REGULAR */}
        {event.regular ? (
          <span className="absolute left-4 top-4 rounded-xl bg-white px-4 py-2 text-[13px] font-semibold text-[#1f1a18] shadow-lg transition-all duration-300 group-hover:bg-[#e9722a] group-hover:text-white">
            Regular
          </span>
        ) : (
          <span className="absolute left-4 top-4 flex min-w-15.5 flex-col items-center rounded-2xl bg-white px-3 py-2 text-[#1f1a18] shadow-lg transition-all duration-300 group-hover:bg-[#e9722a] group-hover:text-white">
            <span className="font-serif text-[26px] font-bold leading-none">
              {event.day}
            </span>
            <span className="mt-1 text-[12px] font-semibold uppercase tracking-wide">
              {event.month}
            </span>
          </span>
        )}

        {/* CATEGORY CHIP */}
        <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          {event.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 items-end justify-between gap-4 p-5">
        <div className="min-w-0">
          <h3 className="text-[17px] font-semibold text-[#1f1a18] transition-colors duration-300 group-hover:text-[#c8561b]">
            {event.title}
          </h3>

          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#6a5f5a]">
            {event.description}
          </p>

          <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-[#8a7f79]">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[#e9722a]" />
              {event.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-[#e9722a]" />
              {event.time}
            </span>
          </div>
        </div>

        {/* ARROW BUTTON */}
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9722a] text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c8561b] group-hover:shadow-[#e9722a]/50">
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-rotate-45"
          />
        </span>
      </div>
    </Link>
  );
};

export default FastivelEventCard;
