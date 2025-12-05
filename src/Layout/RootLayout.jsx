import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import EssentialTools from "../Pages/EssentialTools/EssentialTools";
import Promerty from "../Pages/Property/Property";
import Testimonial from "../Pages/Testimonial/Testimonial";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Promerty/>
      <Testimonial />
      <EssentialTools />
      <Footer />
    </>
  );
}
