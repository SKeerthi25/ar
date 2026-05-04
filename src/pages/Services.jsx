
      import React from 'react';
      import { Link } from 'react-router-dom';
      import { Building2, HardHat, PenTool, Shield, Wrench, Compass, ArrowRight } from 'lucide-react';
      import InnerHero from '../components/InnerHero';
      const Services = () => (
        <>
          <InnerHero title="Our Services" />
          <section className="section-padding container">
            <div className="grid-3 mt-4">
              {[
                { title: 'Residential Construction', desc: 'From the initial ground-breaking to the final coat of paint, we manage the entire lifecycle of luxury residential builds.', icon: <Building2 size={32}/>, link: '/services/residential' },
                { title: 'Building Renovation', desc: 'Breathe new life into aging structures with our comprehensive renovation services designed for modern luxury.', icon: <HardHat size={32}/>, link: '/services/renovation' },
                { title: 'Architectural Planning', desc: 'Robust architectural and structural planning and detailed BIM modeling.', icon: <PenTool size={32}/>, link: '/process' },
                { title: 'Subterranean Basements', desc: 'Expert engineering for multi-story luxury basements, pools, and cinemas.', icon: <Shield size={32}/>, link: '/contact' },
                { title: 'Custom Joinery', desc: 'Bespoke interior woodworking, custom kitchens, and structural timber framing.', icon: <Wrench size={32}/>, link: '/contact' },
                { title: 'Project Management', desc: 'Seamless orchestration of timelines, budgets, and resources for stress-free, on-time project delivery.', icon: <Compass size={32}/>, link: '/contact' }
              ].map((s, i) => (
                <div key={i} className="glass-card fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>{s.icon}</div>
                  <h3 style={{ marginBottom: '15px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '20px', flex: 1 }}>{s.desc}</p>
                  <Link to={s.link} style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '5px', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600 }}>Explore <ArrowRight size={16}/></Link>
                </div>
              ))}
            </div>
          </section>
        </>
      );
      export default Services;
    
