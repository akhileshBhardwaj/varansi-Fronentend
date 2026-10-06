import React from "react";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import IconicPlaces from "../components/HomePage/IconicPlaces/IconicPlaces";
import CitiesStories from "../components/HomePage/CitiesStories/CitiesStories";
import PlanYourCities from "../components/HomePage/PlanYourCities/PlanYourCities";
import GallerySection from "../components/HomePage/GallerySection/GallerySection";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />

      <IconicPlaces />
      <CitiesStories />
      <PlanYourCities />
      <GallerySection />
    </div>
  );
};

export default HomePage;
