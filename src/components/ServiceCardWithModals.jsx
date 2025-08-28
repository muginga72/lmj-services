import React, { useState, useEffect } from "react";
import { Card, Button, ButtonGroup, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCardWithModals = ({ title, description, image }) => {
  const localKey = `serviceCardState-${title}`;

  const defaultState = {
    showModal: { request: false, schedule: false, share: false },
    selectedService: null,
    activeModalType: "",
    requestData: { fullName: "", serviceType: "", details: "" },
    scheduleData: { fullName: "", serviceType: "", date: "", time: "" },
    shareData: { email: "" },
  };

  const [state, setState] = useState(defaultState);

  // Load persisted state on mount
  useEffect(() => {
    const saved = localStorage.getItem(localKey);
    if (saved) {
      setState(JSON.parse(saved));
    }
  }, [localKey]);

  // Persist state on change
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(state));
  }, [state, localKey]);

  const handleShow = (type) => {
    setState((prev) => ({
      ...prev,
      selectedService: title,
      activeModalType: type,
      showModal: { ...prev.showModal, [type]: true },
    }));
  };

  const handleClose = (type) => {
    setState((prev) => ({
      ...prev,
      activeModalType: "",
      showModal: { ...prev.showModal, [type]: false },
    }));
  };

  const handleChange = (e, formType) => {
    const { id, value } = e.target;
    setState((prev) => ({
      ...prev,
      [formType]: { ...prev[formType], [id]: value },
    }));
  };

  const getPlaceholder = (field) => {
    const { activeModalType, selectedService } = state;
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

  const handleSubmit = (type) => {
    if (type === "request") {
      console.log("Request Submitted:", {
        selectedService: state.selectedService,
        ...state.requestData,
      });
      setState((prev) => ({
        ...prev,
        showModal: { ...prev.showModal, request: false },
        requestData: defaultState.requestData,
      }));
    }

    if (type === "schedule") {
      console.log("Schedule Confirmed:", {
        selectedService: state.selectedService,
        ...state.scheduleData,
      });
      setState((prev) => ({
        ...prev,
        showModal: { ...prev.showModal, schedule: false },
        scheduleData: defaultState.scheduleData,
      }));
    }

    if (type === "share") {
      console.log("Service Shared To:", state.shareData.email);
      setState((prev) => ({
        ...prev,
        showModal: { ...prev.showModal, share: false },
        shareData: defaultState.shareData,
      }));
    }
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
          style={{ objectFit: "cover", height: "300px" }}
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
      <Modal show={state.showModal.request} onHide={() => handleClose("request")} centered>
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
                value={state.requestData.fullName}
                onChange={(e) => handleChange(e, "requestData")}
              />
            </Form.Group>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("serviceType")}
                value={state.requestData.serviceType}
                onChange={(e) => handleChange(e, "requestData")}
              />
            </Form.Group>
            <Form.Group controlId="details" className="mt-3">
              <Form.Label>Details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder={getPlaceholder("details")}
                value={state.requestData.details}
                onChange={(e) => handleChange(e, "requestData")}
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
            onClick={() => handleSubmit("request")}
            disabled={!state.requestData.serviceType || !state.requestData.details}
          >
            Submit Request
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Schedule Modal */}
      <Modal show={state.showModal.schedule} onHide={() => handleClose("schedule")} centered>
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
                value={state.scheduleData.fullName}
                onChange={(e) => handleChange(e, "scheduleData")}
              />
            </Form.Group>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control
                type="text"
                placeholder={getPlaceholder("serviceType")}
                value={state.scheduleData.serviceType}
                onChange={(e) => handleChange(e, "scheduleData")}
              />
            </Form.Group>
            <Form.Group controlId="date" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={state.scheduleData.date}
                onChange={(e) => handleChange(e, "scheduleData")}
              />
            </Form.Group>
            <Form.Group controlId="time" className="mt-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={state.scheduleData.time}
                onChange={(e) => handleChange(e, "scheduleData")}
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
            onClick={() => handleSubmit("schedule")}
            disabled={
              !state.scheduleData.fullName ||
              !state.scheduleData.serviceType ||
              !state.scheduleData.date ||
              !state.scheduleData.time
            }
          >
            Confirm Schedule
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Share Modal */}
      <Modal show={state.showModal.share} onHide={() => handleClose("share")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Share Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={getPlaceholder("email")}
                value={state.shareData.email}
                onChange={(e) => handleChange(e, "shareData")}
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
            onClick={() => handleSubmit("share")}
            disabled={!state.shareData.email}
          >
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceCardWithModals;