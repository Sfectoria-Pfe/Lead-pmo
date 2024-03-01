import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; 



const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="xl" bg="light" variant="light" className="custom-navbar">
      <Container>
    
        <Navbar.Brand as={Link} to="/">LEAD</Navbar.Brand>
        <img
            src="/logo.svg" 
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto content"> {/* Ajout de la classe content pour le défilement */}
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