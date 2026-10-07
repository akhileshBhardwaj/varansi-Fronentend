import React, { useState } from "react";
import { Quote, Star } from "lucide-react";

const getInitials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const VisitorReviewsCard = ({
  item,
  index,
  visible,
  active,
  onActivate,
  onDeactivate,
}) => {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    // OUTER: slide + sirf entrance animation (delay yahin, hover pe delay nahi lagta)
       <div
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
      className={`h-full py-3 transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-vr-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`relative h-full overflow-hidden rounded-2xl bg-white p-5 ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-1.5 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/5 ring-black/5"
        }`}
      >
        {/* big quote mark */}
        <Quote
          size={56}
          className={`absolute -right-1 -top-1 rotate-180 text-[#e9722a] transition-all duration-500 ${
            active ? "scale-110 opacity-20" : "scale-90 opacity-0"
          }`}
        />

        {/* TOP: avatar + name + stars */}
        <div className="relative flex items-center gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#f3dccb] text-[16px] font-semibold text-[#9a4a14] ring-2 transition-all duration-500 ${
              active ? "scale-105 ring-[#e9722a]" : "ring-transparent"
            }`}
          >
            {!avatarFailed ? (
              <img
                src={item.avatar}
                alt={item.name}
                loading="lazy"
                onError={() => setAvatarFailed(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              getInitials(item.name)
            )}
          </div>

          <div className="min-w-0">
            <h3
              className={`truncate text-[14px] font-semibold transition-colors duration-300 ${
                active ? "text-[#e9722a]" : "text-[#1a1410]"
              }`}
            >
              {item.name}
            </h3>
            <p className="text-[12px] text-[#7a7068]">{item.location}</p>

            <div className="mt-1 flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  style={{ transitionDelay: active ? `${i * 50}ms` : "0ms" }}
                  className={`transition-transform duration-300 ${
                    i < item.rating
                      ? "fill-[#e9722a] text-[#e9722a]"
                      : "fill-[#e5ddd5] text-[#e5ddd5]"
                  } ${active ? "scale-125" : "scale-100"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* QUOTE */}
        <p className="relative mt-4 text-[14px] leading-relaxed text-[#4d443c]">
          “{item.text}”
        </p>
      </article>
    </div>
  );
};

export default VisitorReviewsCard;
