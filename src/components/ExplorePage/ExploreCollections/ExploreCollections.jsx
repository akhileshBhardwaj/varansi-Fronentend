import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ExploreCollectionsCard from "./ExploreCollectionsCard";
import {
  exploreCollectionsContent,
  exploreCollectionsItems,
} from "./ExploreCollectionsData";

const ExploreCollections = () => {
  const content = exploreCollectionsContent;

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
      if (!e.target.closest("[data-ec-card]")) setActiveId(null);
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
          </div>

          <Link
            to={content.buttonPath}
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#e9722a] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#1a1410] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:translate-y-0 active:scale-95 sm:self-auto"
          >
            {content.buttonText}
            <ArrowRight
              size={15}
              className="text-[#e9722a] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white group-active:translate-x-1"
            />
          </Link>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {exploreCollectionsItems.map((item, index) => (
            <ExploreCollectionsCard
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

export default ExploreCollections;
