export const featuredExperinceContent = {
  eyebrow: "Featured Experiences",
  title: "Unforgettable Experiences in Varanasi",
  description:
    "Handpicked experiences that let you feel the real essence of Kashi — spiritual, cultural, and beyond.",
  buttonText: "View All Experiences",
  buttonPath: "/experiences",
};

// Online placeholder images - baad me apni images se replace kar lena
const PLACEHOLDER =
  "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=75";

export const featuredExperinceItems = [
  {
    id: 1,
    slug: "ganga-aarti-experience",
    title: "Ganga Aarti Experience",
    description: "Feel the divine energy at Dashashwamedh Ghat",
    duration: "2 Hours",
    price: 499,
    image: PLACEHOLDER,
    popular: true,
  },
  {
    id: 2,
    slug: "sunrise-boat-ride",
    title: "Sunrise Boat Ride",
    description: "Witness the magical sunrise over the Ghats",
    duration: "1.5 Hours",
    price: 699,
    image: PLACEHOLDER,
    popular: false,
  },
  {
    id: 3,
    slug: "varanasi-food-tour",
    title: "Varanasi Food Tour",
    description: "Taste the authentic flavours of Banaras",
    duration: "3 Hours",
    price: 899,
    image: PLACEHOLDER,
    popular: false,
  },
  {
    id: 4,
    slug: "heritage-walk",
    title: "Heritage Walk",
    description: "Explore centuries-old lanes and hidden stories",
    duration: "2.5 Hours",
    price: 799,
    image: PLACEHOLDER,
    popular: false,
  },
];
