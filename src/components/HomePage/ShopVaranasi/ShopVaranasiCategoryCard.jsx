import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ShopVaranasiCategoryCard = ({ category, index = 0, visible = true }) => {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      to={category.path}
      style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
      className={`group relative block h-75 overflow-hidden rounded-[22px] bg-linear-to-br shadow-lg shadow-black/10 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 lg:h-85.5 ${
        category.fallback
      } ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
    >
      {/* IMAGE */}
      {!failed && (
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-110"
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

      {/* HOVER GLOW BORDER */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-2 ring-inset ring-[#e9722a]/0 transition-all duration-500 group-hover:ring-[#e9722a]/70" />

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0 transition-transform duration-500 group-hover:-translate-y-1">
          <h3 className="font-serif text-[21px] font-bold leading-tight text-white">
            {category.title}
          </h3>
          <p className="mt-1.5 max-w-32.5 text-[13px] leading-snug text-white/85">
            {category.description}
          </p>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1f1a18] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e9722a] group-hover:text-white">
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:-rotate-45"
          />
        </span>
      </div>
    </Link>
  );
};

export default ShopVaranasiCategoryCard;
