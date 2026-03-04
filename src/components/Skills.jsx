import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="content-section">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-card">

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">Web Design</span>
                        <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">JAVA</span>
                        <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">HTML, CSS, JS, REACT, SQL, FAST API</span>
                        <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '80%' }}></div>
                    </div>
                </div>
                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">Vs Code, AWS, Eclipse, GitHub</span>
                        <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '80%' }}></div>
                    </div>
                </div>

                <div className="skill-item">
                    <div className="skill-header">
                        <span className="skill-name">REACT, TAILWIND CSS, AXIOMS, FAST API, MYSQL</span>
                        <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-progress" style={{ width: '80%' }}></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
