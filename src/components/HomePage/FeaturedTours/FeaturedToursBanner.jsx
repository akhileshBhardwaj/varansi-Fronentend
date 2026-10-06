import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";

import { featuredToursBanner } from "./FeaturedToursData";

const FeaturedToursBanner = () => {
  const banner = featuredToursBanner;

  return (
    <div className="relative mt-14 overflow-hidden rounded-[26px] bg-linear-to-r from-[#5d1111] via-[#741717] to-[#8b2222] px-6 py-8 shadow-xl shadow-[#741717]/25 md:px-10">
      {/* soft decoration */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#e9722a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-white/5 blur-3xl" />

      <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-5">
          <span className="flex h-19 w-19 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#741717]">
            <CalendarDays size={32} strokeWidth={1.5} />
          </span>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#f5a574]">
              {banner.eyebrow}
            </p>

            <h3 className="mt-1 font-serif text-[28px] font-bold leading-tight text-white md:text-[32px]">
              {banner.title}
            </h3>

            <p className="mt-2 max-w-130 text-[14px] leading-relaxed text-white/80">
              {banner.description}
            </p>
          </div>
        </div>

        <Link
          to={banner.buttonPath}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#fff1e8] px-7 py-3.5 text-sm font-semibold text-[#741717] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl active:translate-y-0 active:scale-95"
        >
          {banner.buttonText}
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedToursBanner;