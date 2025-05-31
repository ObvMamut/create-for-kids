import React, { useRef } from "react";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={container} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Create For Kids</h1>
      </div>
      <div className="hero-background-container">
        <motion.div style={{ y }} className="hero-background-motion">
          <div className="hero-background"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
