import React from "react";
import Card from "react-bootstrap/Card";

import FECert from "../Assets/Images/FrontEndCertificate.png";
import FullStackCert from "../Assets/Images/FullStackCertificate.png";
import "../Assets/Styling/Letter.css";

const Letter = (props) => {
  return (
    <>
      <Card.Body
        className="bg-dark"
        variant="dark"
        style={{ minWidth: "18rem" }}
      >
        <Card.Title className="h3 mb-2 pt-2 font-weight-bold text-light">
          Hello there, I'm Meagan. Nice to meet you.
        </Card.Title>

        <Card.Text
          className="text-light mb-4 font-weight-normal"
          style={{ fontSize: "1rem" }}
        >
          After graduating with my Full Stack Software Engineering Certificate
          in January, I was offered, and accepted, a remote, contract, Software
          Engineering Facilitator position for Kenzie Academy. In the past year
          I have collaborated with talented people to complete several projects,
          and have spent my free time building a few small applications. I am
          quietly confident, naturally curious, and perpetually working on
          improving my skills one problem at a time.
          <br />
          <br />I am fascinated by science and life, and love to find the answer
          to how things work. While completing my bachelor’s degree in Biology I
          was a TA for two courses and presented research at CSAC in 2017. My
          favorite subject, even now, is Anthropology. My curiousity and
          positive attitude are my drive to succeed. Two of my biggest weakness
          are attention to detail and time management. I can spend too much time
          trying to do or perfect "just one more thing" to wrap up a project. By
          setting reasonable goals as projects progress, and reminders on my
          calendar ahead of due dates, I've started making progress adjusting my
          mental goal to be a realistic goal.
          <br />
          <br />
          During my software engineering training at Kenzie Academy, I developed
          numerous skills, including object-oriented programming, user
          interfaces, and python. In my current position I have helped inspire
          numerous students to understand the "brain behind the machine" and
          spark their love for coding. My time as a coding tutor and facilitator
          have taught me how to work well with teams, assist people with
          different learning styles or skill levels, identify weaknesses or
          areas for improvement in another’s code, and read code with
          proficiency. I am ready to tackle a challenging, professional position
          that makes excellent use of my multi-tasking, organizational, and
          technical skills.
          <br />
          <br />
          Sincerely,
          <br />
          <br />
          Meagan S. Ramey
        </Card.Text>
      </Card.Body>
      <div id='img-wrapper'>
      <img
        src={FECert}
        alt="Salesforce Certification"
        className="img-fluid"
        id='hover-zoom'
      />
      <img
        src={FullStackCert}
        alt="Kenzie Certification"
        className="img-fluid"
        id='hover-zoom'
      />
      {/* <img
        src={FECert}
        alt="Free Code Camp Certification"
        className="img-fluid"
        style={{ width: 200 }}
      /> */}
      </div>
    </>
  );
};

export default Letter;
