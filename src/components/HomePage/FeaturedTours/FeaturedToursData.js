// Images
import GangaArti from "../../../assets/images/HomePage/FeaturedTour/GanagArti.jpg";
import StreetView from "../../../assets/images/HomePage/FeaturedTour/StreetView.jpg";
import sarnathTemple from "../../../assets/images/HomePage/FeaturedTour/sarnathTemple.jpg";
import SankatMochan from "../../../assets/images/HomePage/FeaturedTour/SankatMochan.jpg";
import kashi from "../../../assets/images/HomePage/FeaturedTour/varanasi.jpg";
import VaranasiPaan from "../../../assets/images/HomePage/FeaturedTour/VaranasiPaan.jpg";
import exploreAll from "../../../assets/images/HomePage/FeaturedTour/exploreAll.png";

export const featuredToursContent = {
  eyebrow: "Curated Journeys",
  titleStart: "Featured",
  titleHighlight: "Varanasi",
  titleEnd: "Tours",
  description:
    "Handpicked tours to help you explore the spiritual, cultural and timeless beauty of Varanasi. Choose from our most loved experiences.",
  buttonText: "View All Tours",
  buttonPath: "/tours",
};

export const featuredToursFilters = [
  "All Tours",
  "1 Day Tours",
  "Spiritual Tours",
  "Heritage Tours",
  "Cultural Tours",
];

export const featuredToursBanner = {
  eyebrow: "Plan Your Journey",
  title: "Custom Tour Packages",
  description:
    "Looking for a personalized experience? We can create a custom tour based on your interests, budget and schedule.",
  buttonText: "Plan a Custom Tour",
  buttonPath: "/book-tour",
};

// Tour Slider data
export const featuredToursItems = [
  {
    id: 1,
    title: "Kashi Essentials Tour",
    badge: "Most Popular",
    badgeClass: "bg-[#e9722a]",
    duration: "1 Day",
    rating: "4.8",
    reviews: 320,
    tag: "Popular Choice",
    description:
      "Experience the iconic ghats, temples and the spiritual essence of Varanasi in a day.",
    highlights: ["Boat Ride", "Temples", "Local Life"],
    price: 2999,
    filters: ["1 Day Tours", "Cultural Tours"],
    image: kashi,
    path: "/tours/kashi-essentials",
  },
  {
    id: 2,
    title: "Ganga Aarti Experience",
    badge: "Spiritual",
    badgeClass: "bg-[#9b1c2c]",
    duration: "1 Day",
    rating: "4.9",
    reviews: 286,
    tag: "Highly Rated",
    description:
      "Be part of the divine evening ritual at Dashashwamedh Ghat with a local guide.",
    highlights: ["Aarti Darshan", "Boat Ride", "Guide"],
    price: 1999,
    filters: ["1 Day Tours", "Spiritual Tours"],
    image: GangaArti,
    path: "/tours/ganga-aarti",
  },
  {
    id: 3,
    title: "Varanasi Heritage Walk",
    badge: "Heritage",
    badgeClass: "bg-[#8a5a1a]",
    duration: "2 Days",
    rating: "4.7",
    reviews: 190,
    tag: "Cultural Journey",
    description:
      "Explore the ancient lanes, hidden temples and timeless stories of old Kashi.",
    highlights: ["Walking Tour", "Temples", "Local Markets"],
    price: 4999,
    filters: ["Heritage Tours", "Cultural Tours"],
    image: StreetView,
    path: "/tours/heritage-walk",
  },
  {
    id: 4,
    title: "Sarnath Excursion",
    badge: "Day Trip",
    badgeClass: "bg-[#2f7a3e]",
    duration: "1 Day",
    rating: "4.6",
    reviews: 148,
    tag: "Peaceful & Enriching",
    description:
      "Discover the birthplace of Buddhism with guided tour, museum and more.",
    highlights: ["Stupa", "Museum", "Guide"],
    price: 3499,
    filters: ["1 Day Tours", "Heritage Tours", "Cultural Tours"],
    image: sarnathTemple,
    path: "/tours/sarnath-excursion",
  },
  {
    id: 5,
    title: "Kashi Vishwanath Darshan",
    badge: "Spiritual",
    badgeClass: "bg-[#9b1c2c]",
    duration: "1 Day",
    rating: "4.8",
    reviews: 214,
    tag: "Divine Experience",
    description:
      "A guided darshan of Kashi Vishwanath and the sacred temples around it.",
    highlights: ["Darshan", "Temples", "Guide"],
    price: 2499,
    filters: ["1 Day Tours", "Spiritual Tours"],
    image: SankatMochan,
    path: "/tours/kashi-vishwanath-darshan",
  },
  {
    id: 6,
    title: "Silk & Food Trail",
    badge: "Cultural",
    badgeClass: "bg-[#6b3fa0]",
    duration: "1 Day",
    rating: "4.7",
    reviews: 126,
    tag: "Local Favourite",
    description:
      "Taste Banarasi street food and watch master weavers create silk by hand.",
    highlights: ["Food Walk", "Silk Weaving", "Markets"],
    price: 2799,
    filters: ["1 Day Tours", "Cultural Tours"],
    image: exploreAll,
    path: "/tours/silk-and-food-trail",
  },
];
