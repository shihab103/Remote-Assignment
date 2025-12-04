import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import EssentialTools from "../Pages/EssentialTools/EssentialTools";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <EssentialTools />
      <Footer />
    </>
  );
}
