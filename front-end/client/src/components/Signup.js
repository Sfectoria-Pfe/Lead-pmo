import React, { useState } from "react";

import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import '../components/style/signup.css';
const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: Number,
    dateOfBirth: Date,
    currentJob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check for step 1 completion
    if (step === 1) {
      setStep(2); // Move to step 2
      return;
    }

    // Send signup request to server with formData
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Redirect user to login page after successful signup
        window.location.href = "/login";
      } else {
        const errorMessage = await response.text();
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      

      <Modal show={step === 1} onHide={() => setStep(0)} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Step 1: Personal Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
           
              <Col>
                <Form.Group controlId="firstName">
                   first Name
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="First Name"
                    required={true}
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastName">
                  last Name
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Last Name"
                    required={true}
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="phoneNumber">
                  phone Number
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Phone Number"
                    required={true}
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Row>
      {/* Day field */}
      <Col>
        <Form.Group controlId="dayOfBirth">
          day Of Birth
          <Form.Control
            type="number"
            placeholder="Day"
            min="1"
            max="31"
            required={true}
            value={formData.dayOfBirth}
            onChange={(e) => setFormData({ ...formData, dayOfBirth: e.target.value })}
          />
        </Form.Group>
      </Col>
      {/* Month field */}
      <Col>
        <Form.Group controlId="monthOfBirth">
          month Of Birth
          <Form.Control
            as="select"
            placeholder="Month"
            required={true}
            value={formData.monthOfBirth}
            onChange={(e) => setFormData({ ...formData, monthOfBirth: e.target.value })}
          >
            <option value="">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            {/* Add other months */}
          </Form.Control>
        </Form.Group>
      </Col>
      {/* Year field */}
      <Col>
        <Form.Group controlId="yearOfBirth">
          year Of Birth
          <Form.Control
            type="number"
            placeholder="Year"
            min="1900"
            max="9999"
            required={true}
            value={formData.yearOfBirth}
            onChange={(e) => setFormData({ ...formData, yearOfBirth: e.target.value })}
          />
        </Form.Group>
      </Col>
    </Row>
            
            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={step === 2} onHide={() => setStep(0)} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Step 2: Account Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            
              <Col>
                <Form.Group controlId="currentJob">
                  current Job
                  <Form.Control
                    type="text"
                    autoComplete="off"
                    placeholder="Current Job"
                    required={true}
                    value={formData.currentJob}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              
              <Col>
                <Form.Group controlId="email">
                  Email
                  <Form.Control
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    required={true}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
  <Form.Group controlId="password">
    Password
    <Form.Control
      type="password"
      placeholder="Password"
      required={true}
      value={formData.password}
      onChange={handleChange}
    />
  </Form.Group>
</Col>
<Col>
  <Form.Group controlId="confirmPassword">
    confirm Password
    <Form.Control
      type="password"
      placeholder="Confirm Password"
      required={true}
      value={formData.confirmPassword}
      onChange={handleChange}
      isInvalid={formData.password !== formData.confirmPassword} 
    />
    <Form.Control.Feedback type="invalid">Passwords do not match</Form.Control.Feedback> 
  </Form.Group>
</Col>
<Button variant="secondary" onClick={() => setStep(1)}> 
      <i className="bi bi-arrow-left"></i> Back 
    </Button>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Signup;
