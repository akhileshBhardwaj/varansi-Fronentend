import React from "react";
import { ArrowRight, CalendarDays, Map, Play } from "lucide-react";
import ctaLight from '../../../assets/images/HomePage/cta-dark.png'

const CTA_IMAGE = ctaLight
//   "https://images.unsplash.com/photo-1665413791098-aca209040815?auto=format&fit=crop&fm=jpg&q=80&w=2200";

const FinalCTA = () => {
  return (
    <section className="bg-[#fffdf8] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="relative mx-auto min-h-125 max-w-375 overflow-hidden rounded-[28px] sm:rounded-4xl">
        {/* Background Image */}
        <img
          src={CTA_IMAGE}
          alt="Varanasi Ganga Ghats at sunset"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Text readability overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-black/10" />

        {/* Main Content */}
        <div className="relative z-10 flex min-h-125 items-center">
          <div className="max-w-162.5 px-7 py-14 sm:px-10 lg:px-16">
            {/* Eyebrow */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#f2a33a] sm:text-sm">
              Your Varanasi Story
            </p>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[62px]">
              Your Varanasi
              <br />
              <span className="text-[#f2a33a]">Story Starts Here</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-140 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
              Discover the timeless ghats, experience the living culture,
              explore sacred places, and create memories that stay with you
              forever.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#c94b2c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a93c23]"
              >
                <Map size={18} />
                Explore Varanasi
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#641d17]"
              >
                <CalendarDays size={18} />
                Book a Tour
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-y-5 text-white">
              <div className="pr-5">
                <p className="font-serif text-2xl font-bold">80+</p>
                <p className="text-xs text-white/65">Ghats</p>
              </div>

              <div className="h-9 w-px bg-white/25" />

              <div className="px-5">
                <p className="font-serif text-2xl font-bold">2000+</p>
                <p className="text-xs text-white/65">Years of History</p>
              </div>

              <div className="h-9 w-px bg-white/25" />

              <div className="px-5">
                <p className="font-serif text-2xl font-bold">100+</p>
                <p className="text-xs text-white/65">Temples</p>
              </div>

              <div className="h-9 w-px bg-white/25" />

              <div className="pl-5">
                <p className="font-serif text-2xl font-bold">Countless</p>
                <p className="text-xs text-white/65">Experiences</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video CTA */}
        <button
          type="button"
          className="group absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-4 lg:flex"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#8e241c]">
            <Play size={22} fill="currentColor" />
          </span>

          <span className="font-serif text-left text-lg italic text-white">
            Watch
            <br />
            <span className="text-[#f2a33a]">Varanasi in Motion</span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
