import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/esm/Button";

import "../Assets/Styling/LandingPage.css";

const LandingPage = (props) => {
  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center hello_row">
          <Jumbotron className="p-4 text-white hello_jumbo">
            <h1 className="intro-title mb-4">Meagan Ramey</h1>
            <h4 className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={[
                    "Front End Developer",
                    "Cat Mom",
                    "Back End Developer",
                    "Biologist",
                    "React Developer",
                    "Contra Dancer",
                    "Software Engineer",
                    "Lover of Life",
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </h4>
            <p className="pt-3">
              <Button as={Link} to='/about_meagan' variant='secondary' block>
                  View my work
              </Button>
            </p>
          </Jumbotron>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
