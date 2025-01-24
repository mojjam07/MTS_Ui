import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/portfolioSection.css";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      type: "image",
      src: "/images/portfolio1.jpg",
      alt: "Portfolio Item 1",
    },
    {
      id: 2,
      type: "video",
      src: "/videos/portfolio2.mp4",
      alt: "Portfolio Item 2",
    },
    {
      id: 3,
      type: "image",
      src: "/images/portfolio3.jpg",
      alt: "Portfolio Item 3",
    },
    {
      id: 4,
      type: "video",
      src: "/videos/portfolio4.mp4",
      alt: "Portfolio Item 4",
    },
    {
      id: 5,
      type: "image",
      src: "/images/portfolio5.jpg",
      alt: "Portfolio Item 5",
    },
    {
      id: 6,
      type: "video",
      src: "/videos/portfolio6.mp4",
      alt: "Portfolio Item 6",
    },
  ];

  return (
    <section className="portfolio-section py-5 bg-light">
      <Container>
        <Row>
          {portfolioItems.map((item) => (
            <Col md={4} sm={6} key={item.id}>
              {item.type === "image" ? (
                <img src={item.src} alt={item.alt} className="portfolio-item" />
              ) : (
                <video
                  src={item.src}
                  alt={item.alt}
                  className="portfolio-item"
                  controls
                />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioSection;
