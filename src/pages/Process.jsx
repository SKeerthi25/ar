
      import React from 'react';
      import InnerHero from '../components/InnerHero';
      const Process = () => (
        <>
          <InnerHero title="Our Process" />
          <section className="section-padding container fade-up">
            <h2 className="section-title text-center mb-4 pb-4">Our Rigorous <span className="gold-text">Methodology</span></h2>
            <p className="rich-text text-center" style={{ maxWidth: '800px', margin: '0 auto 60px' }}>To guarantee that multi-million-pound projects are delivered on time and to the exact specification, we rely on a strict, battle-tested project management methodology. Our approach minimizes risk, ensures compliance with building regulations, and delivers perfection down to the millimeter.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div className="glass-card" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                    <h1 className="gold-text" style={{ fontSize: '100px', opacity: 0.3, margin: 0, lineHeight: 0.8 }}>01</h1>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--text-main)' }}>Phase 1: Feasibility, Procurement & Planning</h3>
                        <p className="rich-text" style={{ marginBottom: '15px' }}>Before any physical commitment, our surveyors conduct exhaustive site analysis, deep soil testing, and environmental impact assessments. We provide the client with a detailed, line-by-line bill of quantities.</p>
                        <ul className="rich-text" style={{ paddingLeft: '20px', listStyleType: 'circle', color: 'var(--text-light)' }}>
                            <li>Securing local authority planning permissions and conservation approvals.</li>
                            <li>Party Wall Agreements to ensure neighborhood compliance.</li>
                            <li>Initial budget locking to prevent mid-project financial inflation.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="glass-card" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                    <h1 className="gold-text" style={{ fontSize: '100px', opacity: 0.3, margin: 0, lineHeight: 0.8 }}>02</h1>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--text-main)' }}>Phase 2: Architectural & Engineering Design (BIM)</h3>
                        <p className="rich-text" style={{ marginBottom: '15px' }}>Utilizing cutting-edge Building Information Modeling (BIM) software, we create a precision digital twin of the proposed structure.</p>
                        <ul className="rich-text" style={{ paddingLeft: '20px', listStyleType: 'circle', color: 'var(--text-light)' }}>
                            <li>Resolving structural steelwork vs. M&E clashes virtually.</li>
                            <li>Detailed thermodynamic modeling to ensure energy efficiency (EPC Ratings).</li>
                            <li>Finalizing interior schematics down to custom joinery dimensions.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="glass-card" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                    <h1 className="gold-text" style={{ fontSize: '100px', opacity: 0.3, margin: 0, lineHeight: 0.8 }}>03</h1>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--text-main)' }}>Phase 3: Active Construction & Core Build</h3>
                        <p className="rich-text" style={{ marginBottom: '15px' }}>The site is secured, mobilized, and ground is broken. Under the watchful eye of our veteran Site Directors, rapid and safe construction commences.</p>
                        <ul className="rich-text" style={{ paddingLeft: '20px', listStyleType: 'circle', color: 'var(--text-light)' }}>
                            <li>Piling, underpinning, and basement excavation.</li>
                            <li>Erection of primary structural steel frames and masonry.</li>
                            <li>Achieving "Watertight" status (roofing and fenestration installed).</li>
                        </ul>
                    </div>
                </div>
                
                <div className="glass-card" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                    <h1 className="gold-text" style={{ fontSize: '100px', opacity: 0.3, margin: 0, lineHeight: 0.8 }}>04</h1>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--text-main)' }}>Phase 4: Fit-Out, Snagging & Handover</h3>
                        <p className="rich-text" style={{ marginBottom: '15px' }}>The luxury interior phase begins. Specialist tradesmen install bespoke elements, followed by a rigorous multi-point inspection.</p>
                        <ul className="rich-text" style={{ paddingLeft: '20px', listStyleType: 'circle', color: 'var(--text-light)' }}>
                            <li>M&E second-fix (lighting, HVAC, AV integrations).</li>
                            <li>Installation of custom cabinetry, stone counters, and artisan flooring.</li>
                            <li>Zero-defect snagging policy prior to client handover.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="glass-card" style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
                    <h1 className="gold-text" style={{ fontSize: '100px', opacity: 0.3, margin: 0, lineHeight: 0.8 }}>05</h1>
                    <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '24px', marginBottom: '15px', color: 'var(--text-main)' }}>Phase 5: Post-Handover Care & Maintenance</h3>
                        <p className="rich-text" style={{ marginBottom: '15px' }}>Our commitment does not end when the keys are handed over. We provide comprehensive aftercare to ensure your property remains flawless.</p>
                        <ul className="rich-text" style={{ paddingLeft: '20px', listStyleType: 'circle', color: 'var(--text-light)' }}>
                            <li>Scheduled maintenance visits for HVAC and smart home systems.</li>
                            <li>Dedicated rapid-response team for any immediate needs.</li>
                            <li>Long-term structural warranties and guarantees.</li>
                        </ul>
                    </div>
                </div>
            </div>
          </section>
        </>
      );
      export default Process;
    
