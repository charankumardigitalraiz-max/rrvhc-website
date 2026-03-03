import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Rocket, Shield, Zap, Target, Gem } from 'lucide-react';
import './AboutSuite.css';

const VisionMission = () => {
    return (
        <motion.div
            className="vision-mission-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section className="suite-hero">
                <div className="container">
                    <motion.div
                        className="suite-hero-content centered"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Strategic Roadmap</span>
                        <h1 className="hero-title">
                            Our Vision & <span className="text-gradient-blue">Mission.</span>
                        </h1>
                        <p className="hero-desc" style={{ maxWidth: '600px', marginInline: 'auto' }}>
                            Engineered to drive global clinical leadership through metabolic
                            innovation and absolute ethical integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="vm-content section-spacing">
                <div className="container">
                    <div className="mission-vision-grid">
                        <motion.div
                            className="vm-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="benchmark-icon">
                                <Eye size={32} />
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To be a global leader in innovative and quality products for poultry
                                and aquaculture industry with world-class services to improve animal
                                performance and strive to be the strongest organization best known
                                for ethical business.
                            </p>
                        </motion.div>

                        <motion.div
                            className="vm-card mission"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="benchmark-icon">
                                <Rocket size={32} />
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To build a brand committed to establish a benchmark for high-quality
                                Healthcare products with a mission of growing together with all
                                our stakeholders.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="values-section section-spacing">
                <div className="container">
                    <div className="cta-glass-panel">
                        <div className="cta-content">
                            <span className="section-tag" style={{ color: 'var(--accent-gold)' }}>Core Values</span>
                            <h2 style={{ color: 'white', marginBottom: '3rem' }}>The Clinical Standard.</h2>

                            <div className="benchmarks-grid">
                                {[
                                    { icon: <Shield size={32} />, label: 'Integrity', desc: 'Uncompromising ethical standards in every operation.' },
                                    { icon: <Zap size={32} />, label: 'Innovation', desc: 'Driving progress through molecular research.' },
                                    { icon: <Target size={32} />, label: 'Excellence', desc: 'Delivering precision in clinical solutions.' },
                                    { icon: <Gem size={32} />, label: 'Commitment', desc: 'Absolute dedication to animal healthcare.' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="benchmark-card-premium"
                                        style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <div className="benchmark-icon" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                                            {item.icon}
                                        </div>
                                        <h4 style={{ color: 'white' }}>{item.label}</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default VisionMission;
