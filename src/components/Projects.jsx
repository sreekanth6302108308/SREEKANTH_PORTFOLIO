import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="content-section">
            <h2 className="section-title">Projects</h2>
            <div className="project-card">
                <div className="project-info">
                    <h3>TALENT FLOW-Job Portal</h3>
                    <p>A Multi-Vector Ranking Algorithm for Job–Skill Matching and Career Path Forecasting </p>
                    <div className="tags">
                        <span>REACT</span><span>TAILWINDCSS</span><span>AXIOMS</span><span>FASTAPI</span><span>MySQL</span>
                    </div>
                </div>
            </div>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-info">
                        <h3>E-Commerce Platform</h3>
                        <p>A full-featured online store with cart functionality and payment gateway integration.</p>
                        <div className="tags">
                            <span>HTML</span><span>CSS</span><span>JS</span><span>MySQL</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-info">
                        <h3>Portfolio Website</h3>
                        <p>A personal portfolio website to showcase skills and projects.</p>
                        <div className="tags">
                            <span>HTML</span><span>CSS</span><span>JS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
