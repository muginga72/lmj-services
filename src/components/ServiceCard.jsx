import React from "react";
import { Card } from 'react-bootstrap';

const ServiceCard = ({ title, description, image, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <Card className="h-100 shadow-sm hover-shadow clickable-card">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </a>
);

export default ServiceCard;