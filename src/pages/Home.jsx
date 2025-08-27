// export default Home;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import PaginationServices from "../components/PaginationServices";
import { paginate } from "../utils/paginate";
import ServiceCardWithModals from "../components/ServiceCardWithModals";

const Home = () => {
  const servicesArray = Object.entries(services);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const paginatedServices = paginate(servicesArray, currentPage, itemsPerPage);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to LMJ Services</h1>
      <p>Explore our mission, values, and what makes us different.</p>

      <div style={{ marginBottom: "2rem" }}>
        <button
          onClick={() => window.open("/who-we-are", "_blank")}
          style={{
            marginRight: "1rem",
            backgroundColor: "lightgray",
            color: "blue",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Who We Are
        </button>
        <button
          onClick={() => navigate("/contact")}
          style={{
            backgroundColor: "lightgray",
            color: "blue",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Contact Us
        </button>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {paginatedServices.map(([key, service]) => (
          <div key={key} style={{ width: "350px", margin: "1rem" }}>
            <ServiceCardWithModals
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          </div>
        ))}
      </div>

      <PaginationServices
        totalItems={servicesArray.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
