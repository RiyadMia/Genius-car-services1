import React from "react";
import sleeping from "../../../images/seeping.jpg";
const NotFound = () => {
  return (
    <div>
      <h1 className="text-primary text-center mt-5 mb-5">
        Mechanic is sleeping...!!!
      </h1>
      <img className="w-100" src={sleeping} alt="" />
    </div>
  );
};

export default NotFound;
