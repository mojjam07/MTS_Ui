import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/serviceSection.css";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      name: "Installation of Screening Machines",
      description: "This is service 1",
      image: "/images/services/pic3.jpg",
    },
    {
      id: 2,
      name: "Servicing of Screening Machines",
      description: "This is service 2",
      image: "/images/services/pic4.jpg",
    },
    {
      id: 3,
      name: "Maintenance of Screening Machines",
      description: "This is service 3",
      image: "/images/services/pic1.jpg",
    },
    {
      id: 4,
      name: "Maintenance of Security Equipments",
      description: "This is service 4",
      image: "/images/services/pic2.jpg",
    },
  ];

  return (
    <section className="service-section py-5 bg-light">
      <Container>
        <Row>
          {services.map((service) => (
            <Col md={3} sm={6} key={service.id}>
              <div className="card h-100 shadow">
                <img
                  src={service.image}
                  alt={service.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <img
                    src={service.image}
                    alt={service.name}
                    style={{
                      width: 50,
                      height: 50,
                      marginBottom: 20,
                      borderRadius: "50%",
                      border: "2px solid #007bff",
                    }}
                  />
                  <h5 className="card-title text-center">{service.name}</h5>
                  <p className="card-text text-center">{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
