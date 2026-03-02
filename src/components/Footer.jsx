import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-v11">
            <div className="container">
                <div className="footer-grid-v11">
                    <div>
                        <div className="logo-v11" style={{ color: 'white', marginBottom: '2rem', fontSize: '2rem' }}>
                            <Building2 size={40} />
                            <span>GREENCO</span>
                        </div>
                        <p style={{ opacity: 0.5, fontSize: '1rem', lineHeight: '2', maxWidth: '340px', marginBottom: '3rem' }}>
                            Hyderabad's premier developer specializing in high-growth residential plots and high-end urban apartments. Quality you can trust, generations can inhabit.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '12px', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--primary)' }}>Sitemap</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', opacity: 0.6, fontWeight: 500 }}>
                            <li><Link to="/">Home Index</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/projects">Global Projects</Link></li>
                            <li><Link to="/services">Elite Services</Link></li>
                            <li><Link to="/contact">Concierge</Link></li>
                        </ul>
                    </div>

                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--secondary)' }}>Assets</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', opacity: 0.6, fontWeight: 500 }}>
                            <li>Residential Plots</li>
                            <li>Luxury Apartments</li>
                            <li>Villa Layouts</li>
                            <li>Industrial Zones</li>
                            <li>Masterplans</li>
                        </ul>
                    </div>

                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '3rem' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--accent)' }}>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', opacity: 0.6, fontWeight: 500 }}>
                            <li>123 GreenCo Plaza, <br />Hyderabad, India</li>
                            <li>+91 98765 43210</li>
                            <li>hello@greenco.com</li>
                            <li style={{ marginTop: '1rem' }}>
                                <button onClick={() => window.scrollTo(0, 0)} style={{ background: 'var(--primary)', border: 'none', color: 'white', padding: '0.8rem 1.2rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    TOP <ArrowUp size={16} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '3rem', display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '0.85rem' }}>
                    <span>© 2026 GREENCO ESTATE PVT LTD.</span>
                    <div style={{ display: 'flex', gap: '3rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
