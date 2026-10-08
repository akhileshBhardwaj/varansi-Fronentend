import React, { useEffect, useState } from "react";

import { exploreArtisansStats } from "./ExploreArtisansData";

// Number 0 se target tak count-up hota hai (visible hone par)
const CountUp = ({ value, run }) => {
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
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, value]);

  return display.toLocaleString("en-IN");
};

const ExploreArtisansStats = ({
  visible,
  activeId,
  onActivate,
  onDeactivate,
}) => {
  return (
    <div className="grid grid-cols-2">
      {exploreArtisansStats.map((stat, index) => {
        const Icon = stat.icon;
        const active = activeId === stat.id;

        // 2x2 grid ke beech me cross lines
        const borders = [
          index % 2 === 0 ? "border-r" : "",
          index < 2 ? "border-b" : "",
        ].join(" ");

        return (
          <div
            key={stat.id}
            style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
            className={`border-[#e6dcd2] transition-all duration-700 ease-out motion-reduce:transition-none ${borders} ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div
              data-ea-stat
              onPointerEnter={() => onActivate(stat.id)}
              onPointerLeave={(e) => {
                // mouse hataane par band; touch me bahar tap karne par band hoga
                if (e.pointerType === "mouse") onDeactivate();
              }}
              className={`flex h-full cursor-default flex-col items-center px-3 py-5 text-center transition-all duration-500 ease-out ${
                active ? "-translate-y-1 bg-[#e9722a]/5" : "translate-y-0"
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center text-[#e9722a] transition-all duration-500 ${
                  active ? "scale-125 -rotate-6" : "scale-100 rotate-0"
                }`}
              >
                <Icon size={30} strokeWidth={1.4} />
              </span>

              <p
                className={`mt-2 text-[15px] font-bold transition-colors duration-300 ${
                  active ? "text-[#e9722a]" : "text-[#1a1410]"
                }`}
              >
                {stat.count !== undefined ? (
                  <>
                    <CountUp value={stat.count} run={visible} />
                    {stat.suffix}
                  </>
                ) : (
                  stat.title
                )}
              </p>

              <p className="mt-0.5 text-[12px] text-[#6b6159]">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExploreArtisansStats;
