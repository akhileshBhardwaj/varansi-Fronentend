import React from "react";
import ExplorePageHero from "../components/ExplorePage/ExplorePageHero/ExplorePageHero";
import ExploreTrustStrip from "../components/ExplorePage/ExploreTrustStrip/ExploreTrustStrip";
import ExploreCollections from "../components/ExplorePage/ExploreCollections/ExploreCollections";

const ExplorePage = () => {
  return (
    <div>
      <ExplorePageHero />
      <ExploreTrustStrip/>
      <ExploreCollections/>
    </div>
  );
};

export default ExplorePage;
