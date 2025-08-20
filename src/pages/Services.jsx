import React from 'react';
import '../Services.css';
import {services} from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Services = () => (
  <section>
    <h2 style={{ textAlign: "center"}}>Our Services</h2>
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

export default Services;