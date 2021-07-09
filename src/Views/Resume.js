import React from "react";
import Button from "react-bootstrap/Button";

import resumeP1 from "../Assets/Images/ResumeP1.png";
import resumeP2 from "../Assets/Images/ResumeP2.png";
import pdf from "../Assets/Images/Resume.pdf";
import "../Assets/Styling/Resume.css";

const Resume = (props) => {
  return (
    <>
      <div className="Main">
        <p className="pt-3">
          <Button href={pdf} download variant="secondary">
            Click here for a PDF of my resume.
          </Button>
        </p>
        <p className="pb-5 Main" >
        <img
          id="resume-zoom"
          style={{ width: "50%" }}
          src={resumeP1}
          alt="Resume Page 1 of 2"
        />{" "}
        <img
          id="resume-zoom"
          style={{ width: "50%" }}
          src={resumeP2}
          alt="Resume Page 2 of 2"
        />
        </p>
      </div>
    </>
  );
};

export default Resume;
