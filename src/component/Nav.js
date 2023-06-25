import React from 'react';
import { Navbar, Nav, Container,  Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Assets/brightintech-logo.png'
import '../App.css'

const MyNavbar = () => {
  return (
    <Container  id="navbar">
    <Navbar bg="transparent" variant="light" expand="lg" >
      <Navbar.Brand href="/">
        <img src={logo} alt="logo" width={200} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" id="navToggle"/>
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className='nav-link' as={Link} to="/">Home</Nav.Link>
          <Nav.Link className='nav-link' as={Link} to="/about">About</Nav.Link>
          <Nav.Link className='nav-link' as={Link} to="/services">Services</Nav.Link>
          <Nav.Link className='nav-link' as={Link} to="/contact">Contact</Nav.Link>
          <Button className='btn text-bg-info px-4' as={Link} to="/contact">Get Started</Button>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>

  );
};
export default MyNavbar
