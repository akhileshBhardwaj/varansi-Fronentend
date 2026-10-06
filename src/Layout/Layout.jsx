import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#282323]">
      <Navbar />

      <main className="min-h-screen pt-18 lg:pt-19.5">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
