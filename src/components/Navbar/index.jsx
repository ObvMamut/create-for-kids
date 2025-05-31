import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/logo.jpeg"; // Adjust path if needed

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isPolish = location.pathname.startsWith("/pl");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    const newPath = isPolish ? "/" : "/pl";
    navigate(newPath, { replace: true });
  };

  const getLinkHref = (section) => {
    return isPolish ? `/pl#${section}` : `/#${section}`;
  };

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
          <div className="link-wrapper" style={{ "--index": 0 }}>
            <a href={getLinkHref("")} className="nav-link">
              <span className="link-text">
                {isPolish ? "Strona główna" : "Home"}
              </span>
            </a>
          </div>
          <div className="link-wrapper" style={{ "--index": 1 }}>
            <a href={getLinkHref("mission")} className="nav-link">
              <span className="link-text">
                {isPolish ? "Misja" : "Mission"}
              </span>
            </a>
          </div>
          <div className="link-wrapper" style={{ "--index": 2 }}>
            <a href={getLinkHref("about-us")} className="nav-link">
              <span className="link-text">{isPolish ? "O nas" : "About"}</span>
            </a>
          </div>
          <div className="link-wrapper" style={{ "--index": 3 }}>
            <a href={getLinkHref("past-projects")} className="nav-link">
              <span className="link-text">
                {isPolish ? "Projekty" : "Projects"}
              </span>
            </a>
          </div>
          <a
            href={getLinkHref("donate")}
            className="nav-button"
            style={{ "--index": 4 }}
          >
            {isPolish ? "Wesprzyj" : "Donate"}
          </a>
          <div className="link-wrapper" style={{ "--index": 5 }}>
            <button
              onClick={handleLanguageToggle}
              className="nav-button language-toggle"
            >
              {isPolish ? "EN" : "PL"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
