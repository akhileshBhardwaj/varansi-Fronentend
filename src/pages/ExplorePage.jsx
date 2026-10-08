import React from "react";
import ExplorePageHero from "../components/ExplorePage/ExplorePageHero/ExplorePageHero";
import ExploreTrustStrip from "../components/ExplorePage/ExploreTrustStrip/ExploreTrustStrip";
import ExploreCollections from "../components/ExplorePage/ExploreCollections/ExploreCollections";
import ExploreFeaturedProducts from "../components/ExplorePage/ExploreFeaturedProducts/ExploreFeaturedProducts";

const ExplorePage = () => {
  return (
    <div>
      <ExplorePageHero />
      <ExploreTrustStrip />
      <ExploreCollections />
      <ExploreFeaturedProducts />
    </div>
  );
};

export default ExplorePage;
