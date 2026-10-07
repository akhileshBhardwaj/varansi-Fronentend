// ========================================
// GALLERY IMAGES
// ========================================

import boat from "../../../assets/images/HomePage/Gallery/boat.jpg";
import devDiwali from "../../../assets/images/HomePage/Gallery/devDiwali.jpg";
import eveneingGanga from "../../../assets/images/HomePage/Gallery/eveneingGanga.png";
import handloom from "../../../assets/images/HomePage/Gallery/handloom.jpg";
import morningOnGanga from "../../../assets/images/HomePage/Gallery/morningOnGanga.png";
import festivelCelebration from "../../../assets/images/HomePage/Gallery/festivelCelebration.png";
import soundOfTempleBell from "../../../assets/images/HomePage/Gallery/soundOfTempleBelml.jpg";
import streetFood from "../../../assets/images/HomePage/Gallery/streetFood.jpg";

// ========================================
// ONLINE GALLERY IMAGES
// ========================================

const onlineGangaBoat =
  "https://images.unsplash.com/photo-1771313018650-254f6b5f2c91?auto=format&fit=crop&fm=jpg&q=80&w=1200";

const onlineTemple =
  "https://images.unsplash.com/photo-1757693353915-78bc47214393?auto=format&fit=crop&fm=jpg&q=80&w=1200";

const onlineGhat =
  "https://images.unsplash.com/photo-1774177613396-a167ddeed592?auto=format&fit=crop&fm=jpg&q=80&w=1200";

// ========================================
// GALLERY SECTION CONTENT
// ========================================

export const gallerySectionContent = {
  eyebrow: "Our Gallery",
  titleLine1: "Moments Captured",
  titleLine2: "in Varanasi",
  description:
    "A visual journey through the river, traditions, celebrations, crafts and everyday life that give Varanasi its timeless character.",
  buttonText: "View Full Gallery",
  buttonPath: "/gallery",
};

// ========================================
// GALLERY CATEGORIES
// ========================================

export const gallerySectionCategories = [
  "All",
  "Ganga Life",
  "Culture",
  "Food",
  "Crafts",
  "Festivals",
];

// ========================================
// GALLERY ITEMS
// ========================================

export const gallerySectionItems = [
  {
    id: 1,
    title: "Morning on the Ganga",
    location: "Ganga Riverside",
    category: "Ganga Life",
    image: morningOnGanga,
  },

  {
    id: 2,
    title: "Life on the Ganga",
    location: "Varanasi Riverfront",
    category: "Ganga Life",
    image: boat,
  },

  {
    id: 3,
    title: "The Art of Handloom",
    location: "Banaras",
    category: "Crafts",
    image: handloom,
  },

  {
    id: 4,
    title: "Flavours of Kashi",
    location: "Old Varanasi",
    category: "Food",
    image: streetFood,
  },

  {
    id: 5,
    title: "The Sound of Temple Bells",
    location: "Kashi",
    category: "Culture",
    image: soundOfTempleBell,
  },

  {
    id: 6,
    title: "A City in Celebration",
    location: "Varanasi",
    category: "Festivals",
    image: festivelCelebration,
  },

  {
    id: 7,
    title: "Dev Deepawali",
    location: "Ganga Riverfront",
    category: "Festivals",
    image: devDiwali,
  },

  {
    id: 8,
    title: "Evening on the Ganga",
    location: "Varanasi Riverside",
    category: "Ganga Life",
    image: eveneingGanga,
  },
  {
    id: 9,
    title: "Morning Boat Ride",
    location: "Ganga River, Varanasi",
    category: "Ganga Life",
    image: onlineGangaBoat,
  },

  {
    id: 10,
    title: "Temple at Sunset",
    location: "Ganga Ghat, Varanasi",
    category: "Culture",
    image: onlineTemple,
  },
];
