import React from 'react';
import { motion } from 'framer-motion';

const services = [
    { title: 'The Acquisition', desc: 'Sourcing extraordinary plots through a private network of heritage guardians.' },
    { title: 'The Dialogue', desc: 'Bespoke architectural consultation where nature informs every structural intent.' },
    { title: 'The Legacy', desc: 'Precise construction management ensuring 100-year structural integrity and aesthetic relevance.' },
    { title: 'The Curatorship', desc: 'Post-handover maintenance and management for the world\'s most discerning estates.' },
];

const SavoirFaire = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="page-v9"
        >
            <section className="container section-v9">
                <span className="section-label-v9">SAVOIR-FAIRE</span>
                <h1 className="title-v9">Our Specialized <br /> Expertise.</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10rem', marginTop: '10rem' }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            style={{ borderTop: '1px solid var(--divider)', paddingTop: '3rem' }}
                        >
                            <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{s.title}</h3>
                            <p style={{ opacity: 0.5, fontSize: '1.1rem', maxWidth: '28rem' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-v9">
                <div style={{ background: 'var(--obsidian)', padding: '15rem 0', textAlign: 'center' }}>
                    <div className="container">
                        <span className="section-label-v9" style={{ color: 'var(--parchment)', opacity: 0.4 }}>THE PHILOSOPHY</span>
                        <h2 className="serif" style={{ color: 'var(--parchment)', fontSize: '5vw', lineHeight: '1.2' }}>
                            "To build is to <br /> speak with the <br /> silent earth."
                        </h2>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default SavoirFaire;
