import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AboutStoryStats from "./AboutStoryStats";
import { aboutStoryContent } from "./AboutStoryData";

const AboutStory = () => {
  const content = aboutStoryContent;

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
      if (!e.target.closest("[data-as-image]")) setImageActive(false);
      if (!e.target.closest("[data-as-stat]")) setActiveStat(null);
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
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT: collage image */}
          <div
            style={{ transitionDelay: visible ? "0ms" : "0ms" }}
            className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
              visible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div
              data-as-image
              onPointerEnter={() => setImageActive(true)}
              onPointerLeave={(e) => {
                // mouse hataane par band; touch me bahar tap karne par band hoga
                if (e.pointerType === "mouse") setImageActive(false);
              }}
              className="relative"
            >
              {!imageFailed ? (
                <img
                  src={content.image}
                  alt="Varanasi ghats, boats and local life"
                  loading="lazy"
                  onError={() => setImageFailed(true)}
                  className={`h-auto w-full rounded-2xl object-cover drop-shadow-2xl transition-all duration-700 ease-out ${
                    imageActive
                      ? "-translate-y-2 scale-[1.03] -rotate-1"
                      : "translate-y-0 scale-100 rotate-0"
                  }`}
                />
              ) : (
                <div className="aspect-4/3 w-full rounded-2xl bg-linear-to-br from-[#c98a3a] to-[#3a1e0c]" />
              )}
            </div>
          </div>

          {/* RIGHT: text */}
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
              className={`mt-3 font-serif text-[30px] font-bold leading-[1.15] text-[#1a1410] sm:text-[36px] lg:text-[40px] ${
                reveal(200).className
              }`}
            >
              {content.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>

            {content.paragraphs.map((text, i) => (
              <p
                key={i}
                style={reveal(300 + i * 100).style}
                className={`mt-5 text-[14px] leading-relaxed text-[#5b5148] ${
                  reveal(300 + i * 100).className
                }`}
              >
                {text}
              </p>
            ))}

            <div
              style={reveal(550).style}
              className={`mt-7 ${reveal(550).className}`}
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
        </div>

        {/* STATS STRIP */}
        <div className="mt-12">
          <AboutStoryStats
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

export default AboutStory;