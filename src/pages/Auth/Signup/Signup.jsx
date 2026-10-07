import {
  Map,
  CalendarCheck,
  Tag,
  Heart,
  Users,
  Bell,
  MapPin,
} from "lucide-react";
import Header from "../../../components/login/Header";
import SignupCard from "./SignupCard";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=80";

const features = [
  {
    icon: Map,
    title: "Save Your Favorites",
    desc: "Keep track of places, tours and products",
  },
  {
    icon: CalendarCheck,
    title: "Manage Bookings",
    desc: "View and manage your tours easily",
  },
  {
    icon: Tag,
    title: "Get Exclusive Offers",
    desc: "Be the first to know about special deals",
  },
  {
    icon: Heart,
    title: "Personalized Recommendations",
    desc: "Discover places based on your interests",
  },
  {
    icon: Users,
    title: "Be Part of a Community",
    desc: "Share experiences and travel stories",
  },
  {
    icon: Bell,
    title: "Travel Updates",
    desc: "Get the latest events, festivals and travel tips",
  },
];

export default function Signup() {
  return (
    // Phone: normal scroll. Desktop (lg+): fixed to one screen, no scroll.
    <main
      className="relative min-h-dvh w-full overflow-x-hidden bg-[#1a0f0a] bg-cover bg-center bg-fixed font-['Inter',sans-serif] text-white lg:h-dvh lg:overflow-hidden"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div className="pointer-events-none fixed inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70 lg:bg-linear-to-r lg:from-black/70 lg:via-black/25 lg:to-black/30" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col px-4 py-4 sm:px-6 lg:h-full lg:min-h-0 lg:px-10 lg:py-5">
        <Header />

        <div className="grid flex-1 items-center gap-6 py-6 lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr] lg:py-4">
          {/* Left: hero + features (on phone: hero -> card -> features) */}
          <div className="contents lg:flex lg:flex-col lg:gap-6">
            <section className="order-1 max-w-xl lg:order-0">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/90">
                Create your account
              </p>
              <h2 className="font-['Playfair_Display',serif] text-4xl font-bold leading-[1.05] drop-shadow-lg sm:text-5xl xl:text-6xl">
                Join the
                <br />
                <span className="bg-linear-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Varanasi
                </span>
                <br />
                Journey
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
                Create an account to book tours, save your favorite places,
                manage your bookings and get exclusive travel deals.
              </p>
            </section>

            <div className="order-3 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 lg:order-0 lg:max-w-2xl [@media(max-height:760px)]:lg:hidden">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex cursor-pointer items-start gap-3 transition-transform duration-300 hover:translate-x-1"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/95 text-orange-700 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-tight">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-white/75">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-2 hidden -rotate-6 font-['Playfair_Display',serif] text-xl italic text-white/90 [@media(min-height:850px)]:lg:block">
              A city of faith, culture
              <br />
              and endless stories...
              <span className="mt-2 block h-0.5 w-28 bg-orange-500" />
            </p>
          </div>

          <div className="order-2 flex justify-center lg:order-0 lg:justify-end">
            <SignupCard />
          </div>
        </div>

        <p className="hidden items-center justify-center gap-2 pb-1 text-sm text-white/80 [@media(min-height:850px)]:lg:flex">
          <MapPin className="h-4 w-4" /> Dashashwamedh Ghat, Varanasi
        </p>
      </div>
    </main>
  );
}
