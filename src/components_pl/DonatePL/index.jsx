import React from "react";
import "./Donate.css";
import { motion } from "framer-motion";

const Donate = () => {
  return (
    <section id="donate" className="donate">
      <div className="donate-overlay"></div>
      <div className="donate-container">
        <motion.div
          className="donate-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1>Wesprzyj Naszą Misję</h1>
          <p>
            Możesz nas wesprzeć finansowo. Wpłaty są przeznaczane na: tworzenie
            kartek, kupno zabawek i artykułów plastycznych, dostarczanie paczek
            upominkowych oraz inne wydatki!
          </p>

          <a
            href="https://pomagam.pl/rhweyh"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-link"
          >
            Wpłać na pomagam.pl
          </a>

          <div className="donate-footer">
            <p>
              Twoje wsparcie robi ogromną różnicę. Dziękujemy, że wierzysz w
              naszą pracę.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;
