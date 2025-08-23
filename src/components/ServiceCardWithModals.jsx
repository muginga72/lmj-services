import React, { useState } from 'react';
import { Card, Button, ButtonGroup, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCardWithModals = ({ title, description, image, link }) => {
  const [showModal, setShowModal] = useState({
    request: false,
    schedule: false,
    cancel: false,
    share: false,
  });

  const [formData, setFormData] = useState({
    serviceType: '',
    details: '',
    date: '',
    time: '',
    cancelReason: '',
    email: '',
  });

  const [selectedService, setSelectedService] = useState(null);

  const handleShow = (type) => {
    setSelectedService(title);
    setShowModal({ ...showModal, [type]: true });
  };

  const handleClose = (type) => setShowModal({ ...showModal, [type]: false });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitRequest = () => {
    console.log('Request Submitted:', {
      selectedService,
      serviceType: formData.serviceType,
      details: formData.details,
    });
    handleClose('request');
  };

  const handleSubmitSchedule = () => {
    console.log('Schedule Confirmed:', {
      date: formData.date,
      time: formData.time,
    });
    handleClose('schedule');
  };

  const handleSubmitCancel = () => {
    console.log('Service Cancelled:', {
      reason: formData.cancelReason,
    });
    handleClose('cancel');
  };

  const handleSubmitShare = () => {
    console.log('Service Shared To:', formData.email);
    handleClose('share');
  };

  const today = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Card className="h-100 shadow-sm hover-shadow clickable-card d-flex flex-column">
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>

        <div className="px-3 pb-3">
          <ButtonGroup vertical className="w-100">
            <Button variant="success" className="mb-2" onClick={() => handleShow('request')}>
              Request Services
            </Button>
            <Button variant="primary" className="mb-2" onClick={() => handleShow('schedule')}>
              Schedule Services
            </Button>
            <Button variant="danger" className="mb-2" onClick={() => handleShow('cancel')}>
              Cancel Services
            </Button>
            <Button variant="outline-secondary" onClick={() => handleShow('share')}>
              Share
            </Button>
          </ButtonGroup>
        </div>

        <Card.Footer style={{ backgroundColor: '#f8f9fa', borderTop: 'none', fontSize: '0.8rem', color: '#888' }}>
          {today}
        </Card.Footer>
      </Card>

      {/* Request Modal */}
      <Modal show={showModal.request} onHide={() => handleClose('request')}>
        <Modal.Header closeButton>
          <Modal.Title>Request Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="serviceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control type="text" placeholder="e.g., Wedding event" value={formData.serviceType} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="details" className="mt-3">
              <Form.Label>Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your request..." value={formData.details} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('request')}>Close</Button>
          <Button variant="success" onClick={handleSubmitRequest}>Submit Request</Button>
        </Modal.Footer>
      </Modal>

      {/* Schedule Modal */}
      <Modal show={showModal.schedule} onHide={() => handleClose('schedule')}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="date">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" value={formData.date} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="time" className="mt-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Control type="time" value={formData.time} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('schedule')}>Close</Button>
          <Button variant="primary" onClick={handleSubmitSchedule}>Confirm Schedule</Button>
        </Modal.Footer>
      </Modal>

      {/* Cancel Modal */}
      <Modal show={showModal.cancel} onHide={() => handleClose('cancel')}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="cancelReason">
              <Form.Label>Reason for Cancellation</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Let us know why..." value={formData.cancelReason} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('cancel')}>Close</Button>
          <Button variant="danger" onClick={handleSubmitCancel}>Cancel Service</Button>
        </Modal.Footer>
      </Modal>

      {/* Share Modal */}
      <Modal show={showModal.share} onHide={() => handleClose('share')}>
        <Modal.Header closeButton>
          <Modal.Title>Share This Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Recipient Email</Form.Label>
              <Form.Control type="email" placeholder="example@domain.com" value={formData.email} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('share')}>Close</Button>
          <Button variant="outline-secondary" onClick={handleSubmitShare}>Send Invite</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceCardWithModals;