import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
const ChackOut = () => {
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);
  /*const [user, setUser] = useState({
    name: "Akbar The Great",
    email: "akbar@momo.taj",
    address: "Tajmohol Road Md.pur",
    phone: "01711111111",
  });
  const handleAddressChange = (event) => {
    console.log(event.target.value);
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);
  };
  */

  const [service, setService] = useState({});
  useEffect(() => {
    const url = `https://morning-cove-96291.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handlPlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    axios
      .post("https://morning-cove-96291.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked!!!");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h1>Please Checkout : {service?.name}</h1>
      <form onSubmit={handlPlaceOrder}>
        <input
          className="w-100 mt-3"
          type="text"
          value={user?.displayName}
          name="Name"
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mt-3"
          type="text"
          name="email"
          value={user?.email}
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mt-3"
          type="text"
          name="service"
          value={service.name}
          placeholder="service"
          readOnly
          required
        />
        <br />
        <input
          className="w-100 mt-3"
          type="text"
          name="address"
          autoComplete="off"
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mt-3"
          type="text"
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input
          className=" btn btn-primary mt-3"
          type="submit"
          value="Place order"
        />
      </form>
    </div>
  );
};

export default ChackOut;
