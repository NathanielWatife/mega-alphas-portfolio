// src/components/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Strategic Partners for Sustainable Growth</h1>
          <p>We provide expert consulting services to help your business navigate challenges, optimize operations, and achieve long-term success.</p>
          <Link to="/services" className="cta-button">Explore Our Services</Link>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <h2>Our Consulting Services</h2>
          <div className="services-grid">
            {/* Dynamically generate service cards from servicesData */}
            {servicesData.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <Link to={`/services/${service.id}`} className="learn-more">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <Link to="/services" className="view-all-btn">View All Services</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Their strategic guidance was instrumental in our turnaround."</p>
              <cite>- Sarah K., CEO of TechStart Inc.</cite>
            </div>
            <div className="testimonial-card">
              <p>"The market analysis provided clarity we couldn't achieve on our own."</p>
              <cite>- David L., Marketing Director</cite>
            </div>
            <div className="testimonial-card">
              <p>"A true partner in risk management. They helped us avert a major crisis."</p>
              <cite>- Maria G., Operations Head</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get in touch for a free consultation to discuss your needs and how we can help.</p>
          <Link to="/contact" className="cta-button">Get a Free Consultation</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;