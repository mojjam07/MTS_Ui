import React, { useState } from "react";
import { Navbar, Nav, Form, FormCheck } from "react-bootstrap";
import "../styles/navbar.css"; // Import the custom styles

const CustomNavbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  return (
    <Navbar fixed="top" expand="lg" className="navbar-custom">
      <Navbar.Brand className="navbar-brand" href="#home">
        <img
          src="images/logo.png"
          alt="Logo"
          className="logo"
          style={{ height: "40px", marginLeft: "10px" }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#portfolio">Schedule</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
        </Nav>

        <Form className="ms-auto">
          <FormCheck
            type="switch"
            id="dark-mode-switch"
            label="Theme"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
