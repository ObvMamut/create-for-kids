import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Create for Kids</h3>
          <p>
            Making a difference in children's lives through creative initiatives
            and support.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#mission">Our Mission</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#donate">Donate</a>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <a href="mailto:contact@createforkids.org">
            contact@createforkids.org
          </a>
          <a
            href="https://instagram.com/createforkids"
            target="_blank"
            rel="noopener noreferrer"
          >
            @createforkids
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Create for Kids. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
