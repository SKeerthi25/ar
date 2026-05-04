import React from 'react';
import InnerHero from '../components/InnerHero';

const Blog = () => (
  <>
    <InnerHero title="Our Blog" />
    <section className="section-padding container fade-up">
        <div className="text-center mb-4 pb-4">
            <span className="section-subtitle">Insights & News</span>
            <h2 className="section-title">The <span className="gold-text">Journal</span></h2>
            <p className="rich-text" style={{ maxWidth: '800px', margin: '0 auto' }}>Read our latest thoughts on architectural trends, luxury real estate markets, and sustainable construction techniques.</p>
        </div>
        
        <div className="grid-3">
            <div className="glass-card fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src="/images/project2.png" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} alt="Blog 1" />
                <p className="gold-text mb-2" style={{ fontSize: '14px' }}><i className="far fa-calendar-alt"></i> March 15, 2026</p>
                <h3 className="mb-3">The Rise of Subterranean Living in London</h3>
                <p className="rich-text mb-4" style={{ fontSize: '14px', flex: 1 }}>As above-ground space becomes scarcer, we explore the incredible engineering behind multi-million pound mega-basements. Our latest projects involve excavating up to three stories below existing heritage structures. These subterranean marvels now routinely house full-size swimming pools, luxury cinemas, climate-controlled wine cellars, and automated car stacking systems. The structural challenges are immense, requiring contiguous piling and complex water table management, but the result effectively doubles the square footage of prime central London real estate without altering the historic facade.</p>
            </div>
            
            <div className="glass-card fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src="/images/blog1.png" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} alt="Blog 2" />
                <p className="gold-text mb-2" style={{ fontSize: '14px' }}><i className="far fa-calendar-alt"></i> February 28, 2026</p>
                <h3 className="mb-3">Integrating Smart Home Technology</h3>
                <p className="rich-text mb-4" style={{ fontSize: '14px', flex: 1 }}>From invisible speakers plastered into the walls to centralized climate control, we are rewiring the homes of tomorrow. True luxury is invisible; it is the seamless integration of technology that anticipates your needs. We now install biometric entry systems, circadian rhythm lighting that mimics natural sunlight to improve sleep, and voice-controlled motorized blind systems. By burying miles of structured cabling within the steel framework before the walls are even closed, we ensure the property is future-proofed for the next decade of technological advancements.</p>
            </div>
            
            <div className="glass-card fade-up" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src="/images/project4.png" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} alt="Blog 3" />
                <p className="gold-text mb-2" style={{ fontSize: '14px' }}><i className="far fa-calendar-alt"></i> January 10, 2026</p>
                <h3 className="mb-3">Sustainable Luxury: Not an Oxymoron</h3>
                <p className="rich-text mb-4" style={{ fontSize: '14px', flex: 1 }}>How ground source heat pumps and solar slates are allowing massive estates to achieve net-zero carbon footprints. Sustainability in high-end construction is no longer an afterthought—it is a core requirement. We are replacing traditional gas boilers with deep-bore geothermal heating systems and integrating Tesla Powerwalls directly into the foundational electrical grid. By utilizing ultra-insulating smart glass and reclaimed structural timber, we build mansions that not only look magnificent but actively give back to the environment, proving that grandeur does not have to come at an ecological cost.</p>
            </div>
        </div>
    </section>
  </>
);

export default Blog;
