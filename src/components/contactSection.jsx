import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/contactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section py-5 bg-light">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2 className="section-title">Get in Touch</h2>
            <p>
              If you have any questions or would like to get in touch with us,
              please fill out the form below.
            </p>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6} sm={12}>
            <h2 className="section-title">Contact Information</h2>
            <p>
              <strong>Address:</strong> 123 Main St, Anytown, USA 12345
            </p>
            <p>
              <strong>Phone:</strong> 555-555-5555
            </p>
            <p>
              <strong>Email:</strong>{" "}
              [info@example.com](mailto:info@example.com)
            </p>
            <p>
              <strong>Hours:</strong> Monday - Friday, 9am - 5pm
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
