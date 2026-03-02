import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const banners = [
    {
        tag: 'Elite Real Estate',
        title: <>Discover Your <span style={{ color: 'var(--primary)' }}>Supreme</span> Living Space.</>,
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
        btnColor: 'var(--primary)',
        accent: 'var(--primary)'
    },
    {
        tag: 'Strategic Investment',
        title: <>Invest in <span style={{ color: 'var(--secondary)' }}>High-Growth</span> Assets.</>,
        img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600',
        btnColor: 'var(--secondary)',
        accent: 'var(--secondary)'
    },
    {
        tag: 'Architectural Excellence',
        title: <>Building <span style={{ color: 'var(--accent)' }}>Modern</span> Masterpieces.</>,
        img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
        btnColor: 'var(--accent)',
        accent: 'var(--accent)'
    }
];

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="page-v11"
        >
            {/* HERO SECTION WITH FULL-WIDTH IMMERSIVE BANNER */}
            <section className="hero-v11">
                <AnimatePresence>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="hero-slide-v11"
                    >
                        <motion.img
                            key={`img-${currentSlide}`}
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8, ease: "linear" }}
                            src={banners[currentSlide].img}
                            alt="Hero Background"
                            className="hero-bg-v11"
                        />
                        <div className="hero-overlay-v11"></div>

                        <div className="hero-content-v11">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <span className="tag-vibrant" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', backdropFilter: 'blur(5px)' }}>
                                    {banners[currentSlide].tag}
                                </span>
                                <h3 className="title-vibrant" style={{ marginBottom: '4rem' }}>
                                    {banners[currentSlide].title}
                                </h3>
                                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Link to="/projects" className="btn-vibrant" style={{ background: 'white', color: 'var(--primary)', fontWeight: 800 }}>
                                        EXPLORE PROJECTS <ArrowRight size={20} />
                                    </Link>
                                    <Link to="/contact" className="btn-vibrant" style={{ background: 'transparent', color: 'white', border: '2px solid white' }}>
                                        ENQUIRE NOW
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slider Navigation Controls */}
                <div className="slider-nav-v11">
                    <button onClick={prevSlide} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem', borderRadius: '50%', cursor: 'pointer', color: 'white', backdropFilter: 'blur(10px)' }}>
                        <ChevronLeft size={28} />
                    </button>
                    <button onClick={nextSlide} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)', padding: '1rem', borderRadius: '50%', cursor: 'pointer', color: 'white', backdropFilter: 'blur(10px)' }}>
                        <ChevronRight size={28} />
                    </button>
                </div>

                {/* Slider Pagination Dots */}
                <div className="slider-dots-v11">
                    {banners.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            style={{
                                width: currentSlide === i ? '40px' : '12px',
                                height: '12px',
                                borderRadius: '6px',
                                border: 'none',
                                background: currentSlide === i ? 'white' : 'rgba(255,255,255,0.3)',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* VIBRANT FEATURES PREVIEW */}
            <section className="section-v11 container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {[
                        { title: 'Prime Locations', icon: <Globe size={32} />, color: 'var(--primary)', desc: 'Strategically chosen high-growth locations in Hyderabad.' },
                        { title: 'Pure Integrity', icon: <ShieldCheck size={32} />, color: 'var(--secondary)', desc: '100% transparent documentation and legal clarity.' },
                        { title: 'Rapid Execution', icon: <Zap size={32} />, color: 'var(--accent)', desc: 'Commitment to on-time project handover, every time.' }
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            style={{
                                padding: '3.5rem 2.5rem',
                                background: '#fff',
                                borderRadius: '24px',
                                border: '1px solid var(--border)',
                                borderTop: `6px solid ${f.color}`,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                            }}
                        >
                            <div style={{ color: f.color, marginBottom: '2rem' }}>{f.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* VIBRANT SHOWCASE */}
            <section className="section-v11" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
                        <div style={{ maxWidth: '600px' }}>
                            <span className="tag-vibrant">Featured Estates</span>
                            <h2 className="title-vibrant">Elite Property Collection</h2>
                        </div>
                        <Link to="/projects" className="btn-vibrant" style={{ background: 'var(--primary)', color: 'white' }}>
                            VIEW ALL <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid-vibrant">
                        {[
                            { title: 'The Obsidian Heights', type: 'Residential Plots', price: '₹75L Onwards', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d' },
                            { title: 'Azure Sky Terraces', type: 'Luxury Apartments', price: '₹1.2Cr Onwards', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811' },
                            { title: 'Emerald Valley Plains', type: 'Villa Communities', price: '₹95L Onwards', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b' }
                        ].map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="card-vibrant"
                            >
                                <div style={{ height: '280px', overflow: 'hidden' }}>
                                    <img src={`${p.img}?auto=format&fit=crop&q=80&w=800`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={p.title} />
                                </div>
                                <div style={{ padding: '2.5rem' }}>
                                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>{p.type}</span>
                                    <h3 style={{ fontSize: '1.6rem', margin: '1rem 0' }}>{p.title}</h3>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--secondary)' }}>{p.price}</span>
                                        <button style={{ color: 'var(--primary)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>Interested?</button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
