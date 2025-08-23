import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";

const ServiceCard = ({ title, description, image, link, handleShow }) => {
  // Get today's date in a readable format
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long", // e.g., Saturday
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="h-100 shadow-sm hover-shadow clickable-card d-flex flex-column">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <div className="px-3 pb-3">
          <ButtonGroup vertical className="w-100">
            <Button variant="success" className="mb-2" onClick={() => handleShow("request")}>
              Request Services
            </Button>
            <Button variant="primary" className="mb-2" onClick={() => handleShow("schedule")}>
              Schedule Services
            </Button>
            <Button variant="danger" className="mb-2" onClick={() => handleShow("cancel")}>
              Cancel Services
            </Button>
            <Button variant="outline-secondary" onClick={() => handleShow("share")}>
              Share
            </Button>
          </ButtonGroup>
        </div>

        <Card.Footer
          style={{
            backgroundColor: "#f8f9fa",
            borderTop: "none",
            fontSize: "0.8rem",
            color: "#888",
          }}
        >
          Last updated: {today}
        </Card.Footer>
      </Card>
    </a>
  );
};

export default ServiceCard;