import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";

const ExploreShopBannersPromo = ({
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
      style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-esb-promo
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`relative isolate flex min-h-60 items-center overflow-hidden rounded-xl bg-linear-to-br ${
          item.fallback
        } ring-1 transition-all duration-500 ease-out sm:min-h-65 ${
          active
            ? "-translate-y-1.5 shadow-2xl shadow-[#e9722a]/25 ring-[#e9722a]/60"
            : "translate-y-0 shadow-lg shadow-black/20 ring-white/10"
        }`}
      >
        {/* IMAGE */}
        {!imageFailed && (
          <img
            src={item.image}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
            className={`absolute inset-0 -z-20 h-full w-full object-cover object-right transition-transform duration-1000 ease-out ${
              active ? "scale-110" : "scale-100"
            }`}
          />
        )}

        {/* OVERLAYS */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/60 to-black/5" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        {/* HEART */}
        <button
          type="button"
          aria-label={favorite ? "Remove from favourites" : "Add to favourites"}
          aria-pressed={favorite}
          onClick={() => onToggleFavorite(item.id)}
          className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 active:scale-75 ${
            favorite
              ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white"
              : "border-white/50 bg-black/25 text-white hover:scale-110 hover:bg-white/90 hover:text-[#e9722a]"
          }`}
        >
          <Heart
            size={15}
            className={`transition-transform duration-300 ${
              favorite ? "scale-110 fill-current" : ""
            }`}
          />
        </button>

        {/* CONTENT */}
        <div className="relative max-w-[70%] p-6 sm:p-8 lg:max-w-[65%]">
          <h3
            className={`font-serif text-[26px] font-bold leading-[1.15] transition-colors duration-300 sm:text-[30px] ${
              active ? "text-[#ffd9a0]" : "text-[#f0c27a]"
            }`}
          >
            {item.title}
          </h3>

          <p className="mt-3 text-[13px] leading-relaxed text-white/85">
            {item.description}
          </p>

          <Link
            to={item.path}
            className="group mt-5 inline-flex items-center gap-2.5 rounded-lg bg-[#e9722a] px-6 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
          >
            {item.buttonText}
            <ArrowRight
              size={15}
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

export default ExploreShopBannersPromo;
