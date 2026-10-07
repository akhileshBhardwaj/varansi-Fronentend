import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

import { experienceSoulPopular } from "./ExperienceSoulHeroData";

const ExperienceSoulHeroSearch = ({ placeholder, searchPath }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = query.trim();
    if (!value) return;
    navigate(`${searchPath}?q=${encodeURIComponent(value)}`);
  };

  return (
    <div className="w-full max-w-130">
      {/* SEARCH BAR */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 rounded-full bg-white p-2 pl-5 shadow-xl shadow-black/30 ring-2 ring-transparent transition-all duration-300 focus-within:ring-[#e9722a]/60 hover:shadow-2xl"
      >
        <Search size={16} className="shrink-0 text-gray-700" />

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[13px] text-gray-800 outline-none placeholder:text-gray-400"
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9722a] text-white shadow-md shadow-[#e9722a]/40 transition-all duration-300 hover:scale-105 hover:bg-[#d1621f] hover:shadow-lg active:scale-95"
        >
          <Search size={17} />
        </button>
      </form>

      {/* POPULAR TAGS */}
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <span className="text-[13px] font-medium text-white">Popular:</span>

        {experienceSoulPopular.map((tag) => (
          <Link
            key={tag.id}
            to={`${searchPath}?q=${encodeURIComponent(tag.query)}`}
            className="rounded-full border border-white/40 bg-black/30 px-4 py-1.5 text-[12px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e9722a] hover:bg-[#e9722a] hover:shadow-lg hover:shadow-[#e9722a]/40 active:scale-95"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSoulHeroSearch;
