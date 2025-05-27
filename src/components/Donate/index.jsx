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
                        You can support us financially. Dontations are split among the following : creating cads, bringing toys, art supplies, delivering care packages and extra expenses !
                    </p>

                    <a
                        href="https://pomagam.pl/rhweyh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="donate-link"
                    >
                        Donate on pomagam.pl
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