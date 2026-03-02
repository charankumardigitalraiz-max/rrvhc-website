import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header-v11 ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav-v11">
                    <Link to="/" className="logo-v11">
                        <Building2 size={28} />
                        <span>GREENCO</span>
                    </Link>

                    <div className="nav-links-v11">
                        <NavLink to="/" className={({ isActive }) => `nav-link-v11 ${isActive ? 'active' : ''}`}>HOME</NavLink>
                        <NavLink to="/about" className={({ isActive }) => `nav-link-v11 ${isActive ? 'active' : ''}`}>ABOUT US</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => `nav-link-v11 ${isActive ? 'active' : ''}`}>PROJECTS</NavLink>
                        <NavLink to="/services" className={({ isActive }) => `nav-link-v11 ${isActive ? 'active' : ''}`}>SERVICES</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => `nav-link-v11 ${isActive ? 'active' : ''}`}>CONTACT</NavLink>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                        <Link to="/contact" className="btn-vibrant" style={{ background: 'var(--primary)', color: 'white', padding: '0.7rem 1.4rem', fontSize: '0.85rem' }}>
                            ENQUIRE NOW <ArrowRight size={16} />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
