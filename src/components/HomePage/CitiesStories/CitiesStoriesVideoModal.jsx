import React, { useEffect } from "react";
import { X } from "lucide-react";

// YouTube link ko embed link mein badalta hai
const getEmbedUrl = (src) => {
  if (!src) return "";

  const watchMatch = src.match(/youtube\.com\/watch\?v=([\w-]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}?autoplay=1&rel=0`;
  }

  const shortMatch = src.match(/youtu\.be\/([\w-]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0`;
  }

  if (src.includes("youtube.com/embed")) {
    return src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
  }

  return "";
};

const CitiesStoriesVideoModal = ({ isOpen, onClose, videoSrc, title }) => {
  // Esc se band + background scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const embedUrl = getEmbedUrl(videoSrc);

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative aspect-video w-full max-w-240 overflow-hidden rounded-2xl bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:scale-110 hover:bg-[#e9722a]"
        >
          <X size={20} />
        </button>

        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={videoSrc}
            className="h-full w-full"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default CitiesStoriesVideoModal;
