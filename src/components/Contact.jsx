import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact" className="content-section">
            <h2 className="section-title">Get In Touch</h2>
            <div id="contact-form-root">
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
