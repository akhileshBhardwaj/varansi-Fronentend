import { Landmark, Users, Star, MapPin, Handshake } from "lucide-react";
import AboutStory from '../../../assets/images/AboutPage/AboutStory.png'

export const aboutStoryContent = {
  eyebrow: "Our Story",
  titleLines: ["A Passion for Varanasi,", "A Purpose for Travellers"],
  paragraphs: [
    "Varanasi is not just a destination, it's an emotion — a place where history, spirituality, culture and daily life flow together on the banks of the sacred Ganges. Our journey began with a simple idea: to help travellers experience the real Varanasi beyond guidebooks.",
    "We work closely with local guides, artisans, boatmen and communities to create meaningful travel experiences that support local culture and preserve the heritage of this incredible city.",
  ],
  buttonText: "Our Journey",
  buttonPath: "/our-journey",
  // Apni poori collage image yahan lagao (public path ya import). Abhi online placeholder hai.
  image: AboutStory,
};

// value = number jo count-up hoga, decimals = kitne decimal, suffix = number ke baad ka text
export const aboutStoryStats = [
  {
    id: 1,
    value: 50,
    decimals: 0,
    suffix: "+",
    label: "Curated Experiences",
    icon: Landmark,
  },
  {
    id: 2,
    value: 10000,
    decimals: 0,
    suffix: "+",
    label: "Happy Travellers",
    icon: Users,
  },
  {
    id: 3,
    value: 4.8,
    decimals: 1,
    suffix: "",
    star: true,
    label: "Average Rating",
    icon: Star,
  },
  {
    id: 4,
    value: 25,
    decimals: 0,
    suffix: "+",
    label: "Local Guides",
    icon: MapPin,
  },
  {
    id: 5,
    value: 5,
    decimals: 0,
    suffix: "+",
    label: "Years of Experience",
    icon: Handshake,
  },
];
