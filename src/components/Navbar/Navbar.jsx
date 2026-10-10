import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  X,
  Menu,
  Search,
  Home,
  Compass,
  Map,
  Info,
  User,
  CalendarDays,
  ArrowRight,
  ChevronRight,
  MapPinned,
  Landmark,
} from "lucide-react";
import varasaiLogo from "../../assets/varasai-logo.png";

const mainLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Experiences", path: "/experiences", icon: MapPinned },
  { name: "Explore", path: "/explore", icon: Compass },
  { name: "Tours", path: "/tours", icon: Map },
  { name: "Places", path: "/places", icon: Landmark },
  { name: "About", path: "/about", icon: Info },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => setMobileMenu(false);

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] transition-all duration-200 ${
      isActive
        ? "bg-[#f8e8e3] text-[#741717] font-medium"
        : "text-[#282323] hover:bg-[#faf0ec] hover:text-[#741717]"
    }`;

  const desktopLinkClass = ({ isActive }) =>
    `relative flex items-center gap-2 px-3 py-2 text-[15px] font-medium transition-all duration-200 ${
      isActive ? "text-[#741717]" : "text-[#292525] hover:text-[#741717]"
    }`;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="fixed top-0 left-0 z-50 hidden w-full border-b border-[#eadfd8] bg-[#fffdf8]/95 backdrop-blur-md lg:block">
        <div className="mx-auto flex h-19.5 max-w-350 items-center justify-between px-8">
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-14 items-center justify-center rounded-lg   text-xs text-[#8d7770]">
              <img src={varasaiLogo} alt="" />
            </div>

            <div className="leading-none">
              <h1 className="font-serif text-[23px] font-semibold tracking-wide text-[#741717]">
                VARANASI
              </h1>
              <p className="mt-1 text-[8px] font-medium uppercase tracking-[2px] text-[#806f69]">
                Timeless. Sacred. Alive.
              </p>
            </div>
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="flex items-center gap-1">
            {mainLinks.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/"}
                  className={desktopLinkClass}
                >
                  <Icon size={17} strokeWidth={1.7} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* SEARCH */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5d9d2] text-[#3f3734] transition hover:border-[#741717] hover:text-[#741717]"
              aria-label="Search"
            >
              <Search size={19} />
            </button>

            {/* LOGIN */}
            <NavLink
              to="/login"
              title="Login"
              aria-label="Login"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5d9d2] text-[#3f3734] transition hover:border-[#741717] hover:text-[#741717]"
            >
              <User size={19} />
            </NavLink>

            {/* BOOK TOUR */}
            <NavLink
              to="/book-tour"
              className="group flex items-center gap-2 rounded-full bg-[#741717] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#741717]/20 transition-all duration-300 hover:bg-[#5d1111]"
            >
              <CalendarDays size={17} />
              <span>Book a Tour</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </NavLink>
          </div>
        </div>
      </header>

      {/* ================= MOBILE TOP BAR ================= */}
      <header className="fixed left-0 top-0 z-50 flex h-18 w-full items-center justify-between border-b border-[#eadfd8] bg-[#fffdf8]/95 px-5 backdrop-blur-md lg:hidden">
        <button
          onClick={() => setMobileMenu(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#302a28]"
          aria-label="Open menu"
        >
          <Menu size={24} strokeWidth={1.8} />
        </button>

        <NavLink to="/" className="flex flex-col items-center">
          <h1 className="font-serif text-[21px] font-semibold tracking-wide text-[#741717]">
            VARANASI
          </h1>
          <p className="text-[7px] uppercase tracking-[1.7px] text-[#806f69]">
            Timeless. Sacred. Alive.
          </p>
        </NavLink>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#302a28]"
          aria-label="Search"
        >
          <Search size={21} strokeWidth={1.8} />
        </button>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 z-100 lg:hidden">
          {/* BACKDROP */}
          <div
            onClick={closeMenu}
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
          />

          {/* DRAWER */}
          <aside className="absolute left-0 top-0 flex h-full w-[88%] max-w-97.5 flex-col overflow-y-auto bg-[#fffdf8] px-5 pb-5 pt-5 shadow-2xl">
            {/* HEADER */}
            <div className="flex items-center justify-between">
              <NavLink
                to="/"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <div className="flex h-11 w-12 items-center justify-center rounded-lg border border-dashed border-[#bda9a0] text-[9px] text-[#8d7770]">
                  LOGO
                </div>
                <div>
                  <h1 className="font-serif text-[21px] font-semibold tracking-wide text-[#741717]">
                    VARANASI
                  </h1>
                  <p className="text-[7px] uppercase tracking-[1.5px] text-[#806f69]">
                    Timeless. Sacred. Alive.
                  </p>
                </div>
              </NavLink>

              <button
                onClick={closeMenu}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#302a28] hover:bg-[#f6ebe6]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* SEARCH BOX */}
            <div className="relative mt-7">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6f6460]"
              />
              <input
                type="text"
                placeholder="Search places, temples, tours..."
                className="h-11 w-full rounded-xl border border-[#e5dcd6] bg-[#fffdf8] pl-10 pr-4 text-sm text-[#302a28] outline-none placeholder:text-[#817773] focus:border-[#a9796d]"
              />
            </div>

            {/* MAIN MENU */}
            <div className="mt-5">
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[1.8px] text-[#a09089]">
                Explore Varanasi
              </p>

              <nav className="space-y-1">
                {mainLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      end={item.path === "/"}
                      onClick={closeMenu}
                      className={navLinkClass}
                    >
                      <Icon size={20} strokeWidth={1.7} className="shrink-0" />
                      <span className="flex-1">{item.name}</span>
                      <ChevronRight size={17} className="text-[#82736e]" />
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* DIVIDER */}
            <div className="my-5 h-px bg-[#e8ddd7]" />

            {/* LOGIN */}
            <NavLink
              to="/login"
              onClick={closeMenu}
              title="Login"
              aria-label="Login"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#741717] text-[#741717] transition hover:bg-[#f8e8e3]"
            >
              <User size={19} />
            </NavLink>

            {/* BOOK TOUR */}
            <div className="mt-auto pt-7">
              <NavLink
                to="/book-tour"
                onClick={closeMenu}
                className="group flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#741717] text-sm font-medium text-white shadow-lg shadow-[#741717]/20 transition hover:bg-[#5d1111]"
              >
                <CalendarDays size={18} />
                <span>Book a Tour</span>
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </NavLink>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Navbar;
