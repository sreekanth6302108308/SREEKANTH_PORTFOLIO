import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            // Back to top logic
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }

            // Active section logic
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            if (current) {
                setActiveSection(current);
                // Update sidebar links
                const navLinks = document.querySelectorAll('.nav-links a');
                navLinks.forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === `#${current}`) {
                        a.classList.add('active');
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Sidebar />
            <main className="main-content">
                <Home />
                <About />
                <Education />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />

                <a
                    href="#"
                    className={`back-to-top ${showBackToTop ? 'active' : ''}`}
                    aria-label="Back to Top"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 15l-6-6-6 6" />
                    </svg>
                </a>
            </main>
        </>
    );
}

export default App;
