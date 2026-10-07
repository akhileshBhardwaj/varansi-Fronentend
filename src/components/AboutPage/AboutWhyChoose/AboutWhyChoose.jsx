import React, { useEffect, useRef, useState } from "react";

import AboutWhyChooseCard from "./AboutWhyChooseCard";
import {
  aboutWhyChooseContent,
  aboutWhyChooseItems,
} from "./AboutWhyChooseData";

const AboutWhyChoose = () => {
  const content = aboutWhyChooseContent;

  const sectionRef = useRef(null);
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
      if (!e.target.closest("[data-awc-card]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-12 lg:py-16">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-3 font-serif text-[30px] font-bold leading-tight text-[#1a1410] sm:text-[36px] lg:text-[42px]">
            {content.title}
          </h2>
        </div>

        {/* CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutWhyChooseItems.map((item, index) => (
            <AboutWhyChooseCard
              key={item.id}
              item={item}
              index={index}
              visible={visible}
              active={activeId === item.id}
              onActivate={setActiveId}
              onDeactivate={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChoose;
