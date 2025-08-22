import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard1 = () => {
  const handleRequest = () => alert('Requesting services...');
  const handleSchedule = () => alert('Scheduling services...');
  const handleCancel = () => alert('Cancelling services...');
  const handleShare = () => alert('Sharing this card...');
  return (
    <Card 
      style={{
        width: '22rem',
        borderRadius: '15px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        cursor: 'pointer',
        fontFamily: 'Segoe UI, sans-serif'
      }}
      className="m-3"
    >
      <Card.Img 
        variant="top" 
        src="https://via.placeholder.com/320x180" 
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
          <Button variant="success" onClick={handleRequest} className="mb-2">
            Request Services
          </Button>
          <Button variant="primary" onClick={handleSchedule} className="mb-2">
            Schedule Services
          </Button>
          <Button variant="danger" onClick={handleCancel} className="mb-2">
            Cancel Services
          </Button>
          <Button variant="outline-secondary" onClick={handleShare}>
            Share
          </Button>
        </ButtonGroup>
      </Card.Body>
      <Card.Footer style={{ backgroundColor: '#f8f9fa', borderTop: 'none', fontSize: '0.8rem', color: '#888' }}>
        Last updated: Aug 21, 2025
      </Card.Footer>
    </Card>
  );
};
export default ServiceCard1;