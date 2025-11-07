import "../Assets/Styling/ProfileCard.css";

import React from "react";
import Card from "react-bootstrap/Card";

import Avatar from "../Assets/Images/avatar.jpg";
import AWS from "../Assets/Images/aws-svgrepo-com.svg";
import Bootstrapimg from "../Assets/Images/bootstrap-icon.png";
import CSSimg from "../Assets/Images/css-icon.png";
import Django from "../Assets/Images/django-icon.png";
import Docker from "../Assets/Images/docker-svgrepo-com.svg";
import Gitimg from "../Assets/Images/git-icon.png";
import Githubimg from "../Assets/Images/github-icon.png";
import HTMLimg from "../Assets/Images/html-icon.png";
import JSimg from "../Assets/Images/javascript-icon.png";
import Kafka from "../Assets/Images/kafka-svgrepo-com.svg";
import Nodeimg from "../Assets/Images/nodejs-icon.png";
import PostgreSQL from "../Assets/Images/postgresql-svgrepo-com.svg";
import Python from "../Assets/Images/python-icon.png";
import Reactimg from "../Assets/Images/react-icon.png";
import TypeScript from "../Assets/Images/typescript-official-svgrepo-com.svg";
import VS from "../Assets/Images/vscode-icon.png";

const ProfileCard = () => {
  return (
    <>
      <Card
        id="profileCard"
        style={{ minWidth: "18rem", maxWidth: "400px" }}
        text="secondary"
      >
        <Card.Img variant="top" src={Avatar} alt="Meagan standing in a field" />
        <Card.Body>
          <Card.Title className="text-dark mb-3 fw-bold">
            Meagan Ramey
          </Card.Title>
          <Card.Subtitle
            className="text-secondary mb-3 fw-light text-uppercase"
            style={{ fontSize: "0.9rem" }}
          >
            Software Development Engineer
          </Card.Subtitle>
          <Card.Text
            className="text-secondary mb-4 fw-normal"
            style={{ fontSize: "0.95rem" }}
          >
            Building resilient distributed systems and intuitive user
            interfaces. Passionate about Kafka optimization, React/TypeScript
            development, technical architecture, and performance analysis. Also
            love biology, contra dancing, and anthropology.
          </Card.Text>
          <Card.Text
            className="text-secondary mb-4"
            style={{ fontSize: "0.95rem" }}
          >
            <div className="mb-2">
              <i className="bi bi-envelope-fill me-2"></i>
              <a
                href="mailto:meagan.ramey@yahoo.com"
                className="text-decoration-none"
              >
                meagan.ramey@yahoo.com
              </a>
            </div>
            <div className="mb-2">
              <i className="bi bi-telephone-fill me-2"></i>
              608-208-6758
            </div>
            <div className="mb-2">
              <i className="bi bi-github me-2"></i>GitHub:{" "}
              <a
                href="https://github.com/meaganramey"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                meaganramey
              </a>
            </div>
            <div className="mb-2">
              <i className="bi bi-linkedin me-2"></i>LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/meagan-ramey/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                Meagan Ramey
              </a>
            </div>
          </Card.Text>
          <Card.Subtitle
            className="text-dark mb-3 fw-semibold"
            style={{ fontSize: "0.9rem" }}
          >
            Tech Stack
          </Card.Subtitle>
          <div
            id="experience_in"
            className="d-flex flex-wrap gap-2 justify-content-center"
          >
            <img
              src={Reactimg}
              alt="React"
              className="img-fluid"
              style={{ width: 36 }}
              title="React"
            />
            <img
              src={TypeScript}
              alt="TypeScript"
              className="img-fluid"
              style={{ width: 36 }}
              title="TypeScript"
            />
            <img
              src={JSimg}
              alt="JavaScript"
              className="img-fluid"
              style={{ width: 34 }}
              title="JavaScript"
            />
            <img
              src={Python}
              alt="Python"
              className="img-fluid"
              style={{ width: 36 }}
              title="Python"
            />
            <img
              src={Nodeimg}
              alt="Node.js"
              className="img-fluid"
              style={{ width: 36 }}
              title="Node.js"
            />
            <img
              src={Django}
              alt="Django"
              className="img-fluid"
              style={{ width: 34 }}
              title="Django"
            />
            <img
              src={Kafka}
              alt="Kafka"
              className="img-fluid"
              style={{ width: 36 }}
              title="Kafka"
            />
            <img
              src={Docker}
              alt="Docker"
              className="img-fluid"
              style={{ width: 36 }}
              title="Docker"
            />
            <img
              src={AWS}
              alt="AWS"
              className="img-fluid"
              style={{ width: 36 }}
              title="AWS"
            />
            <img
              src={PostgreSQL}
              alt="PostgreSQL"
              className="img-fluid"
              style={{ width: 36 }}
              title="PostgreSQL"
            />
            <img
              src={HTMLimg}
              alt="HTML"
              className="img-fluid"
              style={{ width: 36 }}
              title="HTML"
            />
            <img
              src={CSSimg}
              alt="CSS"
              className="img-fluid"
              style={{ width: 36 }}
              title="CSS"
            />
            <img
              src={Bootstrapimg}
              alt="Bootstrap"
              className="img-fluid"
              style={{ width: 32 }}
              title="Bootstrap"
            />
            <img
              src={Githubimg}
              alt="GitHub"
              className="img-fluid"
              style={{ width: 36 }}
              title="GitHub"
            />
            <img
              src={Gitimg}
              alt="Git"
              className="img-fluid"
              style={{ width: 36 }}
              title="Git"
            />
            <img
              src={VS}
              alt="VS Code"
              className="img-fluid"
              style={{ width: 32 }}
              title="VS Code"
            />
          </div>
          <div className="mt-3 text-center">
            <small className="text-muted d-block mb-1">
              <strong>Backend:</strong> TypeScript • C# • Kafka • Microservices
            </small>
            <small className="text-muted d-block mb-1">
              <strong>Infrastructure:</strong> AWS (S3, SES) • Docker • Heroku •
              PostgreSQL
            </small>
            <small className="text-muted d-block">
              <strong>Specialty:</strong> Performance Analysis • Technical
              Writing • System Architecture
            </small>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileCard;
