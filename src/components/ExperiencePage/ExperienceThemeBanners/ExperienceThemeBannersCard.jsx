import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ExperienceThemeBannersCard = ({
  item,
  index,
  visible,
  active,
  onActivate,
  onDeactivate,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    // OUTER: sirf entrance animation (delay yahin, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 150}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-etb-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        onFocus={() => onActivate(item.id)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) onDeactivate();
        }}
        className={`relative isolate flex min-h-70 items-center overflow-hidden bg-linear-to-br ${
          item.fallback
        } ring-1 transition-all duration-500 ease-out sm:min-h-80 ${
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
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/60 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        <div
          className={`absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(233,114,42,0.25),transparent_50%)] transition-opacity duration-700 ${
            active ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* CONTENT */}
        <div className="relative w-full max-w-md p-7 sm:p-9">
          {/* eyebrow */}
          <div className="flex items-center gap-3">
            <span
              className={`h-px bg-[#f28c4a] transition-all duration-500 ${
                active ? "w-10" : "w-6"
              }`}
            />
            <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#f28c4a]">
              {item.eyebrow}
            </p>
          </div>

          <h3 className="mt-4 font-serif text-[30px] font-bold leading-[1.1] text-white sm:text-[36px]">
            {item.title}
          </h3>

          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/80">
            {item.description}
          </p>

          {/* BUTTON */}
          <Link
            to={item.path}
            className={`relative mt-7 inline-flex items-center gap-2.5 overflow-hidden bg-[#e9722a] px-7 py-3 text-[13px] font-semibold rounded-full text-white transition-all duration-300 active:scale-95 ${
              active
                ? "bg-[#f0793a] shadow-xl shadow-[#e9722a]/50"
                : "shadow-lg shadow-[#e9722a]/25"
            }`}
          >
            {/* shine sweep */}
            <span
              className={`pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 transition-transform duration-700 ease-out ${
                active ? "translate-x-[500%]" : "translate-x-0"
              }`}
            />
            <span className="relative">{item.buttonText}</span>
            <ArrowRight
              size={16}
              className={`relative transition-transform duration-300 ${
                active ? "translate-x-1.5" : ""
              }`}
            />
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ExperienceThemeBannersCard;
