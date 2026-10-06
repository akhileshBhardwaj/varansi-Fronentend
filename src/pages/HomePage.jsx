import React from "react";

// ==============================
// HOME PAGE SECTIONS
// ==============================

// Hero
import HeroSection from "../components/HomePage/HeroSection/HeroSection";

// Explore
import IconicPlaces from "../components/HomePage/IconicPlaces/IconicPlaces";

// Experiences
import ExperiencesShowcase from "../components/HomePage/ExperiencesShowcase/ExperiencesShowcase";

// Story
import CitiesStories from "../components/HomePage/CitiesStories/CitiesStories";

// Tours
import FeaturedTours from "../components/HomePage/FeaturedTours/FeaturedTours";

// Trip Planning
import PlanYourCities from "../components/HomePage/PlanYourCities/PlanYourCities";

// Gallery
import GallerySection from "../components/HomePage/GallerySection/GallerySection";

// Festivals & Events
import FastivelEvent from "../components/HomePage/FastivelEvent/FastivelEvent";

// Shop
import ShopVaranasi from "../components/HomePage/ShopVaranasi/ShopVaranasi";

// Final CTA
import FinalCTA from "../components/HomePage/CTA/FinalCTA";

// ==============================
// HOME PAGE
// ==============================

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#fffdf8]">
      {/* =================================
          01. HERO
          First impression + search/planner
      ================================== */}
      <HeroSection />

      {/* =================================
          02. ICONIC PLACES
          Discover famous places of Varanasi
      ================================== */}
      <IconicPlaces />

      {/* =================================
          03. EXPERIENCES
          Things to experience in Varanasi
      ================================== */}
      <ExperiencesShowcase />

      {/* =================================
          04. VARANASI STORY
          Culture, history & emotional connection
      ================================== */}
      <CitiesStories />

      {/* =================================
          05. FEATURED TOURS
          Ready-made tours & packages
      ================================== */}
      <FeaturedTours />

      {/* =================================
          06. PLAN YOUR TRIP
          Help users plan their journey
      ================================== */}
      <PlanYourCities />

      {/* =================================
          07. GALLERY
          Visual travel inspiration
      ================================== */}
      <GallerySection />

      {/* =================================
          08. FESTIVALS & EVENTS
          Upcoming cultural experiences
      ================================== */}
      <FastivelEvent />

      {/* =================================
          09. SHOP VARANASI
          Souvenirs, sarees, handicrafts etc.
      ================================== */}
      <ShopVaranasi />

      {/* =================================
          10. FINAL CTA
          Final booking/exploration conversion
      ================================== */}
      <FinalCTA />
    </main>
  );
};

export default HomePage;
