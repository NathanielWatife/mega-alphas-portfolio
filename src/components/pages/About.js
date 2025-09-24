// src/components/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Page Header */}
      <section className="about-hero">
        <div className="container">
          <h1>About Elite Business Consulting</h1>
          <p className="subtitle">Your trusted partner for business transformation and sustainable growth</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>To empower businesses with strategic insights and practical solutions that drive measurable results, foster innovation, and create lasting competitive advantages.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">🔭</div>
              <h2>Our Vision</h2>
              <p>To be the most trusted consulting partner for businesses seeking to navigate complexity, seize opportunities, and achieve extraordinary success in an ever-evolving market landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded with a passion for business excellence, Elite Business Consulting emerged from recognizing 
                that many organizations struggle to translate potential into performance. Our journey began over 
                a decade ago when our founder, a seasoned industry expert, saw the gap between business strategy 
                and practical execution.
              </p>
              <p>
                Today, we bring together a team of diverse experts with backgrounds in business strategy, 
                finance, technology, and operations. We've helped hundreds of businesses across various 
                industries overcome challenges, optimize operations, and achieve their growth objectives.
              </p>
              <p>
                What sets us apart is our commitment to building lasting partnerships. We don't just deliver 
                reports and recommendations; we work alongside you to implement solutions and ensure sustainable success.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for the highest standards in everything we do, delivering quality that exceeds expectations.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We build trust through honesty, transparency, and ethical practices in all our relationships.</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>We embrace creative thinking and cutting-edge solutions to solve complex business challenges.</p>
            </div>
            <div className="value-card">
              <h3>Partnership</h3>
              <p>We view ourselves as an extension of your team, committed to your success as our own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Join the growing list of successful businesses that have transformed their operations with our expert guidance.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">Get Started Today</Link>
            <Link to="/services" className="cta-button secondary">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;