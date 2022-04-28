import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDatial = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  // const [service] = useServiceDatiles(serviceId);

  useEffect(() => {
    const url = `https://morning-cove-96291.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h1>welcome to detail : {service.name}</h1>
      <div className="text-center">
        <Link to={`/chackout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDatial;
