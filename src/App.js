import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import PastProjects from "./components/PastProjects";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import HeroPL from "./components_pl/HeroPL";
import AboutUsPL from "./components_pl/AboutUsPL";
import PastProjectsPL from "./components_pl/PastProjectsPL";
import DonatePL from "./components_pl/DonatePL";
import FooterPL from "./components_pl/FooterPL";
import MissionPL from "./components_pl/MissionPL";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();
  const isPolish = location.pathname.startsWith("/pl");

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const setupScrollTrigger = () => {
      ScrollTrigger.refresh(true);
      console.log("App component: ScrollTrigger refreshed");
    };

    const initTimer = setTimeout(setupScrollTrigger, 500);
    window.addEventListener("load", setupScrollTrigger);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener("load", setupScrollTrigger);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderComponents = () => (
    <div className="App" key={isPolish ? "pl" : "en"}>
      <Navbar />
      {isPolish ? (
        <>
          <HeroPL key="hero-pl" />
          <MissionPL key="mission-pl" />
          <AboutUsPL key="about-us-pl" />
          <div style={{ height: "390vh" }}></div>
          <PastProjectsPL key="past-projects-pl" />
          <DonatePL key="donate-pl" />
          <FooterPL key="footer-pl" />
        </>
      ) : (
        <>
          <Hero key="hero-en" />
          <Mission key="mission-en" />
          <AboutUs key="about-us-en" />
          <div style={{ height: "390vh" }}></div>
          <PastProjects key="past-projects-en" />
          <Donate key="donate-en" />
          <Footer key="footer-en" />
        </>
      )}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={renderComponents()} />
      <Route path="/pl" element={renderComponents()} />
    </Routes>
  );
}

export default App;
