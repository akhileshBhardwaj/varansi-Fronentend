import {
  Route,
  Star,
  UtensilsCrossed,
  ShoppingBag,
  MapPin,
  Leaf,
} from "lucide-react";

export const aboutServicesContent = {
  eyebrow: "What We Do",
  title: "Creating Meaningful Travel Experiences",
  description:
    "We design authentic tours, experiences and travel services that allow you to explore Varanasi like a local — through its ghats, temples, food, art, culture and people.",
  buttonText: "Explore Our Tours",
  buttonPath: "/tours",
};

// Images online placeholder hain - baad me har card ki apni image se replace kar lena
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=700&q=75";

export const aboutServicesItems = [
  {
    id: 1,
    title: "Tours & Itineraries",
    description: "Well-curated trips for every traveller",
    icon: Route,
    image: PLACEHOLDER,
    fallback: "from-[#e08a5a] to-[#3a2a3a]",
  },
  {
    id: 2,
    title: "Local Experiences",
    description: "Unique activities with local experts",
    icon: Star,
    image: PLACEHOLDER,
    fallback: "from-[#a83a2a] to-[#2a0f0c]",
  },
  {
    id: 3,
    title: "Food & Culture",
    description: "Taste the authentic flavours of Varanasi",
    icon: UtensilsCrossed,
    image: PLACEHOLDER,
    fallback: "from-[#b5702a] to-[#3a1e0c]",
  },
  {
    id: 4,
    title: "Handicrafts & Shopping",
    description: "Support local artisans",
    icon: ShoppingBag,
    image: PLACEHOLDER,
    fallback: "from-[#c0502a] to-[#3a140c]",
  },
  {
    id: 5,
    title: "Travel Guidance",
    description: "Helpful information for a smooth journey",
    icon: MapPin,
    image: PLACEHOLDER,
    fallback: "from-[#c98a3a] to-[#4a2a10]",
  },
  {
    id: 6,
    title: "Sustainable Tourism",
    description: "Preserving heritage for future generations",
    icon: Leaf,
    image: PLACEHOLDER,
    fallback: "from-[#d98a6a] to-[#2a2a3a]",
  },
];
