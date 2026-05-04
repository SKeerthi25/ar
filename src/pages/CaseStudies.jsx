import React from 'react';
import InnerHero from '../components/InnerHero';

const CaseStudies = () => (
  <>
    <InnerHero title="Case Studies" />
    <section className="section-padding container fade-up">
        <h2 className="section-title text-center mb-4 pb-4">In-Depth <span className="gold-text">Project Analysis</span></h2>
        
        <div className="glass-card mb-4" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <img src="/images/port_7.png" style={{ borderRadius: '8px', flex: '1 1 400px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} alt="Case Study 1" />
            <div style={{ flex: '1 1 400px' }}>
                <span className="section-subtitle">Surrey, £3.2M Budget</span>
                <h2 className="gold-text mb-3">Project Alpha: The Glass Pavilion</h2>
                
                <h4 className="mb-2">The Brief</h4>
                <p className="rich-text">The client requested the demolition of a dilapidated 1960s structure to be replaced by a highly modern, light-filled, single-story 'Glass Pavilion' set within 4 acres of protected woodland.</p>
                
                <h4 className="mb-2">Architectural Challenges</h4>
                <p className="rich-text">Due to strict Tree Preservation Orders (TPOs), standard foundation digging was impossible without damaging the root systems of ancient oaks. Furthermore, achieving a seemingly "floating" roof with minimal visible columns required extreme engineering.</p>
                
                <h4 className="mb-2">Our Execution</h4>
                <p className="rich-text">We engineered a bespoke micro-piled raft foundation that hovered over the root systems. To achieve the frameless glass aesthetic, we imported specialized structural glass from Germany that acted as load-bearing elements, allowing the 30-ton steel roof to appear weightless. The project was delivered flawlessly over 14 months.</p>
            </div>
        </div>

        <div className="glass-card mt-4" style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
            <img src="/images/port_8.png" style={{ borderRadius: '8px', flex: '1 1 400px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} alt="Case Study 2" />
            <div style={{ flex: '1 1 400px' }}>
                <span className="section-subtitle">Kensington, £5.8M Budget</span>
                <h2 className="gold-text mb-3">Project Beta: The Subterranean Expansion</h2>
                
                <h4 className="mb-2">The Brief</h4>
                <p className="rich-text">A high-profile client required the addition of a swimming pool, cinema room, and wine cellar to a Grade II listed townhouse in Central London where above-ground expansion was prohibited.</p>
                
                <h4 className="mb-2">Architectural Challenges</h4>
                <p className="rich-text">Excavating a double-story basement directly beneath a 150-year-old fragile masonry building, sandwiched between two neighboring properties, while managing London's high water table.</p>
                
                <h4 className="mb-2">Our Execution</h4>
                <p className="rich-text">Our engineering team installed contiguous piled retaining walls to prevent neighbor subsidence. We executed a top-down construction method, installing the ground floor slab first to brace the walls before mining underneath. Advanced tanking and multi-level sump pumps ensured the subterranean space remains permanently dry. Finished with bespoke Italian marble, the underground pool is a masterpiece of urban expansion.</p>
            </div>
        </div>
    </section>
  </>
);

export default CaseStudies;
