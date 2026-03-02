import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Award, Clock } from 'lucide-react';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="page-v11"
        >
            <section className="section-v11 container">
                <div className="hero-grid-v11">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="tag-vibrant">Our Heritage</span>
                        <h2 className="title-vibrant">Fifteen Years of <span style={{ color: 'var(--secondary)' }}>Trust and Integrity.</span></h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            GreenCo Estate has redefined the residential landscape of Hyderabad. We don't just sell plots; we build foundations for generations. Our journey is paved with transparency and an unwavering commitment to our patrons.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {[
                                { title: 'Total Projects', val: '75+', icon: <TrendingUp size={24} /> },
                                { title: 'Happy Families', val: '5k+', icon: <Award size={24} /> },
                                { title: 'On-Time Delivery', val: '100%', icon: <Clock size={24} /> },
                                { title: 'Quality Rating', val: '5.0', icon: <CheckCircle2 size={24} /> }
                            ].map((stat, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ color: 'var(--primary)' }}>{stat.icon}</div>
                                    <div>
                                        <h4 style={{ fontSize: '1.4rem', color: 'var(--text-main)' }}>{stat.val}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{stat.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                                alt="Professional Real Estate"
                                style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-luxe)' }}
                            />
                            <div style={{ position: 'absolute', bottom: '2rem', left: '-2rem', background: 'var(--primary)', color: 'white', padding: '2.5rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                                <h3 style={{ fontSize: '3rem' }}>15+</h3>
                                <p style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem' }}>Years of Excellence</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section-v11" style={{ background: 'var(--bg-soft)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span className="tag-vibrant">Core Methodology</span>
                        <h2 className="title-vibrant">Why The Elite Choose <span style={{ color: 'var(--primary)' }}>GreenCo</span></h2>
                    </div>

                    <div className="grid-vibrant">
                        {[
                            { title: 'Strategic Planning', theme: 'var(--primary)', desc: 'Meticulous attention to infrastructure and long-term viability.' },
                            { title: 'Eco-Sustainability', theme: 'var(--secondary)', desc: 'Integrating green spaces and sustainable development practices.' },
                            { title: 'Legal Fortress', theme: 'var(--accent)', desc: 'Zero-risk documentation with crystal clear project clearance.' }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{ background: '#fff', padding: '3rem', borderRadius: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}
                            >
                                <div style={{ width: '50px', height: '6px', background: v.theme, marginBottom: '2rem', borderRadius: '3px' }}></div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{v.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
