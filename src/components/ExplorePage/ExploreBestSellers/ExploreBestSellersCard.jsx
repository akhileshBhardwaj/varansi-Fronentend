import React, { useState } from "react";
import { Check, Heart, Star } from "lucide-react";

const formatPrice = (value) => `₹ ${value.toLocaleString("en-IN")}`;

const ExploreBestSellersCard = ({
  item,
  index,
  visible,
  active,
  favorite,
  added,
  onActivate,
  onDeactivate,
  onToggleFavorite,
  onAddToCart,
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);

  return (
    // OUTER: sirf entrance animation (delay yahin, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
      className={`h-full py-3 transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-ebs-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`flex h-full flex-col overflow-hidden rounded-xl bg-white ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/10 ring-black/5"
        }`}
      >
        {/* IMAGE */}
        <div
          className={`relative aspect-4/3.6 overflow-hidden bg-linear-to-br ${item.fallback}`}
        >
          {!imageFailed && (
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onError={() => setImageFailed(true)}
              className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                active ? "scale-110" : "scale-100"
              }`}
            />
          )}

          <button
            type="button"
            aria-label={favorite ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={favorite}
            onClick={() => onToggleFavorite(item.id)}
            className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-all duration-300 active:scale-75 ${
              favorite
                ? "scale-110 bg-[#e9722a] text-white"
                : "bg-white/95 text-[#1a1410] hover:scale-110 hover:text-[#e9722a]"
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
        <div className="flex flex-1 flex-col p-3.5">
          <h3
            className={`truncate text-[13px] font-semibold transition-colors duration-300 ${
              active ? "text-[#e9722a]" : "text-[#1a1410]"
            }`}
            title={item.name}
          >
            {item.name}
          </h3>

          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#6b6159]">
            <Star size={12} className="fill-[#f5a623] text-[#f5a623]" />
            <span className="font-semibold text-[#1a1410]">{item.rating}</span>
            <span>({item.reviews})</span>
            <span className="ml-auto rounded bg-[#e9722a]/10 px-1.5 py-0.5 font-semibold text-[#e9722a]">
              {discount}% off
            </span>
          </div>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-[18px] font-bold text-[#1a1410]">
              {formatPrice(item.price)}
            </span>
            <span className="text-[12px] text-[#9a9088] line-through">
              {formatPrice(item.oldPrice)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(item)}
            className={`mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border py-2 text-[13px] font-semibold transition-all duration-300 active:scale-95 ${
              added
                ? "border-[#2e9e5b] bg-[#2e9e5b] text-white"
                : active
                  ? "border-[#e9722a] bg-[#e9722a] text-white shadow-lg shadow-[#e9722a]/30"
                  : "border-[#e9722a] bg-white text-[#e9722a] hover:bg-[#e9722a] hover:text-white"
            }`}
          >
            {added ? (
              <>
                <Check size={15} /> Added
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </article>
    </div>
  );
};

export default ExploreBestSellersCard;