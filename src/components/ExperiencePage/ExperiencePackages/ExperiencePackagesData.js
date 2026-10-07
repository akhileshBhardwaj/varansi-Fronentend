export const experiencePackagesContent = {
  eyebrow: "Curated For You",
  title: "Experience Packages",
  description: "Handpicked combinations for a complete Varanasi experience.",
  buttonText: "View All Packages",
  buttonPath: "/packages",
};

// Images online placeholder hain - baad me har package ki apni image se replace kar lena
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=900&q=75";

// Pehle 3 packages screenshot ke hain, baaki 3 slider chalane ke liye dummy hain
export const experiencePackages = [
  {
    id: 1,
    slug: "spiritual-varanasi",
    title: "Spiritual Varanasi",
    description: "Temple Visits + Ganga Aarti + Boat Ride",
    duration: "1 Day",
    price: 1499,
    image: PLACEHOLDER,
    fallback: "from-[#c98a3a] to-[#3a1e0c]",
  },
  {
    id: 2,
    slug: "heritage-explorer",
    title: "Heritage Explorer",
    description: "Walking Tour + Temples + Local Markets",
    duration: "1 Day",
    price: 1299,
    image: PLACEHOLDER,
    fallback: "from-[#a83a2a] to-[#2a0f0c]",
  },
  {
    id: 3,
    slug: "food-culture-trail",
    title: "Food & Culture Trail",
    description: "Food Tour + Craft Visit + Evening Aarti",
    duration: "1 Day",
    price: 1599,
    image: PLACEHOLDER,
    fallback: "from-[#b5702a] to-[#3a1e0c]",
  },
  {
    id: 4,
    slug: "photography-special",
    title: "Photography Special",
    description: "Sunrise Boat + Ghat Walk + Street Shots",
    duration: "1 Day",
    price: 1799,
    image: PLACEHOLDER,
    fallback: "from-[#d98a6a] to-[#2a2a3a]",
  },
  {
    id: 5,
    slug: "sacred-sarnath",
    title: "Sacred Sarnath",
    description: "Sarnath Visit + Museum + Temple Tour",
    duration: "1 Day",
    price: 1399,
    image: PLACEHOLDER,
    fallback: "from-[#8a9a6a] to-[#2a3a2a]",
  },
  {
    id: 6,
    slug: "kashi-weekend-escape",
    title: "Kashi Weekend Escape",
    description: "Ghats + Aarti + Food Trail + Boat Ride",
    duration: "2 Days",
    price: 2999,
    image: PLACEHOLDER,
    fallback: "from-[#e08a5a] to-[#3a2a3a]",
  },
];
