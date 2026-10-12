  import Essentials from '../../../assets/images/ExplorePage/ShopBanner/Essentials.png'
  import handicraft from '../../../assets/images/ExplorePage/ShopBanner/handicraft.png'
  import varnasaiSaree from '../../../assets/images/ExplorePage/ShopBanner/varnasaiSaree.png'
  import SouvenirsfromKashi from '../../../assets/images/ExplorePage/ShopBanner/SouvenirsfromKashi.png'
  import TimelesBanarasiSilk from '../../../assets/images/ExplorePage/ShopBanner/TimelesBanarasiSilk.png'

// Upar ke 2 promo cards
export const exploreShopPromos = [
  {
    id: 1,
    title: "Exclusive Banarasi Sarees",
    description: "Woven with centuries of tradition for the modern you.",
    buttonText: "Shop Sarees",
    path: "/shop?category=sarees",
    image: varnasaiSaree,
    fallback: "from-[#5a1f3a] to-[#1f0a14]",
  },
  {
    id: 2,
    title: "Spiritual Essentials",
    description:
      "Bring home the blessings of Kashi with authentic spiritual items.",
    buttonText: "Shop Spiritual",
    path: "/shop?category=spiritual",
    image: Essentials,
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
    image: handicraft,
    fallback: "from-[#4a2a14] to-[#150c06]",
  },
  {
    id: 2,
    title: "Timeless Banarasi Silk",
    description: "Pure silk fabrics woven by master weavers of Kashi.",
    buttonText: "Shop Silk Fabrics",
    path: "/shop?category=silk-fabrics",
    image: TimelesBanarasiSilk,
    fallback: "from-[#5a1f3a] to-[#1f0a14]",
  },
  {
    id: 3,
    title: "Souvenirs from Kashi",
    description: "Carry a piece of the ghats home with thoughtful keepsakes.",
    buttonText: "Shop Souvenirs",
    path: "/shop?category=souvenirs",
    image: SouvenirsfromKashi,
    fallback: "from-[#6a3a10] to-[#1f1208]",
  },
];
