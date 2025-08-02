// pages/Contact.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5 py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-muted">We'd love to hear from you! Send us your thoughts or questions.</p>
      </div>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-7 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                rows="5"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-md-5">
          <h4 className="fw-bold mb-3">Get in Touch</h4>
          <p className="mb-2"><strong>Email:</strong> support@nextread.com</p>
          <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
          <p className="mb-2"><strong>Address:</strong> 123 Library Street, Booktown, India</p>
          <p>We usually respond within 24 hours on weekdays.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
