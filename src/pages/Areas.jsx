
      import React from 'react';
      import InnerHero from '../components/InnerHero';
      import { MapPin } from 'lucide-react';
      const Areas = () => (
        <>
          <InnerHero title="Service Areas" />
          <section className="section-padding container fade-up">
            <div className="text-center mb-4 pb-4">
              <h2 className="section-title">Serving the <span className="gold-text">United Kingdom</span></h2>
              <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto' }}>While our headquarters are based in Hayes, we manage luxury construction projects across the greater London area and surrounding counties.</p>
            </div>
            <div className="grid-4 text-center">
              {['Hayes & Harlington', 'Greater London', 'Surrey', 'Berkshire', 'Buckinghamshire', 'Hertfordshire', 'Essex', 'Kent'].map((area, i) => (
                <div key={i} className="glass-card">
                  <MapPin className="gold-text mb-3 mx-auto" size={32}/>
                  <h4>{area}</h4>
                </div>
              ))}
            </div>
          </section>
        </>
      );
      export default Areas;
    
