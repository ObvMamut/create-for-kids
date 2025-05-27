import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".nav-container")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Create for Kids Logo" />
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="toggle-inner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className="nav-links" role="navigation">
          <div className="link-wrapper">
            <a href="/" className="nav-link" onClick={handleLinkClick}>
              <span className="link-text">Home</span>
            </a>
          </div>
          <div className="link-wrapper">
            <a href="#mission" className="nav-link" onClick={handleLinkClick}>
              <span className="link-text">Mission</span>
            </a>
          </div>
          <div className="link-wrapper">
            <a href="#about-us" className="nav-link" onClick={handleLinkClick}>
              <span className="link-text">About</span>
            </a>
          </div>
          <div className="link-wrapper">
            <a
              href="#past-projects"
              className="nav-link"
              onClick={handleLinkClick}
            >
              <span className="link-text">Projects</span>
            </a>
          </div>
          <a href="#donate" className="nav-button" onClick={handleLinkClick}>
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
