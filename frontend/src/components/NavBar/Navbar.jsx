import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar1 = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{ background: "linear-gradient(135deg, #A1D6E2, #1995AD)" }}
        variant="dark"
        className="shadow-sm p-2"
      >
        <Container>
          <Navbar.Brand
            onClick={() => handleNavigation("/")}
            className="fw-bold text-black"
            style={{ cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "10px",
                  borderRadius: "50%",
                }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                OSTECHSERVICE
              </motion.div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto text-white">
              {["About", "Services", "Projects", "Locations", "Contact Us"].map(
                (item, index) => (
                  <Nav.Link
                    key={index}
                    onClick={() =>
                      handleNavigation(
                        `/${item.toLowerCase().replace(/ /g, "")}`
                      )
                    }
                    className="mx-2"
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {item}
                  </Nav.Link>
                )
              )}
              <Button
                variant="outline-light"
                className="ms-3"
                style={{ borderColor: "#A1D6E2", color: "black" }}
                onClick={() => handleNavigation("/login1")}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
