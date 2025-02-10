import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Card,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";

const companyInfo = {
  name: "OsTechServices Ltd.",
  ceo: "Busitron",
  managingDirector: "Ramesh",
  services: [
    {
      title: "Web Development",
      description: "Creating scalable web applications.",
    },
    {
      title: "AI & Machine Learning",
      description: "Building intelligent AI solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
    {
      title: "Cybersecurity",
      description: "Protecting digital assets with security solutions.",
    },
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      year: 2023,
      client: "ABC Retail",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "AI Chatbot",
      year: 2022,
      client: "XYZ Corp",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "ERP System",
      year: 2021,
      client: "Global Enterprises",
      image: "https://via.placeholder.com/300",
    },
  ],
  locations: ["London, UK", "New York, USA", "Bangalore, India"],
};

const Section = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="my-5"
  >
    <h2 className="text-center mb-4">{title}</h2>
    {children}
  </motion.div>
);

const Home = () => {
  const [navbarSize, setNavbarSize] = useState("large");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarSize("small");
      } else {
        setNavbarSize("large");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [index, setIndex] = useState(0);
  const services = companyInfo.services;
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
  };
  return (
    <>
      <br />
      <div className="m-4 ">
        <Carousel interval={3000} fade>
          <Carousel.Item>
            <motion.img
              className="d-block w-100"
              src="https://t4.ftcdn.net/jpg/03/23/82/99/240_F_323829966_H32wLhoouiPinJ66KyggCvqQ2dFPuuQ1.jpg"
              alt="Slide 1"
              height={400}
              width="100%"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <motion.img
              className="d-block w-100"
              src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
              alt="Slide 2"
              height={400}
              width="100%"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <motion.img
              className="d-block w-100"
              src="https://as2.ftcdn.net/v2/jpg/03/32/23/41/1000_F_332234118_PzyvwhrMVm2yYMfu0q2CFnD1MeKHgD8w.jpg"
              alt="Slide 3"
              height={400}
              width="100%"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="mt-5 pt-5">
        <Section id="about" title="About Us">
          <p className="text-center">
            {companyInfo.name} was founded in November 2000. Led by CEO{" "}
            {companyInfo.ceo} and Managing Director{" "}
            {companyInfo.managingDirector}, we specialize in delivering
            cutting-edge technology solutions globally.
          </p>
        </Section>

        <Section>
          <h2 className="text-center mb-4">Our Services</h2>
          <div
            className="d-flex justify-content-center position-relative"
            style={{ height: "300px" }}
          >
            {services.map((service, i) => {
              let position = "hidden";
              if (i === index) position = "active";
              else if (i === (index - 1 + services.length) % services.length)
                position = "prev";
              else if (i === (index + 1) % services.length) position = "next";

              return (
                <motion.div
                  key={i}
                  className={`position-absolute ${position}`}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    x: position === "prev" ? -100 : 100,
                  }}
                  animate={{
                    opacity: position === "active" ? 1 : 0.5,
                    scale: position === "active" ? 1 : 0.9,
                    x:
                      position === "active"
                        ? 0
                        : position === "prev"
                          ? -100
                          : 100,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    className="shadow-lg p-3"
                    style={{
                      background: "linear-gradient(135deg, #A1D6E2, #1995AD)",
                      width: "350px",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-outline-primary mx-2"
              onClick={prevSlide}
            >
              Previous
            </button>
            <button
              className="btn btn-outline-primary mx-2"
              onClick={nextSlide}
            >
              Next
            </button>
          </div>
        </Section>

        <Section title="Projects">
          <Row>
            {companyInfo.projects.map((project, index) => (
              <Col md={4} key={index}>
                <Card className="shadow-lg p-3">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      Year: {project.year} <br /> Client: {project.client}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Section>

        <Section title="Locations">
          <ul className="text-center list-unstyled">
            {companyInfo.locations.map((location, index) => (
              <li key={index} className="my-2">
                {location}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Contact Us">
          <p className="text-center">
            Reach out to us at contact@techvision.com
          </p>
        </Section>
      </Container>

      <footer
        style={{ backgroundColor: "#1995AD" }}
        className="text-white text-center py-3"
      >
        <p>
          &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
