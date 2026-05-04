
      import React, { useState } from 'react';
      import InnerHero from '../components/InnerHero';
      import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
      import emailjs from '@emailjs/browser';
      
      const Contact = () => {
        const [status, setStatus] = useState('');
        
        const handleSubmit = (e) => {
          e.preventDefault();
          setStatus('Sending...');
          
          const formData = new FormData(e.target);
          const name = formData.get('name');
          const email = formData.get('email');
          const message = formData.get('message');
          const time = new Date().toLocaleString();
          
          const templateParams = {
            name: name,
            email: email,
            message: message,
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
            <InnerHero title="Contact Us" />
            <section className="section-padding container fade-up">
              <div className="grid-2" style={{ alignItems: 'flex-start' }}>
                <div>
                  <h2 className="section-title">Get In <span className="gold-text">Touch</span></h2>
                  <p style={{ color: 'var(--text-light)', marginBottom: '40px' }}>Whether you're ready to start building or just exploring ideas, our team is ready to assist you with your luxury construction needs.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                      <MapPin className="gold-text mt-1" size={28}/>
                      <div>
                        <h4 className="mb-1">Headquarters</h4>
                        <p style={{ color: 'var(--text-light)', margin: 0 }}>23 Kingsway, Hayes,<br/>UB3 2TT, England</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                      <Phone className="gold-text mt-1" size={28}/>
                      <div>
                        <h4 className="mb-1">Phone</h4>
                        <p style={{ color: 'var(--text-light)', margin: 0 }}>+44 7345 952721</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                      <Mail className="gold-text mt-1" size={28}/>
                      <div>
                        <h4 className="mb-1">Email</h4>
                        <p style={{ color: 'var(--text-light)', margin: 0 }}>Archanauk1947@gmail.com</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                      <Clock className="gold-text mt-1" size={28}/>
                      <div>
                        <h4 className="mb-1">Business Hours</h4>
                        <p style={{ color: 'var(--text-light)', margin: 0 }}>Mon - Fri 9:00 to 18:00<br/>Sat - Sunday 10:00 to 16:00</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card" style={{ padding: '20px' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.50444390076!2d-0.4287895!3d51.5039328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487672955f111877%3A0x6b48bc6dc933bfbb!2s23%20Kingsway%2C%20Hayes%20UB3%202TT%2C%20UK!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" width="100%" height="250" style={{ border: 0, borderRadius: '8px' }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                </div>
                
                <div className="glass-card" style={{ background: 'var(--secondary-bg)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 style={{ fontSize: '24px', marginBottom: '30px' }}>Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label style={{display:'block', marginBottom:'8px'}}>Full Name *</label>
                      <input type="text" name="name" placeholder="John Smith" required />
                    </div>
                    <div className="form-group mb-3">
                      <label style={{display:'block', marginBottom:'8px'}}>Email Address *</label>
                      <input type="email" name="email" placeholder="john@company.com" required />
                    </div>
                    <div className="form-group mb-4">
                      <label style={{display:'block', marginBottom:'8px'}}>Project Details *</label>
                      <textarea rows="4" name="message" placeholder="Tell us about your project, goals, timeline, and any specific requirements..." required></textarea>
                    </div>
                    
                    <button type="submit" disabled={status === 'Sending...'} className="btn btn-primary w-100" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'10px'}}>
                      {status === 'Sending...' ? 'Sending...' : <><Send size={18}/> Send Message</>}
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
      export default Contact;
    
