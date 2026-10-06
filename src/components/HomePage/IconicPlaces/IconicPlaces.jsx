import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import IconicPlacesSlider from "./IconicPlacesSlider";
import { iconicPlacesContent } from "./iconicPlacesData";

const IconicPlaces = () => {
  const content = iconicPlacesContent;

  return (
    <section className="bg-[#f8f5ef] py-16 lg:py-20">
      <div className="mx-auto grid max-w-350 grid-cols-1 items-center gap-10 px-6 md:px-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-x-32.5 lg:px-12">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 font-serif text-[38px] font-bold leading-[1.1] text-[#1f1a18] lg:text-[46px]">
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>

          <p className="mt-5 max-w-85 text-[15px] leading-relaxed text-[#5f5652]">
            {content.description}
          </p>

          <Link
            to={content.buttonPath}
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#eab49a] bg-transparent px-7 py-3 text-sm font-semibold text-[#1f1a18] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9722a] hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:translate-y-0 active:scale-95"
          >
            {content.buttonText}
            <ArrowRight
              size={16}
              className="text-[#e9722a] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>
        </div>

        {/* RIGHT SLIDER */}
        <IconicPlacesSlider />
      </div>
    </section>
  );
};

export default IconicPlaces;
