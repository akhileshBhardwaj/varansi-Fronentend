import Header from "../../../components/login/Header";
import HeroSection from "../../../components/login/HeroSection";
import FeatureStrip from "../../../components/login/FeatureStrip";
import LoginCard from "../../../components/login/LoginCard";

//Image

// Online image (Unsplash). Replace with any Varanasi ghat photo you like.
const BG_IMAGE =
  "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=2000&q=80";

export default function Login() {
  return (
    // Phone/tablet: normal scroll. Desktop (lg+): fixed to screen, no scroll.
    <main
      className="relative min-h-dvh w-full overflow-x-hidden bg-[#1a0f0a] bg-cover bg-center bg-fixed font-['Inter',sans-serif] text-white lg:h-dvh lg:overflow-hidden"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      {/* dark gradient overlays for readability */}
      <div className="pointer-events-none fixed inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/70 lg:bg-linear-to-r lg:from-black/70 lg:via-black/30 lg:to-black/50" />
      <div className="pointer-events-none fixed inset-0 hidden bg-linear-to-t from-black/60 via-transparent to-black/30 lg:block" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col px-4 py-4 sm:px-6 lg:h-full lg:min-h-0 lg:px-10 lg:py-5">
        <Header />

        <div className="grid flex-1 items-center gap-6 py-6 lg:min-h-0 lg:grid-cols-[1.15fr_0.85fr] lg:py-4">
          {/* On phone these children stack as: hero -> login card -> features */}
          <div className="contents lg:flex lg:flex-col lg:gap-6">
            <div className="order-1 lg:order-0">
              <HeroSection />
            </div>
            <div className="order-3 lg:order-0">
              <FeatureStrip />
            </div>
          </div>
          <div className="order-2 flex justify-center lg:order-0 lg:justify-end">
            <LoginCard />
          </div>
        </div>
      </div>
    </main>
  );
}
