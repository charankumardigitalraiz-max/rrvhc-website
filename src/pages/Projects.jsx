import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Filter, Layers } from 'lucide-react';

const projects = [
    { title: 'Obsidian Elite Heights', loc: 'Jubilee Hills', type: 'Premium Plots', status: '85% SOLD', color: '#3B82F6', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d' },
    { title: 'Azure Sky Mansions', loc: 'Financial District', type: 'Luxury Apartments', status: 'NEW LAUNCH', color: '#10B981', img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811' },
    { title: 'Bronze Valley Retreat', loc: 'Adibatla', type: 'Residential Plots', status: 'AVAILABLE', color: '#F59E0B', img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b' },
    { title: 'Iron Canopy Woods', loc: 'Gachibowli', type: 'Eco Infrastructure', status: 'IN PROGRESS', color: '#6366F1', img: 'https://images.unsplash.com/photo-1600210492493-09470514030d' },
    { title: 'Skyline Penthouse Hub', loc: 'Madhapur', type: 'Commercial / Res', status: 'RESERVED', color: '#EC4899', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750' },
    { title: 'Zenith Garden Estate', loc: 'Tellapur', type: 'Curated Plots', status: 'LIMITED REMAINING', color: '#8B5CF6', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688' },
];

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="page-v11"
        >
            <section className="section-v11 container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
                    <div style={{ maxWidth: '700px' }}>
                        <span className="tag-vibrant">Portfolio</span>
                        <h2 className="title-vibrant">Architectural <span style={{ color: 'var(--primary)' }}>Achievements.</span></h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Explore our diverse range of residential and commercial developments across Hyderabad.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <button className="btn-vibrant" style={{ border: '1px solid var(--border)', background: 'white' }}>
                            <Layers size={18} /> ALL
                        </button>
                        <button className="btn-vibrant" style={{ background: 'var(--secondary)', color: 'white' }}>
                            <Filter size={18} /> FILTER
                        </button>
                    </div>
                </div>

                <div className="grid-vibrant">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                            viewport={{ once: true }}
                            className="card-vibrant"
                            style={{ position: 'relative' }}
                        >
                            <div style={{ height: '320px', overflow: 'hidden', position: 'relative' }}>
                                <img src={`${p.img}?auto=format&fit=crop&q=80&w=1000`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }} className="project-img" alt={p.title} />
                                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: p.color, color: 'white', padding: '6px 16px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 800 }}>
                                    {p.status}
                                </div>
                            </div>
                            <div style={{ padding: '2.5rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <MapPin size={16} color={p.color} /> {p.loc}
                                </span>
                                <h3 style={{ fontSize: '1.8rem', margin: '1rem 0' }}>{p.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{p.type}. Strategic development in high-growth Hyderabad zones.</p>
                                <button style={{ width: '100%', padding: '1rem', borderRadius: '12px', background: 'var(--bg-soft)', border: 'none', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s ease' }}>
                                    VIEW MASTERPLAN
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default Projects;
