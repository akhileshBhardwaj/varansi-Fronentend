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

import Arti3 from '../../../assets/images/HomePage/ExperiencesShowcase/Arti3.jpg'
import sunRiseBoat from '../../../assets/images/HomePage/ExperiencesShowcase/sunRiseBoat.jpg'
import streetView from '../../../assets/images/HomePage/ExperiencesShowcase/streetView.jpg'
import foodWalk from '../../../assets/images/HomePage/ExperiencesShowcase/foodWalk.jpg'
import silkWiving from '../../../assets/images/HomePage/ExperiencesShowcase/silkWiving.jpg'
import sarnathExcursion from '../../../assets/images/HomePage/ExperiencesShowcase/sarnathExcursion.jpg'

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
    image: sunRiseBoat,
    path: "/experiences/ganga-sunrise-boat-ride",
  },
  {
    id: 2,
    chip: { label: "Spiritual", icon: Flower2 },
    title: "Ganga Aarti Experience",
    description: "Be part of the divine evening ritual at Dashashwamedh Ghat.",
    image: Arti3,
    path: "/experiences/ganga-aarti",
  },
  {
    id: 3,
    chip: { label: "Culture", icon: Users },
    title: "Heritage Walk",
    description: "Explore the narrow lanes, ancient temples and timeless stories.",
    image: streetView,
    path: "/experiences/heritage-walk",
  },
  {
    id: 4,
    chip: { label: "Food", icon: Utensils },
    title: "Banarasi Food Walk",
    description: "Taste the authentic flavors of Varanasi.",
    image: foodWalk,
    path: "/experiences/banarasi-food-walk",
  },
  {
    id: 5,
    chip: { label: "Art & Craft", icon: Palette },
    title: "Silk Weaving Experience",
    description: "Witness the artistry behind Banarasi silk.",
    image: silkWiving,
    path: "/experiences/silk-weaving",
  },
  {
    id: 6,
    chip: { label: "History", icon: Landmark },
    title: "Sarnath Excursion",
    description: "Discover the place where Buddhism began.",
    image: sarnathExcursion,
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