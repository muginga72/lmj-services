const ServiceCard = ({ name, description, icon }) => (
  <div className="service-card">
    <img src={icon} alt={`${name} icon`} />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;