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
            "Hey, I'm Karol, high schooler and president of the Warsaw Create for Kids Chapter, bringing happy vibes to hospitals. I worship Nolan films and occasionnally trying not to lose money on stocks",
        src: karol,
        url: "karol.jpeg",
        color: "#BBACAF",
    },
    {
        title: "Laura Pietkiewicz",
        description:
            "Hi!, My name is Laura and I'm the vice president for the Create For Kids, Warsaw Chapter. I'm in year 12 and don't know if I'm challenging the academics or if the academics are challenging me... either way, I love rowing, baking, drawing and have absolutely no free time",
        src: laura,
        url: "laura.jpeg",
        color: "#977F6D",
    },
    {
        title: "Julian Woroszylski",
        description:
            "Hi! I'm Julian, the lead developer and treasurer. I love programming and practicing compat sports",
        src: julian,
        url: "julian.jpeg",
        color: "#C2491D",
    },
    {
        title: "Kira Lyakh",
        description:
            "Hi everyone! I'm Kira and I'm the social media manager of the Warsaw Create for Kids chapter. I'm also a swimmer and I don't know what I love most, being in pain everyday or skipping school because of practice",
        src: kira,
        url: "kira.jpeg",
        color: "#B62429",
    },
    {
        title: "Mia Kowalska",
        description:
            "Hi! My name is Mia and I'm the social media manager of the Warsaw Create for Kids chapter. I believe that music, cinema and art is my painkiller. It's a pleasure to be one of the members and to help children",
        src: mia,
        url: "mia.jpeg",
        color: "#6B7A8F",
    },
    {
        title: "Hela Nowak",
        description:
            "Hi! I'm Hela and I am attending Akademeia High School in Warsaw and currently I am in year 11! I love fashion, animals and photography",
        src: hela,
        url: "hela.jpeg",
        color: "#A7414A",
    },
    {
        title: "Franek",
        description:
            "Hi! My name is Franek and I am the secretary of the Warsaw Create For Kids chapter. I am 16 and studying at Warth School of London.",
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
        const endMarker = document.createElement('div');
        endMarker.id = 'about-us-end-marker';
        endMarker.style.position = 'absolute';
        endMarker.style.bottom = '0';
        endMarker.style.width = '100%';
        endMarker.style.height = '1px';

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
                <h1>About Our Team</h1>
                <p>Meet the creative minds behind our projects</p>
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