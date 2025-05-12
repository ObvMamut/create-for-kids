import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import { projects } from "../../data";
import Card from "../Card";
import { useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 20%"], // Adjusted to complete earlier
  });

  useEffect(() => {
    // Refresh ScrollTrigger to ensure correct positioning
    ScrollTrigger.refresh();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about-us" ref={container} className="about-us">
      <div className="section-header">
        <h1>About Our Team</h1>
        <p>Meet the creative minds behind our projects</p>
      </div>

      <div className="cards-container">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 0.9]} // Adjusted range to complete earlier
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
