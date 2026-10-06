import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import FeaturedToursSlider from "./FeaturedToursSlider";
import FeaturedToursBanner from "./FeaturedToursBanner";
import {
  featuredToursContent,
  featuredToursFilters,
  featuredToursItems,
} from "./FeaturedToursData";

const FeaturedTours = () => {
  const content = featuredToursContent;
  const [activeFilter, setActiveFilter] = useState("All Tours");

  const filteredTours = useMemo(
    () =>
      activeFilter === "All Tours"
        ? featuredToursItems
        : featuredToursItems.filter((tour) =>
            tour.filters.includes(activeFilter),
          ),
    [activeFilter],
  );

  return (
    <section className="bg-[#fbf7f2] py-16 lg:py-20">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#e9722a]">
          {content.eyebrow}
        </p>

        <h2 className="mt-4 font-serif text-[38px] font-bold leading-[1.1] text-[#1f1a18] sm:text-[46px] lg:text-[54px]">
          {content.titleStart}{" "}
          <span className="text-[#8b1a1a]">{content.titleHighlight}</span>{" "}
          {content.titleEnd}
        </h2>

        <p className="mt-4 max-w-160 text-[15px] leading-relaxed text-[#5f5652]">
          {content.description}
        </p>

        {/* FILTERS + VIEW ALL */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2.5">
            {featuredToursFilters.map((filter) => {
              const active = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                    active
                      ? "border-[#741717] bg-[#741717] text-white shadow-lg shadow-[#741717]/25"
                      : "border-[#eadfd8] bg-white text-[#3f3734] hover:border-[#741717] hover:text-[#741717]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <Link
            to={content.buttonPath}
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#eab49a] px-6 py-2.5 text-[13px] font-semibold text-[#741717] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#741717] hover:bg-[#741717] hover:text-white hover:shadow-lg hover:shadow-[#741717]/25"
          >
            {content.buttonText}
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* SLIDER (key badalne se filter ke baad slider reset ho jata hai) */}
        <div className="mt-8">
          <FeaturedToursSlider key={activeFilter} tours={filteredTours} />
        </div>

        {/* CUSTOM TOUR BANNER */}
        <FeaturedToursBanner />
      </div>
    </section>
  );
};

export default FeaturedTours;
