import React, { useState } from "react";

const AboutServicesCard = ({
  item,
  index,
  visible,
  active,
  onActivate,
  onDeactivate,
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const Icon = item.icon;

  return (
    // OUTER: sirf entrance animation (delay yahin, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`h-full transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-asv-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        className={`h-full cursor-default overflow-hidden rounded-xl bg-white ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/5 ring-black/5"
        }`}
      >
        {/* IMAGE */}
        <div
          className={`relative aspect-16/8 overflow-hidden bg-linear-to-br ${item.fallback}`}
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
        </div>

        {/* DETAILS */}
        <div className="flex items-start gap-3 p-3.5">
          <span
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center transition-all duration-500 ${
              active
                ? "scale-125 -rotate-6 text-[#e9722a]"
                : "scale-100 rotate-0 text-[#e9722a]"
            }`}
          >
            <Icon size={24} strokeWidth={1.5} />
          </span>

          <div className="min-w-0">
            <h3
              className={`text-[13px] font-semibold leading-snug transition-colors duration-300 ${
                active ? "text-[#e9722a]" : "text-[#1a1410]"
              }`}
            >
              {item.title}
            </h3>

            <p className="mt-1 text-[12px] leading-snug text-[#6b6159]">
              {item.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutServicesCard;
