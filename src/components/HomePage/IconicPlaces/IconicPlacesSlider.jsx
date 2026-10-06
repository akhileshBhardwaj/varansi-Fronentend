import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import IconicPlacesCard from "./IconicPlacesCard";
import { iconicPlacesData } from "./iconicPlacesData";

const AUTOPLAY_DELAY = 3000;

const IconicPlacesSlider = () => {
  const swiperRef = useRef(null);

  // Hover par slider pause
  const pauseSlider = () => {
    swiperRef.current?.autoplay?.stop();
  };

  // Hover hatne par slider resume
  const resumeSlider = () => {
    swiperRef.current?.autoplay?.start();
  };

  // Navigation buttons
  const navButtonClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f1a18] shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:scale-95";

  return (
    <div
      className="relative min-w-0"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      {/* ================================
          PREVIOUS / NEXT BUTTONS
      ================================= */}
      <div className="mb-4 flex items-center gap-3 lg:absolute lg:-left-26 lg:top-3 lg:z-10 lg:mb-0">
        {/* Previous */}
        <button
          type="button"
          aria-label="Previous"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className={navButtonClass}
        >
          <ChevronLeft size={19} strokeWidth={2} />
        </button>

        {/* Next */}
        <button
          type="button"
          aria-label="Next"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
          className={navButtonClass}
        >
          <ChevronRight size={19} strokeWidth={2} />
        </button>
      </div>

      {/* ================================
          SLIDER
      ================================= */}
      <div className="-my-3">
        <Swiper
          className="py-3!"
          // Swiper modules
          modules={[Autoplay]}
          // Space between cards
          spaceBetween={16}
          // Transition speed
          speed={700}
          // Mouse grab
          grabCursor={true}
          // IMPORTANT:
          // Continuous circular slider
          loop={true}
          // Ek-ek slide move hoga
          slidesPerGroup={1}
          // Autoplay
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          // Mobile
          slidesPerView={1.15}
          // Responsive
          breakpoints={{
            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          // Swiper instance
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {iconicPlacesData.map((place) => (
            <SwiperSlide key={place.id}>
              <IconicPlacesCard place={place} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IconicPlacesSlider;
