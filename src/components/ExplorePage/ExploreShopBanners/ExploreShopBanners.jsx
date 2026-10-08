import React, { useEffect, useRef, useState } from "react";

import ExploreShopBannersPromo from "./ExploreShopBannersPromo";
import ExploreShopBannersSlider from "./ExploreShopBannersSlider";
import { exploreShopPromos } from "./ExploreShopBannersData";

const ExploreShopBanners = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const [favorites, setFavorites] = useState([]);

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
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Touch: promo card ke bahar tap karne par active effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest("[data-esb-promo]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-10 lg:py-14">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* TOP: 2 promo cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {exploreShopPromos.map((item, index) => (
            <ExploreShopBannersPromo
              key={item.id}
              item={item}
              index={index}
              visible={visible}
              active={activeId === item.id}
              favorite={favorites.includes(item.id)}
              onActivate={setActiveId}
              onDeactivate={() => setActiveId(null)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {/* BOTTOM: full-width slider */}
        <div className="mt-4">
          <ExploreShopBannersSlider visible={visible} />
        </div>
      </div>
    </section>
  );
};

export default ExploreShopBanners;
