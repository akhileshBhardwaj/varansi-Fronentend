import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import FastivelEventCard from "./FastivelEventCard";
import { fastivelEventContent, fastivelEventItems } from "./FastivelEventData";

const FastivelEvent = () => {
  const content = fastivelEventContent;

  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Section dikhne par cards fade-in honge
  useEffect(() => {
    const element = gridRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f8f5ef] py-16 lg:py-20">
      <div className="mx-auto max-w-350 px-6 md:px-10 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-[36px] font-bold leading-tight text-[#1f1a18] sm:text-[42px] lg:text-[46px]">
              {content.title}
            </h2>

            <p className="mt-3 max-w-140 text-[15px] leading-relaxed text-[#5f5652]">
              {content.description}
            </p>
          </div>

          <Link
            to={content.buttonPath}
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#eab49a] px-7 py-3 text-sm font-semibold text-[#1f1a18] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9722a] hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:translate-y-0 active:scale-95"
          >
            {content.buttonText}
            <ArrowRight
              size={16}
              className="text-[#e9722a] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
            />
          </Link>
        </div>

        {/* CARDS */}
        <div
          ref={gridRef}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {fastivelEventItems.map((event, index) => (
            <FastivelEventCard
              key={event.id}
              event={event}
              index={index}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastivelEvent;
