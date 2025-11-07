import "../Assets/Styling/Resume.css";

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import pdf from "../Assets/Images/Ramey Resume.pdf";
import resumeP1 from "../Assets/Images/ResumeP1.png";
import resumeP2 from "../Assets/Images/ResumeP2.png";

const Resume = () => {
  return (
    <>
      <Container className="resume-container text-center">
        <div className="resume-header py-4">
          <h2 className="text-white mb-3">Resume</h2>
          <Button
            href={pdf}
            download="Meagan_Ramey_Resume.pdf"
            variant="light"
            size="lg"
          >
            <i className="bi bi-download me-2"></i>
            Download PDF
          </Button>
        </div>

        <div className="resume-images">
          <img
            src={resumeP1}
            alt="Resume Page 1"
            className="resume-image img-fluid mb-3"
          />
          <img
            src={resumeP2}
            alt="Resume Page 2"
            className="resume-image img-fluid"
          />
        </div>
      </Container>
    </>
  );
};

export default Resume;
