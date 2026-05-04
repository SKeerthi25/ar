
      import React from 'react';
      import { Link } from 'react-router-dom';
      import { Building2, HardHat, PenTool, CheckCircle, ArrowRight, Compass, Wrench, Shield } from 'lucide-react';
      
      const Home = () => {
        return (
          <>
            <section className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                <img src="/images/project1.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Hero" />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.4))' }}></div>
              </div>
              <div className="container fade-up" style={{ paddingTop: '80px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                <span className="section-subtitle">ARCHANADEVI LTD</span>
                <h1 style={{ fontSize: '64px', marginBottom: '20px', lineHeight: 1.1, color: '#ffffff' }}>Building Trust. Creating Homes. <span className="gold-text">Delivering Excellence.</span></h1>
                <p style={{ fontSize: '20px', color: '#e2e8f0', marginBottom: '40px' }}>The UK's premier luxury construction company for high-end domestic buildings.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <Link to="/quote" className="btn btn-primary">Start Your Project</Link>
                  <Link to="/projects" className="btn btn-outline-gold">View Portfolio</Link>
                </div>
              </div>
            </section>

            <section className="section-padding bg-secondary">
              <div className="container grid-2">
                <div className="fade-up">
                  <span className="section-subtitle">About Us</span>
                  <h2 className="section-title">Crafting Tomorrow's <span className="gold-text">Residences</span></h2>
                  <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>We specialize in the end-to-end development of luxury domestic properties across the UK. With over two decades of uncompromising quality, we bring architectural visions to life.</p>
                  <ul style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)' }}><CheckCircle size={18}/> Highest Quality Materials</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)' }}><CheckCircle size={18}/> Expert Master Craftsmen</li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)' }}><CheckCircle size={18}/> On-Time Project Delivery</li>
                  </ul>
                  <Link to="/about" className="btn btn-primary">Discover Our Legacy</Link>
                </div>
                <div className="fade-up" style={{ position: 'relative' }}>
                  <img src="/images/project1.png" alt="Construction site" style={{ borderRadius: '12px' }}/>
                </div>
              </div>
            </section>

            <section className="section-padding">
              <div className="container text-center fade-up">
                <span className="section-subtitle">Our Expertise</span>
                <h2 className="section-title">Premium <span className="gold-text">Services</span></h2>
              </div>
              <div className="container grid-3 mt-4">
                {[
                  { title: 'Residential Construction', desc: 'Complete ground-up builds for luxury domestic properties.', icon: <Building2 size={32}/>, link: '/services/residential' },
                  { title: 'Building Renovation', desc: 'High-end modernizations of existing structures.', icon: <HardHat size={32}/>, link: '/services/renovation' },
                  { title: 'Architectural Planning', desc: 'Robust architectural and structural planning.', icon: <PenTool size={32}/>, link: '/process' },
                  { title: 'Subterranean Basements', desc: 'Expert engineering for multi-story luxury basements.', icon: <Shield size={32}/>, link: '/services' },
                  { title: 'Custom Joinery', desc: 'Bespoke interior woodworking and structural timber.', icon: <Wrench size={32}/>, link: '/services' },
                  { title: 'Project Management', desc: 'End-to-end site oversight and procurement.', icon: <Compass size={32}/>, link: '/services' }
                ].map((s, i) => (
                  <div className="glass-card fade-up" key={i}>
                    <div style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>{s.icon}</div>
                    <h3 style={{ marginBottom: '15px' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>{s.desc}</p>
                    <Link to={s.link} style={{ color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '5px', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600 }}>Explore <ArrowRight size={16}/></Link>
                  </div>
                ))}
              </div>
            </section>
          </>
        )
      };
      export default Home;
    
