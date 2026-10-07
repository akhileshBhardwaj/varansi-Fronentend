import React, { useEffect, useRef, useState } from "react";

import ExperienceThemeBannersCard from "./ExperienceThemeBannersCard";
import { experienceThemeBanners } from "./ExperienceThemeBannersData";

const ExperienceThemeBanners = () => {
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
      if (!e.target.closest("[data-etb-card]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-10 lg:py-14">
      <div className="mx-auto grid max-w-350 grid-cols-1 gap-5 px-6 md:px-10 lg:grid-cols-2 lg:gap-6 lg:px-12  ">
        {experienceThemeBanners.map((item, index) => (
          <ExperienceThemeBannersCard
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
    </section>
  );
};

export default ExperienceThemeBanners;