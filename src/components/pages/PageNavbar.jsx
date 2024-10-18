import { logout } from '../Auth/Logout';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageNavbar.css';

export function PageNavbar() {

  const handleLogout = () => {
    console.log("logging out...");
    logout();
  };

  return (
    <Navbar expand="lg" className="navbar-custom py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="/home" className="fw-bold fs-4 text-light">
          Pawpointments
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="/pets" className="nav-link-custom">Pets</Nav.Link>
            <Nav.Link href="/appointments/upcoming" className="nav-link-custom">Appointments</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={handleLogout} className="logout-btn">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
