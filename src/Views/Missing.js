import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";

import useStore from "../Store/Store";

const Missing = (props) => {
  const updateBackground = useStore((state) => state.updateBackground);
  useEffect(() => {
    updateBackground("missing");
  }, []);

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Jumbotron className="p-4 hello_jumbo">
          <h3>

            The page you requested could not be found.
          </h3>
          </Jumbotron>
        </Row>
      </Container>
    </>
  );
};

export default Missing;
