import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <LinkContainer to="/">
        <Navbar.Brand>LMJ Services</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/who-we-are">
            <Nav.Link>Who We Are</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Services" id="services-dropdown">
            <LinkContainer to="/services/web-development">
              <NavDropdown.Item>Web Development</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/wedding-events">
              <NavDropdown.Item>Wedding</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/tutoring">
              <NavDropdown.Item>Tutoring</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/buffet">
              <NavDropdown.Item>Buffet</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/beverages">
              <NavDropdown.Item>Beverages</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/services/beauty">
              <NavDropdown.Item>Beauty</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;