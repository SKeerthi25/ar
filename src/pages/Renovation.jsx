
      import React from 'react';
      import { Link } from 'react-router-dom';
      import InnerHero from '../components/InnerHero';
      const Renovation = () => (
        <>
          <InnerHero title="Building Renovation" />
          <section className="section-padding container fade-up">
            <h2 className="section-title text-center">Transforming the <span className="gold-text">Past</span> into the Future</h2>
            <p className="text-center" style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 40px' }}>Our renovation experts breathe new life into aging structures. Whether it's a complete structural overhaul, a heritage restoration, or a modern extension, we preserve the soul of the building while upgrading its functionality to modern luxury standards.</p>
            <div className="grid-3 mt-4">
              <div className="glass-card">
                <h3 className="gold-text mb-3">Structural Overhauls</h3>
                <p style={{ color: 'var(--text-light)' }}>Safely modifying load-bearing walls, expanding floor plans, and reinforcing foundational integrity.</p>
              </div>
              <div className="glass-card">
                <h3 className="gold-text mb-3">Luxury Extensions</h3>
                <p style={{ color: 'var(--text-light)' }}>Adding premium square footage to your property, seamlessly blending old and new architectures.</p>
              </div>
              <div className="glass-card">
                <h3 className="gold-text mb-3">Heritage Restoration</h3>
                <p style={{ color: 'var(--text-light)' }}>Carefully restoring historic properties in the UK, adhering strictly to conservation guidelines.</p>
              </div>
            </div>
            <div className="text-center mt-4 pt-4">
              <Link to="/quote" className="btn btn-primary">Get a Renovation Quote</Link>
            </div>
          </section>
        </>
      );
      export default Renovation;
    
