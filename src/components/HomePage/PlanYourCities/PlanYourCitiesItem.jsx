import React from "react";
import { Link } from "react-router-dom";

const PlanYourCitiesItem = ({ item }) => {
  const Icon = item.icon;

  return (
    <Link
      to={item.path}
      className="group flex flex-col items-center gap-3 px-3 py-2 text-center"
    >
      {/* ICON */}
      <span className="flex h-14.5 w-14.5 items-center justify-center rounded-full border border-[#e9722a]/70 bg-[#e9722a]/10 text-[#f28c4a] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:border-[#e9722a] group-hover:bg-[#e9722a] group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(233,114,42,0.45)]">
        <Icon size={26} strokeWidth={1.5} />
      </span>

      {/* LABEL */}
      <span className="text-[13px] font-medium leading-tight text-white/90 transition-colors duration-300 group-hover:text-[#ffb98a]">
        {item.label}
      </span>
    </Link>
  );
};

export default PlanYourCitiesItem;