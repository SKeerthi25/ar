import React from 'react';
import InnerHero from '../components/InnerHero';

const Projects = () => (
  <>
    <InnerHero title="Our Projects" />
    <section className="section-padding container">
      <div className="text-center mb-4 pb-4 fade-up">
          <span className="section-subtitle">Our Masterpieces</span>
          <h2 className="section-title">Visual <span className="gold-text">Gallery</span></h2>
          <p className="rich-text" style={{ maxWidth: '800px', margin: '0 auto' }}>A comprehensive selection of our completed luxury residences across the UK. Each project stands as a testament to our commitment to structural perfection and architectural brilliance.</p>
      </div>
      <div className="projects-grid">
          <div className="project-item fade-up">
              <img src="/images/project1.png" alt="Project" />
              <div className="project-overlay">
                  <h3>The Kingsway Manor</h3>
                  <p className="gold-text">Hayes, UK</p>
              </div>
          </div>
          <div className="project-item fade-up">
              <img src="/images/project2.png" alt="Project" />
              <div className="project-overlay">
                  <h3>Modern Eco Villas</h3>
                  <p className="gold-text">London, UK</p>
              </div>
          </div>
          <div className="project-item fade-up">
              <img src="/images/project3.png" alt="Project" />
              <div className="project-overlay">
                  <h3>Heritage Renovation</h3>
                  <p className="gold-text">Surrey, UK</p>
              </div>
          </div>
          <div className="project-item fade-up">
              <img src="/images/project4.png" alt="Project" />
              <div className="project-overlay">
                  <h3>The Glasshouse</h3>
                  <p className="gold-text">Berkshire, UK</p>
              </div>
          </div>
          <div className="project-item fade-up">
              <img src="/images/project2.png" alt="Project" />
              <div className="project-overlay">
                  <h3>Kensington Subterranean</h3>
                  <p className="gold-text">London, UK</p>
              </div>
          </div>
          <div className="project-item fade-up">
              <img src="/images/project3.png" alt="Project" />
              <div className="project-overlay">
                  <h3>Country Estate</h3>
                  <p className="gold-text">Oxfordshire, UK</p>
              </div>
          </div>
      </div>
    </section>
  </>
);

export default Projects;
