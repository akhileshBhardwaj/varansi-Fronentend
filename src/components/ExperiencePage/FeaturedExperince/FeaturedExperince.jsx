import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import FeaturedExperinceCard from "./FeaturedExperinceCard";
import {
  featuredExperinceContent,
  featuredExperinceItems,
} from "./FeaturedExperinceData";

const FeaturedExperince = () => {
  const content = featuredExperinceContent;

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
      if (!e.target.closest("[data-fe-card]")) setActiveId(null);
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
          className={`flex flex-col gap-6 transition-all duration-700 ease-out motion-reduce:transition-none lg:flex-row lg:items-end lg:justify-between ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-3 max-w-125 font-serif text-[32px] font-bold leading-tight text-[#1a1410] sm:text-[38px] lg:text-[44px]">
              {content.title}
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 lg:max-w-105 lg:items-end lg:text-right">
            <p className="text-[14px] leading-relaxed text-[#5b5148]">
              {content.description}
            </p>

            <Link
              to={content.buttonPath}
              className="group inline-flex items-center gap-2 rounded-full border border-[#e9722a] px-6 py-2.5 text-[13px] font-semibold text-[#e9722a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:translate-y-0 active:scale-95"
            >
              {content.buttonText}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredExperinceItems.map((item, index) => (
            <FeaturedExperinceCard
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

export default FeaturedExperince;
