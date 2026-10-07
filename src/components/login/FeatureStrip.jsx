import { Map, CalendarCheck, ShoppingBag, Heart } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Explore Places",
    desc: "Ghats, temples, heritage & more",
  },
  {
    icon: CalendarCheck,
    title: "Book Tours",
    desc: "Spiritual, cultural and local experiences",
  },
  {
    icon: ShoppingBag,
    title: "Shop Local",
    desc: "Authentic Banarasi products",
  },
  { icon: Heart, title: "Save Favorites", desc: "Keep track of your wishlist" },
];

export default function FeatureStrip() {
  return (
    <div className="grid max-w-3xl grid-cols-2 gap-2 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-md sm:grid-cols-4">
      {features.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group cursor-pointer rounded-xl px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:border-r sm:border-white/15 sm:last:border-r-0"
        >
          <Icon className="mx-auto mb-3 h-7 w-7 text-white transition-all duration-300 group-hover:scale-110 group-hover:text-orange-400" />
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="mt-1 text-xs leading-snug text-white/70">{desc}</p>
        </div>
      ))}
    </div>
  );
}
