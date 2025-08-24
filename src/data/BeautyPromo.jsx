import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // For navigation
import "bootstrap/dist/css/bootstrap.min.css";

const BeautyPromo = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "Beauty Promotion",
      image: "/images/beautyPromo.jpg",
    },
  ];

  const handleShopNow = () => {
    navigate("/shop"); // Redirect to your shop or promotion page
  };

  return (
    <div
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   width: "100%",
      //   zIndex: 1050,
      //   backgroundColor: "#fff",
      //   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      // }}
    >
      <Container fluid className="bg-light py-5 px-4 shadow-sm">
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold text-danger">Buy for Half Price</h2>
            <p className="lead text-muted">Beauty Care Products</p>
            <Button variant="primary" size="lg" onClick={handleShopNow}>
              Learn More
            </Button>
          </Col>
          <Col md={8}>
            <Row className="justify-content-center g-3">
              {products.map((product, index) => (
                <Col key={index} xs={6} md={4}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fluid
                    rounded
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeautyPromo;