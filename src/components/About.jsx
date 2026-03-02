import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-v7">
            <div className="container">
                <div className="about-grid-v7">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                            alt="About GreenCo"
                            className="about-img-v7"
                        />
                    </div>
                    <div>
                        <span className="section-subtitle-v7">About Us</span>
                        <h2 className="section-title-v7">Building Excellence Since 2010</h2>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                            GreenCo Estate is a leading real estate development firm in Hyderabad,
                            committed to delivering high-quality residential spaces that exceed expectations.
                            Our focus is on creating communities that thrive.
                        </p>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                            With a track record of successful projects, we bring together innovative
                            architecture, meticulous planning, and a customer-centric approach to
                            every venture we undertake.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span> Quality Construction
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span> Timely Delivery
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span> Transparent Process
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>✓</span> Expert Planning
                            </li>
                        </ul>
                        <a href="#contact" className="btn-primary-v7">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
