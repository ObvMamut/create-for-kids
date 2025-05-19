import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import Card from "../Card";
import { useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import karol from "../../images/karol.jpeg";
import kira from "../../images/kira.jpeg";
import laura from "../../images/laura.jpeg";
import julian from "../../images/julian.jpeg";
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
            "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for 'The tawny rocks').",
        src: laura,
        url: "laura.jpeg",
        color: "#977F6D",
    },
    {
        title: "Julian Woroszylski",
        description:
            "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
        src: julian,
        url: "julian.jpeg",
        color: "#C2491D",
    },
    {
        title: "Kira Lyakh",
        description:
            "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
        src: kira,
        url: "kira.jpeg",
        color: "#B62429",
    },
    {
        title: "Mia Kowalska",
        description:
            "Passionate about visual storytelling, Mia blends classic photography techniques with modern digital artistry. Her work has been featured in several exhibitions highlighting emerging talent across Europe, focusing on urban landscapes and cultural identity.",
        src: mia,
        url: "mia.jpeg",
        color: "#6B7A8F",
    },
    {
        title: "Hela Nowak",
        description:
            "With a background in architecture, Hela brings a unique structural perspective to her photography. She specializes in capturing the interplay between light and geometry in everyday spaces, transforming ordinary scenes into compelling visual narratives.",
        src: hela,
        url: "hela.jpeg",
        color: "#A7414A",
    },
    {
        title: "Franek",
        description:
            "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, 'all over again'—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
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
            const minHeight = `${projects.length * 50 + 20}vh`; // Reduced from 70vh per project
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