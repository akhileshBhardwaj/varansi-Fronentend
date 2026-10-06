import { CalendarDays, Plane, BedDouble, Car, Route } from "lucide-react";

export const planYourCitiesContent = {
  eyebrow: "Plan Your Journey",
  title: "Your Perfect Varanasi Trip",
  description:
    "Get travel information, best time to visit, itineraries, local transport and stay options – all in one place.",
  buttonText: "Plan Your Trip",
  buttonPath: "/book-tour",
  // Baad mein apni image se badal sakte ho
  image:
    "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1600&q=80",
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
