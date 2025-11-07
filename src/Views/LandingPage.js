import "../Assets/Styling/LandingPage.css";

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

import useStore from "../Store/Store";

const LandingPage = () => {
  const updateBackground = useStore((state) => state.updateBackground);
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center hello_row">
          <div className="p-5 text-white hello_jumbo rounded">
            <h1 className="intro-title mb-4">Meagan Ramey</h1>
            <h4 className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <ReactTyped
                  strings={[
                    "Software Development Engineer",
                    "React/TypeScript Specialist",
                    "Kafka Performance Expert",
                    "Technical Writer & Architect",
                    "Full-Stack Developer",
                    "Microservices Specialist",
                    "Python & C# Developer",
                    "System Optimizer",
                    "Problem Solver",
                    "Lifelong Learner",
                  ]}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </h4>
            <p className="pt-3">
              <Button
                as={Link}
                to="/about_meagan"
                variant="light"
                size="lg"
                onClick={() => updateBackground("aboutMe")}
              >
                Learn About Me
              </Button>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
