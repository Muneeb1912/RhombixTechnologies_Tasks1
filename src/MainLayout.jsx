import React from "react";
import Navbar from "./Components/Navbar";
import Lightbox from "./Components/Lightbox";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Frqs from "./Components/Frqs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Lightbox />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Frqs />
      <Contact />
      <Footer />
    </>
  );
};

export default MainLayout
