
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ResidentialConstruction from './pages/ResidentialConstruction';
import Renovation from './pages/Renovation';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Process from './pages/Process';
import Quality from './pages/Quality';
import Quote from './pages/Quote';
import Blog from './pages/Blog';
import Areas from './pages/Areas';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential" element={<ResidentialConstruction />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/process" element={<Process />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
