import React from "react";

const AboutWhyChooseCard = ({
  item,
  index,
  visible,
  active,
  onActivate,
  onDeactivate,
}) => {
  const Icon = item.icon;

  return (
    // OUTER: sirf entrance animation (delay yahin, hover pe delay nahi lagta)
    <div
      style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
      className={`h-full transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <article
        data-awc-card
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        className={`flex h-full cursor-default items-start gap-4 rounded-2xl bg-white p-5 ring-1 transition-all duration-500 ease-out ${
          active
            ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/20 ring-[#e9722a]/40"
            : "translate-y-0 shadow-md shadow-black/5 ring-black/5"
        }`}
      >
        {/* ICON + line */}
        <div className="flex shrink-0 flex-col items-center">
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#e9722a] text-white transition-all duration-500 ${
              active
                ? "scale-110 -rotate-12 shadow-lg shadow-[#e9722a]/50"
                : "scale-100 rotate-0 shadow-md shadow-[#e9722a]/25"
            }`}
          >
            <Icon size={21} strokeWidth={1.8} />
          </span>

          <span
            className={`mt-1 w-px bg-linear-to-b from-[#e9722a]/60 to-transparent transition-all duration-500 ${
              active ? "h-12" : "h-7"
            }`}
          />
        </div>

        {/* TEXT */}
        <div>
          <h3
            className={`text-[14px] font-semibold transition-colors duration-300 ${
              active ? "text-[#e9722a]" : "text-[#1a1410]"
            }`}
          >
            {item.title}
          </h3>

          <p className="mt-2 text-[13px] leading-relaxed text-[#5b5148]">
            {item.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default AboutWhyChooseCard;
