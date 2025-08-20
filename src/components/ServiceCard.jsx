import React from "react";

const ServiceCard = ({ title, description, image }) => (
  <div className="service-card">
    <img src={ImageDecoder} alt={`${title} image`} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;