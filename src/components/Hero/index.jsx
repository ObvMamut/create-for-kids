import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const container = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // Reduce parallax effect on mobile for better performance
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "15%"] : ["0%", "30%"],
  );

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      setIsMobile(isMobileDevice);
    };

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setIsReducedMotion(prefersReducedMotion);
    };

    checkMobile();
    checkReducedMotion();

    // Add resize listener
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Disable parallax on mobile or if user prefers reduced motion
  const motionProps = isMobile || isReducedMotion ? {} : { style: { y } };

  return (
    <section ref={container} className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Create For Kids</h1>
      </div>
      <div className="hero-background-container">
        <motion.div className="hero-background-motion" {...motionProps}>
          <div className="hero-background"></div>
        </motion.div>
      </div>

      {/* Floating elements - hidden on mobile for performance */}
      {!isMobile && !isReducedMotion && (
        <div className="floating-elements">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
      )}
    </section>
  );
};

export default Hero;
