import React from "react";
import Typed from "react-typed";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const LandingPage = (props) => {
  return (
    <>
      <Container>
        <Row>Hello</Row>
        <Row>Another hello</Row>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am XYZ</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer",
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
