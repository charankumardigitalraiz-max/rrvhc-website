import React from 'react';

const Testimonials = () => {
    // Keeping it simple and professional as per V7 Bhuvana Style
    return (
        <section className="section-v7" style={{ background: 'var(--secondary)', color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <span className="section-subtitle-v7" style={{ color: 'var(--primary)' }}>Testimonials</span>
                <h2 className="section-title-v7" style={{ color: 'white' }}>What Our Clients Say</h2>

                <div style={{ maxWidth: '800px', margin: '4rem auto' }}>
                    <p style={{ fontSize: '1.5rem', fontStyle: 'italic', opacity: 0.9, lineHeight: '1.6' }}>
                        "GreenCo Estate made our dream of owning a premium home a reality.
                        The quality of construction and their transparency throughout the
                        process was truly impressive."
                    </p>
                    <div style={{ marginTop: '2.5rem' }}>
                        <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 600 }}>Rajesh Kumar</h4>
                        <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Business Owner, Hyderabad</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
