import React, { useEffect, useRef, useState } from "react";

import MoreWaysExperienceCard from "./MoreWaysExperienceCard";
import { moreWaysContent, moreWaysItems } from "./MoreWaysExperienceData";

const MoreWaysExperience = () => {
  const content = moreWaysContent;

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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Touch: card ke bahar tap karne par active effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest("[data-mw-card]")) setActiveId(null);
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
    <section ref={sectionRef} className="bg-[#fdf8f4] py-12 lg:py-16">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div
          className={`flex flex-col gap-4 transition-all duration-700 ease-out motion-reduce:transition-none lg:flex-row lg:items-end lg:justify-between ${
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
          </div>

          <p className="max-w-85 text-[13px] leading-relaxed text-[#5b5148] lg:text-right">
            {content.description}
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {moreWaysItems.map((item, index) => (
            <MoreWaysExperienceCard
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
      </div>
    </section>
  );
};

export default MoreWaysExperience;