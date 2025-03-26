import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import QuickMenu from "./QuickMenu";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <QuickMenu /> 
      <Outlet />
    </>
  );
};

export default SharedLayout;
