import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PerfectExperienceCtaFeatures from "./PerfectExperienceCtaFeatures";
import { perfectExperienceContent } from "./PerfectExperienceCtaData";

const PerfectExperienceCta = () => {
  const content = perfectExperienceContent;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [imageFailed, setImageFailed] = useState(false);

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

  // Touch: section ke bahar tap karne par effects hat jayein
  useEffect(() => {
    const handleOutside = (e) => {
      if (!sectionRef.current?.contains(e.target)) setBgActive(false);
      if (!e.target.closest("[data-pec-item]")) setActiveFeature(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  return (
    <section
      ref={sectionRef}
      onPointerEnter={() => setBgActive(true)}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setBgActive(false);
      }}
      className="relative isolate overflow-hidden bg-[#1a0f0c]"
    >
      {/* BACKGROUND IMAGE */}
      {!imageFailed && (
        <img
          src={content.image}
          alt=""
          onError={() => setImageFailed(true)}
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-2500 ease-out ${
            bgActive ? "scale-110" : "scale-100"
          }`}
        />
      )}

      {/* OVERLAYS */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#1a0f0c]/90 via-[#1a0f0c]/55 to-[#1a0f0c]/20" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/40 via-transparent to-black/10" />

      {/* CONTENT */}
      <div className="mx-auto flex max-w-350 flex-col gap-10 px-6 py-12 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-14">
        {/* LEFT */}
        <div
          className={`max-w-150 transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#f28c4a]">
            {content.eyebrow}
          </p>

          <h2 className="mt-3 font-serif text-[32px] font-bold leading-[1.1] text-white sm:text-[40px] lg:text-[46px]">
            {content.title}
          </h2>

          <p className="mt-4 max-w-115 text-[14px] leading-relaxed text-white/85">
            {content.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              to={content.primaryPath}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#e9722a] px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
            >
              {content.primaryText}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5 group-active:translate-x-1.5"
              />
            </Link>

            <Link
              to={content.secondaryPath}
              className="inline-flex items-center rounded-full border border-white/60 bg-white/5 px-8 py-3.5 text-[14px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#1a1410] hover:shadow-xl hover:shadow-black/30 active:translate-y-0 active:scale-95"
            >
              {content.secondaryText}
            </Link>
          </div>
        </div>

        {/* RIGHT: features panel */}
        <div
          style={{ transitionDelay: visible ? "200ms" : "0ms" }}
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <PerfectExperienceCtaFeatures
            activeId={activeFeature}
            onActivate={setActiveFeature}
            onDeactivate={() => setActiveFeature(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default PerfectExperienceCta;
