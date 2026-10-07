import React from "react";
import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import AboutHighlights from "../components/AboutPage/AboutHighlights/AboutHighlights";
import AboutStory from "../components/AboutPage/AboutStory/AboutStory";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutHighlights />
      <AboutStory />
    </div>
  );
};

export default AboutPage;
