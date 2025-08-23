import React, { useState } from "react";
import { Card, Button, ButtonGroup, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCardWithModals = ({ title, description, image, link }) => {
  const [showModal, setShowModal] = useState({
    request: false,
    schedule: false,
    share: false,
  });

  const [selectedService, setSelectedService] = useState(null);
  const [activeModalType, setActiveModalType] = useState("");

  // Separate form states for each modal
  const [requestData, setRequestData] = useState({
    fullName: "",
    serviceType: "",
    details: "",
  });

  const [scheduleData, setScheduleData] = useState({
    fullName: "",
    serviceType: "",
    date: "",
    time: "",
  });

  const [shareData, setShareData] = useState({
    email: "",
  });

  const handleShow = (type) => {
    setSelectedService(title);
    setActiveModalType(type);
    setShowModal((prev) => ({ ...prev, [type]: true }));
  };

  const handleClose = (type) => {
    setShowModal((prev) => ({ ...prev, [type]: false }));
    setActiveModalType("");
  };

  // Modal-specific change handlers
  const handleRequestChange = (e) => {
    const { id, value } = e.target;
    setRequestData((prev) => ({ ...prev, [id]: value }));
  };

  const handleScheduleChange = (e) => {
    const { id, value } = e.target;
    setScheduleData((prev) => ({ ...prev, [id]: value }));
  };

  const handleShareChange = (e) => {
    const { id, value } = e.target;
    setShareData((prev) => ({ ...prev, [id]: value }));
  };

  const getPlaceholder = (field) => {
    if (activeModalType === "request") {
      if (field === "fullName") return "Your full name";
      if (field === "serviceType") return `Type of ${selectedService}`;
      if (field === "details") return `Describe your ${selectedService} request...`;
    }
    if (activeModalType === "schedule") {
      if (field === "fullName") return "Your full name";
      if (field === "serviceType") return `Scheduling for ${selectedService}`;
    }
    if (activeModalType === "share") {
      if (field === "email") return `Enter email to share ${selectedService}`;
    }
    return "";
  };

  // Submit handlers
  const handleSubmitRequest = () => {
    console.log("Request Submitted:", {
      selectedService,
      ...requestData,
    });
    handleClose("request");
    setRequestData({ fullName: "", serviceType: "", details: "" });
  };

  const handleSubmitSchedule = () => {
    console.log("Schedule Confirmed:", {
      selectedService,
      ...scheduleData,
    });
    handleClose("schedule");
    setScheduleData({ fullName: "", serviceType: "", date: "", time: "" });
  };

  const handleSubmitShare = () => {
    console.log("Service Shared To:", shareData.email);
    handleClose("share");
    setShareData({ email: "" });
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
              <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("fullName")}
                value={requestData.fullName}
                onChange={handleRequestChange}
              />
              </Form.Group>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("serviceType")}
                value={requestData.serviceType}
                onChange={handleRequestChange}
              />
            </Form.Group>
            <Form.Group controlId="details" className="mt-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={getPlaceholder("details")}
                value={requestData.details}
                onChange={handleRequestChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("request")}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={handleSubmitRequest}
            disabled={!requestData.serviceType || !requestData.details}
          >
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
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("fullName")}
                value={scheduleData.fullName}
                onChange={handleScheduleChange}
              />
            </Form.Group>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("serviceType")}
                value={scheduleData.serviceType}
                onChange={handleScheduleChange}
              />
            </Form.Group>
            <Form.Group controlId="date" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={scheduleData.date}
                onChange={handleScheduleChange}
              />
            </Form.Group>
            <Form.Group controlId="time" className="mt-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={scheduleData.time}
                onChange={handleScheduleChange}
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
            disabled={
              !scheduleData.fullName ||
              !scheduleData.serviceType || 
              !scheduleData.date || 
              !scheduleData.time
            }
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
                value={shareData.email}
                onChange={handleShareChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose("share")}>
            Close
          </Button>
          <Button
            variant="outline-secondary"
            onClick={handleSubmitShare}
            disabled={!shareData.email}
          >
            Send Invite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceCardWithModals;