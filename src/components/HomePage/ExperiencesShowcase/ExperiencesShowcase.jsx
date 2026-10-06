import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

import ExperiencesShowcaseCard from "./ExperiencesShowcaseCard";
import ExperiencesShowcaseFeatures from "./ExperiencesShowcaseFeatures";
import ExperiencesShowcaseBenefits from "./ExperiencesShowcaseBenefits";
import ExperiencesShowcaseVideoModal from "./ExperiencesShowcaseVideoModal";
import {
  experiencesShowcaseContent,
  experiencesShowcaseItems,
  experiencesShowcaseVideo,
} from "./ExperiencesShowcaseData";

const ExperiencesShowcase = () => {
  const content = experiencesShowcaseContent;
  const [heroItem, ...otherItems] = experiencesShowcaseItems;
  const topRow = otherItems.slice(0, 2);
  const bottomRow = otherItems.slice(2, 5);

  const [videoOpen, setVideoOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardsRef = useRef(null);

  // Cards ko scroll par fade-in karne ke liye
  useEffect(() => {
    const element = cardsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fbf7f2] py-14 lg:py-20">
      {/* SOFT DECORATION */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-95 w-95 rounded-full bg-[#e9722a]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-20 h-75 w-75 rounded-full bg-[#741717]/5 blur-3xl" />

      <div className="relative mx-auto max-w-360 px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40%_minmax(0,1fr)] lg:gap-x-5">
          {/* ================= LEFT ================= */}
          <div className="flex flex-col">
            <p className="text-[12px] font-semibold uppercase tracking-[3px] text-[#e9722a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-5 font-serif text-[42px] font-bold leading-[1.05] text-[#1f1a18] sm:text-[54px] lg:text-[60px]">
              {content.titleLine1}
              <br />
              <span className="text-[#8b1a1a]">
                {content.titleHighlight}
              </span>{" "}
              {content.titleLine2}
              <br />
              {content.titleLine3}
            </h2>

            <p className="mt-6 max-w-125 text-[15px] leading-relaxed text-[#5f5652]">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {/* EXPLORE BUTTON */}
              <Link
                to={content.buttonPath}
                className="group inline-flex items-center gap-2 rounded-full bg-[#e9722a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
              >
                {content.buttonText}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>

              {/* WATCH VIDEO */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group flex items-center gap-3 text-left"
              >
                <span className="relative flex h-13 w-13 items-center justify-center rounded-full border border-[#c8561b]/70 text-[#1f1a18] transition-all duration-300 group-hover:scale-110 group-hover:border-[#e9722a] group-hover:bg-[#e9722a] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#e9722a]/40">
                  <span className="absolute inset-0 animate-ping rounded-full border border-[#e9722a]/40 [animation-duration:2.4s]" />
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                </span>

                <span>
                  <span className="block text-[14px] font-semibold text-[#1f1a18] transition-colors duration-300 group-hover:text-[#c8561b]">
                    {content.videoButtonTitle}
                  </span>
                  <span className="block text-[12px] text-[#7d726d]">
                    {content.videoButtonSubtitle}
                  </span>
                </span>
              </button>
            </div>

            {/* BIG CARD */}
            <ExperiencesShowcaseCard
              item={heroItem}
              size="large"
              index={0}
              visible={visible}
              className="mt-10 h-105 lg:mt-12 lg:min-h-105 lg:flex-1"
            />
          </div>

          {/* ================= RIGHT ================= */}
          <div className="flex min-w-0 flex-col gap-10 lg:justify-between lg:gap-8">
            <div className="lg:pt-2">
              <ExperiencesShowcaseFeatures />
            </div>

            <div
              ref={cardsRef}
              className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-12"
            >
              {/* TOP ROW */}
              {topRow.map((item, i) => (
                <ExperiencesShowcaseCard
                  key={item.id}
                  item={item}
                  size="medium"
                  index={i + 1}
                  visible={visible}
                  className={`h-75 lg:h-68 ${
                    i === 0 ? "lg:col-span-7" : "lg:col-span-5"
                  }`}
                />
              ))}

              {/* BOTTOM ROW */}
              {bottomRow.map((item, i) => (
                <ExperiencesShowcaseCard
                  key={item.id}
                  item={item}
                  size="small"
                  index={i + 3}
                  visible={visible}
                  className="h-75 lg:col-span-4 lg:h-72.75"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= BENEFITS STRIP ================= */}
        <ExperiencesShowcaseBenefits />
      </div>

      {/* VIDEO MODAL */}
      <ExperiencesShowcaseVideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        src={experiencesShowcaseVideo.src}
        title={experiencesShowcaseVideo.title}
      />
    </section>
  );
};

export default ExperiencesShowcase;
