import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import { exploreShopSlides } from "./ExploreShopBannersData";

const SlideImage = ({ slide, zoom }) => {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={slide.image}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className={`absolute inset-0 -z-20 h-full w-full object-cover object-right transition-transform duration-2000 ease-out ${
        zoom ? "scale-110" : "scale-100"
      }`}
    />
  );
};

const ExploreShopBannersSlider = ({ visible }) => {
  const wrapperRef = useRef(null);
  const swiperRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  // Touch: slider ke bahar tap karne par active (zoom + autoplay pause) hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setActive(false);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Active (hover / tap) hone par autoplay ruke, hatne par dobara chale
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !swiper.autoplay) return;

    if (active) swiper.autoplay.stop();
    else swiper.autoplay.start();
  }, [active]);

  const arrowClass =
    "absolute top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1a1410] shadow-md shadow-black/30 transition-all duration-300 hover:scale-110 hover:bg-[#e9722a] hover:text-white active:scale-90";

  return (
    <div
      ref={wrapperRef}
      data-esb-slider
      onPointerEnter={() => setActive(true)}
      onPointerLeave={(e) => {
        // mouse hataane par band; touch me bahar tap karne par band hoga
        if (e.pointerType === "mouse") setActive(false);
      }}
      style={{ transitionDelay: visible ? "300ms" : "0ms" }}
      className={`relative overflow-hidden rounded-xl transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${active ? "shadow-2xl shadow-[#e9722a]/20" : "shadow-lg shadow-black/20"}`}
    >
      {/* SIDE ARROWS */}
      <button
        type="button"
        aria-label="Previous banner"
        onClick={() => swiperRef.current?.slidePrev()}
        className={`${arrowClass} left-3`}
      >
        <ChevronLeft size={18} />
      </button>

      <button
        type="button"
        aria-label="Next banner"
        onClick={() => swiperRef.current?.slideNext()}
        className={`${arrowClass} right-3`}
      >
        <ChevronRight size={18} />
      </button>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
        loop
        grabCursor
        speed={800}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full"
      >
        {exploreShopSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`relative isolate flex min-h-55 items-center overflow-hidden bg-linear-to-br ${slide.fallback} sm:min-h-65`}
            >
              <SlideImage slide={slide} zoom={active} />

              <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/60 to-black/10" />

              <div className="relative max-w-[78%] px-14 py-8 sm:px-20 lg:max-w-[60%] lg:px-24">
                <h3 className="font-serif text-[26px] font-bold leading-tight text-white sm:text-[32px]">
                  {slide.title}
                </h3>

                <p className="mt-3 text-[13px] leading-relaxed text-white/85 sm:text-[14px]">
                  {slide.description}
                </p>

                <Link
                  to={slide.path}
                  className="group mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#e9722a] px-7 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
                >
                  {slide.buttonText}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
        {exploreShopSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to banner ${i + 1}`}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === i ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreShopBannersSlider;