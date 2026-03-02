import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-v7" style={{ background: 'var(--bg-soft)' }}>
            <div className="container">
                <div className="about-grid-v7">
                    <div>
                        <span className="section-subtitle-v7">Contact Us</span>
                        <h2 className="section-title-v7">Get In Touch With Our Property Experts</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                            Have questions about our projects or want to schedule a site visit?
                            Fill out the form and our team will get back to you shortly.
                        </p>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Address:</h4>
                            <p style={{ color: 'var(--text-muted)' }}>123 GreenCo Plaza, Jubilee Hills, Hyderabad, Telangana 500033</p>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Phone:</h4>
                            <p style={{ color: 'var(--text-muted)' }}>+91 98765 43210</p>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Email:</h4>
                            <p style={{ color: 'var(--text-muted)' }}>info@greencoestate.com</p>
                        </div>
                    </div>

                    <div style={{ background: '#fff', padding: '3rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                                <input type="email" placeholder="Your Email" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            </div>
                            <input type="text" placeholder="Subject" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                            <textarea placeholder="Your Message" rows="4" style={{ padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                            <button type="submit" className="btn-primary-v7" style={{ border: 'none', cursor: 'pointer' }}>Submit Enquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
