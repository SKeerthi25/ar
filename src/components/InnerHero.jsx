
import React from 'react';
import { Link } from 'react-router-dom';

const InnerHero = ({ title }) => (
  <section className="inner-hero">
    <div className="container fade-up">
      <h1>{title}</h1>
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>{title}</span>
      </div>
    </div>
  </section>
);
export default InnerHero;
