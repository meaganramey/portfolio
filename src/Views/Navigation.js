import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import useStore from "../Store/Store";

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  const updateBackground = useStore((state) => state.updateBackground);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => updateBackground("home")}
          >
            Meagan Ramey
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => {
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150);
                  updateBackground("home");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about_meagan"
                onClick={() => {
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150);
                  updateBackground("aboutMe");
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                onClick={() => {
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150);
                  updateBackground("projects");
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => {
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150);
                  updateBackground("resume");
                }}
              >
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
