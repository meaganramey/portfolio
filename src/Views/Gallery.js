import React from "react";
import Button from "react-bootstrap/Button";

const Gallery = (props) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p className="pt-3">
          <Button deactivated variant="secondary">
            Excuse our mess, the Gallery is still being built.
          </Button>
        </p>
      </div>
    </>
  );
};

export default Gallery;
