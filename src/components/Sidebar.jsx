import React from 'react';

const Sidebar = () => {
    return (
        <header className="sidebar">
            <div className="profile-container">
                <img src="/assets/img/profile-final.jpg" alt="SANDU MULINTI SREEKANTH" className="profile-img" />
            </div>
            <nav className="nav-links">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#certifications">Certifications</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className="sidebar-footer">
                <p>&copy;Crafted by SM Sreekanth_2026</p>
            </div>
        </header>
    );
};

export default Sidebar;
