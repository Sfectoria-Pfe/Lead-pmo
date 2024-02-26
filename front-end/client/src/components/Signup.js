import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const Signup = () => {
  return (
    <Container>
      <div className="auth">
        <h1>Inscription</h1>
        <Form action="">
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              autoComplete="off"
              placeholder="Nom d'utilisateur"
              required={true}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              autoComplete="off"
              placeholder="Adresse e-mail"
              required={true}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              placeholder="Mot de passe"
              required={true}
            />
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirmer le mot de passe"
              required={true}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            S'inscrire
          </Button>
        </Form>
        <p className="login-message">
          Déjà membre ? <Link to="/login">Connexion</Link>
        </p>
      </div>
    </Container>
  );
};

export default Signup;
