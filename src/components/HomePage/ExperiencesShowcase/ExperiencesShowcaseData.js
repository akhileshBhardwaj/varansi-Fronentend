import {
  Flower2,
  Landmark,
  Utensils,
  Box,
  Sun,
  Users,
  Palette,
  ShieldCheck,
  Settings,
  Star,
  Headphones,
  Wallet,
} from "lucide-react";

export const experiencesShowcaseContent = {
  eyebrow: "Unforgettable Experiences",
  titleLine1: "Experience",
  titleHighlight: "Varanasi",
  titleLine2: "Beyond",
  titleLine3: "Sightseeing",
  description:
    "From serene boat rides to divine rituals, from spiritual walks to flavors of Banaras — discover experiences that stay with you forever.",
  buttonText: "Explore All Experiences",
  buttonPath: "/experiences",
  videoButtonTitle: "Watch Video",
  videoButtonSubtitle: "A glimpse of Varanasi",
};

export const experiencesShowcaseVideo = {
  title: "A glimpse of Varanasi",
  // YouTube link ("https://www.youtube.com/watch?v=XXXX" / "https://youtu.be/XXXX")
  // ya local file ("/videos/varanasi.mp4") yahan daalo.
  // Abhi testing ke liye ek sample video laga hai.
  src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
};

export const experiencesShowcaseFeatures = [
  { id: 1, icon: Flower2, title: "Spiritual Journeys", subtitle: "Feel the divine energy" },
  { id: 2, icon: Landmark, title: "Cultural Immersion", subtitle: "Dive into rich heritage" },
  { id: 3, icon: Utensils, title: "Local Flavors", subtitle: "Taste authentic Banaras" },
  { id: 4, icon: Box, title: "Unique Adventures", subtitle: "Create lasting memories" },
];

// Pehla item bada card banega, agle 2 upar wali row mein, aakhri 3 neeche wali row mein.
// Images baad mein apni images se badal sakte ho.
export const experiencesShowcaseItems = [
  {
    id: 1,
    chip: { label: "Most Popular", icon: Sun, light: true },
    title: "Ganga Sunrise Boat Ride",
    description:
      "Witness the magical sunrise over the Ganges a peaceful start to your Varanasi journey.",
    image:
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1200&q=80",
    path: "/experiences/ganga-sunrise-boat-ride",
  },
  {
    id: 2,
    chip: { label: "Spiritual", icon: Flower2 },
    title: "Ganga Aarti Experience",
    description: "Be part of the divine evening ritual at Dashashwamedh Ghat.",
    image:
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80",
    path: "/experiences/ganga-aarti",
  },
  {
    id: 3,
    chip: { label: "Culture", icon: Users },
    title: "Heritage Walk",
    description: "Explore the narrow lanes, ancient temples and timeless stories.",
    image:
      "https://images.unsplash.com/photo-1626714485835-a4ebf1b8a1ba?auto=format&fit=crop&w=1000&q=80",
    path: "/experiences/heritage-walk",
  },
  {
    id: 4,
    chip: { label: "Food", icon: Utensils },
    title: "Banarasi Food Walk",
    description: "Taste the authentic flavors of Varanasi.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
    path: "/experiences/banarasi-food-walk",
  },
  {
    id: 5,
    chip: { label: "Art & Craft", icon: Palette },
    title: "Silk Weaving Experience",
    description: "Witness the artistry behind Banarasi silk.",
    image:
      "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=900&q=80",
    path: "/experiences/silk-weaving",
  },
  {
    id: 6,
    chip: { label: "History", icon: Landmark },
    title: "Sarnath Excursion",
    description: "Discover the place where Buddhism began.",
    image:
      "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80",
    path: "/experiences/sarnath-excursion",
  },
];

export const experiencesShowcaseBenefits = [
  { id: 1, icon: Users, title: "Local Guides", subtitle: "Travel with experts" },
  { id: 2, icon: ShieldCheck, title: "Safe & Comfortable", subtitle: "Your safety is our priority" },
  { id: 3, icon: Settings, title: "Customizable", subtitle: "Trips tailored for you" },
  { id: 4, icon: Star, title: "Authentic Experiences", subtitle: "Real stories, real people" },
  { id: 5, icon: Headphones, title: "24/7 Support", subtitle: "We're here to help" },
  { id: 6, icon: Wallet, title: "Best Value", subtitle: "Great experiences, fair prices" },
];