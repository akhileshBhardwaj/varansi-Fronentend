import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flower2 } from "lucide-react";

import { explorePageHeroContent } from "./ExplorePageHeroData";

const ExplorePageHero = () => {
  const content = explorePageHeroContent;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const [badgeActive, setBadgeActive] = useState(false);
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

  // Touch: bahar tap karne par zoom / badge effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!sectionRef.current?.contains(e.target)) setBgActive(false);
      if (!e.target.closest("[data-eph-badge]")) setBadgeActive(false);
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
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/25 via-transparent to-black/30" />

      {/* CONTENT */}
      <div className="mx-auto w-full max-w-350 px-6 py-14 md:px-10 lg:px-12 lg:py-16">
        <div className="max-w-130">
          <p
            style={reveal(0).style}
            className={`text-[12px] font-semibold uppercase tracking-[3px] text-[#f28c4a] ${
              reveal(0).className
            }`}
          >
            {content.eyebrow}
          </p>

          <h1
            style={reveal(150).style}
            className={`mt-4 font-serif text-[38px] font-bold leading-[1.08] text-white sm:text-[48px] lg:text-[56px] ${
              reveal(150).className
            }`}
          >
            {content.title}
          </h1>

          <p
            style={reveal(300).style}
            className={`mt-6 max-w-120 text-[15px] leading-relaxed text-white/85 ${
              reveal(300).className
            }`}
          >
            {content.description}
          </p>

          <div
            style={reveal(450).style}
            className={`mt-8 ${reveal(450).className}`}
          >
            <Link
              to={content.buttonPath}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#e9722a] px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
            >
              {content.buttonText}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1.5 group-active:translate-x-1.5"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* BADGE: Authentic Banarasi Handcrafts */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 lg:bottom-auto lg:right-16 lg:top-1/2 lg:-translate-y-1/2">
        <div
          data-eph-badge
          onPointerEnter={() => setBadgeActive(true)}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") setBadgeActive(false);
          }}
          style={{ transitionDelay: visible ? "600ms" : "0ms" }}
          className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
            visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          <div
            className={`relative flex h-24 w-24 items-center justify-center rounded-full border border-[#e9c9a5] bg-[#f3dcc0]/95 shadow-xl shadow-black/30 transition-all duration-500 ease-out sm:h-28 sm:w-28 lg:h-32 lg:w-32 ${
              badgeActive
                ? "-translate-y-1 rotate-12 scale-110 shadow-2xl shadow-[#e9722a]/40"
                : "rotate-0 scale-100"
            }`}
          >
            {/* curved text */}
            <svg
              viewBox="0 0 120 120"
              className="absolute inset-0 h-full w-full text-[#7a3f14]"
              aria-hidden="true"
            >
              <defs>
                <path id="eph-arc-top" d="M 26,60 A 34,34 0 0 1 94,60" />
                <path id="eph-arc-bottom" d="M 17,60 A 43,43 0 0 0 103,60" />
              </defs>
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.35"
                strokeWidth="0.8"
                strokeDasharray="2 3"
              />
              <text
                fill="currentColor"
                fontSize="9"
                fontWeight="600"
                letterSpacing="2.5"
                textAnchor="middle"
              >
                <textPath href="#eph-arc-top" startOffset="50%">
                  {content.badge.top}
                </textPath>
              </text>
              <text
                fill="currentColor"
                fontSize="9"
                fontWeight="600"
                letterSpacing="2.5"
                textAnchor="middle"
              >
                <textPath href="#eph-arc-bottom" startOffset="50%">
                  {content.badge.bottom}
                </textPath>
              </text>
            </svg>

            {/* center */}
            <div className="relative flex flex-col items-center text-[#7a3f14]">
              <Flower2 size={22} strokeWidth={1.5} />
              <span className="mt-1 text-[9px] font-bold tracking-[1.5px]">
                {content.badge.center}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePageHero;
