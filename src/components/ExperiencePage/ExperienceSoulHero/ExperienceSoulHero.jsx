import React, { useState } from "react";

import ExperienceSoulHeroSearch from "./ExperienceSoulHeroSearch";
import ExperienceSoulHeroStats from "./ExperienceSoulHeroStats";
import { experienceSoulHeroContent } from "./ExperienceSoulHeroData";

const ExperienceSoulHero = () => {
  const content = experienceSoulHeroContent;
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="group/soul relative min-h-135 overflow-hidden bg-[#1a0f0c] lg:min-h-155">
      {/* BACKGROUND IMAGE */}
      {!imageFailed && (
        <img
          src={content.image}
          alt=""
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-2500 ease-out group-hover/soul:scale-105"
        />
      )}

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1a0f0c]/90 via-[#1a0f0c]/55 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-135 max-w-350 flex-col justify-between gap-10 px-6 py-12 md:px-10 lg:min-h-155 lg:px-12 lg:py-14">
        {/* TOP: heading */}
        <div className="max-w-120">
          <p className="text-[12px] font-semibold uppercase tracking-[3px] text-white/90">
            {content.eyebrow}
          </p>

          <h1 className="mt-3 font-serif text-[40px] font-bold leading-[1.05] text-white sm:text-[52px] lg:text-[60px]">
            {content.title}
          </h1>

          <p className="mt-5 max-w-105 text-[15px] leading-relaxed text-white/85">
            {content.description}
          </p>
        </div>

        {/* BOTTOM: search + stats */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <ExperienceSoulHeroSearch
            placeholder={content.searchPlaceholder}
            searchPath={content.searchPath}
          />

          <ExperienceSoulHeroStats />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSoulHero;
