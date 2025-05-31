import { useEffect, useRef } from "react";
import "./Mission.css";

// Import GSAP for animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  // Achievement data
  const achievements = [
    {
      id: 1,
      number: "+700",
      label: "Złotys Raised",
      icon: "💰",
    },
    {
      id: 2,
      number: "+500",
      label: "Cards Made",
      icon: "✉️",
    },
    {
      id: 3,
      number: "180",
      label: "Volunteers",
      icon: "👥",
    },
    {
      id: 4,
      number: "8",
      label: "Institutions",
      icon: "🏢",
    },
  ];

  useEffect(() => {
    // Animation for title and text
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    // Animation for cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + index * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    // Counter animation for numbers
    const counters = document.querySelectorAll(".achievement-number");
    counters.forEach((counter, index) => {
      const achievement = achievements[index];
      const finalValue = parseFloat(achievement.number.replace(/[^0-9.]/g, ""));
      const suffix = achievement.number.replace(/[0-9.]/g, "");

      gsap.fromTo(
        counter,
        { innerHTML: "0" },
        {
          innerHTML: finalValue,
          duration: 2,
          delay: 0.5 + index * 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            const currentValue = Math.round(this.targets()[0].innerHTML);
            this.targets()[0].innerHTML = currentValue + suffix;
          },
        },
      );
    });
  }, []);

  // Add cards to refs
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="mission" className="mission-section" ref={sectionRef}>
      <div className="mission-container">
        <h2 className="mission-title" ref={titleRef}>
          Our Mission
        </h2>
        <p className="mission-text" ref={textRef}>
          Create For Kids : an organisation that promotes creativity and brings
          inspiration to hospitalised children. We believe that creating art
          brings joy and hope to younh patients. We foster imagination and
          creativity and encourage a positive and uplifting environment in
          pediatric wards. We collect cards, art, toys and deliver them to young
          patients. You can write supportive cards that we will later deliver.
        </p>

        <div className="achievements-container" id="achievements">
          {achievements.map((achievement, index) => (
            <div
              className="achievement-card"
              key={achievement.id}
              ref={addToRefs}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3 className="achievement-number">{achievement.number}</h3>
              <p className="achievement-label">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
