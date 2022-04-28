import React, { useEffect, useState } from "react";

const ServiceHooks = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://morning-cove-96291.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default ServiceHooks;
