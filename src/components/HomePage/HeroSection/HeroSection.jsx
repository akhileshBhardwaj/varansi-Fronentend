import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  CalendarDays,
  Users,
  MapPin,
  Flame,
  Landmark,
  Palette,
  Compass,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import homeBg from "../../../assets/images/HomePage/HomeHerobanner.png";

const HERO_IMAGE = homeBg;

const steps = [
  { no: "01", label: "Spirituality", icon: Flame },
  { no: "02", label: "Heritage", icon: Landmark },
  { no: "03", label: "Culture", icon: Palette },
  { no: "04", label: "Experiences", icon: Compass },
];

const HeroSection = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState("2");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (date) params.set("date", date);
    params.set("travellers", travellers);

    navigate(`/places?${params.toString()}`);
  };

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight - 78, behavior: "smooth" });
  };

  // Search bar ke har field ke liye common classes
  const fieldClass =
    "group/field flex flex-1 cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 transition-colors duration-300 hover:bg-[#fdf3ec] focus-within:bg-[#fdf3ec] md:rounded-full md:py-1.5";

  const fieldIconClass =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fdf0e8] text-[#e9722a] transition-all duration-300 group-hover/field:scale-105 group-hover/field:bg-[#e9722a] group-hover/field:text-white group-focus-within/field:bg-[#e9722a] group-focus-within/field:text-white";

  return (
    <section className="group/hero relative flex h-[calc(100svh-72px)] min-h-155 flex-col overflow-hidden bg-[#794689] lg:h-[calc(100svh-78px)]">
      {/* BACKGROUND IMAGE (hover pe slow zoom) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-2500 ease-out group-hover/hero:scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-linear-to-r from-[#1a0f24]/85 via-[#2a1630]/45 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-350 flex-1 items-center px-6 py-6 md:px-10 lg:px-12">
        <div className="max-w-160">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[3px] text-white/80">
            Discover the soul of India
          </p>

          <h1 className="font-serif text-[60px] font-medium leading-none text-white sm:text-[76px] lg:text-[92px]">
            Varanasi
          </h1>

          <h2 className="mt-4 font-serif text-[26px] font-semibold text-white sm:text-[32px]">
            A Journey Beyond Time
          </h2>

          <p className="mt-5 max-w-107.5 text-[15px] leading-relaxed text-white/80">
            Ancient ghats, sacred rivers, vibrant culture and unforgettable
            experiences – explore the timeless charm of Varanasi.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* EXPLORE PLACES */}
            <button
              onClick={() => navigate("/places")}
              className="group/btn flex items-center gap-2 rounded-full bg-[#e9722a] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:translate-y-0 active:scale-95"
            >
              Explore Places
              <ArrowRight
                size={16}
                className="-ml-1 w-0 opacity-0 transition-all duration-300 group-hover/btn:ml-0 group-hover/btn:w-4 group-hover/btn:translate-x-0.5 group-hover/btn:opacity-100"
              />
            </button>

            {/* PLAN YOUR TRIP */}
            <button
              onClick={() => navigate("/book-tour")}
              className="rounded-full border border-white/50 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#741717] hover:shadow-xl hover:shadow-black/30 active:translate-y-0 active:scale-95"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        onClick={scrollDown}
        className="group/scroll absolute bottom-32 left-12 z-10 hidden items-center gap-3 text-left text-white/70 transition-colors duration-300 hover:text-white lg:flex"
        aria-label="Scroll to explore"
      >
        <span className="flex h-11 w-6 justify-center rounded-full border border-white/60 pt-2 transition-all duration-300 group-hover/scroll:border-[#e9722a] group-hover/scroll:shadow-[0_0_14px_rgba(233,114,42,0.6)]">
          <span className="h-2 w-0.75 animate-bounce rounded-full bg-white transition-colors duration-300 group-hover/scroll:bg-[#e9722a]" />
        </span>
        <span className="text-[13px] leading-tight transition-transform duration-300 group-hover/scroll:translate-x-1">
          Scroll
          <br />
          to explore
        </span>
      </button>

      {/* RIGHT SIDE STEPS */}
      <div className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <div className="relative flex flex-col gap-9">
          {/* vertical line */}
          <span className="absolute bottom-4 left-4.25 top-4 w-px bg-white/30" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.no}
                onClick={() =>
                  navigate(`/places?category=${item.label.toLowerCase()}`)
                }
                className="group/step relative flex cursor-pointer items-center gap-4 text-left"
              >
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-[#2a1630]/60 text-white backdrop-blur-sm transition-all duration-300 group-hover/step:scale-110 group-hover/step:border-[#e9722a] group-hover/step:bg-[#e9722a] group-hover/step:shadow-[0_0_16px_rgba(233,114,42,0.7)]">
                  <Icon size={15} strokeWidth={1.8} />
                </span>

                <div className="leading-tight transition-transform duration-300 group-hover/step:translate-x-1.5">
                  <p className="text-[11px] text-white/60 transition-colors duration-300 group-hover/step:text-[#ffb98a]">
                    {item.no}
                  </p>
                  <p className="text-[13px] font-medium text-white transition-colors duration-300 group-hover/step:text-[#ffd2b0]">
                    {item.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="relative z-20 px-4 pb-5 md:pb-6">
        <form
          onSubmit={handleSearch}
          className="mx-auto flex w-full max-w-195 flex-col gap-1 rounded-3xl bg-[#fffdf8] p-3 shadow-2xl shadow-black/30 transition-shadow duration-300 hover:shadow-black/50 md:flex-row md:items-center md:gap-0 md:rounded-full md:py-2.5 md:pl-3 md:pr-3"
        >
          {/* LOOKING FOR */}
          <label className={`${fieldClass} cursor-text`}>
            <span className={fieldIconClass}>
              <MapPin size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-[#7d726d]">I'm looking for</p>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Places, experiences..."
                className="w-full bg-transparent text-[13px] font-medium text-[#302a28] outline-none placeholder:text-[#302a28]/70"
              />
            </div>
            <ChevronDown
              size={15}
              className="hidden text-[#9a8f8a] transition-transform duration-300 group-hover/field:translate-y-0.5 group-hover/field:text-[#e9722a] md:block"
            />
          </label>

          <span className="mx-1 hidden h-10 w-px bg-[#eadfd8] md:block" />

          {/* TRAVEL DATE */}
          <label className={fieldClass}>
            <span className={fieldIconClass}>
              <CalendarDays size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-[#7d726d]">Travel Date</p>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-[13px] font-medium text-[#302a28] outline-none"
              />
            </div>
          </label>

          <span className="mx-1 hidden h-10 w-px bg-[#eadfd8] md:block" />

          {/* TRAVELLERS */}
          <label className={fieldClass}>
            <span className={fieldIconClass}>
              <Users size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-[#7d726d]">Travellers</p>
              <select
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className="w-full cursor-pointer bg-transparent text-[13px] font-medium text-[#302a28] outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Adult" : "Adults"}
                  </option>
                ))}
              </select>
            </div>
          </label>

          {/* SEARCH BUTTON */}
          <button
            type="submit"
            aria-label="Search"
            className="group/search mt-2 flex h-12 w-full shrink-0 items-center justify-center rounded-full bg-[#e9722a] text-white shadow-lg shadow-[#e9722a]/30 transition-all duration-300 hover:scale-110 hover:bg-[#d1621f] hover:shadow-xl hover:shadow-[#e9722a]/50 active:scale-95 md:ml-3 md:mt-0 md:h-12 md:w-12"
          >
            <Search
              size={20}
              className="transition-transform duration-300 group-hover/search:-rotate-12 group-hover/search:scale-110"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
