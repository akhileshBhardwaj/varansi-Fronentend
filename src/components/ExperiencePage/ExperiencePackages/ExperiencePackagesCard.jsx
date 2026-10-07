import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Heart, Landmark } from "lucide-react";

const ExperiencePackagesCard = ({
  item,
  index,
  visible,
  active,
  favorite,
  onActivate,
  onDeactivate,
  onToggleFavorite,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    // OUTER: sirf entrance animation (delay yahin, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
      className={`h-full py-3 transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-ep-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`overflow-hidden rounded-2xl bg-white p-0 ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/10 ring-black/5"
        }`}
      >
        {/* IMAGE */}
        <div
          className={`relative aspect-16/6 overflow-hidden bg-linear-to-br ${item.fallback}`}
        >
          {!imageFailed && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                active ? "scale-110" : "scale-100"
              }`}
            />
          )}

          <div
            className={`absolute inset-0 bg-linear-to-t from-black/40 to-transparent transition-opacity duration-500 ${
              active ? "opacity-100" : "opacity-60"
            }`}
          />

          {/* ICON BADGE */}
          <span
            className={`absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ${
              active
                ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white"
                : "border-white/50 bg-black/30 text-white"
            }`}
          >
            <Landmark size={16} />
          </span>

          {/* HEART */}
          <button
            type="button"
            aria-label={
              favorite ? "Remove from favourites" : "Add to favourites"
            }
            aria-pressed={favorite}
            onClick={() => onToggleFavorite(item.id)}
            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 active:scale-75 ${
              favorite
                ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white"
                : "border-white/50 bg-black/30 text-white hover:scale-110 hover:bg-white/90 hover:text-[#e9722a]"
            }`}
          >
            <Heart
              size={16}
              className={`transition-transform duration-300 ${
                favorite ? "scale-110 fill-current" : ""
              }`}
            />
          </button>
        </div>

        {/* DETAILS */}
        <div className="px-5 pb-5 pt-4">
          <h3
            className={`text-[18px] font-semibold transition-colors duration-300 ${
              active ? "text-[#e9722a]" : "text-[#1a1410]"
            }`}
          >
            {item.title}
          </h3>

          <p className="mt-1.5 text-[13px] text-[#6b6159]">
            {item.description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-[13px] text-[#5b5148]">
              <span className="flex items-center gap-1.5">
                <CalendarDays size={15} className="text-[#b88a6a]" />
                {item.duration}
              </span>
              <span className="h-4 w-px bg-[#d9d0c7]" />
              <span>From ₹{item.price.toLocaleString("en-IN")}</span>
            </div>

            <Link
              to={`/packages/${item.slug}`}
              aria-label={`View ${item.title}`}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9722a] text-white transition-all duration-300 active:scale-90 ${
                active
                  ? "scale-110 shadow-lg shadow-[#e9722a]/50"
                  : "shadow-md shadow-[#e9722a]/25"
              }`}
            >
              <ArrowRight
                size={17}
                className={`transition-transform duration-300 ${
                  active ? "translate-x-0.5" : ""
                }`}
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ExperiencePackagesCard;
