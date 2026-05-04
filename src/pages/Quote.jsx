
      import React, { useState } from 'react';
      import InnerHero from '../components/InnerHero';
      import { Phone, Mail, Send, CheckCircle, Clock } from 'lucide-react';
      import emailjs from '@emailjs/browser';
      
      const Quote = () => {
        const [status, setStatus] = useState('');
        
        const handleSubmit = (e) => {
          e.preventDefault();
          setStatus('Sending...');
          
          const formData = new FormData(e.target);
          const name = formData.get('name');
          const email = formData.get('email');
          const service = formData.get('service');
          const message = formData.get('message');
          const time = new Date().toLocaleString();
          
          const fullMessage = `Service Required: ${service}\n\nProject Details:\n${message}`;

          const templateParams = {
            name: name,
            email: email, // if template supports it, or just in case
            message: fullMessage,
            time: time
          };

          emailjs.send('service_uvcsb8j', 'template_4hpg3wh', templateParams, { publicKey: 'iqwWmn-6BoKlgVyzP' })
            .then(() => {
              setStatus('Success');
              e.target.reset();
            }, (error) => {
              console.error('FAILED...', error);
              setStatus('Failed to send. Please try again.');
            });
        };

        return (
          <>
            <InnerHero title="Pricing & Quote Request" />
            <section className="section-padding container fade-up" style={{ paddingBottom: '20px' }}>
                <div className="text-center mb-4 pb-4">
                    <span className="section-subtitle">Transparent Pricing</span>
                    <h2 className="section-title">Pricing & <span className="gold-text">Service Types</span></h2>
                    <p className="rich-text" style={{ maxWidth: '800px', margin: '0 auto' }}>Every project is bespoke, but we provide estimated baseline figures to guide your initial budget planning.</p>
                </div>
                
                <div className="grid-3" style={{ gap: '30px', marginTop: '40px', marginBottom: '60px' }}>
                    <div className="glass-card text-center" style={{ borderTop: '5px solid var(--accent-gold)' }}>
                        <h3 className="mb-3">Heritage Renovation</h3>
                        <h2 className="gold-text mb-4" style={{ fontSize: '40px' }}>£350<span style={{ fontSize: '16px', color: 'var(--text-light)' }}> / sq ft</span></h2>
                        <ul className="rich-text" style={{ textAlign: 'left', listStyleType: 'none', padding: 0, marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><i className="fas fa-check gold-text"></i> Grade II Listed Compliance</li>
                            <li><i className="fas fa-check gold-text"></i> Structural Underpinning</li>
                            <li><i className="fas fa-check gold-text"></i> Artisan Plastering & Cornicing</li>
                            <li><i className="fas fa-check gold-text"></i> Standard Smart Lighting</li>
                        </ul>
                        <a href="#quote-form" className="btn btn-outline-gold w-100">Request Survey</a>
                    </div>
                    
                    <div className="glass-card text-center" style={{ borderTop: '5px solid #0f172a', transform: 'scale(1.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', position: 'relative' }}>
                        <span style={{ background: 'var(--accent-gold)', color: '#ffffff', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)' }}>MOST POPULAR</span>
                        <h3 className="mb-3">Luxury New Build</h3>
                        <h2 className="gold-text mb-4" style={{ fontSize: '40px' }}>£450<span style={{ fontSize: '16px', color: 'var(--text-light)' }}> / sq ft</span></h2>
                        <ul className="rich-text" style={{ textAlign: 'left', listStyleType: 'none', padding: 0, marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><i className="fas fa-check gold-text"></i> Full Ground-Up Construction</li>
                            <li><i className="fas fa-check gold-text"></i> Advanced BIM Architecture</li>
                            <li><i className="fas fa-check gold-text"></i> Bespoke Premium Joinery</li>
                            <li><i className="fas fa-check gold-text"></i> Complete Control4 Integration</li>
                        </ul>
                        <a href="#quote-form" className="btn btn-primary w-100">Request Survey</a>
                    </div>
                    
                    <div className="glass-card text-center" style={{ borderTop: '5px solid var(--accent-gold)' }}>
                        <h3 className="mb-3">Subterranean Mega-Basement</h3>
                        <h2 className="gold-text mb-4" style={{ fontSize: '40px' }}>£600<span style={{ fontSize: '16px', color: 'var(--text-light)' }}> / sq ft</span></h2>
                        <ul className="rich-text" style={{ textAlign: 'left', listStyleType: 'none', padding: 0, marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <li><i className="fas fa-check gold-text"></i> Deep Piling & Excavation</li>
                            <li><i className="fas fa-check gold-text"></i> Waterproofing & Tanking</li>
                            <li><i className="fas fa-check gold-text"></i> Swimming Pool Installation</li>
                            <li><i className="fas fa-check gold-text"></i> Acoustic Cinema Engineering</li>
                        </ul>
                        <a href="#quote-form" className="btn btn-outline-gold w-100">Request Survey</a>
                    </div>
                </div>
                <p className="text-center" style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: 0 }}>* Prices are estimates based on standard luxury finishes and exclude VAT and professional fees.</p>
            </section>
            
            <section id="quote-form" className="section-padding container fade-up">
              <div className="grid-2">
                <div>
                  <h2 className="section-title">Transparent, <span className="gold-text">Detailed Estimations</span></h2>
                  <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>Because every luxury build is unique, we provide customized, comprehensive quotes. Please provide as much detail as possible about your project scale, location, and requirements.</p>
                  
                  <div className="glass-card mb-4" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Phone className="gold-text" size={32}/>
                    <div>
                      <h4>Speak with an Estimator</h4>
                      <p style={{ color: 'var(--text-light)', margin: 0 }}>+44 7345 952721</p>
                    </div>
                  </div>
                  
                  <div className="glass-card mb-4" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Mail className="gold-text" size={32}/>
                    <div>
                      <h4>Email Architectural Plans to</h4>
                      <p style={{ color: 'var(--text-light)', margin: 0 }}>Archanauk1947@gmail.com</p>
                    </div>
                  </div>

                  <div className="glass-card" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Clock className="gold-text" size={32}/>
                    <div>
                      <h4>Business Hours</h4>
                      <p style={{ color: 'var(--text-light)', margin: 0 }}>Mon - Fri 9:00 to 18:00<br/>Sat - Sunday 10:00 to 16:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label style={{display:'block', marginBottom:'8px'}}>Full Name *</label>
                      <input type="text" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group mb-3">
                      <label style={{display:'block', marginBottom:'8px'}}>Email Address *</label>
                      <input type="email" name="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group mb-3">
                      <label style={{display:'block', marginBottom:'8px'}}>Service Type</label>
                      <select name="service">
                        <option value="Residential Construction">Residential Construction</option>
                        <option value="Building Renovation">Building Renovation</option>
                        <option value="Consultation & Design">Consultation & Design</option>
                      </select>
                    </div>
                    <div className="form-group mb-4">
                      <label style={{display:'block', marginBottom:'8px'}}>Project Details / Timeline *</label>
                      <textarea rows="4" name="message" placeholder="Describe your project vision and expected timeline..." required></textarea>
                    </div>
                    
                    <button type="submit" disabled={status === 'Sending...'} className="btn btn-primary w-100" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                      {status === 'Sending...' ? 'Sending...' : <><Send size={18}/> Submit Request</>}
                    </button>
                    
                    {status && (
                      <div style={{ marginTop: '15px', textAlign: 'center', color: status === 'Success' ? '#4CAF50' : (status === 'Sending...' ? 'var(--text-light)' : '#f44336'), fontWeight: 'bold' }}>
                        {status === 'Success' ? <><CheckCircle size={16} style={{display:'inline', verticalAlign:'middle', marginRight:'5px'}}/> Request sent successfully!</> : status}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </section>
          </>
        );
      };
      export default Quote;
    
