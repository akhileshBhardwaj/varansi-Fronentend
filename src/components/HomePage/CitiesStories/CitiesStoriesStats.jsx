import React, { useEffect, useRef, useState } from "react";
import { citiesStoriesStats } from "./CitiesStoriesData";

const useCountUp = (end, start, duration = 1800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || end === undefined) return;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setValue(Math.round(end * eased));

      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration]);

  return value;
};

const StatItem = ({ stat, inView }) => {
  const count = useCountUp(stat.value, inView);

  return (
    <div className="group cursor-default px-4 first:pl-0 sm:px-6 sm:first:pl-0">
      <p className="font-serif text-[26px] font-bold leading-none text-[#c8561b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-[#e9722a] sm:text-[30px]">
        {stat.text ? stat.text : `${count}${stat.suffix || ""}`}
      </p>

      <p className="mt-2 text-[12px] text-[#6f6560] transition-colors duration-300 group-hover:text-[#1f1a18]">
        {stat.label}
      </p>
    </div>
  );
};

const CitiesStoriesStats = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // sirf ek baar chalega
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-8 flex flex-wrap items-start divide-x divide-[#e6dbd2] gap-y-6"
    >
      {citiesStoriesStats.map((stat) => (
        <StatItem key={stat.id} stat={stat} inView={inView} />
      ))}
    </div>
  );
};

export default CitiesStoriesStats;
