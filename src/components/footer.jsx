import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";

const FooterSection = () => {
  return (
    <footer className="footer-section bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Column 1: About Us */}
          <Col md={4} sm={12} className="mb-3">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing the best services and products for
              our customers. Follow us for updates and insights.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={4} sm={12} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3: Contact Us */}
          <Col md={4} sm={12} className="mb-3">
            <h5>Contact Us</h5>
            <p>
              <strong>Email:</strong> support@example.com <br />
              <strong>Phone:</strong> +123 456 7890
            </p>
            <div className="social-icons">
              <a href="#facebook" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} MTS Nig. Ltd. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default FooterSection;
