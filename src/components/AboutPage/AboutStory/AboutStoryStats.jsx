import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { aboutStoryStats } from "./AboutStoryData";

// Number 0 se target tak count-up hota hai (visible hone par)
const CountUp = ({ value, decimals, run }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const duration = 1600;
    const start = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return display.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

const AboutStoryStats = ({ visible, activeId, onActivate, onDeactivate }) => {
  return (
    <div className="grid grid-cols-2 gap-y-2 rounded-2xl bg-[#f7ece2] px-2 py-3 sm:grid-cols-3 lg:grid-cols-5 lg:px-4">
      {aboutStoryStats.map((stat, index) => {
        const Icon = stat.icon;
        const active = activeId === stat.id;

        return (
          <div
            key={stat.id}
            style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none lg:border-l lg:border-[#e2d3c5] lg:first:border-l-0 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div
              data-as-stat
              onPointerEnter={() => onActivate(stat.id)}
              onPointerLeave={(e) => {
                // mouse hataane par band; touch me bahar tap karne par band hoga
                if (e.pointerType === "mouse") onDeactivate();
              }}
              className={`flex cursor-default items-center justify-center gap-3 rounded-xl px-4 py-3 transition-all duration-500 ease-out ${
                active
                  ? "-translate-y-1 bg-white/70 shadow-md shadow-[#e9722a]/10"
                  : ""
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center text-[#e9722a] transition-all duration-500 ${
                  active ? "scale-125 -rotate-6" : "scale-100 rotate-0"
                }`}
              >
                <Icon size={34} strokeWidth={1.4} />
              </span>

              <div>
                <p
                  className={`flex items-center gap-1 text-[20px] font-bold leading-none transition-colors duration-300 ${
                    active ? "text-[#e9722a]" : "text-[#1a1410]"
                  }`}
                >
                  <span>
                    <CountUp
                      value={stat.value}
                      decimals={stat.decimals}
                      run={visible}
                    />
                    {stat.suffix}
                  </span>
                  {stat.star && (
                    <Star size={15} className="fill-[#e9722a] text-[#e9722a]" />
                  )}
                </p>
                <p className="mt-1.5 text-[12px] text-[#6b6159]">
                  {stat.label}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutStoryStats;
