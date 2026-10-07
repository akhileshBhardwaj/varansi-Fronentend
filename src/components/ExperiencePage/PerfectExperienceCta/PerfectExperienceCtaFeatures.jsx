import React from "react";

import { perfectExperienceFeatures } from "./PerfectExperienceCtaData";

const PerfectExperienceCtaFeatures = ({
  activeId,
  onActivate,
  onDeactivate,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/20 bg-black/45 backdrop-blur-md lg:w-80">
      {perfectExperienceFeatures.map((item, index) => {
        const Icon = item.icon;
        const active = activeId === item.id;

        return (
          <div
            key={item.id}
            data-pec-item
            onPointerEnter={() => onActivate(item.id)}
            onPointerLeave={(e) => {
              // mouse hataane par band; touch me bahar tap karne par band hoga
              if (e.pointerType === "mouse") onDeactivate();
            }}
            className={`flex cursor-default items-center gap-4 px-6 py-4 transition-all duration-300 ${
              index !== 0 ? "border-t border-white/15" : ""
            } ${active ? "bg-white/10 pl-8" : "bg-transparent"}`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                active
                  ? "scale-110 border-[#e9722a] bg-[#e9722a] text-white shadow-lg shadow-[#e9722a]/40"
                  : "border-[#e9722a]/60 bg-[#e9722a]/10 text-[#f28c4a]"
              }`}
            >
              <Icon size={18} strokeWidth={1.7} />
            </span>

            <span
              className={`text-[14px] font-medium transition-colors duration-300 ${
                active ? "text-[#ffb98a]" : "text-white"
              }`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PerfectExperienceCtaFeatures;
