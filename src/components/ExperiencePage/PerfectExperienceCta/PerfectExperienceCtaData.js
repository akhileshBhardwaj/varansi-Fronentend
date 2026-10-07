import { ClipboardList, UserCheck, BadgeCheck, Headset } from "lucide-react";

export const perfectExperienceContent = {
  eyebrow: "Plan Your Experience",
  title: "Create Your Perfect Varanasi Experience",
  description:
    "Get personalized recommendations, itineraries and local insights from our travel experts.",
  primaryText: "Plan Your Trip",
  primaryPath: "/plan-your-trip",
  secondaryText: "View Suggested Experiences",
  secondaryPath: "/experiences",
  // Online placeholder image - baad me apni image se replace kar lena
  image:
    "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=2000&q=80",
};

export const perfectExperienceFeatures = [
  { id: 1, label: "Customized itineraries", icon: ClipboardList },
  { id: 2, label: "Local Experts", icon: UserCheck },
  { id: 3, label: "Best Price Guarantee", icon: BadgeCheck },
  { id: 4, label: "24/7 Support", icon: Headset },
];
