import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Ruler, ShieldAlert, BadgeCheck, Users2, Rocket } from 'lucide-react';

const items = [
    { title: 'Elite Plot Development', icon: <Rocket size={40} />, color: '#EF4444', desc: 'Accelerated development of residential plots in Hyderabad\'s most promising hubs.' },
    { title: 'Architectural Planning', icon: <Ruler size={40} />, color: '#8B5CF6', desc: 'Bespoke architectural services for luxury villas and custom residential layouts.' },
    { title: 'Safety & Security', icon: <ShieldAlert size={40} />, color: '#F97316', desc: 'Secure gated communities with 24/7 surveillance and ironclad safety protocols.' },
    { title: 'Legal Transparency', icon: <BadgeCheck size={40} />, color: '#10B981', desc: 'Fully approved HMDA/DTCP layouts with immediate registration and clear titles.' },
    { title: 'Construction Elite', icon: <HardHat size={40} />, color: '#2563EB', desc: 'Premium construction using high-grade materials and world-class craftsmanship.' },
    { title: 'Legacy Management', icon: <Users2 size={40} />, color: '#EC4899', desc: 'Dedicated community management to maintain the value of your investment for decades.' },
];

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="page-v11"
        >
            <section className="section-v11 container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <span className="tag-vibrant">Elite Operations</span>
                    <h2 className="title-vibrant">Full-Spectrum <span style={{ color: 'var(--primary)' }}>Expertise.</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.2rem' }}>
                        GreenCo Estate provides end-to-end solutions, ensuring your journey from land acquisition to inhabiting your dream home is seamless and professional.
                    </p>
                </div>

                <div className="grid-vibrant">
                    {items.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                            style={{
                                background: '#fff',
                                padding: '4rem 2.5rem',
                                border: '1px solid var(--border)',
                                borderRadius: '32px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: 0, left: 0, width: '100%', height: '8px', background: s.color
                            }}></div>
                            <div style={{ color: s.color, marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="section-v11" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>Ready to Secure Your Legacy?</h2>
                    <button className="btn-vibrant" style={{ background: 'white', color: 'var(--primary)', fontSize: '1.2rem', padding: '1.2rem 3rem' }}>
                        TALK TO AN EXPERT TODAY
                    </button>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
