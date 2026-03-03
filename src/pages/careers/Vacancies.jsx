import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Vacancies = () => {
    const jobs = [
        {
            title: 'Regional Sales Manager',
            location: 'Hyderabad, Telangana',
            dept: 'Sales & Marketing',
            type: 'Full-Time'
        },
        {
            title: 'Technical Consultant (Poultry)',
            location: 'Vijayawada, AP',
            dept: 'Technical Services',
            type: 'Field-Based'
        },
        {
            title: 'Production Supervisor',
            location: 'Industrial Park, Pashamylaram',
            dept: 'Manufacturing',
            type: 'On-Site'
        }
    ];

    return (
        <motion.div
            className="careers-page"
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
                            <span className="section-tag">Opportunity // Growth</span>
                            <h1 className="hero-title">
                                Current <span className="text-gradient-blue">Vacancies.</span>
                            </h1>
                            <p className="hero-desc">
                                Build your clinical career with the leader in industrial veterinary healthcare.
                                We seek innovators, scientists, and experts to join our global mission.
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
                                    src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2000"
                                    alt="Agricultural Careers"
                                />
                                <div className="visual-badge">
                                    <TrendingUp size={24} />
                                    <span>Global Expansion</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container vacancies-section section-spacing">
                <div className="vacancies-container">
                    <div className="section-header centered">
                        <h2 className="section-title">Open <span className="text-gradient-blue">Positions.</span></h2>
                    </div>

                    <div className="vacancies-list mt-4">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={job.title}
                                className="vacancy-card-premium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="vc-info">
                                    <span className="section-tag" style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem', fontSize: '0.7rem' }}>{job.dept}</span>
                                    <h3>{job.title}</h3>
                                    <div className="vc-meta">
                                        <span><MapPin size={14} /> {job.location}</span>
                                        <span><Building2 size={14} /> {job.type}</span>
                                    </div>
                                </div>
                                <Link to="/careers/resume" className="premium-btn-primary">
                                    Apply Now <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="general-app-box mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3>Don't see a fit?</h3>
                        <p>We're always looking for exceptional talent. Send us your profile for future opportunities.</p>
                        <Link to="/careers/resume" className="premium-btn-outline">
                            General Application
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Vacancies;
