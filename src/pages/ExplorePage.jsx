import React from "react";
import ExplorePageHero from "../components/ExplorePage/ExplorePageHero/ExplorePageHero";
import ExploreTrustStrip from "../components/ExplorePage/ExploreTrustStrip/ExploreTrustStrip";
import ExploreCollections from "../components/ExplorePage/ExploreCollections/ExploreCollections";
import ExploreFeaturedProducts from "../components/ExplorePage/ExploreFeaturedProducts/ExploreFeaturedProducts";
import ExploreShopBanners from "../components/ExplorePage/ExploreShopBanners/ExploreShopBanners";
import ExploreBestSellers from "../components/ExplorePage/ExploreBestSellers/ExploreBestSellers";

const ExplorePage = () => {
  return (
    <div>
      <ExplorePageHero />
      <ExploreTrustStrip />
      <ExploreCollections />
      <ExploreFeaturedProducts />
      <ExploreShopBanners />
      <ExploreBestSellers />
    </div>
  );
};

export default ExplorePage;
