import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Places", path: "/places" },
  { name: "Experiences", path: "/experiences" },
  { name: "Plan Your Trip", path: "/plan-your-trip" },
  { name: "Blogs", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const popularPlaces = [
  {
    name: "Dashashwamedh Ghat",
    path: "/places/dashashwamedh-ghat",
  },
  {
    name: "Kashi Vishwanath Temple",
    path: "/places/kashi-vishwanath",
  },
  {
    name: "Assi Ghat",
    path: "/places/assi-ghat",
  },
  {
    name: "Sarnath",
    path: "/places/sarnath",
  },
  {
    name: "Manikarnika Ghat",
    path: "/places/manikarnika-ghat",
  },
  {
    name: "Ramnagar Fort",
    path: "/places/ramnagar-fort",
  },
];

const supportLinks = [
  { name: "Travel Guide", path: "/travel-guide" },
  { name: "FAQs", path: "/faqs" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Sitemap", path: "/sitemap" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    url: "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: "#",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    url: "#",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
    url: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    url: "#",
  },
];

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();

    console.log("Newsletter subscribed");
  };

  return (
    <footer className="bg-[#07171b] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1.2fr_1fr_1.35fr] lg:gap-8">

          {/* ================= BRAND ================= */}
          <div className="max-w-[310px]">

            {/* LOGO */}
            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              {/* Logo Placeholder */}
              <div className="flex h-12 w-14 items-center justify-center rounded-lg border border-[#ffffff30] text-[9px] font-medium tracking-wider text-[#d9c7a7]">
                LOGO
              </div>

              <div>
                <h2 className="font-serif text-[23px] font-semibold tracking-[1px] text-[#f5eee5]">
                  VARANASI
                </h2>

                <p className="mt-0.5 text-[7px] uppercase tracking-[2px] text-[#bcae9a]">
                  Timeless. Sacred. Alive.
                </p>
              </div>
            </Link>

            <p className="mt-6 text-[13px] leading-6 text-[#aeb8b9]">
              Explore the spiritual, cultural and historical beauty of
              Varanasi. Your trusted travel guide to the city of Lord Shiva.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-2.5">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.url}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ffffff20] text-[#c6cdcd] transition-all duration-300 hover:border-[#d9a441] hover:bg-[#d9a441] hover:text-[#07171b]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <FooterTitle title="Quick Links" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-[#aeb8b9] transition-colors duration-200 hover:text-[#e3bd71]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= POPULAR PLACES ================= */}
          <div>
            <FooterTitle title="Popular Places" />

            <ul className="space-y-3">
              {popularPlaces.map((place) => (
                <li key={place.name}>
                  <Link
                    to={place.path}
                    className="text-[13px] text-[#aeb8b9] transition-colors duration-200 hover:text-[#e3bd71]"
                  >
                    {place.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <FooterTitle title="Support" />

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-[#aeb8b9] transition-colors duration-200 hover:text-[#e3bd71]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= NEWSLETTER ================= */}
          <div>
            <FooterTitle title="Newsletter" />

            <p className="max-w-[260px] text-[13px] leading-6 text-[#aeb8b9]">
              Subscribe to get travel tips, updates and offers.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-5 flex h-12 w-full max-w-[290px] items-center rounded-xl bg-white p-1"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 text-[12px] text-[#172124] outline-none placeholder:text-[#8a8f91]"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d99518] text-white transition-all duration-300 hover:bg-[#bd7908]"
              >
                <ArrowRight size={18} />
              </button>
            </form>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3 text-[12px] text-[#9fa9aa]">
                <MapPin
                  size={15}
                  className="shrink-0 text-[#d9a441]"
                />

                <span>
                  Varanasi, Uttar Pradesh, India
                </span>
              </div>

              <div className="flex items-center gap-3 text-[12px] text-[#9fa9aa]">
                <Mail
                  size={15}
                  className="shrink-0 text-[#d9a441]"
                />

                <span>
                  hello@varanasiguide.com
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 h-px bg-[#ffffff12]" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-4 text-[12px] text-[#899596] md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Varanasi Tourism. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">

            <Link
              to="/incredible-india"
              className="transition-colors hover:text-[#e3bd71]"
            >
              Incredible India
            </Link>

            <span className="text-[#ffffff30]">
              |
            </span>

            <Link
              to="/tourist-guide"
              className="transition-colors hover:text-[#e3bd71]"
            >
              Varanasi Tourist Guide
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
};

/* ================= FOOTER TITLE ================= */

const FooterTitle = ({ title }) => {
  return (
    <div className="mb-5">

      <h3 className="relative inline-block text-[14px] font-semibold text-[#f2ebe3]">

        {title}

        <span className="absolute -bottom-2 left-0 h-[2px] w-5 rounded-full bg-[#d9a441]" />

      </h3>

    </div>
  );
};

export default Footer;