import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Globe, PhoneCall } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStructure = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            submenu: [
                { name: 'Company Profile', path: '/about/company' },
                { name: 'Vision & Mission', path: '/about/vision' },
                { name: 'Quality Policy', path: '/about/quality' },
                { name: 'Management', path: '/about/management' },
                { name: 'Gallery', path: '/about/gallery' }
            ]
        },
        {
            name: 'Products',
            path: '/products',
            submenu: [
                { name: 'Poultry', path: '/products/poultry' },
                { name: 'Aquaculture', path: '/products/aquaculture' },
                { name: 'Large Animals', path: '/products/large-animals' },
                { name: 'Sheep & Goat', path: '/products/sheep-goat' },
                { name: 'Canine', path: '/products/canine' }
            ]
        },
        {
            name: 'Careers',
            path: '/careers',
            submenu: [
                { name: 'Opportunities', path: '/careers/vacancies' },
                { name: 'Submit Resume', path: '/careers/resume' }
            ]
        },
        { name: 'Partnership', path: '/partner' },
        { name: 'Contact', path: '/contact' }
    ];

    const menuVariants = {
        hidden: { x: '100%', transition: { type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
        visible: { x: 0, transition: { type: 'tween', duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08, delayChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const isHome = location.pathname === '/';
    // Only Home has a dark hero that needs white text at top
    const needsLightNav = isHome && !scrolled;

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${needsLightNav ? 'at-top' : ''}`}>
                <div className="container nav-content">
                    <Link to="/" className="nav-logo" onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }}>
                        <img src="/rrlogo.png" alt="RRVHC" className="logo-img" />
                    </Link>

                    <div className="nav-links-desktop">
                        <ul className="nav-menu">
                            {navStructure.map((item) => (
                                <li
                                    key={item.name}
                                    className={`nav-item ${item.submenu ? 'has-dropdown' : ''}`}
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.submenu ? (
                                        <div className="menu-link">
                                            <span>{item.name}</span>
                                            <ChevronDown size={14} className={`chevron ${activeDropdown === item.name ? 'rotate' : ''}`} />
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`menu-link ${location.pathname === item.path ? 'active' : ''}`}
                                            onClick={() => window.scrollTo(0, 0)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}

                                    <AnimatePresence>
                                        {item.submenu && activeDropdown === item.name && (
                                            <motion.ul
                                                className="dropdown-menu"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.submenu.map((sub) => (
                                                    <li key={sub.name}>
                                                        <Link
                                                            to={sub.path}
                                                            onClick={() => {
                                                                setActiveDropdown(null);
                                                                window.scrollTo(0, 0);
                                                            }}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav-actions">
                        <Link to="/contact" className="nav-cta-primary hide-mobile">
                            Connect Now
                        </Link>
                        <button
                            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar - Moved outside <nav> for full-screen positioning */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            key="mobile-overlay"
                            className="mobile-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            key="mobile-sidebar"
                            className="mobile-sidebar"
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <div className="sidebar-header">
                                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                                    <img src="/rrlogo.png" alt="Logo" className="sidebar-logo" />
                                </Link>
                                <button className="sidebar-close" onClick={() => setMobileMenuOpen(false)}>
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="sidebar-body">
                                <ul className="sidebar-nav">
                                    {navStructure.map((item) => (
                                        <motion.li key={item.name} variants={itemVariants}>
                                            {item.submenu ? (
                                                <div className="sidebar-group">
                                                    <div
                                                        className={`sidebar-link ${activeDropdown === item.name ? 'active' : ''}`}
                                                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                    >
                                                        {item.name}
                                                        <ChevronDown size={18} className={`chevron ${activeDropdown === item.name ? 'rotate' : ''}`} />
                                                    </div>
                                                    <AnimatePresence>
                                                        {activeDropdown === item.name && (
                                                            <motion.ul
                                                                className="sidebar-submenu"
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                            >
                                                                {item.submenu.map(sub => (
                                                                    <li key={sub.name}>
                                                                        <Link
                                                                            to={sub.path}
                                                                            onClick={() => {
                                                                                setMobileMenuOpen(false);
                                                                                window.scrollTo(0, 0);
                                                                            }}
                                                                        >
                                                                            {sub.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </motion.ul>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    to={item.path}
                                                    className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setMobileMenuOpen(false);
                                                        window.scrollTo(0, 0);
                                                    }}
                                                >
                                                    {item.name}
                                                </Link>
                                            )}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="sidebar-footer">
                                <Link to="/contact" className="sidebar-btn" onClick={() => setMobileMenuOpen(false)}>
                                    Inquiry Setup
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
