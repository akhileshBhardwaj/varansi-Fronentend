import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const IconicPlacesCard = ({ place }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Link
      to={place.path}
      className="group relative block aspect-5/6 overflow-hidden rounded-[22px] bg-linear-to-br from-[#3a1f3d] to-[#741717] shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30"
    >
      {/* IMAGE */}
      {!imageFailed && (
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          onError={() => setImageFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-500 group-hover:from-black/95" />

      {/* CONTENT */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="text-[12px] font-medium text-white/70">{place.no}</p>

          <h3 className="mt-3 text-[15px] font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#ffd2b0]">
            {place.name}
          </h3>

          <p className="mt-0.5 text-[12px] text-white/75">{place.tagline}</p>
        </div>

        {/* ARROW BUTTON */}
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1f1a18] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e9722a] group-hover:text-white">
          <ArrowRight
            size={19}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
};

export default IconicPlacesCard;
