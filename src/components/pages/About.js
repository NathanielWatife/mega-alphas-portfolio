// src/components/pages/About.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    retention: 0
  });

  useEffect(() => {
    // Animate counters
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const values = { projects: 500, clients: 100, experience: 15, retention: 95 };
      
      Object.keys(values).forEach(key => {
        let current = 0;
        const increment = values[key] / steps;
        const timer = setInterval(() => {
          current += increment;
          if (current >= values[key]) {
            current = values[key];
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, duration / steps);
      });
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, delivering quality that exceeds expectations.'
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We build trust through honesty, transparency, and ethical practices in all our relationships.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace creative thinking and cutting-edge solutions to solve complex business challenges.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We view ourselves as an extension of your team, committed to your success as our own.'
    }
  ];

  return (
    <div className="about-page">
      {/* Enhanced Hero Section */}
      <section className="about-hero">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="element e1"></div>
            <div className="element e2"></div>
            <div className="element e3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Elite Business Consulting</h1>
            <p className="hero-subtitle">
              Your trusted partner for business transformation and sustainable growth. 
              We combine strategic vision with practical execution to deliver exceptional results.
            </p>
            <div className="hero-badge">
              <span>Trusted by Industry Leaders Since 2008</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Philosophy</h2>
            <p>Driven by purpose, guided by values, committed to excellence</p>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="card-glow"></div>
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower businesses with strategic insights and practical solutions that drive measurable results, foster innovation, and create lasting competitive advantages.</p>
            </div>
            <div className="mv-card">
              <div className="card-glow"></div>
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To be the most trusted consulting partner for businesses seeking to navigate complexity, seize opportunities, and achieve extraordinary success in an ever-evolving market landscape.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <div className="section-badge">Our Journey</div>
              <h2>Building Excellence Since 2008</h2>
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
                <div className="stat-number">{counters.projects}+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.clients}+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.experience}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.retention}%</div>
                <div className="stat-label">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="our-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide every decision and action we take</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <div className="value-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team CTA */}
      <section className="about-cta">
        <div className="cta-background">
          <div className="floating-shapes">
            <div className="shape s1"></div>
            <div className="shape s2"></div>
            <div className="shape s3"></div>
          </div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join the growing list of successful businesses that have transformed their operations with our expert guidance.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                <span>Start Your Journey</span>
                <div className="button-sparkle">🚀</div>
              </Link>
              <Link to="/services" className="cta-button secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;