import React from "react";
import Letter from "../Components/Letter";
import ProfileCard from "../Components/ProfileCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = (props) => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Row>
          <Col
            xs={{ span: 12, order: "last" }}
            md={{ span: 4, order: "first", offset: 0 }}
            lg={{ span: 4, order: "first" }}
          >
            <ProfileCard />
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            md={{ span: 7, order: "last", offset: 1 }}
            lg={{ span: 7, order: "last" }}
          >
            <Letter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
