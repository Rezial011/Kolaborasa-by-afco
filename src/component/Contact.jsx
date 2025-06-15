import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-container">
        <div className="contact-info animate">
          <h3>Contact Information</h3>

          <div className="contact-detail">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <h4>Location</h4>
              <p>Jl. Merdeka No. 123, Jakarta Pusat, Indonesia</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+62 812 3456 7890</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">✉️</div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>info@kolaborasa.id</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">⏰</div>
            <div className="contact-text">
              <h4>Working Hours</h4>
              <p>Monday - Friday: 9AM - 5PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form animate animate-delay-1">
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};