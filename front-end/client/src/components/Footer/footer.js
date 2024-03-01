import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <h5>À propos de nous</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4} sm={6}>
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>Contactez-nous</h5>
            <p>123 rue de la République, Paris, France</p>
            <p>Email: contact@example.com</p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-center">&copy; 2024 Mon Site Web. Tous droits réservés.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
