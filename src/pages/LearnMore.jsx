import React, { useState } from "react";
import { servicesObject } from "../data/servicesObject";
import PaginationServices from "../components/PaginationServices";
import { paginate } from "../utils/paginate";
import Carousel from "react-bootstrap/Carousel";

const LearnMore = () => {
  const servicesArray = Object.entries(servicesObject);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const paginatedServices = paginate(servicesArray, currentPage, itemsPerPage);

  return (
    <div style={{ padding: "2rem" }}>
      <h2
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "30px",
          color: "blue",
        }}
      >
        Explore Our Services
      </h2>

      {paginatedServices.map(([key, service]) => (
        <div
          key={key}
          className="service-card"
          style={{
            marginBottom: "2rem",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1.5rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1rem", color: "#333" }}>
            {service.title}
          </h3>

          {/* Carousel per service */}
          <Carousel>
            {service.image.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={`/images/${img}`}
                  alt={`${service.title} ${index + 1}`}
                  style={{
                    height: "300px",
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Accordion Description */}
          <details
            style={{
              backgroundColor: "#e6f7ff",
              padding: "1rem",
              borderRadius: "6px",
              marginTop: "1rem",
            }}
          >
            <summary
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Description
            </summary>
            <p style={{ marginTop: "1rem", color: "#005a9c" }}>
              {service.description}
            </p>
          </details>
        </div>
      ))}

      <PaginationServices
        totalItems={servicesArray.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default LearnMore;