import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">LEAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/Products">Produits</Nav.Link>
            <Nav.Link as={Link} to="/Price">Prix</Nav.Link>
            <Nav.Link as={Link} to="/Features">Fonctionnalités</Nav.Link>
            <Nav.Link as={Link} to="/Timetracking">Suivi du temps</Nav.Link>
          </Nav>
          <Nav>
           <Nav.Link as={Link} to="/Login">Connexion</Nav.Link>
            <Nav.Link as={Link} to="/Signup">Inscription</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
