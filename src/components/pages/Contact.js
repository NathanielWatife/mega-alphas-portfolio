// src/components/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'olaideomobolaji2000@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+234 9157444669',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: '🏢',
      title: 'Visit Us',
      details: '123 Business District',
      subdetails: 'New York, NY 10001',
      description: 'Feel free to visit our office'
    }
  ];

  return (
    <div className="contact-page">
      {/* Enhanced Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="floating-dots">
            <div className="dot d1"></div>
            <div className="dot d2"></div>
            <div className="dot d3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Get In Touch</h1>
            <p className="hero-subtitle">
              Ready to transform your business? Let's start the conversation about your success story.
            </p>
            <div className="hero-badge">
              <span>Response within 24 hours guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Enhanced Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you promptly</p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
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
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      <option value="business-consulting">Business Consulting</option>
                      <option value="market-research">Market Research & Analysis</option>
                      <option value="project-management">Project Management</option>
                      <option value="training-development">Training & Development</option>
                      <option value="risk-management">Risk Management</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder="Tell us about your project or challenges..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="button-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <div className="button-arrow">→</div>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Enhanced Contact Information */}
            <div className="contact-info">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Multiple ways to get in touch with our team</p>
              </div>
              
              <div className="contact-methods">
                {contactMethods.map((method, index) => (
                  <div key={index} className="contact-method">
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-content">
                      <h3>{method.title}</h3>
                      <p className="method-details">{method.details}</p>
                      {method.subdetails && <p className="method-subdetails">{method.subdetails}</p>}
                      <p className="method-description">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Business Hours */}
              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hour-item">
                    <span className="day">Monday - Friday</span> <br></br>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Saturday</span><br></br>
                    <span className="time">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Sunday</span><br></br>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              {/* <div className="social-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <span className="social-icon">💼</span>
                    <span className="social-text">LinkedIn</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <span className="social-icon">🐦</span>
                    <span className="social-text">Twitter</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <span className="social-icon">📘</span>
                    <span className="social-text">Facebook</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      {/* <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>Visit Our Office</h2>
            <p>Schedule a meeting at our conveniently located headquarters</p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-icon">🏢</div>
                <h3>Mega Alphs Limited</h3>
                <p>123 Business District, New York, NY 10001</p>
                <div className="map-features">
                  <span>✓ Free Parking</span>
                  <span>✓ Metro Access</span>
                  <span>✓ Conference Rooms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Quick CTA */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>Call us now for urgent consulting needs or schedule a same-day consultation.</p>
            <div className="cta-actions">
              <a href="tel:+234 9157444669" className="cta-button primary">
                <span>Call Now: +234 9157444669</span>
              </a>
              <Link to="/services" className="cta-button secondary">
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;