import React from "react";

const ExploreTrustStripItem = ({
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
      style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none lg:border-l lg:border-[#e6dcd2] lg:first:border-l-0 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {/* INNER: hover + touch effects */}
      <div
        data-ets-item
        onPointerEnter={() => onActivate(item.id)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") onDeactivate();
        }}
        className={`flex h-full cursor-default items-center justify-center gap-3.5 px-4 py-5 transition-all duration-500 ease-out ${
          active ? "-translate-y-1 bg-[#e9722a]/5" : "translate-y-0"
        }`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center text-[#c8602a] transition-all duration-500 ${
            active
              ? "scale-125 -rotate-6 text-[#e9722a] drop-shadow-[0_6px_10px_rgba(233,114,42,0.35)]"
              : "scale-100 rotate-0"
          }`}
        >
          <Icon size={30} strokeWidth={1.5} />
        </span>

        <div>
          <h3
            className={`text-[13px] font-semibold leading-tight transition-colors duration-300 ${
              active ? "text-[#e9722a]" : "text-[#1a1410]"
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-1 text-[12px] text-[#6b6159]">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreTrustStripItem;
