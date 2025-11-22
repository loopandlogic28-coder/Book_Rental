import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Start Your Learning Journey Today</h2>
        <p>Discover and rent books to enhance your knowledge. Start exploring now!</p>
        <div className="cta-buttons">
          <a href="/" className="btn btn-primary">Get Started</a>
          <a href="/exploreall" className="btn btn-secondary">Browse Books</a>
          <a href="/exploreall" className="btn btn-tertiary">Rent Books</a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
