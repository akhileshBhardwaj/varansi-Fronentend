import { CalendarDays, Plane, BedDouble, Car, Route } from "lucide-react";
import JournyBanner from '../../../assets/images/HomePage/JournyBanner1.png'

export const planYourCitiesContent = {
  eyebrow: "Plan Your Journey",
  title: "Your Perfect Varanasi Trip",
  description:
    "Get travel information, best time to visit, itineraries, local transport and stay options – all in one place.",
  buttonText: "Plan Your Trip",
  buttonPath: "/book-tour",
  image: JournyBanner,
};

export const planYourCitiesItems = [
  {
    id: 1,
    label: "Best Time to Visit",
    icon: CalendarDays,
    path: "/plan/best-time-to-visit",
  },
  {
    id: 2,
    label: "How to Reach",
    icon: Plane,
    path: "/plan/how-to-reach",
  },
  {
    id: 3,
    label: "Where to Stay",
    icon: BedDouble,
    path: "/plan/where-to-stay",
  },
  {
    id: 4,
    label: "Local Transport",
    icon: Car,
    path: "/plan/local-transport",
  },
  {
    id: 5,
    label: "Suggested Itineraries",
    icon: Route,
    path: "/plan/itineraries",
  },
];
