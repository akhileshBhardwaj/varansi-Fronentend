import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PlanYourCitiesItem from "./PlanYourCitiesItem";
import {
  planYourCitiesContent,
  planYourCitiesItems,
} from "./PlanYourCitiesData";

const PlanYourCities = () => {
  const content = planYourCitiesContent;
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="group/plan relative overflow-hidden bg-[#0b2428]">
      {/* BACKGROUND IMAGE (right side) */}
      {/* BACKGROUND IMAGE (full) */}
      {!imageFailed && (
        <img
          src={content.image}
          alt=""
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-2500 ease-out group-hover/plan:scale-105"
        />
      )}

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0b2428] via-[#0b2428]/90 to-[#0b2428]/50 lg:from-[#0b2428] lg:from-35% lg:via-[#0b2428]/85 lg:via-55% lg:to-transparent" />
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-350 px-6 py-12 md:px-10 lg:px-12 lg:py-14">
        <div className="max-w-215">
          <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#f28c4a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-3 font-serif text-[32px] font-bold leading-tight text-white sm:text-[38px] lg:text-[44px]">
            {content.title}
          </h2>

          <p className="mt-4 max-w-140 text-[15px] leading-relaxed text-white/80">
            {content.description}
          </p>

          {/* ICON ITEMS */}
          <div className="mt-9 grid grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0 lg:divide-x lg:divide-white/15">
            {planYourCitiesItems.map((item) => (
              <PlanYourCitiesItem key={item.id} item={item} />
            ))}
          </div>

          {/* BUTTON */}
          <Link
            to={content.buttonPath}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#e9722a] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
          >
            {content.buttonText}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlanYourCities;
