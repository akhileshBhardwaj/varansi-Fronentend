import React from "react";
import ExperienceSoulHero from "../components/ExperiencePage/ExperienceSoulHero/ExperienceSoulHero";
import FeaturedExperince from "../components/ExperiencePage/FeaturedExperince/FeaturedExperince";
import ExperienceThemeBanners from "../components/ExperiencePage/ExperienceThemeBanners/ExperienceThemeBanners";
import MoreWaysExperience from "../components/ExperiencePage/MoreWaysExperience/MoreWaysExperience";

const ExperiencePage = () => {
  return (
    <div>
      <ExperienceSoulHero />
      <FeaturedExperince />
      <ExperienceThemeBanners />
      <MoreWaysExperience/>
    </div>
  );
};

export default ExperiencePage;
