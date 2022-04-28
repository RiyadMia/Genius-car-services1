import { useEffect, useState } from "react";

const useServiceDatiles = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://morning-cove-96291.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service];
};
export default useServiceDatiles;
