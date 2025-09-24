// src/components/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';
import './Home.css';

const Home = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    // Animate cards in sequence
    const timer = setTimeout(() => {
      setVisibleCards(servicesData.map((_, index) => index));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      quote: "Their strategic guidance was instrumental in our 300% growth turnaround. Exceptional expertise!",
      author: "Sarah K., CEO of TechStart Inc.",
      role: "Technology Sector"
    },
    {
      quote: "The market analysis provided clarity we couldn't achieve on our own. Data-driven insights that delivered results.",
      author: "David L., Marketing Director",
      role: "Retail Industry"
    },
    {
      quote: "A true partner in risk management. They helped us avert a major crisis and saved millions.",
      author: "Maria G., Operations Head",
      role: "Manufacturing"
    }
  ];

  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span>Premium Consulting Since 2010</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Strategic Excellence</span>
            <span className="title-line accent">For Visionary Leaders</span>
          </h1>
          <p className="hero-subtitle">
            Transform your business with data-driven strategies, innovative solutions, 
            and expert guidance that delivers measurable results and sustainable growth.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="cta-button primary">
              <span>Explore Our Expertise</span>
              <div className="button-sparkle">✨</div>
            </Link>
            <Link to="/about" className="cta-button secondary">
              Our Success Stories
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number" data-count="500">0</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number" data-count="150">0</div>
              <div className="stat-label">Global Clients</div>
            </div>
            <div className="stat">
              <div className="stat-number" data-count="15">0</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Premium Consulting Services</h2>
            <p>Comprehensive solutions designed to address your unique business challenges and opportunities</p>
          </div>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${visibleCards.includes(index) ? 'visible' : ''} ${
                  hoveredService === service.id ? 'hovered' : ''
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-inner">
                  <div className="service-icon-container">
                    <div className="service-icon">{service.icon}</div>
                    <div className="icon-glow"></div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.shortDescription}</p>
                  <div className="service-features">
                    {service.keyFeatures.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <Link to={`/services/${service.id}`} className="learn-more-link">
                    <span>Discover More</span>
                    <div className="link-arrow">→</div>
                  </Link>
                </div>
                <div className="card-shine"></div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="view-all-btn">
              <span>View All Services</span>
              <div className="btn-sparkle"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Client Success Stories</h2>
            <p>Hear from businesses that have transformed their operations with our expertise</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="quote-icon">❝</div>
                <blockquote>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <div className="testimonial-author">
                  <cite>{testimonial.author}</cite>
                  <span className="author-role">{testimonial.role}</span>
                </div>
                <div className testimonial-rating>
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join hundreds of successful businesses that have achieved remarkable growth with our strategic partnership.</p>
            <div className="cta-actions">
              <Link to="/contact" className="cta-button primary large">
                <span>Start Your Journey Today</span>
                <div className="button-glow"></div>
              </Link>
              <div className="cta-features">
                <span className="feature">✓ Free Consultation</span>
                <span className="feature">✓ Custom Strategy</span>
                <span className="feature">✓ Guaranteed Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;