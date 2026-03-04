import React from 'react';

const Education = () => {
    return (
        <section id="education" className="content-section">
            <div className="section-header-container"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div className="icon-box"
                    style={{ background: '#252525', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#f4c430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                </div>
                <h2 className="section-title" style={{ marginBottom: 0 }}>Education</h2>
            </div>

            <div className="timeline">
                <div className="timeline-item">
                    <h3 className="institution">Vel Tech Rangarajan And Dr. Sagunthala R & D Institute Of Science And
                        Technology</h3>
                    <p className="degree" style={{ color: '#ccc', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Electronics and
                        communication engineering</p>
                    <div className="timeline-year">2022 — 2026</div>
                </div>

                <div className="timeline-item">
                    <h3 className="institution">Sri Sudha Junior College</h3>
                    <p className="degree" style={{ color: '#ccc', marginBottom: '0.5rem', fontSize: '0.95rem' }}>MPC</p>
                    <div className="timeline-year">2020 — 2022</div>
                </div>

                <div className="timeline-item">
                    <h3 className="institution">Sri Vasavi High School</h3>
                    <div className="timeline-year">2019 — 2020</div>
                </div>
            </div>
        </section>
    );
};

export default Education;
