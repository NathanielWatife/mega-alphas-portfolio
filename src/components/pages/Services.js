// src/components/pages/Services.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';
import './Services.css';

const Services = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    // Animate services in sequence
    const timer = setTimeout(() => {
      setVisibleServices(servicesData.map((_, index) => index));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleServiceHover = (serviceId) => {
    setHoveredService(serviceId);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  return (
    <div className="services-page">
      {/* Enhanced Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="header-content">
            <h1 className="header-title">Premium Consulting Services</h1>
            <p className="header-subtitle">
              Strategic solutions designed to elevate your business to new heights of success and innovation.
            </p>
            <div className="header-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Industries Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="all-services">
        <div className="container">
          <div className="services-intro">
            <h2>Our Comprehensive Suite of Services</h2>
            <p>Each service is meticulously crafted to address specific business challenges and opportunities.</p>
          </div>
          
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={`service-card ${visibleServices.includes(index) ? 'visible' : ''} ${
                  hoveredService === service.id ? 'hovered' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => handleServiceHover(service.id)}
                onMouseLeave={handleServiceLeave}
              >
                <div className="service-card-inner">
                  <div className="service-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">{service.icon}</div>
                      <div className="icon-glow"></div>
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  
                  <p className="service-description">{service.shortDescription}</p>
                  
                  <div className="service-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {service.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <span className="feature-icon">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="service-actions">
                    <Link 
                      to={`/services/${service.id}`} 
                      className="service-link"
                    >
                      <span>Explore Service</span>
                      <span className="link-arrow">→</span>
                    </Link>
                  </div>
                </div>
                
                {/* Hover Effect Elements */}
                <div className="service-hover-effect"></div>
                <div className="service-sparkle"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our expert consulting services can drive your success story.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                <span>Start Your Journey</span>
                <span className="button-sparkle">✨</span>
              </Link>
              <Link to="/about" className="cta-button secondary">
                Learn About Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="services-benefits">
        <div className="container">
          <h2>Why Choose Our Services?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Tailored Solutions</h3>
              <p>Custom strategies designed specifically for your unique business needs and goals.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Rapid Results</h3>
              <p>Quick implementation with measurable outcomes that drive immediate value.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Expert Guidance</h3>
              <p>Seasoned consultants with proven track records across multiple industries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;