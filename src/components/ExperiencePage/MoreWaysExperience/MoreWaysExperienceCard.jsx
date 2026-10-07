import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Layers } from "lucide-react";

const MoreWaysExperienceCard = ({
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
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-mw-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`overflow-hidden rounded-2xl bg-white ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/10 ring-black/5"
        }`}
      >
        {/* IMAGE */}
        <div
          className={`relative aspect-4/3.4 overflow-hidden bg-linear-to-br ${item.fallback}`}
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
            className={`absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-500 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* HEART */}
          <button
            type="button"
            aria-label={
              favorite ? "Remove from favourites" : "Add to favourites"
            }
            aria-pressed={favorite}
            onClick={() => onToggleFavorite(item.id)}
            className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 active:scale-75 ${
              favorite
                ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white"
                : "border-white/50 bg-black/30 text-white hover:scale-110 hover:bg-white/90 hover:text-[#e9722a]"
            }`}
          >
            <Heart
              size={15}
              className={`transition-transform duration-300 ${
                favorite ? "scale-110 fill-current" : ""
              }`}
            />
          </button>
        </div>

        {/* DETAILS */}
        <div className="flex items-center justify-between gap-2 p-3.5">
          <div className="min-w-0">
            <h3
              className={`truncate text-[14px] font-semibold transition-colors duration-300 ${
                active ? "text-[#e9722a]" : "text-[#1a1410]"
              }`}
            >
              {item.title}
            </h3>

            <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-[#6b6159]">
              <Layers size={13} />
              {item.count} Experiences
            </p>
          </div>

          <Link
            to={`/experiences?category=${item.slug}`}
            aria-label={`Explore ${item.title}`}
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
              active
                ? "scale-110 bg-[#e9722a] text-white shadow-md shadow-[#e9722a]/40"
                : "bg-[#ece7e2] text-[#1a1410]"
            }`}
          >
            <ArrowRight
              size={14}
              className={`transition-transform duration-300 ${
                active ? "translate-x-0.5" : ""
              }`}
            />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default MoreWaysExperienceCard;
