import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Factory, ShieldCheck, Zap, Target, ArrowRight } from 'lucide-react';
import './AboutSuite.css';

const AboutCompany = () => {
    return (
        <motion.div
            className="about-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Page Hero */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-grid">
                        <motion.div
                            className="about-hero-visual"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <img src="/about_company_hero.png" alt="Corporate" className="about-hero-img" />
                            <div className="experience-badge">
                                <span className="number">30+</span>
                                <span className="label">Years of <br />Excellence</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="about-hero-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag">Corporate Profile // Est. 1994</span>
                            <h1 className="hero-title">
                                The Benchmark in <span className="text-gradient-blue">Veterinary Excellence.</span>
                            </h1>
                            <p className="hero-desc">
                                RR Veterinary Health Care Private Limited delivers world-class clinical
                                infrastructure and precision metabolic solutions, empowering the global
                                agri-tech sector with over three decades of industrial heritage and
                                ethical commitment.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Industrial Evolution */}
            <section className="about-content-section section-spacing">
                <div className="container">
                    <div className="content-grid">
                        <motion.div
                            className="content-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title">Industrial <span className="text-gradient-blue">Evolution.</span></h2>
                            <p>
                                Headquartered in the high-tech industrial corridor of Hyderabad, India,
                                **RR Veterinary Health Care Private Limited** stands as a premier
                                manufacturer and exporter of precision animal health solutions.
                            </p>
                            <p>
                                Our organization specializes in high-performance industrial health
                                divisions, focusing on Poultry Science, Aquaculture Systems,
                                and Large Animal genetics.
                            </p>
                            <div className="quote-box">
                                <p>"Our mission is to build a benchmark for high-quality Healthcare products, growing together with all our stakeholders through molecular integrity."</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="content-visual"
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src="/poultry_hero_new.png" alt="Our Farm Operations" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Benchmarks */}
            <section className="benchmarks-section section-spacing bg-white">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-tag">Quality Standards</span>
                        <h2 className="section-title">Global Benchmarks.</h2>
                    </div>

                    <div className="benchmarks-grid">
                        {[
                            {
                                icon: <ShieldCheck size={32} />,
                                title: "ISO 9001:2015",
                                desc: "Certified Quality Management ensuring global standards across every production cycle."
                            },
                            {
                                icon: <Zap size={32} />,
                                title: "GMP Protocol",
                                desc: "Good Manufacturing Practices guaranteeing molecular integrity in our core facilities."
                            },
                            {
                                icon: <Globe size={32} />,
                                title: "Global Reach",
                                desc: "Serving over twenty international markets with consistent clinical performance."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="benchmark-card-premium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="benchmark-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategic Timeline */}
            <section className="timeline-section section-spacing">
                <div className="container">
                    <div className="timeline-flex">
                        <div className="timeline-content">
                            <span className="section-tag">Historical Map</span>
                            <h2 className="section-title">Strategic Roadmap.</h2>
                            <ul className="timeline-list">
                                <li>
                                    <span className="year">2008</span>
                                    <p>Inception of RR Health Care</p>
                                </li>
                                <li>
                                    <span className="year">2010</span>
                                    <p>Launch of ELIMINATOR Series</p>
                                </li>
                                <li>
                                    <span className="year">2011</span>
                                    <p>ANTIPROL Innovation Breakthrough</p>
                                </li>
                                <li>
                                    <span className="year">2016</span>
                                    <p>RR Veterinary Health Care Pvt Ltd Reorganization</p>
                                </li>
                            </ul>
                        </div>
                        <div className="timeline-visual">
                            <img src="/map.jpg" alt="Roadmap" className="map-img" />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutCompany;
