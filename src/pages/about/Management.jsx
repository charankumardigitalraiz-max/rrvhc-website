import React from 'react';
import { motion } from 'framer-motion';
import { UserRound, Linkedin, Mail } from 'lucide-react';
import './AboutSuite.css';

const Management = () => {
    const leaders = [
        {
            name: 'Mr. Y. Ram Mohan Rao',
            role: 'Chairman & Managing Director',
            bio: 'A visionary leader in industrial veterinary health with decades of experience in global market development and manufacturing excellence.'
        },
        {
            name: 'Dr. Sreekanth Devalraju',
            role: 'Technical Director',
            bio: 'Expert in clinical formulations and biological catalysts, driving the scientific innovation and technical integrity of RRVHC.'
        }
    ];

    return (
        <motion.div
            className="management-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section className="suite-hero">
                <div className="container">
                    <div className="suite-hero-grid">
                        <motion.div
                            className="suite-hero-visual"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img
                                src="/management_team_animal.png"
                                alt="Leadership"
                                className="suite-img-main img-aspect-wide"
                            />
                        </motion.div>
                        <motion.div
                            className="suite-hero-content"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag">Leadership Board</span>
                            <h1 className="hero-title">
                                Our <span className="text-gradient-blue">Management.</span>
                            </h1>
                            <p className="hero-desc">
                                RRVHC is guided by industry veterans with deep clinical, technical, and commercial
                                expertise. Our leadership team is dedicated to maintaining the highest standards
                                of pharmaceutical integrity while driving sustainable growth across global
                                veterinary healthcare markets.
                            </p>
                            <div className="hero-stats-mini" style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-navy)' }}>30+</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6, fontWeight: 700 }}>Years Exp.</span>
                                </div>
                                <div style={{ width: '1px', background: 'var(--neutral-200)' }}></div>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 800, fontSize: '1.5rem', color: 'var(--primary-navy)' }}>Global</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6, fontWeight: 700 }}>Presence</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="principles-section section-spacing">
                <div className="container">
                    <div className="cta-glass-panel">
                        <div className="cta-content">
                            <span className="section-tag" style={{ color: 'var(--accent-gold)' }}>Governance</span>
                            <h2 style={{ color: 'white', marginBottom: '3rem' }}>Management Principles</h2>

                            <div className="benchmarks-grid">
                                {[
                                    { title: 'Transparency', desc: 'Open communication and ethical reporting across all corporate levels.' },
                                    { title: 'Accountability', desc: 'Total responsibility for clinical outcomes and stakeholder value.' },
                                    { title: 'Innovation', desc: 'Encouraging technical foresight to solve complex animal health challenges.' },
                                    { title: 'Sustainability', desc: 'Long-term commitment to environmentally responsible manufacturing.' }
                                ].map((principle, i) => (
                                    <div key={i} className="benchmark-card-premium" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', textAlign: 'left', padding: '2rem' }}>
                                        <h4 style={{ color: 'white', marginBottom: '1rem' }}>{principle.title}</h4>
                                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0 }}>{principle.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="leaders-section section-spacing">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Industrial <span className="text-gradient-blue">Foresight.</span></h2>
                        <p className="section-subtitle" style={{ maxWidth: '700px', marginInline: 'auto' }}>
                            Our leadership team brings together decades of operational excellence, scientific innovation, and a shared vision for the future of veterinary science.
                        </p>
                    </div>

                    <div className="leaders-grid" style={{ marginTop: '4rem' }}>
                        {leaders.map((person, i) => (
                            <motion.div
                                key={person.name}
                                className="leader-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <div className="leader-avatar">
                                    <UserRound size={48} />
                                </div>
                                <span className="section-tag" style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>{person.role}</span>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{person.name}</h3>
                                <p style={{ opacity: 0.7, lineHeight: '1.8', fontSize: '1rem' }}>
                                    {person.bio}
                                </p>
                                <div className="social-links justify-center" style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                                    <a href="#" style={{ color: 'var(--primary-navy)', opacity: 0.6 }}><Linkedin size={20} /></a>
                                    <a href="#" style={{ color: 'var(--primary-navy)', opacity: 0.6 }}><Mail size={20} /></a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Management;
