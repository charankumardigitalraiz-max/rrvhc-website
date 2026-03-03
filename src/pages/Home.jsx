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
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <motion.div
                            className="hero-badge"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span className="pulse-dot" style={{ background: 'var(--accent-green)' }}></span>
                            <span>Global Leader in Veterinary Formulations</span>
                        </motion.div>

                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Advancing <br />
                            <span className="text-gradient-green">Clinical Precision.</span>
                        </motion.h1>

                        <motion.p
                            className="hero-desc"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            RR Veterinary Health Care Private Limited engineers advanced
                            molecular solutions for optimal livestock metabolic performance,
                            setting the global benchmark in biosecurity and animal nutrition
                            since 1994.
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
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
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
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
                            animate={{ y: [0, -12, 0], rotate: [0, 1, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="sc-icon blue"><ShieldCheck size={20} /></div>
                            <div className="sc-info">
                                <span className="sc-val">ISO 9001:2015</span>
                                <span className="sc-label">Certified Global Stature</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="status-card sc-bottom"
                            animate={{ y: [0, 12, 0], rotate: [0, -1, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
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
            <motion.section
                className="stats-bar"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
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
            </motion.section>

            {/* Core Capabilities */}
            <section className="capabilities-section section-spacing">
                <div className="container">
                    <motion.div
                        className="section-header centered"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                    >
                        <span className="section-tag">Core Competencies</span>
                        <h2 className="section-title">Technological <span className="text-gradient-green">Excellence.</span></h2>
                        <p className="section-subtitle">Our vertical integration ensures unparalleled quality control from molecule to flock.</p>
                    </motion.div>

                    <motion.div
                        className="capabilities-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
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
                                variants={itemVariants}
                                whileHover={{
                                    y: -15,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                <div className="cap-icon">{cap.icon}</div>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Divisions */}
            <section className="divisions-section section-spacing bg-white">
                <div className="container">
                    <div className="division-flex">
                        <motion.div
                            className="division-content-main"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="section-tag">Strategic Units</span>
                            <h2 className="section-title">Industrial <span className="text-gradient-green">Divisions.</span></h2>
                            <p className="section-desc">
                                We operate across critical agricultural vectors, providing targeted
                                interventions that maximize biological potential and commercial outcomes.
                            </p>

                            <motion.div
                                className="division-list"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {[
                                    {
                                        title: "Poultry Science",
                                        desc: "Comprehensive health solutions including growth promoters, toxin binders, and advanced biosecurity protocols."
                                    },
                                    {
                                        title: "Sheep & Goat Care",
                                        desc: "Targeted nutritional supplements designed to strengthen immune systems and prevent infectious diseases."
                                    },
                                    {
                                        title: "Aquaculture Solutions",
                                        desc: "Marine-grade probiotics, water quality management, and advanced pond bioremediation systems."
                                    },
                                    {
                                        title: "Canine Division",
                                        desc: "Comprehensive health solutions for companion animals, including B-Com More and biosecurity agents."
                                    }
                                ].map((div, i) => (
                                    <motion.div key={i} className="div-list-item" variants={itemVariants}>
                                        <div className="div-dot"></div>
                                        <div className="div-text">
                                            <h4>{div.title}</h4>
                                            <p>{div.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <Link to="/products" className="premium-btn-primary mt-4">
                                    View Full Portfolio
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="division-visual-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                { src: "/poultry_division_premium.png", label: "Poultry" },
                                { src: "/sheep_goat_division_premium.png", label: "Sheep & Goat" },
                                { src: "/aquaculture_premium_hero_1772433528334.png", label: "Aquaculture" },
                                { src: "/canine_division_premium.png", label: "Canine" }
                            ].map((img, i) => (
                                <motion.div
                                    key={i}
                                    className={`div-card-mini dc-${i + 1}`}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, zIndex: 10 }}
                                >
                                    <img src={img.src} alt={img.label} />
                                    <div className="dc-overlay">
                                        <span>{img.label}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="cta-home-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <div className="container">
                    <div
                        className="cta-glass-panel"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom, rgba(15, 17, 42, 0.4), rgba(15, 17, 42, 0.8)), url(/cta_banner_animal.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="cta-content">
                            <h2>Partner with the Pioneers of <br /><span>Veterinary Innovation.</span></h2>
                            <p>Connect with our technical consultants for customized health protocols.</p>
                            <div className="cta-btns">
                                <Link to="/contact" className="premium-btn-white">Connect with HQ</Link>
                                <Link to="/partner" className="premium-btn-outline white">Partnership Inquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Home;
