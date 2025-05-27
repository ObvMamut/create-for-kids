import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.jpeg"; // Make sure to add your logo to this path

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Create for Kids Logo" />
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="toggle-inner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="nav-links">
          <div className="link-wrapper">
            <a href="/" className="nav-link">
              <span className="link-text">Home</span>
            </a>
          </div>
          <div className="link-wrapper">
            <a href="#mission" className="nav-link">
              <span className="link-text">Mission</span>
            </a>
          </div>
          <div className="link-wrapper">
            <a href="#about-us" className="nav-link">
              <span className="link-text">About</span>
            </a>
          </div>
          <div className="link-wrapper">
            <a href="#past-projects" className="nav-link">
              <span className="link-text">Projects</span>
            </a>
          </div>
          <a href="#donate" className="nav-button">
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
