import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Mail, Phone, Send, ArrowRight, MapPin, User, Tag, MessageSquare } from 'lucide-react';
import './Contact.css';

const ContactPage = () => {
    return (
        <motion.div
            className="contact-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section className="contact-hero">
                <div className="container">
                    <div className="hero-grid">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag">Global Connect</span>
                            <h1 className="hero-title">
                                Contact our <span className="text-gradient-green">Experts.</span>
                            </h1>
                            <p className="hero-desc">
                                Reach out to our scientific or commercial divisions for technical support,
                                corporate inquiries, or global distribution opportunities.
                            </p>
                        </motion.div>
                        <motion.div
                            className="hero-visual"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="visual-inner">
                                <img
                                    src="/contact_page_hero.png"
                                    alt="Corporate HQ"
                                />
                                <div className="visual-badge">
                                    <MapPin size={24} />
                                    <span>HQ Hyderabad</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container section-spacing">
                <div className="contact-info-grid">
                    {[
                        {
                            icon: <Building2 size={28} />,
                            title: 'Corporate Office',
                            lines: [
                                'Phase IV, Near Kukatpally',
                                'Industrial Park, Hyderabad - 500072',
                                'Telangana, India'
                            ]
                        },
                        {
                            icon: <Factory size={28} />,
                            title: 'Manufacturing Unit',
                            lines: [
                                'Kuntloor Village, Abdullapurmet',
                                'RR District, Telangana',
                                'ISO 9001:2015 Facility'
                            ]
                        },
                        {
                            icon: <Mail size={28} />,
                            title: 'Direct Access',
                            lines: [
                                'Email: info@rrvhc.in',
                                'Direct: +91 94904 10562, +91-40 4857 7778',
                                'Support: info@rrvhc.in, rammohanrao100@gmail.com'
                            ]
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="contact-info-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="ci-icon">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <div className="ci-lines">
                                {item.lines.map((line, li) => (
                                    <p key={li}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="inquiry-section section-spacing bg-white">
                <div className="container">
                    <div className="inquiry-container">
                        <motion.div
                            className="inquiry-form-wrapper compact"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="form-head centered">
                                <span className="section-tag">Engagement</span>
                                <h2 className="section-title">Operational Inquiry</h2>
                                <p>Please provide technical specifications or specific requirements</p>
                            </div>

                            <form className="premium-form mt-4">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <div className="form-icon-group">
                                            <User className="input-icon" size={18} />
                                            <input type="text" placeholder="Dr. Jane Smith" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <div className="form-icon-group">
                                            <Mail className="input-icon" size={18} />
                                            <input type="email" placeholder="jane@example.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject of Inquiry</label>
                                    <div className="form-icon-group">
                                        <Tag className="input-icon" size={18} />
                                        <input type="text" placeholder="Technical / Commercial / General" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Detailed Description</label>
                                    <div className="form-icon-group align-top">
                                        <MessageSquare className="input-icon mt-3" size={18} />
                                        <textarea rows="5" placeholder="Your message here..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="premium-btn-primary w-full">
                                    Submit Inquiry <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactPage;
