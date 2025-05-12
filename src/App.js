import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import PastProjects from "./components/PastProjects";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import Lenis from "@studio-freight/lenis";

function App() {
  console.log("The app is loading");

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up Lenis if needed
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
      <Contact />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
