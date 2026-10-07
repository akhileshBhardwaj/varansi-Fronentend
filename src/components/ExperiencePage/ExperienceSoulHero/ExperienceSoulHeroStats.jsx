import React from "react";
import { Star } from "lucide-react";

import { experienceSoulStats } from "./ExperienceSoulHeroData";

const ExperienceSoulHeroStats = () => {
  return (
    <div className="flex items-stretch divide-x divide-white/25 rounded-2xl border border-white/20 bg-black/35 px-2 py-4 backdrop-blur-md">
      {experienceSoulStats.map((stat) => (
        <div
          key={stat.id}
          className="group px-5 text-center transition-transform duration-300 hover:-translate-y-1 sm:px-7"
        >
          <p className="flex items-center justify-center gap-1 font-serif text-[24px] font-bold text-white transition-colors duration-300 group-hover:text-[#f28c4a] sm:text-[28px]">
            {stat.value}
            {stat.star && (
              <Star size={18} className="fill-[#f28c4a] text-[#f28c4a]" />
            )}
          </p>
          <p className="mt-1 text-[11px] text-white/80">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSoulHeroStats;
