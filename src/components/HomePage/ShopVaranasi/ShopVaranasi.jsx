import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import ShopVaranasiFeatures from "./ShopVaranasiFeatures";
import ShopVaranasiCategoryCard from "./ShopVaranasiCategoryCard";
import ShopVaranasiCollection from "./ShopVaranasiCollection";
import ShopVaranasiServices from "./ShopVaranasiServices";
import {
  shopVaranasiContent,
  shopVaranasiCategories,
} from "./ShopVaranasiData";

const ShopVaranasi = () => {
  const content = shopVaranasiContent;

  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [heroFailed, setHeroFailed] = useState(false);

  // Cards ko scroll par ek ke baad ek dikhane ke liye
  useEffect(() => {
    const element = gridRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fdf9f4] py-14 lg:py-20">
      {/* TOP-RIGHT BACKGROUND IMAGE (left side se fade hoti hai) */}
      {!heroFailed && (
        <img
          src={content.heroImage}
          alt=""
          onError={() => setHeroFailed(true)}
          className="pointer-events-none absolute right-0 top-0 hidden h-100 w-[46%] object-cover opacity-90 lg:block"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 60%), linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 60%), linear-gradient(to bottom, black 70%, transparent 100%)",
            maskComposite: "intersect",
          }}
        />
      )}

      <div className="relative mx-auto max-w-360 px-6 md:px-10 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,500px)_minmax(0,1fr)] lg:gap-x-16">
          {/* LEFT */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[3.5px] text-[#e9722a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 font-serif text-[42px] font-bold leading-[1.05] text-[#1f1a18] sm:text-[54px] lg:text-[58px]">
              {content.titleLine1Start}{" "}
              <span className="italic">{content.titleLine1Italic}</span>
              <br />
              <span className="text-[#8b1a1a]">
                {content.titleLine2Highlight}
              </span>{" "}
              {content.titleLine2End}
            </h2>

            <p className="mt-5 max-w-120 text-[15px] leading-relaxed text-[#5f5652]">
              {content.description}
            </p>

            <Link
              to={content.buttonPath}
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#741717] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#741717]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#5d1111] hover:shadow-xl hover:shadow-[#741717]/40 active:translate-y-0 active:scale-95"
            >
              {content.buttonText}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </div>

          {/* RIGHT: FEATURES */}
          <div className="lg:pt-5">
            <ShopVaranasiFeatures />
          </div>
        </div>

        {/* ================= CATEGORY CARDS ================= */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-2 gap-3.5 md:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,1.6fr)]"
        >
          {shopVaranasiCategories.map((category, index) => (
            <ShopVaranasiCategoryCard
              key={category.id}
              category={category}
              index={index}
              visible={visible}
            />
          ))}

          {/* SPECIAL COLLECTION */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <ShopVaranasiCollection visible={visible} />
          </div>
        </div>

        {/* ================= SERVICES STRIP ================= */}
        <ShopVaranasiServices />
      </div>
    </section>
  );
};

export default ShopVaranasi;
