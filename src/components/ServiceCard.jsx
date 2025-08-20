import React from "react";
import { Card } from 'react-bootstrap';

const ServiceCard = ({ title, description, image }) => (
  <Card className="h-100 shadow-sm">
    <Card.Img variant="top" src={image} alt={title} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default ServiceCard;