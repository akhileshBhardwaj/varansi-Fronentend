import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

import ExploreFeaturedProductsCard from "./ExploreFeaturedProductsCard";
import {
  exploreFeaturedContent,
  exploreFeaturedFilters,
  exploreFeaturedProducts,
} from "./ExploreFeaturedProductsData";

const ExploreFeaturedProducts = () => {
  const content = exploreFeaturedContent;

  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [addedIds, setAddedIds] = useState([]);

  const filtered =
    filter === "all"
      ? exploreFeaturedProducts
      : exploreFeaturedProducts.filter((p) => p.category === filter);

  // Loop/autoplay tabhi jab itne products ho ki slider me gap na aaye
  const canLoop = filtered.length >= 7;

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
      if (!e.target.closest("[data-efp-card]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Card active (hover / tap) hone par autoplay ruke, hatne par dobara chale
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !swiper.autoplay || !swiper.autoplay.running === undefined)
      return;

    if (activeId !== null) swiper.autoplay.stop?.();
    else swiper.autoplay.start?.();
  }, [activeId]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  // Abhi sirf "Added" feedback hai. Cart context/redux yahin jodna.
  const handleAddToCart = (item) => {
    setAddedIds((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]));
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((x) => x !== item.id));
    }, 1600);
  };

  const arrowClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1a1410] shadow-md shadow-black/10 transition-all duration-300 hover:scale-110 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/40 active:scale-90";

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-12 lg:py-16">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div
          className={`flex flex-col gap-5 transition-all duration-700 ease-out motion-reduce:transition-none lg:flex-row lg:items-end lg:justify-between ${
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

          {/* FILTERS + ARROWS: right side, cards ke upar */}
          <div className="flex items-center gap-3">
            <div className="flex min-w-0 gap-2 overflow-x-auto py-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
              {exploreFeaturedFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`shrink-0 rounded-full border px-5 py-2 text-[12px] font-semibold transition-all duration-300 active:scale-95 ${
                    filter === f.id
                      ? "border-[#e9722a] bg-[#e9722a] text-white shadow-md shadow-[#e9722a]/30"
                      : "border-[#eadfd4] bg-white text-[#1a1410] hover:-translate-y-0.5 hover:border-[#e9722a] hover:text-[#e9722a]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Previous products"
              onClick={() => swiperRef.current?.slidePrev()}
              className={arrowClass}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next products"
              onClick={() => swiperRef.current?.slideNext()}
              className={arrowClass}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDER (filter badalne par naya slider mount hota hai) */}
        <div className="mt-4">
          <Swiper
            key={`${filter}-${canLoop}`}
            modules={[Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop={canLoop}
            grabCursor
            speed={700}
            spaceBetween={20}
            autoplay={
              canLoop ? { delay: 3200, disableOnInteraction: false } : false
            }
            breakpoints={{
              0: { slidesPerView: 1.4 },
              640: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3.3 },
              1280: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {filtered.map((item, index) => (
              <SwiperSlide key={item.id} className="h-auto!">
                <ExploreFeaturedProductsCard
                  item={item}
                  index={index}
                  visible={visible}
                  active={activeId === item.id}
                  favorite={favorites.includes(item.id)}
                  added={addedIds.includes(item.id)}
                  onActivate={setActiveId}
                  onDeactivate={() => setActiveId(null)}
                  onToggleFavorite={toggleFavorite}
                  onAddToCart={handleAddToCart}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ExploreFeaturedProducts;
