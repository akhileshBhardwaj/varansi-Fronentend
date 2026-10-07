import { ArrowLeft, Landmark } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="group flex cursor-pointer items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl sm:h-12 sm:w-12 bg-linear-to-br from-orange-400 to-orange-700 shadow-lg shadow-orange-900/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Landmark className="h-7 w-7 text-white" />
        </div>
        <div className="leading-tight">
          <h1 className="font-['Playfair_Display',serif] text-2xl font-semibold tracking-wide">
            VARANASI
          </h1>
          <p className="text-xs text-white/80">Timeless. Sacred. Alive.</p>
        </div>
      </div>

      <a
        href="/"
        className="group flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-xs font-medium backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm transition-all duration-300 hover:border-orange-400 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="sm:hidden">Home</span>
        <span className="hidden sm:inline">Back to Home</span>
      </a>
    </header>
  );
}
