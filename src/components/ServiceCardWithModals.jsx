import React, { useState } from "react";
import { Card, Button, ButtonGroup, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCardWithModals = ({ title, description, image, link }) => {
  const [showModal, setShowModal] = useState({
    request: false,
    schedule: false,
    share: false,
  });

  const [formData, setFormData] = useState({
    serviceType: "",
    details: "",
    date: "",
    time: "",
    email: "",
  });

  const [selectedService, setSelectedService] = useState(null);
  const [activeModalType, setActiveModalType] = useState("");

  const handleShow = (type) => {
    setSelectedService(title);
    setActiveModalType(type);
    setShowModal((prev) => ({ ...prev, [type]: true }));
  };

  const handleClose = (type) => {
    setShowModal((prev) => ({ ...prev, [type]: false }));
    setActiveModalType("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const getPlaceholder = (field) => {
    if (activeModalType === "request") {
      if (field === "serviceType") return `Type of ${selectedService}`;
      if (field === "details") return `Describe your ${selectedService} request...`;
    }
    if (activeModalType === "schedule") {
      if (field === "serviceType") return `Scheduling for ${selectedService} `;
    }
    if (activeModalType === "share") {
      if (field === "email") return `Enter email to share ${selectedService}`;
    }
    return "";
  };

  const handleSubmitRequest = () => {
    console.log("Request Submitted:", {
      selectedService,
      serviceType: formData.serviceType,
      details: formData.details,
    });
    handleClose("request");
  };

  const handleSubmitSchedule = () => {
    console.log("Schedule Confirmed:", {
      selectedService,
      serviceType: formData.serviceType,
      date: formData.date,
      time: formData.time,
    });
    handleClose("schedule");
  };

  const handleSubmitShare = () => {
    console.log("Service Shared To:", formData.email);
    handleClose("share");
  };

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Card className="h-100 shadow-sm d-flex flex-column">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          style={{ objectFit: "cover", height: "200px" }}
        />
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
          {today}
        </Card.Footer>
      </Card>

      {/* Request Modal */}
      <Modal show={showModal.request} onHide={() => handleClose("request")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Request Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("serviceType")}
                value={formData.serviceType}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="details" className="mt-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={getPlaceholder("details")}
                value={formData.details}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("request")}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmitRequest}>
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Schedule Modal */}
      <Modal show={showModal.schedule} onHide={() => handleClose("schedule")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("serviceType")}
                value={formData.serviceType}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="date" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="time" className="mt-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={formData.time}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("schedule")}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmitSchedule}
            disabled={!formData.serviceType || !formData.date || !formData.time}
          >
            Confirm Schedule
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Share Modal */}
      <Modal show={showModal.share} onHide={() => handleClose("share")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share This Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Recipient Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={getPlaceholder("email")}
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("share")}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleSubmitShare}>
            Send Invite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceCardWithModals;