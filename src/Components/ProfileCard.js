import React from "react";
import Card from "react-bootstrap/Card";

import Avatar from "../Assets/Images/avatar.jpg";
import Bootstrapimg from "../Assets/Images/bootstrap-icon.png";
import CSSimg from "../Assets/Images/css-icon.png";
import Django from "../Assets/Images/django-icon.png";
import Firebase from "../Assets/Images/firebase-icon.webp";
import Gitimg from "../Assets/Images/git-icon.png";
import Githubimg from "../Assets/Images/github-icon.png";
import Gitlabimg from "../Assets/Images/gitlab-icon.png";
import HTMLimg from "../Assets/Images/html-icon.png";
import JSimg from "../Assets/Images/javascript-icon.png";
import Mongo from "../Assets/Images/mongodb-icon1.png";
import Nodeimg from "../Assets/Images/nodejs-icon.png";
import Python from "../Assets/Images/python-icon.png";
import Reactimg from "../Assets/Images/react-icon.png";
import Redux from "../Assets/Images/redux-icon.png";
import Slack from "../Assets/Images/slack-icon.png";
import VS from "../Assets/Images/vscode-icon.png";
import "../Assets/Styling/ProfileCard.css";

const ProfileCard = (props) => {
  return (
    <>
      <Card style={{ minWidth: "18rem", maxWidth: "400px" }} text="secondary">
        <Card.Img variant="top" src={Avatar} alt="Meagan standing in a field" />
        <Card.Body>
          <Card.Title className="text-dark mb-3 font-weight-heavy">
            Meagan Ramey
          </Card.Title>
          <Card.Subtitle
            className="text-secondary mb-3 font-weight-light text-uppercase"
            style={{ fontSize: "0.9rem" }}
          >
            Full Stack Developer
          </Card.Subtitle>
          <Card.Text
            className="text-secondary mb-4 font-weight-normal"
            style={{ fontSize: "0.95rem" }}
          >
            Biology, coding, sociology, and Skyrim are my passions.
          </Card.Text>
          <Card.Text
            className="text-secondary mb-4"
            style={{ fontSize: "0.95rem" }}
          >
            meagan.ramey@yahoo.com
            <br />
            608-208-6758
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/meaganramey"
              target="_blank"
              rel="noreferrer"
            >
              meaganramey
              <br />
            </a>
            LinkdedIn:{" "}
            <a
              href="https://www.linkedin.com/in/meagan-ramey/"
              target="_blank"
              rel="noreferrer"
            >
              Meagan Ramey
            </a>
          </Card.Text>
          <div id="experience_in">
            <img
              src={HTMLimg}
              alt="HTML Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={JSimg}
              alt="JS Icon"
              className="img-fluid"
              style={{ width: 34 }}
            />
            <img
              src={CSSimg}
              alt="CSS Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Reactimg}
              alt="React Icon"
              className="img-fluid"
              style={{ width: 42 }}
            />
            <img
              src={Redux}
              alt="Redux Icon"
              className="img-fluid"
              style={{ width: 34 }}
            />
            <img
              src={Python}
              alt="Python Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Mongo}
              alt="Mongo Icon"
              className="img-fluid"
              style={{ width: 40 }}
            />
            <img
              src={Django}
              alt="Django Icon"
              className="img-fluid"
              style={{ width: 34 }}
            />
            <img
              src={Nodeimg}
              alt="NodeJS Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Bootstrapimg}
              alt="Bootstrap Icon"
              className="img-fluid"
              style={{ width: 32 }}
            />
            <img
              src={Gitlabimg}
              alt="Gitlab Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Githubimg}
              alt="Github Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Gitimg}
              alt="Git Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Firebase}
              alt="Firebase Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={Slack}
              alt="Slack Icon"
              className="img-fluid"
              style={{ width: 36 }}
            />
            <img
              src={VS}
              alt="VScode Icon"
              className="img-fluid"
              style={{ width: 32 }}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProfileCard;
