import React from "react";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import IconicPlaces from "../components/HomePage/IconicPlaces/IconicPlaces";
import ExperiencesShowcase from "../components/HomePage/ExperiencesShowcase/ExperiencesShowcase";
import CitiesStories from "../components/HomePage/CitiesStories/CitiesStories";
import FeaturedTours from "../components/HomePage/FeaturedTours/FeaturedTours";
import PlanYourCities from "../components/HomePage/PlanYourCities/PlanYourCities";
import GallerySection from "../components/HomePage/GallerySection/GallerySection";
import FastivelEvent from "../components/HomePage/FastivelEvent/FastivelEvent";
import ShopVaranasi from "../components/HomePage/ShopVaranasi/ShopVaranasi";
import FinalCTA from "../components/HomePage/CTA/FinalCTA";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#fffdf8]">
      <HeroSection />

      <IconicPlaces />

      <ExperiencesShowcase />

      <CitiesStories />

      <FeaturedTours />

      <PlanYourCities />

      <GallerySection />

      <FastivelEvent />

      <ShopVaranasi />

      <FinalCTA />
    </main>
  );
};

export default HomePage;
