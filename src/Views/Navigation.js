import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
        <Navbar.Brand as={Link} to="/">
          Meagan Ramey
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about_meagan" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              Resume
            </Nav.Link>
            <NavDropdown title="Code Samples" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="#action/3.1" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.2" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#action/3.3" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#action/3.4" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
