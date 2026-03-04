document.addEventListener('DOMContentLoaded', () => {
    // Nav Navigation Active State
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.classList.contains(current)) { // This approach requires class matching id, OR:
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            } else if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });
    });
});

// EmailJS Integration handled by React in src/ContactForm.jsx

