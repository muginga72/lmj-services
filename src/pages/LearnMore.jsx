import React from 'react';
import { servicesObject } from '../data/servicesObject';

const LearnMore = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginTop: "20px", marginBottom: "30px", color: 'blue' }}>Explore Our Services</h2>

      {Object.entries(servicesObject).map(([key, service]) => (
        <div key={key} className="service-block" style={{ marginBottom: '2rem', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
          <h2>{service.title}</h2>

          {/* Carousel */}
          <div className="carousel-wrapper" style={{ display: 'flex', overflowX: 'auto', gap: '1rem', padding: '1rem 0' }}>
            {service.images.map((img, index) => (
              <img
                key={index}
                src={`/images/${img}`}
                alt={`${service.title} ${index + 1}`}
                style={{ height: '150px', borderRadius: '8px' }}
              />
            ))}
          </div>

          {/* Accordion */}
          <details style={{ backgroundColor: '#bbe2ebff', padding: '1rem', borderRadius: '6px', cursor: 'pointer' }}>
            <summary style={{ fontWeight: 'bold', fontSize: '1rem' }}>Description</summary>
            <p style={{ marginTop: '1rem', color: 'blue' }}>{service.description}</p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default LearnMore;