import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await axios.post("https://api.web3forms.com/submit", {
                access_key: "c988bc8a-3b59-4074-91bc-e34dfd7fb0b9",
                name: formData.name,
                email: formData.email,
                message: formData.message,
            });

            if (response.data.success) {
                setStatus("✅ Message sent successfully! Contact Shortly");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Try again.");
            }
        } catch (error) {
            setStatus("❌ Error sending message. Please try later.");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h2>Let's <span className="highlight">talk</span></h2>
                <p className="contact-subtext">
                    To request a quote contact me directly or fill out the form and I will get back to you soon.  Call Me: 91+ 6302108308
                </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Type your message here..."
                        className="form-input"
                    ></textarea>
                </div>

                <button type="submit" className="form-btn">
                    SEND MESSAGE
                </button>

                {status && <p className="form-status">{status}</p>}
            </form>
        </div>
    );
};

export default Contact;
