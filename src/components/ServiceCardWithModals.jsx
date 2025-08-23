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

  const handleShow = (type) => setShowModal({ ...showModal, [type]: true });
  const handleClose = (type) => setShowModal({ ...showModal, [type]: false });

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

        {/* ButtonGroup placed outside Card.Body, above Footer */}
        <div className="px-3 pb-3">
          <ButtonGroup vertical className="w-100">
            <Button variant="success" className="mb-2" onClick={() => handleShow('request')}>
              Request Services
            </Button>
            <Button variant="primary" className="mb-2" onClick={() => handleShow('schedule')}>
              Schedule Services
            </Button>
            {/* <Button variant="danger" className="mb-2" onClick={() => handleShow('cancel')}>
              Cancel Services
            </Button> */}
            <Button variant="outline-secondary" onClick={() => handleShow('share')}>
              Share
            </Button>
          </ButtonGroup>
        </div>

        <Card.Footer
          style={{
            backgroundColor: '#f8f9fa',
            borderTop: 'none',
            fontSize: '0.8rem',
            color: '#888',
          }}
        >
          {today}
        </Card.Footer>
      </Card>

      {/* Modals */}
      <Modal show={showModal.request} onHide={() => handleClose('request')}>
        <Modal.Header closeButton>
          <Modal.Title>Request Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceType">
              <Form.Label>Service Type</Form.Label>
              <Form.Control type="text" placeholder="e.g., Vitamin C Analysis" />
            </Form.Group>
            <Form.Group controlId="formDetails" className="mt-3">
              <Form.Label>Details</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describe your request..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('request')}>Close</Button>
          <Button variant="success">Submit Request</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.schedule} onHide={() => handleClose('schedule')}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formDate">
              <Form.Label>Select Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formTime" className="mt-3">
              <Form.Label>Select Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('schedule')}>Close</Button>
          <Button variant="primary">Confirm Schedule</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.cancel} onHide={() => handleClose('cancel')}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCancelReason">
              <Form.Label>Reason for Cancellation</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Let us know why..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('cancel')}>Close</Button>
          <Button variant="danger">Cancel Service</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal.share} onHide={() => handleClose('share')}>
        <Modal.Header closeButton>
          <Modal.Title>Share This Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Recipient Email</Form.Label>
              <Form.Control type="email" placeholder="example@domain.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose('share')}>Close</Button>
          <Button variant="outline-secondary">Send Invite</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiceCardWithModals;