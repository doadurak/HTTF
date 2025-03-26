import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import QuickMenu from "./QuickMenu"; // QuickMenu'yu ekledik

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <QuickMenu /> {/* Hızlı Menü butonunu Navbar altında çağırıyoruz */}
      <Outlet />
    </>
  );
};

export default SharedLayout;

