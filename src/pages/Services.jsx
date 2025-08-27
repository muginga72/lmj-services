import React from 'react';
import '../Services.css';
import { Container, Row, Col } from 'react-bootstrap';
import { services } from '../data/services';
import ServiceCardWithModals from "../components/ServiceCardWithModals";

const Services = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Our Services</h2>
    <Row>
      {services.map(service => (
        <Col key={service.id} md={4} className="mb-4">
          <div className="service-card-hover">
            <ServiceCardWithModals {...service} />
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Services;