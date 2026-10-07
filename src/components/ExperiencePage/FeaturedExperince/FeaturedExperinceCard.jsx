import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3, Heart } from "lucide-react";

const FeaturedExperinceCard = ({
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
    // OUTER: sirf entrance animation (stagger delay yahin hai, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-fe-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par effect band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`relative h-100 overflow-hidden rounded-2xl bg-[#1a1210] transition-all duration-500 ease-out sm:h-105 ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/25"
            : "translate-y-0 shadow-lg shadow-black/20"
        }`}
      >
        {/* IMAGE */}
        {!imageFailed && (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
              active ? "scale-110" : "scale-100"
            }`}
          />
        )}

        {/* OVERLAY */}
        <div
          className={`absolute inset-0 bg-linear-to-t transition-opacity duration-500 ${
            active
              ? "from-black via-black/70 to-black/10"
              : "from-black/95 via-black/55 to-transparent"
          }`}
        />

        {/* TOP: badge + heart */}
        <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between">
          {item.popular ? (
            <span className="rounded-full bg-[#e9722a] px-3 py-1 text-[12px] font-semibold text-white shadow-md shadow-[#e9722a]/40">
              Most Popular
            </span>
          ) : (
            <span />
          )}

          <button
            type="button"
            aria-label={
              favorite ? "Remove from favourites" : "Add to favourites"
            }
            aria-pressed={favorite}
            onClick={() => onToggleFavorite(item.id)}
            className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 active:scale-75 ${
              favorite
                ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white"
                : "border-white/50 bg-black/30 text-white hover:scale-110 hover:bg-white/90 hover:text-[#e9722a]"
            }`}
          >
            <Heart
              size={17}
              className={`transition-transform duration-300 ${
                favorite ? "scale-110 fill-current" : ""
              }`}
            />
          </button>
        </div>

        {/* BOTTOM: details */}
        <div
          className={`absolute inset-x-0 bottom-0 z-10 p-5 transition-transform duration-500 ease-out ${
            active ? "-translate-y-1" : "translate-y-0"
          }`}
        >
          <h3
            className={`font-serif text-[20px] font-bold leading-tight transition-colors duration-300 ${
              active ? "text-[#ffb98a]" : "text-white"
            }`}
          >
            {item.title}
          </h3>

          <p className="mt-2 max-w-55 text-[13px] leading-snug text-white/80">
            {item.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-[12px] text-white/90">
              <span className="flex items-center gap-1.5">
                <Clock3 size={14} />
                {item.duration}
              </span>
              <span className="font-semibold">
                From ₹{item.price.toLocaleString("en-IN")}
              </span>
            </div>

            <Link
              to={`/experiences/${item.slug}`}
              aria-label={`View ${item.title}`}
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 active:scale-90 ${
                active
                  ? "scale-110 bg-[#e9722a] text-white shadow-lg shadow-[#e9722a]/50"
                  : "bg-white text-black"
              }`}
            >
              <ArrowRight
                size={16}
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

export default FeaturedExperinceCard;
