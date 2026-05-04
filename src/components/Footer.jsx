
import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Camera, Briefcase, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: '#0f172a', color: '#f8fafc', paddingTop: '80px', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <div className="container grid-4" style={{ marginBottom: '60px' }}>
        <div>
          <Link to="/" className="logo mb-3" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginRight: '15px' }} />
            <span className="logo-text" style={{ wordBreak: 'break-word' }}>ARCHANADEVI<span className="gold-text">LTD</span></span>
          </Link>
          <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Premium domestic building construction based in the UK. Building trust and delivering excellence for over two decades.</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#" style={{ color: 'var(--accent-gold)' }}><Briefcase /></a>
            <a href="#" style={{ color: 'var(--accent-gold)' }}><Camera /></a>
            <a href="#" style={{ color: 'var(--accent-gold)' }}><Globe /></a>
          </div>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/about" style={{ color: '#94a3b8' }}>About Us</Link></li>
            <li><Link to="/services" style={{ color: '#94a3b8' }}>Our Services</Link></li>
            <li><Link to="/projects" style={{ color: '#94a3b8' }}>Portfolio</Link></li>
            <li><Link to="/quote" style={{ color: '#94a3b8' }}>Get a Quote</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>Legal & Support</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/faq" style={{ color: '#94a3b8' }}>FAQs & Support</Link></li>
            <li><Link to="/privacy" style={{ color: '#94a3b8' }}>Privacy Policy</Link></li>
            <li><Link to="/terms" style={{ color: '#94a3b8' }}>Terms of Service</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>Contact Info</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
              <MapPin className="gold-text" size={20} />
              <span>23 Kingsway, Hayes,<br/>UB3 2TT, England</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
              <Phone className="gold-text" size={20} />
              <span>+44 7345 952721</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
              <Mail className="gold-text" size={20} />
              <span>Archanauk1947@gmail.com</span>
            </li>
            <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
              <span className="gold-text"><i className="far fa-clock"></i></span>
              <span>Mon - Fri: 9:00 to 18:00<br/>Sat - Sun: 10:00 to 16:00</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: '#000', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-light)', fontSize: '14px' }}>
        <p>&copy; 2026 ARCHANADEVI LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
