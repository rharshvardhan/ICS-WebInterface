import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <main>
      <section className="hero" id="top">
        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Infinite AI Marketplace</p>
            <h1>Discover enterprise-ready AI capabilities tailored for your organization.</h1>
            <p className="subtitle">
              Browse curated solutions, evaluate partner expertise, and bring transformative AI experiences to market faster.
            </p>
            <form className="search" role="search">
              <label htmlFor="search" className="sr-only">Search capabilities</label>
              <input id="search" type="search" placeholder="Search capabilities, partners, industries..." />
              <button type="submit">Search</button>
            </form>
            <div className="hero-meta">
              <span>60+ enterprise AI accelerators</span>
              <span>Curated partner ecosystem</span>
              <span>Secure deployment pathways</span>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb"></div>
            <div className="glow-card">
              <h3>Top Performing</h3>
              <div className="glow-card-item">
                <p className="label">Industry</p>
                <p className="value">Banking &amp; FinTech</p>
              </div>
              <div className="glow-card-item">
                <p className="label">Avg. ROI</p>
                <p className="value">38%</p>
              </div>
              <div className="glow-card-item">
                <p className="label">Adoption</p>
                <div className="progress">
                    <span style={{ width: "76%" }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
