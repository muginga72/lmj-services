import React from "react";
import { useNavigate } from "react-router-dom";
import Services from "../pages/Services";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to LMJ Services</h1>
      <p>Explore our mission, values, and what makes us different.</p>
      <button
        onClick={() => window.open("/who-we-are", "_blank")}
        style={{
          marginRight: "1rem",
          backgroundColor: "lightgray",
          color: "blue",
        }}
      >
        Who We Are
      </button>
      <button
        onClick={() => navigate("/contact")}
        style={{
          marginRight: "1rem",
          backgroundColor: "lightgray",
          color: "blue",
        }}
      >
        Contact Us
      </button>
      {/* <button
        onClick={() => window.open("/learn-more", "_blank")}
        style={{
          marginRight: "1rem",
          backgroundColor: "lightgray",
          color: "green",
        }}
      >
        Learn More
      </button> */}
      <Services />
    </div>
  );
};

export default Home;
