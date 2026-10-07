export default function HeroSection() {
  return (
    <section className="max-w-xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/90">
        Welcome back to
      </p>

      <h2 className="font-['Playfair_Display',serif] text-4xl font-bold leading-[1.05] drop-shadow-lg sm:text-5xl xl:text-6xl">
        Explore
        <br />
        <span className="bg-linear-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
          Varanasi
        </span>
        <br />
        Again
      </h2>

      <p className="mt-3 max-w-md text-sm leading-relaxed sm:mt-4 sm:text-base text-white/90">
        Login to continue your journey and explore the timeless beauty,
        spiritual experiences and hidden gems of Varanasi.
      </p>

      <p className="mt-6 hidden -rotate-6 font-['Playfair_Display',serif] text-xl italic text-white/90 [@media(min-height:850px)]:lg:block">
        A city of faith, culture
        <br />
        and endless stories...
        <span className="mt-2 block h-0.5 w-28 bg-orange-500" />
      </p>
    </section>
  );
}
