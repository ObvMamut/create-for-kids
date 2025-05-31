import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import Card from "../Card";
import { useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import karol from "../../images/karol.jpeg";
import kira from "../../images/kira.jpeg";
import laura from "../../images/laura.jpeg";
import julian from "../../images/julian2.jpeg";
import mia from "../../images/mia.jpeg";
import hela from "../../images/hela.jpeg";
import franek from "../../images/franek.jpeg";

export const projects = [
  {
    title: "Karol Dąbrowski",
    description:
      "Cześć, jestem Karol, licealista i przewodniczący warszawskiego oddziału Create for Kids, wnoszę pozytywną energię do szpitali. Uwielbiam filmy Nolana i od czasu do czasu próbuję nie stracić pieniędzy na giełdzie.",
    src: karol,
    url: "karol.jpeg",
    color: "#BBACAF",
  },
  {
    title: "Laura Pietkiewicz",
    description:
      "Hej! Mam na imię Laura i jestem wiceprzewodniczącą warszawskiego oddziału Create For Kids. Jestem w 12 klasie i nie wiem, czy to ja stawiam wyzwania nauce, czy nauka mnie... tak czy inaczej, kocham wioślarstwo, pieczenie, rysowanie i absolutnie nie mam wolnego czasu.",
    src: laura,
    url: "laura.jpeg",
    color: "#977F6D",
  },
  {
    title: "Julian Woroszylski",
    description:
      "Cześć! Jestem Julian, główny programista i skarbnik. Uwielbiam programowanie i trenowanie sportów walki.",
    src: julian,
    url: "julian.jpeg",
    color: "#C2491D",
  },
  {
    title: "Kira Lyakh",
    description:
      "Cześć wszystkim! Jestem Kira i jestem odpowiedzialna za media społecznościowe w warszawskim oddziale Create for Kids. Jestem też pływaczką i nie wiem, co lubię bardziej — codzienny ból czy opuszczanie szkoły z powodu treningów.",
    src: kira,
    url: "kira.jpeg",
    color: "#B62429",
  },
  {
    title: "Mia Kowalska",
    description:
      "Cześć! Mam na imię Mia i zajmuję się mediami społecznościowymi w warszawskim oddziale Create for Kids. Wierzę, że muzyka, kino i sztuka to moje środki przeciwbólowe. To przyjemność być częścią zespołu i pomagać dzieciom.",
    src: mia,
    url: "mia.jpeg",
    color: "#6B7A8F",
  },
  {
    title: "Hela Nowak",
    description:
      "Cześć! Jestem Hela i uczę się w Akademeia High School w Warszawie. Obecnie jestem w 11 klasie! Kocham modę, zwierzęta i fotografię.",
    src: hela,
    url: "hela.jpeg",
    color: "#A7414A",
  },
  {
    title: "Franek",
    description:
      "Cześć! Mam na imię Franek i jestem sekretarzem warszawskiego oddziału Create For Kids. Mam 16 lat i uczę się w Warth School of London.",
    src: franek,
    url: "franek.jpeg",
    color: "#88A28D",
  },
];

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"], // Modified offset for better scrolling
  });

  useEffect(() => {
    // Calculate a more appropriate height based on number of projects
    // This is key to fixing the spacing issue
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      // Adjust the calculation to be more proportional to the number of cards
      // This leaves less empty space at the bottom
      const minHeight = `${projects.length * 50 - 15}vh`; // Reduced from 70vh per project
      aboutUsSection.style.minHeight = minHeight;
    }

    // Create a marker to help with ScrollTrigger coordination
    const endMarker = document.createElement("div");
    endMarker.id = "about-us-end-marker";
    endMarker.style.position = "absolute";
    endMarker.style.bottom = "0";
    endMarker.style.width = "100%";
    endMarker.style.height = "1px";

    if (aboutUsSection) {
      aboutUsSection.appendChild(endMarker);
    }

    // Refresh ScrollTrigger to ensure correct positioning
    ScrollTrigger.refresh();

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // Remove the marker element
      endMarker.remove();
    };
  }, []);

  return (
    <section id="about-us" ref={container} className="about-us">
      <div className="section-header">
        <h1>O nas</h1>
        <p>Poznaj naszą ekipę</p>
      </div>

      <div className="cards-container">
        {projects.map((project, i) => {
          // Adjusted scaling for better distribution
          // This ensures cards stack properly
          const targetScale = 1 - (projects.length - i) * 0.02; // Reduced from 0.03
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              // Adjusted range for smoother transitions between cards
              range={[i * 0.12, 0.75]} // Reduced from 0.15, 0.85
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AboutUs;
