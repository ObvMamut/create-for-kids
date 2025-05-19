import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import PastProjects from "./components/PastProjects";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  console.log("The app is loading");

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

      // Initial global setup
      const setupScrollTrigger = () => {
          // Force a recalculation of all ScrollTriggers
          ScrollTrigger.refresh(true);

          console.log("App component: ScrollTrigger refreshed");
      };

      // Run on component mount with a slight delay
      const initTimer = setTimeout(setupScrollTrigger, 500);

      // Also run when the page is fully loaded
      window.addEventListener('load', setupScrollTrigger);

      // Clean up
      return () => {
          clearTimeout(initTimer);
          window.removeEventListener('load', setupScrollTrigger);
      };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Mission />
      <AboutUs />
      <div style={{ height: "390vh" }}></div>{" "}
      {/* Spacer to delay PastProjects animations */}
      <PastProjects />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
