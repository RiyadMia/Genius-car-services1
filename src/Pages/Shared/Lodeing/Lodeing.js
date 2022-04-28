import React from "react";
import { Spinner } from "react-bootstrap";

const Lodeing = () => {
  return (
    <div
      style={{ hight: "300px" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Lodeing;
