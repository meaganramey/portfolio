import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import useStore from "../Store/Store";

const Missing = () => {
  const updateBackground = useStore((state) => state.updateBackground);
  useEffect(() => {
    updateBackground("missing");
  }, [updateBackground]);

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <div className="p-5 hello_jumbo rounded bg-white">
            <h3>The page you requested could not be found.</h3>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Missing;
