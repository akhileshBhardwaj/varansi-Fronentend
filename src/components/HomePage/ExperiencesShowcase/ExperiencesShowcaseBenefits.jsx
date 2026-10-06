import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import { experiencesShowcaseBenefits } from "./ExperiencesShowcaseData";

const ExperiencesShowcaseBenefits = () => {
  const swiperRef = useRef(null);
  const lastIndex = experiencesShowcaseBenefits.length - 1;

  const arrowClass =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#1f1a18] shadow-md transition-all duration-300 hover:scale-110 hover:border-[#e9722a] hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:scale-95";

  return (
    <div className="mt-10 flex items-center gap-4">
      {/* STRIP */}
      <div className="min-w-0 flex-1 rounded-[26px] border border-[#f0e4db] bg-[#fffaf6] px-2 py-4 shadow-sm">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          rewind
          speed={600}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {experiencesShowcaseBenefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <SwiperSlide key={benefit.id}>
                <div
                  className={`group flex cursor-default items-center gap-4 px-5 py-1 ${
                    index < lastIndex ? "sm:border-r sm:border-[#eadfd8]" : ""
                  }`}
                >
                  <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#fbe9e0] text-[#c8561b] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e9722a] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(233,114,42,0.4)]">
                    <Icon size={25} strokeWidth={1.5} />
                  </span>

                  <div className="min-w-0">
                    <h5 className="text-[14px] font-semibold text-[#1f1a18] transition-colors duration-300 group-hover:text-[#c8561b]">
                      {benefit.title}
                    </h5>
                    <p className="mt-0.5 text-[13px] text-[#7d726d]">
                      {benefit.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* ARROWS */}
      <div className="flex shrink-0 items-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => swiperRef.current?.slidePrev()}
          className={arrowClass}
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          aria-label="Next"
          onClick={() => swiperRef.current?.slideNext()}
          className={arrowClass}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ExperiencesShowcaseBenefits;
