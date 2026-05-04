
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-word' }}>ARCHANADEVI<span className="gold-text">LTD</span></span>
          </span>
        </Link>
        
        <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span>Company <ChevronDown size={14}/></span>
              <ul className="dropdown-menu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/process">Our Process</Link></li>
                <li><Link to="/quality">Materials & Quality</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <span>Services <ChevronDown size={14}/></span>
              <ul className="dropdown-menu">
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/services/residential">Residential Construction</Link></li>
                <li><Link to="/services/renovation">Building Renovation</Link></li>
                <li><Link to="/areas">Service Areas</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <span>Portfolio <ChevronDown size={14}/></span>
              <ul className="dropdown-menu">
                <li><Link to="/projects">All Projects</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
              </ul>
            </li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/quote">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
    </header>
  );
};
export default Header;
