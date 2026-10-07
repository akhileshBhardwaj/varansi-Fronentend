import React from "react";
import ExperienceSoulHero from "../components/ExperiencePage/ExperienceSoulHero/ExperienceSoulHero";
import FeaturedExperince from "../components/ExperiencePage/FeaturedExperince/FeaturedExperince";
import ExperienceThemeBanners from "../components/ExperiencePage/ExperienceThemeBanners/ExperienceThemeBanners";
import MoreWaysExperience from "../components/ExperiencePage/MoreWaysExperience/MoreWaysExperience";
import PerfectExperienceCta from "../components/ExperiencePage/PerfectExperienceCta/PerfectExperienceCta";
import VisitorReviews from "../components/ExperiencePage/VisitorReviews/VisitorReviews";

const ExperiencePage = () => {
  return (
    <div>
      <ExperienceSoulHero />
      <FeaturedExperince />
      <ExperienceThemeBanners />
      <MoreWaysExperience />
      <PerfectExperienceCta />
      <VisitorReviews />
    </div>
  );
};

export default ExperiencePage;
