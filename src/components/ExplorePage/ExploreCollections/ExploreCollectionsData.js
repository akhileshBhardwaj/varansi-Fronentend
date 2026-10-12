export const exploreCollectionsContent = {
  eyebrow: "Shop by Category",
  title: "Explore Our Collections",
  buttonText: "View All Categories",
  buttonPath: "/shop",
};

// Images online placeholder hain - baad me har category ki apni image se replace kar lena
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=600&q=75";

import banarasiSharee from "../../../assets/images/ExplorePage/exploreCollection/banarasiSharee.png";
import banarasiSharee2 from "../../../assets/images/ExplorePage/exploreCollection/banarasiSharee2.png";
import handiCrafts from "../../../assets/images/ExplorePage/exploreCollection/handiCrafts.png";
import localArts from "../../../assets/images/ExplorePage/exploreCollection/localArts.png";
import silkFibraic from "../../../assets/images/ExplorePage/exploreCollection/silkFibraic.png";
import spritiualProduct from "../../../assets/images/ExplorePage/exploreCollection/spritiualProduct.jpg";

export const exploreCollectionsItems = [
  {
    id: 1,
    slug: "banarasi-sarees",
    title: "Banarasi Sarees",
    image: banarasiSharee,
    fallback: "from-[#a8324a] to-[#2a0f18]",
  },
  {
    id: 2,
    slug: "silk-fabrics",
    title: "Silk Fabrics",
    image: silkFibraic,
    fallback: "from-[#c98a3a] to-[#3a2a10]",
  },
  {
    id: 3,
    slug: "handicrafts",
    title: "Handicrafts",
    image: handiCrafts,
    fallback: "from-[#b5702a] to-[#3a1e0c]",
  },
  {
    id: 4,
    slug: "spiritual-products",
    title: "Spiritual Products",
    image: spritiualProduct,
    fallback: "from-[#a83a2a] to-[#2a0f0c]",
  },
  {
    id: 5,
    slug: "Banarasi Silk Saree",
    title: "Banarasi Silk  Sarees",
    image: banarasiSharee2,
    fallback: "from-[#d98a6a] to-[#2a2a3a]",
  },
  {
    id: 6,
    slug: "local-art",
    title: "Local Art",
    image: localArts,
    fallback: "from-[#c0502a] to-[#3a140c]",
  },
];
