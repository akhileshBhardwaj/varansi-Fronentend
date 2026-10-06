import React from "react";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import IconicPlaces from "../components/HomePage/IconicPlaces/IconicPlaces";
import CitiesStories from "../components/HomePage/CitiesStories/CitiesStories";
import PlanYourCities from "../components/HomePage/PlanYourCities/PlanYourCities";
import GallerySection from "../components/HomePage/GallerySection/GallerySection";
import FastivelEvent from "../components/HomePage/FastivelEvent/FastivelEvent";
import ExperiencesShowcase from "../components/HomePage/ExperiencesShowcase/ExperiencesShowcase";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />

      <IconicPlaces />
      <CitiesStories />
      <PlanYourCities />
      <GallerySection />
      <FastivelEvent />
      <ExperiencesShowcase />
    </div>
  );
};

export default HomePage;
