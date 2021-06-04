import React from "react";
import Letter from "../Components/Letter";
import ProfileCard from "../Components/ProfileCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LandingPage = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col
            xs={{ span: 6, order: "last" }}
            md={4}
            lg={{ span: 4, order: "first" }}
          >
            <ProfileCard />
          </Col>
          <Col
            xs={{ span: 12, order: "first" }}
            md={8}
            lg={{ span: 8, order: "last" }}
          >
            <Letter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
