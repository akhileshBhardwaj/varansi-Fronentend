import React, { useEffect, useRef, useState } from "react";

import AboutHighlightsItem from "./AboutHighlightsItem";
import { aboutHighlightsItems } from "./AboutHighlightsData";

const AboutHighlights = () => {
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
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Touch: item ke bahar tap karne par active effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest("[data-ah-item]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-6 lg:py-8">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-5">
          {aboutHighlightsItems.map((item, index) => (
            <AboutHighlightsItem
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

export default AboutHighlights;
