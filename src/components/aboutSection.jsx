import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/aboutSection.css"; // Optional for custom styles

const AboutSection = () => {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Text Content */}
          <Col md={6} sm={12} className="mb-4">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              Welcome to our company! We specialize in providing top-notch
              solutions to help businesses thrive in the modern world. Our team
              of dedicated professionals is committed to delivering innovative,
              reliable, and customer-focused services tailored to your needs.
            </p>
            <p className="section-description">
              Whether it's crafting digital experiences, optimizing workflows,
              or solving complex challenges, we are here to help you succeed.
              Together, let's build a brighter future.
            </p>
          </Col>

          {/* Image */}
          <Col md={6} sm={12} className="text-center">
            <figure>
              <img
                src="images/about-us-image.png" // Replace with your image path
                alt="About Us"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "300px" }}
              />
              <figcaption className="figure-caption text-center">
                Our team of experts working together to deliver exceptional
                results.
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
