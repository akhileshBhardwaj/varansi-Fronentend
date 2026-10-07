import React from "react";
import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import AboutHighlights from "../components/AboutPage/AboutHighlights/AboutHighlights";
import AboutStory from "../components/AboutPage/AboutStory/AboutStory";
import AboutWhyChoose from "../components/AboutPage/AboutWhyChoose/AboutWhyChoose";
import AboutTeam from "../components/AboutPage/AboutTeam/AboutTeam";
import AboutCta from "../components/AboutPage/AboutCta/AboutCta";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutHighlights />
      <AboutStory />
      <AboutWhyChoose />
      <AboutTeam />
      <AboutCta/>
    </div>
  );
};

export default AboutPage;
