import React from 'react'
import ReactDOM from 'react-dom/client'
import ContactForm from './ContactForm.jsx'

// Check if the root element exists before trying to render
const rootElement = document.getElementById('contact-form-root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <ContactForm />
        </React.StrictMode>,
    )
}
