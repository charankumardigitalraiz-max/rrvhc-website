import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    Activity,
    ShieldCheck,
    Beaker,
    Microscope,
    Globe2,
    Award,
    TrendingUp
} from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-badge"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="pulse-dot" style={{ background: 'var(--accent-green)' }}></span>
                            <span>Global Leader in Veterinary Formulations</span>
                        </motion.div>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Advancing <br />
                            <span className="text-gradient-green">Clinical Precision.</span>
                        </motion.h1>

                        <motion.p
                            className="hero-desc"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            RR Veterinary Health Care Private Limited engineers advanced
                            molecular solutions for optimal livestock metabolic performance,
                            setting the global benchmark in biosecurity and animal nutrition
                            since 1994.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <Link to="/products" className="premium-btn-primary">
                                Explore Portfolio <ArrowRight size={18} />
                            </Link>
                            <Link to="/about/company" className="btn-outline-glass">
                                Corporate Profile
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        <div className="visual-background">
                            <div className="blob blob-1"></div>
                            <div className="blob blob-2"></div>
                        </div>
                        <img
                            src="/home_hero_veterinary.png"
                            alt="Clinical Innovation"
                            className="hero-main-img"
                        />

                        {/* Floating Status Cards */}
                        <motion.div
                            className="status-card sc-top"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="sc-icon blue"><ShieldCheck size={20} /></div>
                            <div className="sc-info">
                                <span className="sc-val">ISO 9001:2015</span>
                                <span className="sc-label">Certified Global Stature</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="status-card sc-bottom"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="sc-icon gold"><Award size={20} /></div>
                            <div className="sc-info">
                                <span className="sc-val">30+ Years</span>
                                <span className="sc-label">Industrial R&D Legacy</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="stats-bar">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-num">500+</span>
                            <p className="stat-desc">Formulations Developed</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-num">25+</span>
                            <p className="stat-desc">Countries Exported</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-num">100%</span>
                            <p className="stat-desc">GMP Compliance</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-num">15M+</span>
                            <p className="stat-desc">Animals Treated Yearly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="capabilities-section section-spacing">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-tag">Core Competencies</span>
                        <h2 className="section-title">Technological <span className="text-gradient-green">Excellence.</span></h2>
                        <p className="section-subtitle">Our vertical integration ensures unparalleled quality control from molecule to flock.</p>
                    </div>

                    <div className="capabilities-grid">
                        {[
                            {
                                icon: <Microscope />,
                                title: "R&D Synthesis",
                                desc: "In-house molecular engineering focusing on bioavailability and metabolic efficiency."
                            },
                            {
                                icon: <Activity />,
                                title: "Biosecurity",
                                desc: "Advanced disinfectant protocols and immune-envelope protection systems."
                            },
                            {
                                icon: <Globe2 />,
                                title: "Global Supply",
                                desc: "Seamless logistics infrastructure delivering clinical solutions across 4 continents."
                            },
                            {
                                icon: <TrendingUp />,
                                title: "Growth Optimization",
                                desc: "Data-driven nutritional formulations for maximal industrial yield."
                            }
                        ].map((cap, i) => (
                            <motion.div
                                key={i}
                                className="capability-card"
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="cap-icon">{cap.icon}</div>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Divisions */}
            <section className="divisions-section section-spacing bg-white">
                <div className="container">
                    <div className="division-flex">
                        <div className="division-content-main">
                            <span className="section-tag">Strategic Units</span>
                            <h2 className="section-title">Industrial <span className="text-gradient-green">Divisions.</span></h2>
                            <p className="section-desc">
                                We operate across critical agricultural vectors, providing targeted
                                interventions that maximize biological potential and commercial outcomes.
                            </p>

                            <div className="division-list">
                                <div className="div-list-item">
                                    <div className="div-dot"></div>
                                    <div className="div-text">
                                        <h4>Poultry Science</h4>
                                        <p>Comprehensive health solutions including growth promoters, toxin binders, and advanced biosecurity protocols.</p>
                                    </div>
                                </div>
                                <div className="div-list-item">
                                    <div className="div-dot"></div>
                                    <div className="div-text">
                                        <h4>Sheep & Goat Care</h4>
                                        <p>Targeted nutritional supplements designed to strengthen immune systems and prevent infectious diseases.</p>
                                    </div>
                                </div>
                                <div className="div-list-item">
                                    <div className="div-dot"></div>
                                    <div className="div-text">
                                        <h4>Aquaculture Solutions</h4>
                                        <p>Marine-grade probiotics, water quality management, and advanced pond bioremediation systems.</p>
                                    </div>
                                </div>
                                <div className="div-list-item">
                                    <div className="div-dot"></div>
                                    <div className="div-text">
                                        <h4>Canine Division</h4>
                                        <p>Comprehensive health solutions for companion animals, including B-Com More and biosecurity agents.</p>
                                    </div>
                                </div>
                            </div>

                            <Link to="/products" className="premium-btn-primary mt-4">
                                View Full Portfolio
                            </Link>
                        </div>

                        <div className="division-visual-grid">
                            <div className="div-card-mini dc-1">
                                <img src="/poultry_division_premium.png" alt="Poultry Division" />
                                <div className="dc-overlay">
                                    <span>Poultry</span>
                                </div>
                            </div>
                            <div className="div-card-mini dc-2">
                                <img src="/sheep_goat_division_premium.png" alt="Sheep & Goat Division" />
                                <div className="dc-overlay">
                                    <span>Sheep & Goat</span>
                                </div>
                            </div>
                            <div className="div-card-mini dc-3">
                                <img src="/aquaculture_premium_hero_1772433528334.png" alt="Aquaculture Division" />
                                <div className="dc-overlay">
                                    <span>Aquaculture</span>
                                </div>
                            </div>
                            <div className="div-card-mini dc-4">
                                <img src="/canine_division_premium.png" alt="Canine Division" />
                                <div className="dc-overlay">
                                    <span>Canine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-home-section">
                <div className="container">
                    <div className="cta-glass-panel">
                        <div className="cta-content">
                            <h2>Partner with the Pioneers of <br /><span>Veterinary Innovation.</span></h2>
                            <p>Connect with our technical consultants for customized health protocols.</p>
                            <div className="cta-btns">
                                <Link to="/contact" className="premium-btn-primary">Connect with HQ</Link>
                                <Link to="/partner" className="premium-btn-outline white">Partnership Inquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
