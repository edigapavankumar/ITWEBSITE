import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/logo.jpg"; // Correctly importing the logo

const Navbar1 = () => {
  return (
    <Navbar
      expand="lg"
      style={{ background: "linear-gradient(135deg, #A1D6E2, #1995AD)" }}
      variant="dark"
      className="shadow-sm p-2"
    >
      <Container>
        {/* Navbar Brand with Logo */}
        <Navbar.Brand href="#" className="fw-bold text-black d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px", borderRadius: "50%" }}
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            OSTECHSERVICE
          </motion.div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-white">
            {["Home", "About", "Services", "Projects", "Locations", "ContactUs"].map((item, index) => (
              <Nav.Item key={index}>
                <Link
                  to={`/${item.toLowerCase()}`} // Use Link component for routing
                  className="mx-2"
                  style={{ color: "black", fontWeight: "bold", textDecoration: "none" }}
                >
                  {item}
                </Link>
              </Nav.Item>
            ))}
            <Button
              variant="outline-light"
              href="#login"
              className="ms-3"
              style={{ borderColor: "#A1D6E2", color: "black" }}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
