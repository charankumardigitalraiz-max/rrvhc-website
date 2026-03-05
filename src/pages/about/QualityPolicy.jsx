import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldCheck, Microscope, Zap, Award } from 'lucide-react';
import './AboutSuite.css';

const QualityPolicy = () => {
    return (
        <motion.div
            className="quality-policy-page"
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
                                src="/quality_policy_animal.png"
                                alt="Quality Assurance"
                                className="suite-img-main img-aspect-wide"
                            />
                        </motion.div>
                        <motion.div
                            className="suite-hero-content"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag">Clinical Integrity</span>
                            <h1 className="hero-title">
                                Quality <span className="text-gradient-green">Protocols.</span>
                            </h1>
                            <p className="hero-desc">
                                RRVHC operates with a zero-tolerance policy towards chemical non-compliance.
                                Our commitment to global excellence is verified through rigorous international
                                audits, state-of-the-art molecular analytics, and precise manufacturing controls
                                that ensure every production cycle meets absolute therapeutic benchmarks.
                            </p>
                            <div className="hero-stats-mini" style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-green)' }}>100%</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6, fontWeight: 700 }}>Compliance</span>
                                </div>
                                <div style={{ width: '1px', background: 'var(--neutral-200)' }}></div>
                                <div>
                                    <span style={{ display: 'block', fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-green)' }}>ISO</span>
                                    <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: 0.6, fontWeight: 700 }}>Certified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="framework-section section-spacing">
                <div className="container">
                    <motion.div
                        className="benchmark-card-premium centered framework-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">Clinical Benchmark Framework</h2>
                        <p className="hero-desc" style={{ maxWidth: '850px', marginInline: 'auto', marginBottom: '2.5rem' }}>
                            We at RR Veterinary Health Care Private Limited are committed to achieve
                            absolute customer satisfaction through the total involvement of our personnel
                            and the continual refinement of our Quality Management System. Our processes are
                            engineered to exceed statutory and regulatory requirements globally.
                        </p>

                        <div className="pillars-grid" style={{ marginBottom: '2.5rem' }}>
                            {[
                                {
                                    icon: <Award />,
                                    title: "Global Standards",
                                    desc: "Adherence to National and International Quality Standards including ISO 9001:2015."
                                },
                                {
                                    icon: <Microscope />,
                                    title: "Molecular Testing",
                                    desc: "Rigorous analytical testing of every raw material and finished therapeutic batch."
                                },
                                {
                                    icon: <Zap />,
                                    title: "Modern Precision",
                                    desc: "Implementation of cutting-edge automated manufacturing technologies."
                                },
                                {
                                    icon: <ShieldCheck />,
                                    title: "Ecological Safety",
                                    desc: "Ethical sourcing and environmentally sustainable production practices."
                                }
                            ].map((pillar, i) => (
                                <div key={i} className="pillar-item" style={{ textAlign: 'left' }}>
                                    <div className="pillar-icon">{pillar.icon}</div>
                                    <div className="pillar-text">
                                        <h4>{pillar.title}</h4>
                                        <p>{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="audit-parameters">
                            <h4 style={{ marginBottom: '2rem', color: 'var(--primary-navy)' }}>Audit Parameters & Compliance</h4>
                            <div className="audit-grid">
                                <div className="audit-item">
                                    <span style={{ color: 'var(--primary-blue)', fontWeight: 800, fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>STABILITY</span>
                                    <p>Accelerated stability studies for shelf-life verification.</p>
                                </div>
                                <div className="audit-item">
                                    <span style={{ color: 'var(--primary-blue)', fontWeight: 800, fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>PURITY</span>
                                    <p>Chromatographic analysis for active ingredient purity.</p>
                                </div>
                                <div className="audit-item">
                                    <span style={{ color: 'var(--primary-blue)', fontWeight: 800, fontSize: '0.8rem', display: 'block', marginBottom: '0.5rem' }}>KINETICS</span>
                                    <p>Bio-availability assessment for optimal metabolic uptake.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="iso-section section-spacing">
                <div className="container">
                    <div className="cta-glass-panel">
                        <div className="cta-content">
                            <ShieldCheck size={80} className="mx-auto mb-6" style={{ color: 'var(--accent-gold)' }} />
                            <h3 style={{ color: 'white' }}>ISO 9001:2015 CERTIFIED</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', marginInline: 'auto', fontSize: '17px', lineHeight: '1.7', marginTop: "10px" }}>
                                Our state-of-the-art manufacturing facility undergoes periodic independent audits
                                to ensure the highest levels of molecular compliance and clinical safety in the animal health sector.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default QualityPolicy;
