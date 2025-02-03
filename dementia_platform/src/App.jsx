import React from "react";
import {
  Book,
  Globe,
  DollarSign,
  Facebook,
  Twitter,
  Linkedin,
  Search,
  ChevronRight,
} from "lucide-react";

function App() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">Dementia Care Resources</div>
          <nav className="nav">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Resources
            </a>
            <a href="#" className="nav-link">
              Community
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
          alt="Elderly care"
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Supporting Families and Caregivers of Dementia Patients
          </h1>
          <p className="hero-subtitle">
            Explore resources, connect with communities, and find financial
            assistance.
          </p>
          <a href="#" className="button button-primary">
            Get Started
            <ChevronRight className="icon" style={{ marginLeft: "0.5rem" }} />
          </a>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="container">
          <div className="search-container">
            <div className="search-form">
              <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Find books, organizations, or assistance near you"
                />
              </div>
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Book className="feature-icon" size={32} />
              <h3 className="feature-title">Featured Books</h3>
              <p className="feature-description">
                Discover curated resources to help understand and manage
                dementia.
              </p>
              <a href="#" className="feature-link">
                Read or Purchase →
              </a>
            </div>

            <div className="feature-card">
              <Globe className="feature-icon" size={32} />
              <h3 className="feature-title">Organizations</h3>
              <p className="feature-description">
                Connect with leading dementia care organizations and support
                groups.
              </p>
              <a href="#" className="feature-link">
                Find Support →
              </a>
            </div>

            <div className="feature-card">
              <DollarSign className="feature-icon" size={32} />
              <h3 className="feature-title">Financial Assistance</h3>
              <p className="feature-description">
                Learn about available financial aid programs and resources.
              </p>
              <a href="#" className="feature-link">
                Explore Options →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-links">
                <a href="#" className="social-link">
                  <Facebook size={24} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={24} />
                </a>
                <a href="#" className="social-link">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div className="newsletter">
              <h3 className="footer-title">Newsletter</h3>
              <form className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Enter your email"
                />
                <button type="submit" className="newsletter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2024 EverythingIncludedllc: Dementia Care Resources. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
