import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react';
import './LegalPages.css';

const sections = [
    {
        id: 'acceptance',
        title: '1. Acceptance of Terms',
        content: `By accessing or using the website of RR Veterinary Health Care Private Limited ("RRVHC", "we", "us", or "our") at rrvhc.in (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our Site.

These Terms apply to all visitors, users, and any other persons who access or use the Site. RRVHC reserves the right to update or modify these Terms at any time without prior notice. Your continued use of the Site after such changes constitutes your acceptance of the new Terms.`
    },
    {
        id: 'use',
        title: '2. Use of the Site',
        content: `You agree to use this Site only for lawful purposes and in a manner that does not infringe the rights of others or restrict or inhibit their use and enjoyment of this Site. Prohibited behavior includes, but is not limited to:

• Engaging in any conduct that is unlawful, fraudulent, or harmful
• Transmitting any unsolicited or unauthorized advertising or promotional material
• Attempting to gain unauthorized access to any part of the Site or its related systems
• Using the Site to transmit or distribute viruses, malware, or other harmful software
• Scraping, data-mining, or systematically extracting information from this Site without our written permission

RRVHC reserves the right to restrict, suspend, or terminate your access to the Site at its sole discretion, without notice, for conduct that violates these Terms.`
    },
    {
        id: 'ip',
        title: '3. Intellectual Property',
        content: `All content on this Site, including but not limited to text, graphics, logos, images, product information, brochures, formulations, and software, is the exclusive property of RRVHC or its content suppliers and is protected by applicable Indian and international intellectual property laws.

You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any material on our Site without prior written consent from RRVHC. Unauthorized use of any materials on this Site may violate copyright laws, trademark laws, and other regulations.`
    },
    {
        id: 'products',
        title: '4. Product Information & Brochures',
        content: `The product information, brochures, and technical data available on this Site are provided for informational purposes only. RRVHC makes no warranties or representations that the product information is accurate, complete, current, or error-free.

All veterinary products described on this Site are regulated substances. Their use must comply with applicable veterinary prescription laws, dosage guidelines provided by a licensed veterinarian, and all local and national regulatory requirements. RRVHC shall not be liable for any misuse, misapplication, or improper handling of any product described on this Site.

Product availability, formulations, and pricing are subject to change without notice.`
    },
    {
        id: 'disclaimer',
        title: '5. Disclaimer of Warranties',
        content: `This Site and all content, materials, information, products, and services included on or otherwise made available to you through the Site are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied.

RRVHC expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. RRVHC does not warrant that the Site will be uninterrupted, timely, secure, or error-free, or that defects will be corrected.`
    },
    {
        id: 'liability',
        title: '6. Limitation of Liability',
        content: `To the fullest extent permitted by applicable law, RRVHC and its directors, officers, employees, agents, licensors, and service providers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your access to, use of, or inability to access or use the Site
• Any conduct or content of any third party on the Site
• Any content obtained from the Site
• Unauthorized access, use, or alteration of your transmissions or content

This limitation applies whether based on warranty, contract, tort (including negligence), or any other legal theory, regardless of whether RRVHC has been informed of the possibility of such damage.`
    },
    {
        id: 'thirdparty',
        title: '7. Third-Party Links',
        content: `Our Site may contain links to third-party websites or services that are not owned or controlled by RRVHC. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly recommend that you review the terms and privacy policies of any third-party sites you visit.`
    },
    {
        id: 'governing',
        title: '8. Governing Law',
        content: `These Terms shall be governed by and construed in accordance with the laws of India, specifically the state of Telangana, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in Hyderabad, Telangana, India, for the resolution of any disputes arising from these Terms or your use of the Site.`
    },
    {
        id: 'contact',
        title: '9. Contact Us',
        content: `If you have questions or concerns about these Terms and Conditions, please contact us at:

RR Veterinary Health Care Private Limited
Phase IV, Near Kukatpally Industrial Park
Hyderabad - 500072, Telangana, India

Email: info@rrvhc.in
Phone: +91 40 2307 0000`
    }
];

const TermsPage = () => {
    const [openSection, setOpenSection] = useState(null);

    return (
        <motion.div
            className="legal-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Hero */}
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        className="legal-hero-inner"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* <div className="legal-hero-icon">
                            <Shield size={32} />
                        </div> */}
                        <div className="legal-hero-tag">Legal Document</div>
                        <h1 className="hero-title">Terms & <span className="text-gradient-blue">Conditions</span></h1>
                        <p className="hero-desc">
                            Please read these terms carefully before using our website or products.
                            Last updated: March 2025
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container legal-body">
                <div className="legal-layout">

                    {/* Sidebar TOC */}
                    <aside className="legal-toc">
                        <div className="toc-card">
                            <h3>Contents</h3>
                            <nav>
                                {sections.map(s => (
                                    <a key={s.id} href={`#${s.id}`} className="toc-link">{s.title}</a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="legal-main">
                        <div className="legal-intro-box">
                            <p>
                                These Terms and Conditions ("Terms") govern your use of the RRVHC website and all associated
                                content, features, and services. By accessing our Site, you confirm that you are at least 18
                                years of age and have read, understood, and agree to be bound by these Terms.
                            </p>
                        </div>

                        {sections.map((section, i) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                className="legal-section"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.04 }}
                            >
                                <button
                                    className={`legal-section-head ${openSection === section.id ? 'open' : ''}`}
                                    onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                                >
                                    <span>{section.title}</span>
                                    {openSection === section.id
                                        ? <ChevronUp size={18} />
                                        : <ChevronDown size={18} />
                                    }
                                </button>
                                <AnimatePresence>
                                    {openSection === section.id && (
                                        <motion.div
                                            className="legal-section-body"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p className="legal-text">{section.content}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                        {/* 
                        <div className="legal-cta-box">
                            <Mail size={28} />
                            <h3>Questions about our Terms?</h3>
                            <p>Our legal team is happy to clarify any aspect of our Terms and Conditions.</p>
                            <Link to="/contact" className="premium-btn-primary">Contact Us</Link>
                        </div> */}
                    </main>
                </div>
            </div>
        </motion.div>
    );
};

export default TermsPage;
