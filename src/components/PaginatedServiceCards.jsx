import React, { useState } from "react";
import { servicesObject } from "../data/servicesObject";
import ServiceCardWithModals from "../components/ServiceCardWithModals";
import PaginationServices from "../components/PaginationServices";
import { paginate } from "../utils/paginate";
import { Container, Row, Col } from "react-bootstrap";

const PaginatedServiceCards = () => {
  const servicesArray = Object.entries(servicesObject);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const paginatedServices = paginate(servicesArray, currentPage, itemsPerPage);

  return (
    <Container style={{ padding: "2rem" }}>
      <h2 className="text-center mb-4 text-primary">Our Services</h2>

      <Row xs={1} sm={2} md={2} lg={2} xl={2} className="g-4">
        {paginatedServices.map(([key, service]) => (
          <Col key={key}>
            <ServiceCardWithModals
              title={service.title}
              description={service.description}
              image={`/src/images/${service.image[0]}`} // Use first image
              link={service.link}
            />
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <PaginationServices
          totalItems={servicesArray.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </Container>
  );
};

export default PaginatedServiceCards;