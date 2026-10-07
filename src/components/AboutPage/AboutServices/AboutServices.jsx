import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AboutServicesCard from "./AboutServicesCard";
import { aboutServicesContent, aboutServicesItems } from "./AboutServicesData";

const AboutServices = () => {
  const content = aboutServicesContent;

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
      if (!e.target.closest("[data-asv-card]")) setActiveId(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Left text blocks ek ke baad ek aayein
  const reveal = (delay) => ({
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
    className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
  });

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-12 lg:py-16">
      <div className="mx-auto grid max-w-350 items-center gap-10 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-12">
        {/* LEFT: text */}
        <div>
          <p
            style={reveal(0).style}
            className={`text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a] ${
              reveal(0).className
            }`}
          >
            {content.eyebrow}
          </p>

          <h2
            style={reveal(120).style}
            className={`mt-3 font-serif text-[30px] font-bold leading-[1.15] text-[#1a1410] sm:text-[36px] lg:text-[42px] ${
              reveal(120).className
            }`}
          >
            {content.title}
          </h2>

          <p
            style={reveal(240).style}
            className={`mt-5 max-w-md text-[14px] leading-relaxed text-[#5b5148] ${
              reveal(240).className
            }`}
          >
            {content.description}
          </p>

          <div
            style={reveal(360).style}
            className={`mt-7 ${reveal(360).className}`}
          >
            <Link
              to={content.buttonPath}
              className="group inline-flex items-center gap-2 rounded-full border border-[#e9722a] px-7 py-2.5 text-[13px] font-semibold text-[#e9722a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:translate-y-0 active:scale-95"
            >
              {content.buttonText}
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* RIGHT: cards grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {aboutServicesItems.map((item, index) => (
            <AboutServicesCard
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

export default AboutServices;
