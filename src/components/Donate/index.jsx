import React, { useState } from 'react';
import './Donate.css';
import { motion } from 'framer-motion';

const Donate = () => {
    const [donationAmount, setDonationAmount] = useState('25');
    const [customAmount, setCustomAmount] = useState('');

    const handleAmountSelect = (amount) => {
        setDonationAmount(amount);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setDonationAmount('custom');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
        console.log(`Donation amount: $${finalAmount}`);
        alert(`Thank you for your donation of $${finalAmount}!`);
    };

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
                    <h1>Support Our Work</h1>
                    <p>
                        Your donations help us continue creating innovative projects and mentoring the next generation of creative talent.
                        Every contribution makes a difference in our community.
                    </p>

                    <form onSubmit={handleSubmit} className="donation-form">
                        <div className="amount-options">
                            <button
                                type="button"
                                className={donationAmount === '10' ? 'amount-btn active' : 'amount-btn'}
                                onClick={() => handleAmountSelect('10')}
                            >
                                $10
                            </button>
                            <button
                                type="button"
                                className={donationAmount === '25' ? 'amount-btn active' : 'amount-btn'}
                                onClick={() => handleAmountSelect('25')}
                            >
                                $25
                            </button>
                            <button
                                type="button"
                                className={donationAmount === '50' ? 'amount-btn active' : 'amount-btn'}
                                onClick={() => handleAmountSelect('50')}
                            >
                                $50
                            </button>
                            <button
                                type="button"
                                className={donationAmount === '100' ? 'amount-btn active' : 'amount-btn'}
                                onClick={() => handleAmountSelect('100')}
                            >
                                $100
                            </button>
                        </div>

                        <div className="custom-amount">
                            <label htmlFor="custom">Custom Amount:</label>
                            <div className="input-wrapper">
                                <span className="currency-symbol">$</span>
                                <input
                                    type="number"
                                    id="custom"
                                    min="1"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    placeholder="Enter amount"
                                />
                            </div>
                        </div>

                        <button type="submit" className="donate-btn">
                            Donate Now
                        </button>
                    </form>

                    <div className="donation-footer">
                        <p>All donations are tax-deductible. Tax ID: 12-3456789</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Donate;