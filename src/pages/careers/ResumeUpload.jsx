import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileSearch, ArrowRight, UserCheck } from 'lucide-react';
import './Careers.css';

const ResumeUpload = () => {
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
                            <span className="section-tag">Talent Acquisition</span>
                            <h1 className="hero-title">
                                Join the <span className="text-gradient-blue">Future.</span>
                            </h1>
                            <p className="hero-desc">
                                Submit your technical profile to our global recruitment database.
                                Our HR division reviews every application for strategic alignment.
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
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000"
                                    alt="Careers Portal"
                                />
                                <div className="visual-badge">
                                    <UserCheck size={24} />
                                    <span>HR Portal Active</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="application-section section-spacing bg-white">
                <div className="container">
                    <div className="inquiry-container">
                        <motion.div
                            className="inquiry-form-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="form-head centered">
                                <h2 className="section-title">Application Matrix</h2>
                                <p>Provide your clinical and operational credentials for review.</p>
                            </div>

                            <form className="premium-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Dr. Jane Smith" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="jane.smith@example.com" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Department of Interest</label>
                                    <select className="premium-select">
                                        <option>Scientific R&D</option>
                                        <option>Industrial Manufacturing</option>
                                        <option>Global Sales & Marketing</option>
                                        <option>Clinical Services</option>
                                        <option>Operations & Supply Chain</option>
                                    </select>
                                </div>

                                <div className="resume-dropzone">
                                    <UploadCloud size={48} className="text-blue mb-4" />
                                    <h3>Upload Curriculum Vitae</h3>
                                    <p>Drag and drop your file here, or click to browse.<br />Supports PDF, DOC, DOCX (Max 5MB)</p>
                                    <input type="file" className="hidden-file" id="resume-upload" />
                                </div>

                                <button type="submit" className="premium-btn-primary w-full">
                                    Submit Application <ArrowRight size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ResumeUpload;
