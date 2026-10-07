import React, { useEffect, useRef, useState } from "react";

import { aboutHeroContent } from "./AboutHeroData";

const AboutHero = () => {
  const content = aboutHeroContent;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  // Page load / scroll par entrance animation
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

  // Touch: section ke bahar tap karne par zoom effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!sectionRef.current?.contains(e.target)) setBgActive(false);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Har element ek ke baad ek aaye (stagger)
  const reveal = (delay) => ({
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
    className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
    }`,
  });

  return (
    <section
      ref={sectionRef}
      onPointerEnter={() => setBgActive(true)}
      onPointerLeave={(e) => {
        // mouse hataane par band; touch me bahar tap karne par band hoga
        if (e.pointerType === "mouse") setBgActive(false);
      }}
      className="relative isolate flex min-h-105 items-center overflow-hidden bg-[#1a0f0c] lg:min-h-130"
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
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0d0a14]/90 via-[#0d0a14]/55 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/30 via-transparent to-black/30" />

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-350 px-6 py-14 md:px-10 lg:px-12 lg:py-16">
        <div className="max-w-130">
          <p
            {...reveal(0)}
            className={`text-[12px] font-semibold uppercase tracking-[3px] text-[#f28c4a] ${
              reveal(0).className
            }`}
          >
            {content.eyebrow}
          </p>

          <h1
            style={reveal(150).style}
            className={`mt-4 font-serif text-[38px] font-bold leading-[1.08] text-white sm:text-[48px] lg:text-[58px] ${
              reveal(150).className
            }`}
          >
            {content.title}
          </h1>

          <p
            style={reveal(300).style}
            className={`mt-6 max-w-115 text-[15px] leading-relaxed text-white/85 ${
              reveal(300).className
            }`}
          >
            {content.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
