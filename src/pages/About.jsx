
      import React from 'react';
      import InnerHero from '../components/InnerHero';
      const About = () => (
        <>
          <InnerHero title="About Us" />
          <section className="section-padding container">
            <div className="grid-2">
              <div className="fade-up">
                <h2 className="section-title">The Foundation of <span className="gold-text">Excellence</span></h2>
                <p style={{ color: 'var(--text-light)', marginBottom: '20px', fontSize: '18px' }}>ARCHANADEVI LTD is a premier construction firm based in the UK, spearheaded by our visionary Director, Archanadevi Muthusamy. We have built our reputation on a foundation of integrity, unparalleled craftsmanship, and a commitment to delivering luxury domestic properties.</p>
                <p style={{ color: 'var(--text-light)' }}>Our mission is to construct spaces that elevate lifestyles. By combining traditional building expertise with cutting-edge architectural practices, we ensure every project is structurally sound and aesthetically breathtaking.</p>
              </div>
              <div className="fade-up">
                <img src="/images/process2.png" style={{ borderRadius: '12px' }} alt="About" />
              </div>
            </div>
          </section>
          
          <section className="section-padding container">
            <div className="grid-2">
              <div className="glass-card fade-up" style={{ borderTop: '5px solid var(--accent-gold)' }}>
                <h3 className="mb-3" style={{ fontSize: '24px' }}>Our <span className="gold-text">Vision</span></h3>
                <p className="rich-text" style={{ fontSize: '15px' }}>
                  To be the undisputed leader in luxury domestic construction across the United Kingdom. We envision a future where every ARCHANADEVI LTD build stands as a timeless landmark of architectural brilliance, sustainable engineering, and uncompromising quality. We strive to push the boundaries of modern design while honoring classic craftsmanship.
                </p>
              </div>
              <div className="glass-card fade-up" style={{ borderTop: '5px solid #0f172a' }}>
                <h3 className="mb-3" style={{ fontSize: '24px' }}>Our <span className="gold-text">Mission</span></h3>
                <p className="rich-text" style={{ fontSize: '15px' }}>
                  Our mission is to translate our clients' loftiest dreams into structural reality. We are dedicated to providing a seamless, transparent, and highly personalized construction journey. By employing the finest artisans, utilizing cutting-edge building technology, and adhering to rigorous standards of excellence, we deliver spaces that elevate the everyday lifestyle.
                </p>
              </div>
            </div>
          </section>
          <section className="section-padding bg-secondary">
            <div className="container grid-3 text-center">
              <div className="glass-card fade-up">
                <h3 className="gold-text" style={{ fontSize: '48px', marginBottom: '10px' }}>25+</h3>
                <h4>Years Experience</h4>
              </div>
              <div className="glass-card fade-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="gold-text" style={{ fontSize: '48px', marginBottom: '10px' }}>150+</h3>
                <h4>Projects Delivered</h4>
              </div>
              <div className="glass-card fade-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="gold-text" style={{ fontSize: '48px', marginBottom: '10px' }}>100%</h3>
                <h4>Client Satisfaction</h4>
              </div>
            </div>
          </section>
        </>
      );
      export default About;
    
