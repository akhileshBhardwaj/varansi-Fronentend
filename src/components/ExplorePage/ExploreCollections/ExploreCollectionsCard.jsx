import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const ExploreCollectionsCard = ({
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
        data-ec-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`relative isolate aspect-3/4 overflow-hidden rounded-xl bg-linear-to-br ${
          item.fallback
        } transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/30"
            : "translate-y-0 shadow-lg shadow-black/15"
        }`}
      >
        {/* IMAGE */}
        {!imageFailed && (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className={`absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out ${
              active ? "scale-110" : "scale-100"
            }`}
          />
        )}

        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-linear-to-t transition-opacity duration-500 ${
            active
              ? "from-black via-black/60 to-black/5"
              : "from-black/90 via-black/40 to-transparent"
          }`}
        />

        {/* HEART */}
        <button
          type="button"
          aria-label={favorite ? "Remove from favourites" : "Add to favourites"}
          aria-pressed={favorite}
          onClick={() => onToggleFavorite(item.id)}
          className={`absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 active:scale-75 ${
            favorite
              ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white"
              : "border-white/50 bg-black/25 text-white hover:scale-110 hover:bg-white/90 hover:text-[#e9722a]"
          }`}
        >
          <Heart
            size={14}
            className={`transition-transform duration-300 ${
              favorite ? "scale-110 fill-current" : ""
            }`}
          />
        </button>

        {/* TEXT */}
        <div
          className={`absolute inset-x-0 bottom-0 z-10 p-4 transition-transform duration-500 ease-out ${
            active ? "-translate-y-1" : "translate-y-0"
          }`}
        >
          <h3
            className={`font-serif text-[18px] font-bold leading-tight transition-colors duration-300 ${
              active ? "text-[#ffb98a]" : "text-white"
            }`}
          >
            {item.title}
          </h3>

          <Link
            to={`/shop?category=${item.slug}`}
            className="group mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-white"
          >
            Explore
            <ArrowRight
              size={14}
              className={`transition-transform duration-300 group-hover:translate-x-1 ${
                active ? "translate-x-1" : ""
              }`}
            />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ExploreCollectionsCard;
