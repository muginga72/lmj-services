import React, { useState } from 'react';
import { Card, Button, ButtonGroup, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCardWithModals = () => {
  const [showModal, setShowModal] = useState({
    request: false,
    schedule: false,
    cancel: false,
    share: false,
  });
  const handleShow = (type) => setShowModal({ ...showModal, [type]: true });
  const handleClose = (type) => setShowModal({ ...showModal, [type]: false });

  return (
    <>
      <Card 
        style={{
          width: '22rem',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
          background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
          fontFamily: 'Segoe UI, sans-serif'
        }}
        className="m-3"
      >
        <Card.Img 
          variant="top" 
          src="../assets/images/chemistryServiceHub.png" 
          style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        />
        <Card.Body>
          <Card.Title style={{ fontWeight: '600', fontSize: '1.25rem' }}>
            🧪 Chemistry Service Hub
          </Card.Title>
          <Card.Text style={{ fontSize: '0.95rem', color: '#555' }}>
            Manage your lab simulations, nutrition analysis, and educational outreach from one place.
          </Card.Text>

          <ButtonGroup vertical className="w-100 mt-3">
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
        </Card.Body>
        <Card.Footer style={{ backgroundColor: '#f8f9fa', borderTop: 'none', fontSize: '0.8rem', color: '#888' }}>
          Last updated: Aug 21, 2025
        </Card.Footer>
      </Card>

      {/* Request Modal */}
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

      {/* Schedule Modal */}
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

      {/* Cancel Modal */}
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
      {/* Share Modal */}
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