import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lock, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import './LegalPages.css';

const sections = [
    {
        id: 'overview',
        title: '1. Overview',
        content: `RR Veterinary Health Care Private Limited ("RRVHC", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at rrvhc.in (the "Site").

Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site. We reserve the right to make changes to this Privacy Policy at any time. We will alert you about any changes by updating the "Last updated" date of this policy.`
    },
    {
        id: 'collection',
        title: '2. Information We Collect',
        content: `We may collect information about you in a variety of ways. The information we may collect on the Site includes:

Personal Data: Personally identifiable information, such as your name, email address, telephone number, and company affiliation, that you voluntarily give to us when you fill out our contact form or submit a resume/job application.

Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed before and after accessing the Site.

Financial Data: We do not collect or store financial information on our Site. Payments, if applicable, are processed through secure third-party providers.

Mobile Device Data: Device information such as your mobile device ID, model, and manufacturer, if you access the Site from a mobile device.`
    },
    {
        id: 'use',
        title: '3. How We Use Your Information',
        content: `Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:

• Respond to your inquiries and fulfill your requests for information about our products and services
• Send you administrative information, such as updates about our product portfolio or brochures
• Process job applications submitted through our careers portal
• Monitor and analyze usage and trends to improve your experience with the Site
• Notify you of updates to our website content and product catalog
• Perform other business activities as needed, and as permitted or required by law

We will not sell, rent, or lease your personal information to third parties without your explicit consent.`
    },
    {
        id: 'disclosure',
        title: '4. Disclosure of Your Information',
        content: `We may share information we have collected about you in certain situations. Your information may be disclosed as follows:

By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of RRVHC, our users, or others.

Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.

Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including email delivery, hosting services, data analysis, customer service, and marketing assistance.`
    },
    {
        id: 'cookies',
        title: '5. Cookies & Tracking Technologies',
        content: `We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.

Most browsers are set to accept cookies by default. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings. If you choose to disable cookies, some features of the Site may not function properly.

We do not use cookies for cross-site advertising, behavioral tracking, or selling data to third parties.`
    },
    {
        id: 'security',
        title: '6. Security of Your Information',
        content: `We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against interception or other types of misuse.

Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security of your personal information transmitted to our Site.`
    },
    {
        id: 'retention',
        title: '7. Data Retention',
        content: `We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.

Contact Form submissions are retained for a maximum of 24 months from the date of submission. Resume and job application data is retained for a maximum of 12 months if you are not hired, after which it is securely deleted.`
    },
    {
        id: 'rights',
        title: '8. Your Rights',
        content: `Depending on your location and applicable data protection laws, you may have the following rights with respect to your personal data:

• The right to access personal information we hold about you
• The right to request correction of inaccurate personal data
• The right to request erasure of your personal data
• The right to object to processing of your personal data
• The right to data portability
• The right to withdraw consent at any time

To exercise any of these rights, please contact us using the details provided below. We will respond to your request within 30 days.`
    },
    {
        id: 'children',
        title: '9. Children\'s Privacy',
        content: `Our Site is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us immediately.`
    },
    {
        id: 'contact',
        title: '10. Contact Us',
        content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer at:

RR Veterinary Health Care Private Limited
Phase IV, Near Kukatpally Industrial Park
Hyderabad - 500072, Telangana, India

Email: privacy@rrvhc.in
Phone: +91 40 2307 0000`
    }
];

const PrivacyPolicyPage = () => {
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
            <section className="legal-hero privacy-hero">
                <div className="container">
                    <motion.div
                        className="legal-hero-inner"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* <div className="legal-hero-icon privacy-icon">
                            <Lock size={32} />
                        </div> */}
                        <div className="legal-hero-tag">Legal Document</div>
                        <h1 className="hero-title">Privacy <span className="text-gradient-blue">Policy</span></h1>
                        <p className="hero-desc">
                            We respect your privacy and are committed to protecting your personal data.
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
                        <div className="legal-intro-box privacy-intro">
                            <p>
                                Your privacy is important to us. This Privacy Policy describes how RRVHC collects,
                                uses, processes, and stores information about you when you use our website and services.
                                We encourage you to read this document in full.
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

                        {/* <div className="legal-cta-box">
                            <Mail size={28} />
                            <h3>Privacy Concerns?</h3>
                            <p>Contact our Data Protection Officer for any privacy-related queries.</p>
                            <Link to="/contact" className="premium-btn-primary">Contact Us</Link>
                        </div> */}
                    </main>
                </div>
            </div>
        </motion.div>
    );
};

export default PrivacyPolicyPage;
