import React from 'react';
import { motion } from 'framer-motion';
import { Home, Ruler, Shield, Users } from 'lucide-react';

const services = [
    { title: 'Project Planning', desc: 'Expert feasibility studies and strategic planning for large-scale residential developments.', icon: <Ruler size={32} /> },
    { title: 'Quality Construction', desc: 'Using premium materials and sticking to the highest standards of safety and durability.', icon: <Shield size={32} /> },
    { title: 'Customer Support', desc: 'Dedicated team to guide you through every step of your home buying journey.', icon: <Users size={32} /> },
    { title: 'Home Management', desc: 'Post-handover support and maintenance services for a hassle-free living experience.', icon: <Home size={32} /> },
];

const Services = () => {
    return (
        <section id="services" className="section-v7" style={{ background: 'var(--bg-soft)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="section-subtitle-v7"
                    >
                        What We Offer
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="section-title-v7"
                    >
                        Our Specialized Services
                    </motion.h2>
                </div>

                <div className="service-grid-v7">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card-v7"
                        >
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
