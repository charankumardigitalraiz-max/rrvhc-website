import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Microscope, Send, Globe, Award, ArrowRight, Share2 } from 'lucide-react';
import './Contact.css'; // Reusing premium form and hero styles

const Partner = () => {
    return (
        <motion.div
            className="partner-page"
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
                            <span className="section-tag">Strategic Alliance</span>
                            <h1 className="hero-title">
                                Partner with <span className="text-gradient-blue">us.</span>
                            </h1>
                            <p className="hero-desc">
                                Expand your reach through RRVHC's established global distribution network and
                                high-performance manufacturing capabilities.
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
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                                    alt="Strategic Partnership"
                                />
                                <div className="visual-badge">
                                    <Share2 size={24} />
                                    <span>Global Network</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container section-spacing">
                <div className="content-grid">
                    <motion.div
                        className="partner-text-block"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Global Strategic Synergy</h2>
                        <p className="hero-desc">
                            At RRVHC, we believe in the power of ethical synergy. Our partnership
                            model is designed for long-term growth, combining technical collaboration
                            with world-class distribution infrastructure.
                        </p>

                        <div className="contact-info-grid mt-4" style={{ gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                            {[
                                {
                                    icon: <Globe size={24} />,
                                    title: 'Export Relations',
                                    desc: 'Direct manufacturing support for international clinical distributors.'
                                },
                                {
                                    icon: <Microscope size={24} />,
                                    title: 'R&D Synergy',
                                    desc: 'Collaborative molecular research for next-generation biologicals.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="contact-info-card" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                    <div className="ci-icon" style={{ marginBottom: 0 }}>
                                        {item.icon}
                                    </div>
                                    <div className="ci-text">
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.9rem', opacity: 0.6, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="inquiry-form-wrapper compact"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-head centered">
                            <h3 className="section-title" style={{ fontSize: '1.75rem' }}>Alliance Inquiry</h3>
                        </div>
                        <form className="premium-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Company Entity</label>
                                    <input type="text" placeholder="Organization name" />
                                </div>
                                <div className="form-group">
                                    <label>Corporate Email</label>
                                    <input type="email" placeholder="business@domain.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Alliance Proposal</label>
                                <textarea rows="4" placeholder="Outline your strategic vision..."></textarea>
                            </div>
                            <button type="submit" className="premium-btn-primary w-full">
                                Send Inquiry <ArrowRight size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Partner;
