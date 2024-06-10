import React, { useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

const CustomNavbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 700) {
        navbar.classList.add('navbar-scroll');
      } else {
        navbar.classList.remove('navbar-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={500} spy={true}>About</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} spy={true}>Projects</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500} spy={true}>Skills</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} spy={true}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
