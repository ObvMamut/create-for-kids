import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./PastProjects.css";

// Import images
import projectImage1 from "./img1.png";
import projectImage2 from "./img1.png";
import projectImage3 from "./img1.png";

gsap.registerPlugin(ScrollTrigger);

const PastProjects = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const maskRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;
    const mask = maskRef.current;
    const header = headerRef.current;

    ScrollTrigger.refresh();

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: "top 20%",
        end: "+=3500",
        invalidateOnRefresh: true,
      },
    });

    // Slowed-down mask (progress bar) animation
    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: container,
        start: "top 20%",
        end: "+=5000", // Slowed-down fill rate
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    sections.forEach((section) => {
      const text = section.querySelectorAll(".anim");
      if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left 90%",
          invalidateOnRefresh: true,
        },
      });
    });

    // ScrollTrigger for header to fade out when scrolling all the way up
    ScrollTrigger.create({
      trigger: container,
      start: "top 20%",
      onEnter: () => gsap.to(header, { opacity: 1, duration: 0.5 }), // Visible on enter
      onLeave: () => gsap.to(header, { opacity: 1, duration: 0.5 }), // Visible when scrolling down
      onEnterBack: () => gsap.to(header, { opacity: 1, duration: 0.5 }), // Visible when scrolling back down
      onLeaveBack: () => gsap.to(header, { opacity: 0, duration: 0.5 }), // Fade out when scrolling all the way up
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToSectionsRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="wrapper">
      <div className="container scrollx" ref={containerRef}>
        <div className="header" ref={headerRef}>
          Past Projects
        </div>
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#D9D9D9"
          />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="10"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect
              className="mask"
              y="-49"
              height="99"
              fill="black"
              ref={maskRef}
            />
          </g>
        </svg>

        <section className="sec1 pin" ref={addToSectionsRef}>
          <div className="section-content">
            <div className="image-container">
              <img src={projectImage1} alt="Project 1" />
            </div>
            <div className="text-container">
              <span>Advanced</span>
              <h1>Signify Elegance</h1>
              <div className="col">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec2 pin" ref={addToSectionsRef}>
          <div className="section-content">
            <div className="image-container">
              <img src={projectImage2} alt="Project 2" />
            </div>
            <div className="text-container">
              <span className="anim">Advanced</span>
              <h1 className="anim">Signify Elegance</h1>
              <div className="col anim">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas隆lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sec3 pin" ref={addToSectionsRef}>
          <div className="section-content">
            <div className="image-container">
              <img src={projectImage3} alt="Project 3" />
            </div>
            <div className="text-container">
              <span className="anim">Advanced</span>
              <h1 className="anim">Signify Elegance</h1>
              <div className="col anim">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                  sit sed massa turpis in. Sit praesent arcu leo lectus
                  pellentesque. Ornare elit orci morbi volutpat. Ut fermentum
                  lorem morbi quis risus amet urna. Urna egestas lorem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PastProjects;
