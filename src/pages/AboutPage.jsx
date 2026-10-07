import React from "react";
import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import AboutHighlights from "../components/AboutPage/AboutHighlights/AboutHighlights";
import AboutStory from "../components/AboutPage/AboutStory/AboutStory";
import AboutWhyChoose from "../components/AboutPage/AboutWhyChoose/AboutWhyChoose";

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutHighlights />
      <AboutStory />
      <AboutWhyChoose/>
    </div>
  );
};

export default AboutPage;
