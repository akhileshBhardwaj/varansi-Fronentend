import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Landmark } from "lucide-react";

import { shopVaranasiCollection } from "./ShopVaranasiData";

const ShopVaranasiCollection = ({ visible = true }) => {
  const data = shopVaranasiCollection;

  return (
    <div
      style={{ transitionDelay: visible ? "450ms" : "0ms" }}
      className={`group relative flex h-full min-h-75 flex-col justify-center overflow-hidden rounded-[22px] bg-linear-to-br from-[#fbe3d5] via-[#fdeee4] to-[#fff6f0] p-7 shadow-lg shadow-black/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/15 lg:min-h-85.5 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* DECORATION */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-[#e9722a]/25 blur-3xl transition-all duration-700 group-hover:scale-125" />
      <Landmark
        size={190}
        strokeWidth={0.8}
        className="pointer-events-none absolute -bottom-6 right-0 text-[#c8561b]/20 transition-all duration-700 group-hover:-translate-y-2 group-hover:text-[#c8561b]/30"
      />

      {/* CONTENT */}
      <div className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[2.5px] text-[#e9722a]">
          {data.eyebrow}
        </p>

        <h3 className="mt-3 font-serif text-[30px] font-bold leading-[1.1] text-[#1f1a18] lg:text-[34px]">
          {data.title}
        </h3>

        <p className="mt-3 max-w-65 text-[14.5px] leading-relaxed text-[#5f5652]">
          {data.description}
        </p>

        <Link
          to={data.buttonPath}
          className="group/btn mt-6 inline-flex items-center gap-2 rounded-full border border-[#e9722a] bg-white/40 px-6 py-3 text-[13px] font-semibold text-[#1f1a18] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e9722a] hover:text-white hover:shadow-lg hover:shadow-[#e9722a]/30 active:scale-95"
        >
          {data.buttonText}
          <ArrowRight
            size={15}
            className="text-[#e9722a] transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-white"
          />
        </Link>
      </div>
    </div>
  );
};

export default ShopVaranasiCollection;