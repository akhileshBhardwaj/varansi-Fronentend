import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sizeStyles = {
  large: {
    padding: "p-6 sm:p-8",
    title: "text-[30px] sm:text-[38px] leading-[1.1]",
    desc: "mt-3 max-w-[360px] text-[14px] sm:text-[15px]",
    arrow: "h-12 w-12",
  },
  medium: {
    padding: "p-5 sm:p-6",
    title: "text-[23px] sm:text-[27px] leading-tight",
    desc: "mt-2 max-w-[310px] text-[13px] sm:text-[14px]",
    arrow: "h-11 w-11",
  },
  small: {
    padding: "p-5",
    title: "text-[20px] sm:text-[22px] leading-tight",
    desc: "mt-1.5 max-w-[210px] text-[12.5px] sm:text-[13px]",
    arrow: "h-10 w-10",
  },
};

const ExperiencesShowcaseCard = ({
  item,
  size = "small",
  className = "",
  index = 0,
  visible = true,
}) => {
  const [failed, setFailed] = useState(false);
  const style = sizeStyles[size];
  const ChipIcon = item.chip.icon;

  return (
    <Link
      to={item.path}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`group relative block overflow-hidden rounded-[22px] bg-linear-to-br from-[#3a1f3d] to-[#741717] shadow-lg shadow-black/10 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {/* IMAGE */}
      {!failed && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-110"
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

      {/* HOVER GLOW BORDER */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-2 ring-inset ring-[#e9722a]/0 transition-all duration-500 group-hover:ring-[#e9722a]/70" />

      {/* CHIP */}
      <span
        className={`absolute left-4 top-4 flex items-center gap-2 rounded-full px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[1.2px] backdrop-blur-md transition-all duration-300 sm:left-5 sm:top-5 ${
          item.chip.light
            ? "bg-white text-[#1f1a18] shadow-md group-hover:bg-[#e9722a] group-hover:text-white"
            : "bg-black/35 text-white group-hover:bg-[#e9722a]"
        }`}
      >
        <ChipIcon
          size={14}
          className={
            item.chip.light ? "text-[#e9722a] group-hover:text-white" : ""
          }
        />
        {item.chip.label}
      </span>

      {/* CONTENT */}
      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 ${style.padding}`}
      >
        <div className="min-w-0 transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className={`font-serif font-bold text-white ${style.title}`}>
            {item.title}
          </h3>
          <p className={`leading-relaxed text-white/85 ${style.desc}`}>
            {item.description}
          </p>
        </div>

        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-white text-[#1f1a18] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e9722a] group-hover:text-white ${style.arrow}`}
        >
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </span>
      </div>
    </Link>
  );
};

export default ExperiencesShowcaseCard;
