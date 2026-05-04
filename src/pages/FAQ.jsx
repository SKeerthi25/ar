
      import React from 'react';
      import InnerHero from '../components/InnerHero';
      const FAQ = () => (
        <>
          <InnerHero title="FAQs & Support" />
          <section className="section-padding container fade-up" style={{ maxWidth: '800px' }}>
            <h2 className="section-title text-center mb-4 pb-4">Frequently Asked <span className="gold-text">Questions</span></h2>
            
            {[
              { q: 'What is your typical project timeline?', a: 'Timelines vary greatly based on project scope. A standard luxury home build may take 12-18 months, while a major renovation might take 6-10 months. We provide detailed Gantt charts during the planning phase.' },
              { q: 'Do you handle planning permissions?', a: 'Yes. Our architectural and legal team handles all interactions with local councils to secure necessary planning permissions and ensure building regulation compliance.' },
              { q: 'Are your builds covered by warranty?', a: 'Absolutely. All our new builds come with a standard 10-year structural warranty (e.g., NHBC) to ensure your complete peace of mind.' },
              { q: 'Can I use my own architect?', a: 'Yes. While we have an expert in-house design team, we are highly experienced in collaborating seamlessly with external architects chosen by our clients.' }
            ].map((faq, i) => (
              <div key={i} className="glass-card mb-4">
                <h3 className="gold-text mb-2" style={{ fontSize: '20px' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-light)', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </section>
        </>
      );
      export default FAQ;
    
