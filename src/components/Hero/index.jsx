import React, { useRef } from "react";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Transform value to create parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={container} className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Creative Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-subtitle"
        >
          We bring ideas to life through innovative design and storytelling
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#about-us" className="cta-button">
            Discover Our Work
          </a>
        </motion.div>
      </div>

      <div className="hero-background-container">
        <motion.div style={{ y }} className="hero-background-motion">
          <div className="hero-background"></div>
          <div className="overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
