import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="page-v11"
        >
            <section className="section-v11 container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '6rem' }}>
                    <div>
                        <span className="tag-vibrant">Connect With Us</span>
                        <h2 className="title-vibrant">Let's Discuss Your <span style={{ color: 'var(--primary)' }}>Aspirations.</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '3.5rem' }}>
                            Speak with our property curators to find the perfect plot or residence that matches your vision.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1.2rem', borderRadius: '20px', color: 'var(--primary)' }}>
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Direct Line</h4>
                                    <p style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.1rem' }}>+91 98765 43210</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.2rem', borderRadius: '20px', color: 'var(--secondary)' }}>
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email Support</h4>
                                    <p style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.1rem' }}>info@greencoestate.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '1.2rem', borderRadius: '20px', color: 'var(--accent)' }}>
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Headquarters</h4>
                                    <p style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.1rem' }}>Jubilee Hills, Hyderabad</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '5rem' }}>
                            <h4 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2em', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Follow our progress</h4>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                                    <button key={i} style={{ border: '1px solid var(--border)', background: 'white', padding: '0.8rem', borderRadius: '12px', cursor: 'pointer' }}>
                                        <Icon size={20} color="var(--primary)" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'white',
                            padding: '5rem',
                            borderRadius: '40px',
                            border: '1px solid var(--border)',
                            boxShadow: '0 30px 60px rgba(37, 99, 235, 0.1)',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'var(--bg-soft)' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'var(--bg-soft)' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>Interested In</label>
                                <select style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'var(--bg-soft)', appearance: 'none' }}>
                                    <option>Residential Plots</option>
                                    <option>Luxury Apartments</option>
                                    <option>Commercial Property</option>
                                    <option>Villa Plots</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>Message</label>
                                <textarea placeholder="Your message..." rows="4" style={{ padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'var(--bg-soft)', resize: 'none' }}></textarea>
                            </div>
                            <button className="btn-vibrant" style={{ background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.2rem' }}>
                                SEND ENQUIRY <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
