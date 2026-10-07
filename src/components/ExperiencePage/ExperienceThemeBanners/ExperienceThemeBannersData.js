// Online placeholder image - baad me apni images se replace kar lena
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1000&q=75";

export const experienceThemeBanners = [
  {
    id: 1,
    eyebrow: "Spiritual Experiences",
    title: "Connect With the Divine",
    description:
      "Be part of ancient rituals, temple visits and spiritual journeys that have continued for centuries.",
    buttonText: "Explore Spiritual Experiences",
    path: "/experiences?category=spiritual",
    image: PLACEHOLDER,
    fallback: "from-[#2a140a] to-[#0d0805]",
  },
  {
    id: 2,
    eyebrow: "Cultural Experiences",
    title: "Discover the Living Culture",
    description:
      "From classical music to local crafts, experience the vibrant culture of Varanasi.",
    buttonText: "Explore Cultural Experiences",
    path: "/experiences?category=cultural",
    image: PLACEHOLDER,
    fallback: "from-[#2a0f14] to-[#0d0508]",
  },
];
