import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import FeaturedToursCard from "./FeaturedToursCard";

const FeaturedToursSlider = ({ tours }) => {
  const swiperRef = useRef(null);

  const arrowClass =
    "absolute top-[115px] z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#eadfd8] bg-white text-[#1f1a18] shadow-lg transition-all duration-300 hover:scale-110 hover:border-[#741717] hover:bg-[#741717] hover:text-white active:scale-95";

  return (
    <div className="relative">
      {/* ARROWS */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => swiperRef.current?.slidePrev()}
        className={`${arrowClass} left-1 lg:-left-5`}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        aria-label="Next"
        onClick={() => swiperRef.current?.slideNext()}
        className={`${arrowClass} right-1 lg:-right-5`}
      >
        <ChevronRight size={20} />
      </button>

      {/* SLIDER */}
      <div className="-my-4">
        <Swiper
          className="py-4!"
          spaceBetween={20}
          speed={600}
          rewind
          grabCursor
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id} className="h-auto!">
              <FeaturedToursCard tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedToursSlider;