import React from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Camera } from 'lucide-react';
import './AboutSuite.css';

const Gallery = () => {
    const galleryItems = [
        { id: 1, title: 'Industrial Facility', img: '/galary1.jpg', category: 'FACILITY' },
        { id: 2, title: 'Quality Assurance', img: '/galary2.jpg', category: 'CERTIFICATION' },
        { id: 3, title: 'Global Operations', img: '/galary3.jpg', category: 'EVENT' },
        { id: 4, title: 'Technical Excellence', img: '/galary4.jpg', category: 'TEAM' },
        { id: 5, title: 'Production Unit', img: '/galary5.jpg', category: 'FACILITY' },
        { id: 6, title: 'Logistics Hub', img: '/about_hero_custom.png', category: 'LOGISTICS' }
    ];

    return (
        <motion.div
            className="gallery-page"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section className="suite-hero">
                <div className="container">
                    <motion.div
                        className="suite-hero-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-tag">Visual Repository</span>
                        <h1 className="hero-title">
                            Enterprise <span className="text-gradient-blue">Gallery.</span>
                        </h1>
                        <p className="hero-desc">
                            Exploring three decades of clinical excellence, industrial milestones,
                            and global veterinary leadership through our corporate visual archive.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="gallery-section section-spacing">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryItems.map((item, i) => (
                            <motion.div
                                key={item.id}
                                className="gallery-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <img src={item.img} alt={item.title} />
                                <div className="gallery-overlay">
                                    <div className="gallery-info">
                                        <span>{item.category}</span>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="gallery-action">
                                        <Maximize2 size={24} color="white" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section section-spacing">
                <div className="container">
                    <div className="cta-glass-panel">
                        <div className="cta-content flex items-center justify-between">
                            <div className="text-left">
                                <h2 style={{ color: 'white', margin: 0 }}>Discover Our Industrial <br />Excellence in Action.</h2>
                            </div>
                            <div className="flex gap-4">
                                <Camera size={48} className="text-gold opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Gallery;
