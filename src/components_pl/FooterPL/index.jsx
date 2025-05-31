import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Create for Kids</h3>
          <p>
            Wnosimy radość do życia dzieci poprzez kreatywne inicjatywy i
            wsparcie.
          </p>
        </div>

        <div className="footer-section">
          <h3>Szybkie linki</h3>
          <a href="#mission">Nasza Misja</a>
          <a href="#about-us">O nas</a>
          <a href="#past-projects">Projekty</a>
          <a href="#donate">Wesprzyj nas</a>
        </div>

        <div className="footer-section">
          <h3>Kontakt</h3>
          <a
            href="https://instagram.com/createforkidswarsaw"
            target="_blank"
            rel="noopener noreferrer"
          >
            @createforkidswarsaw
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Create for Kids. Wszelkie prawa
          zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
