import { Users, Package, Globe, Handshake } from "lucide-react";

export const exploreArtisansContent = {
  eyebrow: "Our Story",
  title: "Meet the Artisans of Varanasi",
  description:
    "Each product you see here is crafted by skilled artisans who have kept the centuries-old traditions of Varanasi alive. By shopping with us, you directly support local craftsmen and help preserve this incredible heritage.",
  buttonText: "Our Artisan Stories",
  buttonPath: "/artisans",
  // Online placeholder image - baad me apni image (weaver wali) se replace kar lena
  image:
    "https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=1000&q=80",
};

// count: number ho to count-up hota hai, nahi to title text dikhta hai
export const exploreArtisansStats = [
  { id: 1, count: 500, suffix: "+", label: "Local Artisans", icon: Users },
  { id: 2, count: 1000, suffix: "+", label: "Unique Products", icon: Package },
  { id: 3, title: "Worldwide", label: "Shipping", icon: Globe },
  { id: 4, title: "Support", label: "Local Communities", icon: Handshake },
];