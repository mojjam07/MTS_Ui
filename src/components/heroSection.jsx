import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "../styles/heroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  const carouselItems = [
    {
      id: 1,
      src: "/images/carousel/pic1.png",
      alt: "Slide 1",
      caption: "Welcome to Our Site",
    },
    {
      id: 2,
      src: "/images/carousel/pic2.png",
      alt: "Slide 2",
      caption: "Discover Our Services",
    },
    {
      id: 3,
      src: "/images/carousel/pic3.png",
      alt: "Slide 3",
      caption: "Experience the Best",
    },
    {
      id: 4,
      src: "/images/carousel/pic4.png",
      alt: "Slide 4",
      caption: "Join Our Community",
    },
    {
      id: 5,
      src: "/images/carousel/pic5.png",
      alt: "Slide 5",
      caption: "Let's Grow Together",
    },
  ];

  return (
    <div className="hero-section">
      <Carousel>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.src}
              alt={item.alt}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
