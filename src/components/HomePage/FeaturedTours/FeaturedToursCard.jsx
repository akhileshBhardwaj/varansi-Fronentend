import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, ArrowRight } from "lucide-react";

const FeaturedToursCard = ({ tour }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#f0e4db] bg-[#fffdf8] shadow-md shadow-black/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/15">
      {/* IMAGE */}
      <Link
        to={tour.path}
        className="relative block h-57.5 shrink-0 overflow-hidden bg-linear-to-br from-[#3a1f3d] to-[#741717]"
      >
        {!failed && (
          <img
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-900 ease-out group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/10" />

        {/* BADGE */}
        <span
          className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-md ${tour.badgeClass}`}
        >
          {tour.badge}
        </span>

        {/* DURATION */}
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
          <Clock size={14} />
          {tour.duration}
        </span>
      </Link>

      {/* BODY */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-[21px] font-bold leading-snug text-[#1f1a18] transition-colors duration-300 group-hover:text-[#741717]">
          {tour.title}
        </h3>

        {/* RATING */}
        <div className="mt-2 flex items-center gap-2 text-[13px] text-[#6a5f5a]">
          <Star size={15} className="fill-[#e9722a] text-[#e9722a]" />
          <span className="font-semibold text-[#1f1a18]">{tour.rating}</span>
          <span className="text-[#8a7f79]">({tour.reviews})</span>
          <span className="text-[#d8cbc2]">|</span>
          <span>{tour.tag}</span>
        </div>

        <p className="mt-3 text-[14px] leading-relaxed text-[#5f5652]">
          {tour.description}
        </p>

        {/* HIGHLIGHTS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tour.highlights.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#f8ece5] px-3 py-1 text-[12px] font-medium text-[#8a4a2a] transition-colors duration-300 group-hover:bg-[#f3dccf]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* PRICE + BUTTON */}
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="font-serif text-[25px] font-bold leading-none text-[#741717]">
              ₹ {tour.price.toLocaleString("en-IN")}
            </p>
            <p className="mt-1 text-[12px] text-[#8a7f79]">per person</p>
          </div>

          <Link
            to={tour.path}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-[#741717] px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-[#741717]/25 transition-all duration-300 hover:bg-[#e9722a] hover:shadow-[#e9722a]/40 active:scale-95"
          >
            View Details
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedToursCard;