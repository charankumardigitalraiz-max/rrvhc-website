import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero-v7">
            <div className="container">
                <div className="hero-box-v7">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="section-subtitle-v7" style={{ color: '#fff' }}
                    >
                        Welcome to GreenCo Estate
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        className="hero-title-v7"
                    >
                        Crafting Your Dream <br /> Living Spaces
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
                        className="hero-text-v7"
                    >
                        Experience the perfect blend of modern luxury and nature's serenity with
                        our premium residential projects in Hyderabad's most sought-after locations.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        <a href="#projects" className="btn-primary-v7" style={{ padding: '1rem 2rem' }}>Our Projects</a>
                        <a href="#contact" className="btn-primary-v7" style={{ background: 'transparent', border: '2px solid #fff', padding: '1rem 2rem' }}>Contact Us</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
