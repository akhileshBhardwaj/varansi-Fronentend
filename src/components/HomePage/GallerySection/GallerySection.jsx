import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import GallerySectionItem from "./GallerySectionItem";
import GallerySectionLightbox from "./GallerySectionLightbox";
import {
  gallerySectionContent,
  gallerySectionCategories,
  gallerySectionItems,
} from "./GallerySectionData";

// "All" view ke liye bento layout (har 6 items ke baad repeat hota hai)
const bentoClasses = [
  "col-span-2 row-span-2", // 1: large
  "", //                      2: normal
  "row-span-2", //            3: tall
  "", //                      4: normal
  "col-span-2", //            5: wide
  "col-span-2", //            6: wide
];

const GallerySection = () => {
  const content = gallerySectionContent;

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isAll = activeCategory === "All";

  const filteredItems = useMemo(
    () =>
      isAll
        ? gallerySectionItems
        : gallerySectionItems.filter(
            (item) => item.category === activeCategory,
          ),
    [activeCategory, isAll],
  );

  const getCount = (category) =>
    category === "All"
      ? gallerySectionItems.length
      : gallerySectionItems.filter((item) => item.category === category).length;

  return (
    <section className="bg-[#fffdf8] py-16 lg:py-24">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-[36px] font-bold leading-[1.1] text-[#1f1a18] sm:text-[42px] lg:text-[50px]">
              {content.titleLine1}
              <br />
              {content.titleLine2}
            </h2>

            <p className="mt-5 max-w-130 text-[15px] leading-relaxed text-[#5f5652]">
              {content.description}
            </p>
          </div>

          <Link
            to={content.buttonPath}
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#eab49a] px-7 py-3 text-sm font-semibold text-[#1f1a18] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9722a] hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:translate-y-0 active:scale-95"
          >
            {content.buttonText}
            <ArrowRight
              size={16}
              className="text-[#e9722a] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>
        </div>

        {/* FILTER TABS */}
        <div className="mt-9 flex flex-wrap gap-2.5">
          {gallerySectionCategories.map((category) => {
            const active = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${
                  active
                    ? "border-[#e9722a] bg-[#e9722a] text-white shadow-lg shadow-[#e9722a]/30"
                    : "border-[#e6dbd2] bg-white text-[#3f3734] hover:border-[#e9722a] hover:text-[#e9722a]"
                }`}
              >
                {category}
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    active
                      ? "bg-white/25 text-white"
                      : "bg-[#f4ece6] text-[#8a7f79]"
                  }`}
                >
                  {getCount(category)}
                </span>
              </button>
            );
          })}
        </div>

        {/* GRID */}
        <div
          className={
            isAll
              ? "mt-9 grid auto-rows-42.5 grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-50 md:auto-rows-55 md:grid-cols-4 md:gap-4"
              : "mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4"
          }
        >
          {filteredItems.map((item, index) => (
            <GallerySectionItem
              key={item.id}
              item={item}
              index={index}
              onOpen={() => setLightboxIndex(index)}
              className={
                isAll
                  ? bentoClasses[index % bentoClasses.length]
                  : "aspect-4/5"
              }
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <GallerySectionLightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </section>
  );
};

export default GallerySection;
