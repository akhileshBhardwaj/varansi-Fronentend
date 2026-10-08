import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ExploreArtisansStats from "./ExploreArtisansStats";
import { exploreArtisansContent } from "./ExploreArtisansData";

const ExploreArtisans = () => {
  const content = exploreArtisansContent;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [imageActive, setImageActive] = useState(false);
  const [activeStat, setActiveStat] = useState(null);
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
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Touch: bahar tap karne par image/stat ka active effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest("[data-ea-image]")) setImageActive(false);
      if (!e.target.closest("[data-ea-stat]")) setActiveStat(null);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Text blocks ek ke baad ek aayein
  const reveal = (delay) => ({
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
    className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
  });

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-12 lg:py-16">
      <div className="mx-auto grid max-w-350 items-center gap-8 px-6 md:px-10 lg:grid-cols-[1.05fr_1.15fr_0.8fr] lg:gap-10 lg:px-12">
        {/* LEFT: image */}
        <div
          className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <div
            data-ea-image
            onPointerEnter={() => setImageActive(true)}
            onPointerLeave={(e) => {
              // mouse hataane par band; touch me bahar tap karne par band hoga
              if (e.pointerType === "mouse") setImageActive(false);
            }}
            className={`relative aspect-4/3 overflow-hidden rounded-xl bg-linear-to-br from-[#4a2a14] to-[#150c06] transition-all duration-500 ease-out ${
              imageActive
                ? "-translate-y-2 shadow-2xl shadow-[#e9722a]/25"
                : "translate-y-0 shadow-lg shadow-black/15"
            }`}
          >
            {!imageFailed && (
              <img
                src={content.image}
                alt="Varanasi artisan at work"
                loading="lazy"
                onError={() => setImageFailed(true)}
                className={`h-full w-full object-cover transition-transform duration-1000 ease-out ${
                  imageActive ? "scale-110" : "scale-100"
                }`}
              />
            )}
          </div>
        </div>

        {/* MIDDLE: text */}
        <div>
          <p
            style={reveal(100).style}
            className={`text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a] ${
              reveal(100).className
            }`}
          >
            {content.eyebrow}
          </p>

          <h2
            style={reveal(200).style}
            className={`mt-3 font-serif text-[28px] font-bold leading-[1.15] text-[#1a1410] sm:text-[34px] ${
              reveal(200).className
            }`}
          >
            {content.title}
          </h2>

          <p
            style={reveal(300).style}
            className={`mt-4 text-[14px] leading-relaxed text-[#5b5148] ${
              reveal(300).className
            }`}
          >
            {content.description}
          </p>

          <div
            style={reveal(400).style}
            className={`mt-6 ${reveal(400).className}`}
          >
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

        {/* RIGHT: stats */}
        <div className="lg:border-l lg:border-[#e6dcd2] lg:pl-6">
          <ExploreArtisansStats
            visible={visible}
            activeId={activeStat}
            onActivate={setActiveStat}
            onDeactivate={() => setActiveStat(null)}
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreArtisans;
