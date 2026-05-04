
      import React from 'react';
      import { Link } from 'react-router-dom';
      import InnerHero from '../components/InnerHero';
      const Residential = () => (
        <>
          <InnerHero title="Residential Construction" />
          <section className="section-padding container">
            <div className="grid-2">
              <div className="fade-up">
                <img src="/images/project4.png" style={{ borderRadius: '12px' }} alt="Residential" />
              </div>
              <div className="fade-up">
                <h2 className="section-title">Masterful <span className="gold-text">New Builds</span></h2>
                <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>At ARCHANADEVI LTD, our residential construction service is tailored for clients who demand perfection. We build bespoke luxury homes from the ground up, utilizing premium materials, advanced structural engineering, and innovative architectural designs.</p>
                <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Every home we construct is fully compliant with UK building regulations, optimized for energy efficiency, and finished with meticulous attention to detail.</p>
                <h4 style={{ marginBottom: '15px', color: 'var(--accent-gold)' }}>Our New Build Offerings Include:</h4>
                <ul style={{ color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', paddingLeft: '20px', listStyleType: 'disc' }}>
                  <li>Custom Luxury Villas & Estates</li>
                  <li>Modern Eco-Friendly Homes</li>
                  <li>Multi-story Domestic Buildings</li>
                  <li>High-end Townhouses</li>
                </ul>
                <Link to="/quote" className="btn btn-primary">Request a Consultation</Link>
              </div>
            </div>
          </section>
        </>
      );
      export default Residential;
    
