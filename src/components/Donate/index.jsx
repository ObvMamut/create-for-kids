import React from 'react';
import './Donate.css';
import { motion } from 'framer-motion';

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
                    <h1>Support Our Mission</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <a
                        href="https://lorem.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="donate-link"
                    >
                        Donate on GoFundMe
                    </a>

                    <div className="donate-footer">
                        <p>Your support makes all the difference. Thank you for believing in our work.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Donate;