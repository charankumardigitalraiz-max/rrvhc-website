import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Fortune Greens', type: 'Residential Villa Plots', status: 'Ongoing', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
    { title: 'Urban Greens', type: 'Luxury Apartments', status: 'Completed', img: 'https://images.unsplash.com/photo-1460317442991-0ec239397148?auto=format&fit=crop&q=80&w=800' },
    { title: 'Green Valley', type: 'Premium Plots', status: 'New Launch', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800' },
];

const Projects = () => {
    return (
        <section id="projects" className="section-v7">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-subtitle-v7">Our Projects</span>
                    <h2 className="section-title-v7">Featured Residential Communities</h2>
                </div>

                <div className="project-grid-v7">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="project-card-v7"
                        >
                            <img src={p.img} alt={p.title} className="project-img-v7" />
                            <div className="project-body-v7">
                                <span className="project-status-v7">{p.status}</span>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{p.type}</p>
                                <a href="#" style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.9rem' }}>View Details →</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
