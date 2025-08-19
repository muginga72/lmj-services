import services from '../data/services';
import ServiceCard from '../components/ServiceCard';

const Services = () => (
  <section>
    <h2>Our Services</h2>
    <div className="services-grid">
      {services.map(service => (
        <ServiceCard key={service.name} {...service} />
      ))}
    </div>
  </section>
);

export default Services;