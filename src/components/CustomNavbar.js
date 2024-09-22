import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../styles/navbar.css';

const CustomNavbar = () => {
  const [count, setCount] = useState('Loading...');

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://my-gateway-9zy6x2b6.uc.gateway.dev');
        const data = await response.json();
        setCount(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        setCount('Error fetching count');
      }
    };

    fetchVisitorCount();
  }, []);

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
      <Navbar.Brand className="visitor-count-link">Visitor Count: {count}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="about" smooth={true} duration={500} spy={true}>About</Nav.Link>
            <Nav.Link as={Link} to="experience" smooth={true} duration={500} spy={true}>Experience</Nav.Link>
            <Nav.Link as={Link} to="skills" smooth={true} duration={500} spy={true}>Skills</Nav.Link>
            <Nav.Link as={Link} to="education" smooth={true} duration={500} spy={true}>Education</Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500} spy={true}>Projects</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500} spy={true}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
