import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { exploreNewsletterContent } from "./ExploreNewsletterData";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ExploreNewsletter = () => {
  const content = exploreNewsletterContent;

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  // Scroll par entrance animation (PC + mobile dono)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Touch: banner ke bahar tap karne par zoom effect hat jaye
  useEffect(() => {
    const handleOutside = (e) => {
      if (!sectionRef.current?.contains(e.target)) setBgActive(false);
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  // Success message kuch der baad hat jaye
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 4000);
    return () => clearTimeout(t);
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setStatus("error");
      return;
    }

    // Yahan apni newsletter API / service call jodna (frontend side)
    setStatus("success");
    setEmail("");
  };

  const reveal = (delay) => ({
    style: { transitionDelay: visible ? `${delay}ms` : "0ms" },
    className: `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
  });

  return (
    <section ref={sectionRef} className="bg-[#fdf8f4] py-8 lg:py-12">
      {/* 80% width, center me (chhoti screens par full width) */}
      <div className="mx-auto w-full px-6 md:px-10 lg:w-4/5 lg:px-0">
        <div
          onPointerEnter={() => setBgActive(true)}
          onPointerLeave={(e) => {
            // mouse hataane par band; touch me bahar tap karne par band hoga
            if (e.pointerType === "mouse") setBgActive(false);
          }}
          className={`relative isolate overflow-hidden rounded-2xl bg-[#1a0f0c] transition-shadow duration-500 ${
            bgActive
              ? "shadow-2xl shadow-[#e9722a]/25"
              : "shadow-lg shadow-black/20"
          }`}
        >
          {/* BACKGROUND IMAGE */}
          {!imageFailed && (
            <img
              src={content.image}
              alt=""
              loading="lazy"
              onError={() => setImageFailed(true)}
              className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-transform duration-2500 ease-out ${
                bgActive ? "scale-110" : "scale-100"
              }`}
            />
          )}

          {/* OVERLAYS */}
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#0d0a14]/90 via-[#0d0a14]/55 to-[#0d0a14]/10" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/30 via-transparent to-black/10" />

          {/* CONTENT */}
          <div className="flex flex-col gap-6 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-9">
            {/* LEFT: text */}
            <div className="max-w-md">
              <h2
                style={reveal(0).style}
                className={`font-serif text-[24px] font-bold leading-tight text-white sm:text-[28px] ${
                  reveal(0).className
                }`}
              >
                {content.title}
              </h2>

              <p
                style={reveal(120).style}
                className={`mt-3 text-[13px] leading-relaxed text-white/85 ${
                  reveal(120).className
                }`}
              >
                {content.description}
              </p>
            </div>

            {/* RIGHT: form */}
            <div
              style={reveal(240).style}
              className={`w-full lg:max-w-md ${reveal(240).className}`}
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className={`flex items-center gap-2 rounded-full bg-white p-1.5 pl-5 shadow-xl shadow-black/30 ring-2 transition-all duration-300 focus-within:ring-[#e9722a]/60 ${
                  status === "error" ? "ring-red-400" : "ring-transparent"
                }`}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder={content.placeholder}
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent text-[13px] text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e9722a] px-6 py-3 text-[13px] font-semibold text-white shadow-md shadow-[#e9722a]/40 transition-all duration-300 hover:bg-[#d1621f] hover:shadow-lg active:scale-95"
                >
                  {status === "success" ? (
                    <>
                      Subscribed <Check size={15} />
                    </>
                  ) : (
                    <>
                      {content.buttonText}
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* MESSAGE */}
              <p
                role="status"
                className={`mt-2 min-h-5 pl-5 text-[12px] transition-opacity duration-300 ${
                  status === "idle" ? "opacity-0" : "opacity-100"
                } ${status === "error" ? "text-red-300" : "text-[#9be3b4]"}`}
              >
                {status === "error" && content.errorMessage}
                {status === "success" && content.successMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNewsletter;