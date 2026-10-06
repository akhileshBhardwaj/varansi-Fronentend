import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import CitiesStoriesVideoCard from "./CitiesStoriesVideoCard";
import CitiesStoriesStats from "./CitiesStoriesStats";
import { citiesStoriesContent } from "./CitiesStoriesData";

const CitiesStories = () => {
  const content = citiesStoriesContent;

  return (
    <section className="bg-[#f8f5ef] py-16 lg:py-20">
      <div className="mx-auto grid max-w-350 grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-12">
        {/* LEFT: VIDEO */}
        <CitiesStoriesVideoCard />

        {/* RIGHT: CONTENT */}
        <div className="lg:pl-4">
          <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-[38px] font-bold leading-[1.1] text-[#1f1a18] lg:text-[46px]">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>

          <p className="mt-5 max-w-117.5 text-[15px] leading-relaxed text-[#5f5652]">
            {content.description}
          </p>

          <CitiesStoriesStats />

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

export default CitiesStories;
