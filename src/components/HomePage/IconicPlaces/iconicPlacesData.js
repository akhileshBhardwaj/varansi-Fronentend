export const iconicPlacesContent = {
  eyebrow: "Top Destinations",
  titleLine1: "Iconic Places",
  titleLine2: "in Varanasi",
  description:
    "Discover Varanasi through its sacred temples, timeless ghats, ancient heritage and unforgettable spiritual experiences.",
  buttonText: "View All Places",
  buttonPath: "/places",
};

// ========================================
// LOCAL IMAGES
// ========================================

import NamoGhat from "../../../assets/images/HomePage/iconicPlace/NamoGhat.jpg";
import kashiVishwanath from "../../../assets/images/HomePage/iconicPlace/kashiVishwanath.jpg";
import ramNagar from "../../../assets/images/HomePage/iconicPlace/ramNagar.jpg";
import Sarnath from "../../../assets/images/HomePage/iconicPlace/Sarnath.jpg";
import swarved from "../../../assets/images/HomePage/iconicPlace/swarved.png";
import gangaArti from "../../../assets/images/HomePage/iconicPlace/gangaArti.png";

// ========================================
// ICONIC PLACES DATA
// ========================================

export const iconicPlacesData = [
  {
    id: 1,
    no: "01",
    name: "Namo Ghat",
    tagline: "A modern gateway to the Ganga",
    description:
      "Experience the beauty of the Ganga from one of Varanasi's modern riverfront landmarks, known for its peaceful atmosphere, open spaces and stunning views.",
    image: NamoGhat,
    path: "/places/namo-ghat",
  },

  {
    id: 2,
    no: "02",
    name: "Kashi Vishwanath Temple",
    tagline: "The spiritual heart of Kashi",
    description:
      "One of the most revered temples in Varanasi, dedicated to Lord Shiva and deeply connected with the spiritual identity and traditions of Kashi.",
    image: kashiVishwanath,
    path: "/places/kashi-vishwanath-temple",
  },

  {
    id: 3,
    no: "03",
    name: "Ramnagar Fort",
    tagline: "A glimpse into royal heritage",
    description:
      "Standing beside the Ganga, Ramnagar Fort reflects the royal history of Varanasi through its historic architecture, courtyards, museum collections and riverside setting.",
    image: ramNagar,
    path: "/places/ramnagar-fort",
  },

  {
    id: 4,
    no: "04",
    name: "Sarnath",
    tagline: "Where Buddha shared his teachings",
    description:
      "A peaceful and historically significant destination near Varanasi, Sarnath is associated with Buddha's first sermon and features ancient stupas, monasteries and archaeological remains.",
    image: Sarnath,
    path: "/places/sarnath",
  },

  {
    id: 5,
    no: "05",
    name: "Swarved Mahamandir",
    tagline: "A magnificent spiritual landmark",
    description:
      "Known for its grand architecture and serene surroundings, Swarved Mahamandir offers visitors a remarkable spiritual and architectural experience near Varanasi.",
    image: swarved,
    path: "/places/swarved-mahamandir",
  },

  {
    id: 6,
    no: "06",
    name: "Ganga Aarti",
    tagline: "The soul of Varanasi after sunset",
    description:
      "Witness the sacred Ganga Aarti as lamps, chants and devotional rituals illuminate the riverfront, creating one of the most memorable experiences in Varanasi.",
    image: gangaArti,
    path: "/experiences/ganga-aarti",
  },
];
