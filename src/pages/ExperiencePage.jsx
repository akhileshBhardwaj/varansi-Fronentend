import React from "react";
import ExperienceSoulHero from "../components/ExperiencePage/ExperienceSoulHero/ExperienceSoulHero";
import FeaturedExperince from "../components/ExperiencePage/FeaturedExperince/FeaturedExperince";
import ExperienceThemeBanners from "../components/ExperiencePage/ExperienceThemeBanners/ExperienceThemeBanners";

const ExperiencePage = () => {
  return (
    <div>
      <ExperienceSoulHero />
      <FeaturedExperince />
      <ExperienceThemeBanners />
    </div>
  );
};

export default ExperiencePage;
