// src/components/pages/ServiceDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
  // Get the serviceId from the URL parameters
  let { serviceId } = useParams();

  // Find the service that matches the serviceId
  const service = servicesData.find(s => s.id === serviceId);

  // If service is not found, show a 404 message
  if (!service) {
    return (
      <div className="service-not-found">
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="cta-button">Back to All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Service Hero Section */}
      <section className="service-hero" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-icon">{service.icon}</div>
            <h1>{service.title}</h1>
            <p className="service-hero-description">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="service-content">
        <div className="container">
          <div className="service-detail-grid">
            {/* Main Description */}
            <div className="service-main-content">
              <h2>About This Service</h2>
              <p>{service.detailedDescription}</p>

              {/* Key Features */}
              <div className="key-features">
                <h3>What We Offer</h3>
                <div className="features-grid">
                  {service.keyFeatures.map((feature, index) => (
                    <div key={index} className="feature-card">
                      <div className="feature-number">{index + 1}</div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Sidebar */}
            <div className="service-process">
              <h3>Our Process</h3>
              <div className="process-steps">
                {service.process.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h4>Step {index + 1}</h4>
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Get Started with {service.title}?</h2>
          <p>Contact us today to discuss how we can tailor this service to meet your specific business needs.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">Get a Free Consultation</Link>
            <Link to="/services" className="cta-button secondary">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;