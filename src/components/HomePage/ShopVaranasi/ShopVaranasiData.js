import {
  BadgeCheck,
  Package,
  ShieldCheck,
  Gift,
  Truck,
  RotateCcw,
  Lock,
  Headphones,
} from "lucide-react";

export const shopVaranasiContent = {
  eyebrow: "Shop Varanasi",
  titleLine1Start: "Take a",
  titleLine1Italic: "Piece of",
  titleLine2Highlight: "Varanasi",
  titleLine2End: "Home",
  description:
    "Authentic handicrafts, Banarasi silk, spiritual products and unique souvenirs — crafted by local artisans, inspired by the timeless heritage of Varanasi.",
  buttonText: "Explore Shop",
  buttonPath: "/shop",
  // Header ke right side ki background image (baad mein badal sakte ho)
  heroImage:
    "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1400&q=80",
};

export const shopVaranasiFeatures = [
  {
    id: 1,
    icon: BadgeCheck,
    title: "Authentic Products",
    subtitle: "Direct from local artisans",
  },
  { id: 2, icon: Package, title: "Secure Delivery", subtitle: "Across India" },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Trusted Quality",
    subtitle: "100% genuine products",
  },
  {
    id: 4,
    icon: Gift,
    title: "Unique Souvenirs",
    subtitle: "Take Varanasi with you",
  },
];

// fallback: image na khule to ye colour dikhega
// Images baad mein apni images se badal sakte ho
export const shopVaranasiCategories = [
  {
    id: 1,
    title: "Banarasi Sarees",
    description: "Timeless elegance in every weave",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
    fallback: "from-[#7a1020] to-[#d1432f]",
    path: "/shop/banarasi-sarees",
  },
  {
    id: 2,
    title: "Silk Fabrics",
    description: "Heritage in fine threads",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80",
    fallback: "from-[#1d3a7a] to-[#7a2a6b]",
    path: "/shop/silk-fabrics",
  },
  {
    id: 3,
    title: "Handicrafts",
    description: "Traditional art & local crafts",
    image:
      "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?auto=format&fit=crop&w=700&q=80",
    fallback: "from-[#5a3a12] to-[#c08a2c]",
    path: "/shop/handicrafts",
  },
  {
    id: 4,
    title: "Spiritual Products",
    description: "For your divine journey",
    image:
      "https://images.unsplash.com/photo-1600609842388-3e4b489d71c6?auto=format&fit=crop&w=700&q=80",
    fallback: "from-[#4a2a10] to-[#b9691f]",
    path: "/shop/spiritual-products",
  },
  {
    id: 5,
    title: "Souvenirs",
    description: "Memories of Kashi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=700&q=80",
    fallback: "from-[#12474f] to-[#c9652a]",
    path: "/shop/souvenirs",
  },
];

export const shopVaranasiCollection = {
  eyebrow: "Special Collection",
  title: "Handcrafted with Heritage",
  description: "Support local artisans and keep the legacy of Varanasi alive.",
  buttonText: "View All Products",
  buttonPath: "/shop",
};

export const shopVaranasiServices = [
  {
    id: 1,
    icon: Truck,
    title: "Free Shipping",
    subtitle: "On orders above ₹999",
  },
  {
    id: 2,
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "Hassle-free 7 day returns",
  },
  {
    id: 3,
    icon: Lock,
    title: "Secure Payments",
    subtitle: "100% safe and encrypted",
  },
  {
    id: 4,
    icon: Headphones,
    title: "Dedicated Support",
    subtitle: "We're here to help",
  },
];
