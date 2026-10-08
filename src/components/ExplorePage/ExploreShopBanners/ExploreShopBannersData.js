// Images online placeholder hain - baad me har banner ki apni image se replace kar lena
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1400&q=75";

// Upar ke 2 promo cards
export const exploreShopPromos = [
  {
    id: 1,
    title: "Exclusive Banarasi Sarees",
    description: "Woven with centuries of tradition for the modern you.",
    buttonText: "Shop Sarees",
    path: "/shop?category=sarees",
    image: PLACEHOLDER,
    fallback: "from-[#5a1f3a] to-[#1f0a14]",
  },
  {
    id: 2,
    title: "Spiritual Essentials",
    description:
      "Bring home the blessings of Kashi with authentic spiritual items.",
    buttonText: "Shop Spiritual",
    path: "/shop?category=spiritual",
    image: PLACEHOLDER,
    fallback: "from-[#6a3a10] to-[#1f1208]",
  },
];

// Neeche wale full-width slider ke slides (pehla screenshot ka hai, baaki dummy)
export const exploreShopSlides = [
  {
    id: 1,
    title: "Handcrafted with Heritage",
    description:
      "Unique handicrafts that tell the story of Varanasi's rich culture.",
    buttonText: "Explore Handicrafts",
    path: "/shop?category=handicrafts",
    image: PLACEHOLDER,
    fallback: "from-[#4a2a14] to-[#150c06]",
  },
  {
    id: 2,
    title: "Timeless Banarasi Silk",
    description: "Pure silk fabrics woven by master weavers of Kashi.",
    buttonText: "Shop Silk Fabrics",
    path: "/shop?category=silk-fabrics",
    image: PLACEHOLDER,
    fallback: "from-[#5a1f3a] to-[#1f0a14]",
  },
  {
    id: 3,
    title: "Souvenirs from Kashi",
    description: "Carry a piece of the ghats home with thoughtful keepsakes.",
    buttonText: "Shop Souvenirs",
    path: "/shop?category=souvenirs",
    image: PLACEHOLDER,
    fallback: "from-[#6a3a10] to-[#1f1208]",
  },
];
