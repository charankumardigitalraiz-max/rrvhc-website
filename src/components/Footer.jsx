import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/rrlogo.png" alt="RRVHC" />
                            {/* <span>RRVHC <small>PREMIUM</small></span> */}
                        </Link>
                        <p className="footer-about">
                            Leading the global frontier in veterinary molecular medicine.
                            Engineering precision formulations for sustainable livestock health
                            and industrial biosecurity.
                        </p>
                        <div className="social-links">
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4>Strategic Units</h4>
                        <ul>
                            <li><Link to="/about/company">Corporate Profile</Link></li>
                            <li><Link to="/about/vision">Vision & Philosophy</Link></li>
                            <li><Link to="/about/quality">QC Standards</Link></li>
                            <li><Link to="/about/management">Board of Directors</Link></li>
                            <li><Link to="/about/gallery">Infrastructure</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Products</h4>
                        <ul>
                            <li><Link to="/products">Full Product Catalog</Link></li>
                            <li><Link to="/products">Poultry Science</Link></li>
                            <li><Link to="/products">Aquaculture Care</Link></li>
                            <li><Link to="/products">Large Animal Health</Link></li>
                            <li><Link to="/products">Small Ruminants</Link></li>
                            <li><Link to="/products">Canine Care</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/partner">Become a Partner</Link></li>
                            <li><Link to="/careers/vacancies">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact Hub</h4>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={18} className="icon" />
                                <span>Hyderabad, TS, India</span>
                            </li>
                            <li>
                                <Phone size={18} className="icon" />
                                <span>+91 000 000 0000</span>
                            </li>
                            <li>
                                <Mail size={18} className="icon" />
                                <span>connect@rrvhc.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-content">
                        <p>© {new Date().getFullYear()} RR Veterinary Health Care. All Rights Reserved.</p>
                        <div className="legal-links">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
