import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" className="content-section">
            <h2 className="section-title">Certifications</h2>
            <div className="projects-grid">
                {/* React Certificate */}
                <div className="project-card">
                    <div className="project-info">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3>React Frontend Project</h3>
                                <p>GreatStack - 2026</p>
                            </div>
                            {/* View/Download Actions */}
                            <div className="cert-actions" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="/assets/REACT Certificate.png" target="_blank" title="View Certificate"
                                    style={{ color: '#ccc', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>View</span>
                                </a>
                                <a href="/assets/REACT Certificate.png" download title="Download Certificate"
                                    style={{ color: '#ccc', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>Download</span>
                                </a>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>Successfully completed YouTube
                            clone
                            Frontend Project.</p>
                        <div className="tags">
                            <span>REACT</span><span>GREATSTACK</span>
                        </div>
                    </div>
                </div>

                {/* Cisco Certificate */}
                <div className="project-card">
                    <div className="project-info">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3>Cisco Networking</h3>
                                <p>Cisco - May 2025</p>
                            </div>
                            {/* View/Download Actions */}
                            <div className="cert-actions" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="/assets/CISCO certificate.pdf" target="_blank" title="View Certificate"
                                    style={{ color: '#ccc', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>View</span>
                                </a>
                                <a href="/assets/CISCO certificate.pdf" download title="Download Certificate"
                                    style={{ color: '#ccc', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>Download</span>
                                </a>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>Successfully completed Cisco
                            Networking Academy
                            course.</p>
                        <div className="tags">
                            <span>CISCO</span><span>NETWORKING</span>
                        </div>
                    </div>
                </div>

                {/* Javascript Certificate */}
                <div className="project-card">
                    <div className="project-info">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h3>JavaScript Fundamentals</h3>
                                <p>GreatStack - 2026</p>
                            </div>
                            {/* View/Download Actions */}
                            <div className="cert-actions" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="/assets/JAVASCRIPT Certificate.png" target="_blank" title="View Certificate"
                                    style={{ color: '#ccc', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>View</span>
                                </a>
                                <a href="/assets/JAVASCRIPT Certificate.png" download title="Download Certificate"
                                    style={{ color: '#ccc', transition: '0.3s', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    <span style={{ fontSize: '0.9rem' }}>Download</span>
                                </a>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', marginTop: '0.5rem' }}>Successfully completed JavaScript
                            Fundamentals course
                        </p>
                        <div className="tags">
                            <span>JAVASCRIPT</span><span>GREATSTACK</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
