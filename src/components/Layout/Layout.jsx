import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Features from "../Features/Features";
import StayProductive from "../stayProductive/stayProductive";
import Testimonial from "../Testimonial/Testimonial";
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <StayProductive />
      <Testimonial />
      <GetStarted />
      <Footer />
    </>
  );
}
