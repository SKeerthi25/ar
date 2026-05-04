import React from 'react';
import InnerHero from '../components/InnerHero';
import { Search, Leaf, Award } from 'lucide-react';

const Quality = () => (
  <>
    <InnerHero title="Materials & Quality" />
    <section className="section-padding container fade-up">
      <div className="text-center mb-4 pb-4">
          <span className="section-subtitle">Our Standards</span>
          <h2 className="section-title">Materials & <span className="gold-text">Quality Control</span></h2>
          <p className="rich-text" style={{ maxWidth: '800px', margin: '0 auto' }}>At ARCHANADEVI LTD, we source globally and build locally. True luxury cannot be achieved with subpar materials, which is why we maintain a hyper-curated supply chain.</p>
      </div>
      
      <div className="grid-2" style={{ gap: '40px', marginBottom: '40px' }}>
          <div>
              <img src="/images/quality.png" alt="Materials" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="gold-text mb-3" style={{ fontSize: '28px' }}>The Pinnacle of Materials</h3>
              <p className="rich-text mb-3">We reject the industry standard of "acceptable tolerances." Whether it is book-matched Italian Calacatta marble for a master en-suite or sustainable Accoya timber for exterior cladding, our procurement team inspects materials at the source.</p>
              <ul className="rich-text" style={{ paddingLeft: '20px', listStyleType: 'square', color: 'var(--text-light)' }}>
                  <li><strong>Structural Steel:</strong> High-tensile, CE-marked British steel guaranteed for life.</li>
                  <li><strong>Glazing:</strong> Triple-glazed, thermally broken structural glass from Switzerland.</li>
                  <li><strong>Masonry:</strong> Hand-cast bricks and custom-profiled Portland stone.</li>
                  <li><strong>Joinery:</strong> FSC-certified hardwoods, hand-finished by master carpenters.</li>
              </ul>
          </div>
      </div>
      
      <div className="grid-3 mt-4 text-center">
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="gold-text mb-3"><Search size={40} /></div>
              <h3 className="mb-3">Zero-Defect Policy</h3>
              <p className="rich-text">Quality control is embedded into our daily operations. Our internal auditing team conducts 50-point inspections at every major project milestone. Before any plasterboard is closed, all mechanical, electrical, and plumbing runs are photographically mapped and tested at peak load to guarantee lifelong reliability.</p>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="gold-text mb-3"><Leaf size={40} /></div>
              <h3 className="mb-3">Sustainable Sourcing</h3>
              <p className="rich-text">We are committed to building for the future. Our supply chain prioritizes ethically sourced, low-carbon materials, including recycled structural steel, FSC-certified timber, and VOC-free artisan paints, ensuring your luxury home is ecologically responsible without compromising on aesthetics.</p>
          </div>
          
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="gold-text mb-3"><Award size={40} /></div>
              <h3 className="mb-3">Artisan Craftsmanship</h3>
              <p className="rich-text">True luxury is found in the meticulous details. We exclusively employ veteran master craftsmen—from heritage stonemasons to bespoke cabinet makers—ensuring that every architectural finish, joint, and surface is executed with museum-grade precision and artistry.</p>
          </div>
      </div>
    </section>
  </>
);
export default Quality;
