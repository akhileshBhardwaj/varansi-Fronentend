import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { aboutCtaContent } from "./AboutCtaData";

const AboutCta = () => {
  const content = aboutCtaContent;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [bgActive, setBgActive] = useState(false);
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

  // Touch: section ke bahar tap karne par zoom effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!sectionRef.current?.contains(e.target)) setBgActive(false);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  const reveal = (delay) => ({
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
    className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
  });

  return (
    <section className="bg-[#fdf8f4] py-8 lg:py-10">
      <div
        ref={sectionRef}
        onPointerEnter={() => setBgActive(true)}
        onPointerLeave={(e) => {
          // mouse hataane par band; touch me bahar tap karne par band hoga
          if (e.pointerType === "mouse") setBgActive(false);
        }}
        className="relative isolate mx-auto flex min-h-65 w-[90%] items-center overflow-hidden bg-[#1a0f0c] rounded-2xl lg:min-h-80"
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
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0d0a14]/90 via-[#0d0a14]/50 to-[#0d0a14]/20" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/30 via-transparent to-black/20" />

        {/* CONTENT */}
        <div className="flex w-full flex-col gap-8 px-6 py-14 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14 lg:py-20">
          {/* LEFT: text */}
          <div className="max-w-150">
            <p
              style={reveal(0).style}
              className={`text-[12px] font-semibold uppercase tracking-[3px] text-[#f28c4a] ${
                reveal(0).className
              }`}
            >
              {content.eyebrow}
            </p>

            <h2
              style={reveal(120).style}
              className={`mt-3 font-serif text-[28px] font-bold leading-tight text-white sm:text-[34px] lg:text-[40px] ${
                reveal(120).className
              }`}
            >
              {content.title}
            </h2>

            <p
              style={reveal(240).style}
              className={`mt-3 text-[14px] leading-relaxed text-white/85 ${
                reveal(240).className
              }`}
            >
              {content.description}
            </p>
          </div>

          {/* RIGHT: buttons */}
          <div
            style={reveal(360).style}
            className={`flex flex-wrap items-center gap-4 ${reveal(360).className}`}
          >
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
      </div>
    </section>
  );
};

export default AboutCta;
