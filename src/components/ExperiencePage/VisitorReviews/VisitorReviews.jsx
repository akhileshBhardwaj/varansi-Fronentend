import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import VisitorReviewsCard from "./VisitorReviewsCard";
import { visitorReviewsContent, visitorReviews } from "./VisitorReviewsData";

const VisitorReviews = () => {
  const content = visitorReviewsContent;

  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);

  // Scroll par entrance animation (PC + mobile dono)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Touch: card ke bahar tap karne par active effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest("[data-vr-card]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Card active (hover / tap) hone par autoplay ruke, hatne par dobara chale
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !swiper.autoplay) return;

    if (activeId !== null) swiper.autoplay.stop();
    else swiper.autoplay.start();
  }, [activeId]);

    const arrowClass =
    "flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1a1410] shadow-md shadow-black/10 transition-all duration-300 hover:scale-110 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/40 active:scale-90";

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-12 lg:py-16">
            <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER + ARROWS */}
        <div
          className={`flex flex-col gap-4 transition-all duration-700 ease-out motion-reduce:transition-none sm:flex-row sm:items-end sm:justify-between ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-[30px] font-bold leading-tight text-[#1a1410] sm:text-[36px] lg:text-[42px]">
              {content.title}
            </h2>

            <p className="mt-3 text-[14px] text-[#5b5148]">
              {content.description}
            </p>
          </div>

          {/* ARROWS: dono ek saath, right side, cards ke upar */}
          <div className="flex items-center gap-3 self-end">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => swiperRef.current?.slidePrev()}
              className={arrowClass}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => swiperRef.current?.slideNext()}
              className={arrowClass}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="mt-4">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            grabCursor
            speed={700}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {visitorReviews.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto!">
                <VisitorReviewsCard
                  item={item}
                  index={index}
                  visible={visible}
                  active={activeId === item.id}
                  onActivate={setActiveId}
                  onDeactivate={() => setActiveId(null)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default VisitorReviews;
