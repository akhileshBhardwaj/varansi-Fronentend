import React, { useState } from "react";
import { Play, Clock } from "lucide-react";

import CitiesStoriesVideoModal from "./CitiesStoriesVideoModal";
import { citiesStoriesVideo } from "./CitiesStoriesData";

const CitiesStoriesVideoCard = () => {
  const video = citiesStoriesVideo;

  const [isOpen, setIsOpen] = useState(false);
  const [mainFailed, setMainFailed] = useState(false);
  const [thumbFailed, setThumbFailed] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <>
      <div className="relative pb-8">
        {/* MAIN VIDEO IMAGE */}
        <div
          onClick={openVideo}
          className="group relative aspect-16/10 cursor-pointer overflow-hidden rounded-[28px] bg-linear-to-br from-[#3a1f3d] to-[#741717] shadow-xl shadow-black/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/25"
        >
          {!mainFailed && (
            <img
              src={video.mainImage}
              alt={video.title}
              onError={() => setMainFailed(true)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
            />
          )}

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/10 transition-colors duration-500 group-hover:from-black/45" />

          {/* PLAY BUTTON */}
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-19 w-19 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#e9722a] group-hover:bg-[#e9722a]"
          >
            {/* pulse ring */}
            <span className="absolute inset-0 animate-ping rounded-full border border-white/60 [animation-duration:2.2s]" />
            <Play size={28} fill="currentColor" className="ml-1" />
          </button>
        </div>

        {/* FLOATING INFO CARD */}
        <button
          type="button"
          onClick={openVideo}
          className="group absolute bottom-0 left-3 flex w-[88%] max-w-85 items-center gap-4 rounded-2xl bg-white p-3 pr-5 text-left shadow-xl shadow-black/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/25 sm:-left-6"
        >
          <span className="relative h-16 w-18 shrink-0 overflow-hidden rounded-xl bg-linear-to-br from-[#3a1f3d] to-[#741717]">
            {!thumbFailed && (
              <img
                src={video.thumbImage}
                alt=""
                onError={() => setThumbFailed(true)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </span>

          <span className="min-w-0">
            <span className="block text-[14px] font-semibold leading-snug text-[#1f1a18] transition-colors duration-300 group-hover:text-[#c8561b]">
              {video.title}
            </span>

            <span className="mt-1.5 flex items-center gap-2 text-[12px] text-[#8a7f79]">
              <Clock size={13} className="text-[#e9722a]" />
              {video.duration}
              <span className="text-[#e9722a]">•</span>
              Watch Video
            </span>
          </span>
        </button>
      </div>

      <CitiesStoriesVideoModal
        isOpen={isOpen}
        onClose={closeVideo}
        videoSrc={video.videoSrc}
        title={video.title}
      />
    </>
  );
};

export default CitiesStoriesVideoCard;
