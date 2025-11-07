import "../Assets/Styling/Letter.css";

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import FECert from "../Assets/Images/FrontEndCertificate.png";
import FullStackCert from "../Assets/Images/FullStackCertificate.png";
import pdf from "../Assets/Images/Ramey Resume.pdf";

const Letter = () => {
  return (
    <>
      <Card.Body
        className="bg-dark p-5"
        variant="dark"
        style={{ minWidth: "18rem" }}
      >
        <Card.Title className="h3 mb-2 pt-2 font-weight-bold text-light">
          Hello there, I&apos;m Meagan. <br />
          Nice to meet you.
        </Card.Title>

        <Card.Text
          className="text-light mb-4 font-weight-normal"
          style={{ fontSize: "1rem" }}
        >
          I&apos;m a Software Development Engineer with 4+ years of professional
          experience specializing in modern React/TypeScript front-end
          development and Python/C# event-driven microservices. Currently at
          WEX, I&apos;ve led critical technical modernization efforts, including
          authoring complete design documents for migrating legacy Angular
          applications to React/TypeScript, and optimizing enterprise Kafka
          infrastructure performance through rigorous analysis and testing.
          <br />
          <br />
          My work spans the full stack, from architecting resilient
          microservices with exactly-once processing semantics to building
          intuitive user interfaces for enterprise service management platforms,
          from building CI/CD pipelines to coding the project infrastructure in
          AWS and Azure. I am enjoying the opportunity to learn about
          performance optimization and technical writing, by authoring
          comprehensive documentation analyzing Kafka consumer recovery
          patterns, configuration tuning, and multi-region architecture
          strategies.
          <br />
          <br />
          What sets me apart is my ability to see the complete picture—from
          system architecture and performance analysis to user experience and
          business impact. I approach every project with thoroughness: writing
          detailed technical documentation, creating reusable component
          libraries, and considering long-term maintainability. My background in
          Biology research (CSAC presentations) taught me the importance of
          rigorous methodology, hypothesis testing, and data-driven decisions—
          skills that translate directly to software engineering. I value clear
          communication, thoughtful code reviews, and collaborative
          problem-solving, bringing these principles to every team I work with.
          <br />
          <br />
          Beyond my day job, I run a freelance web development business where I
          architect and build complete production applications from scratch.
          Recent projects include designing a sophisticated 7-component React
          system with data visualization (personality radar charts), creating
          custom Django management commands for bulk image processing, and
          migrating infrastructure to AWS (S3, SES) achieving 99% cost
          reduction. I also authored a technical architecture document analyzing
          premium competitors and designing conversion-optimized user journeys
          for my client&apos;s website.
          <br />
          <br />
          Outside of coding, I&apos;m passionate about building community and
          maintaining work-life balance. I serve on the board of my local contra
          dance community, manage our social media presence (
          <a
            href="https://www.instagram.com/cfootmad"
            target="_blank"
            rel="noreferrer"
            className="text-light"
          >
            @cfootmad
          </a>
          ), and attend as many dances as I can. I love photography and cooking,
          enjoy camping, and unwind with board games and classic video games
          like Skyrim and Sid Meier&apos;s Civilization V. While I value working
          remotely, I&apos;ve driven initiatives to bring my team closer
          together, fostering a bond that most teams don&apos;t have. I believe
          strongly in work-life balance and creating meaningful connections,
          both in and out of the office.
          <br />
          <br />
          Sincerely,
          <br />
          <br />
          Meagan S. Ramey
        </Card.Text>

        {/* Contact CTA Section */}
        <div className="text-center mt-4 pt-4 border-top border-secondary">
          <h5 className="text-light mb-3">Interested in working together?</h5>
          <p className="text-light mb-4">
            Let&apos;s connect and discuss how I can contribute to your team!
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <Button
              href="mailto:meagan.ramey@yahoo.com"
              variant="primary"
              size="lg"
              className="px-4"
            >
              <i className="bi bi-envelope-fill me-2"></i>
              Email Me
            </Button>
            <Button
              href="https://www.linkedin.com/in/meagan-ramey/"
              target="_blank"
              rel="noreferrer"
              variant="outline-light"
              size="lg"
              className="px-4"
            >
              <i className="bi bi-linkedin me-2"></i>
              Connect on LinkedIn
            </Button>
            <Button
              href={pdf}
              download="Meagan_Ramey_Resume.pdf"
              variant="outline-light"
              size="lg"
              className="px-4"
            >
              <i className="bi bi-download me-2"></i>
              Download Resume
            </Button>
          </div>
        </div>
      </Card.Body>
      <div id="img-wrapper">
        <img
          src={FECert}
          alt="Front End Development Certification"
          className="img-fluid"
          id="hover-zoom"
        />
        <img
          src={FullStackCert}
          alt="Full Stack Development Certification"
          className="img-fluid"
          id="hover-zoom"
        />
      </div>
    </>
  );
};

export default Letter;
