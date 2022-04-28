import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import exiosPrivet from "../../api/axiosPrivet";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://morning-cove-96291.herokuapp.com/order?email=${email}`;

      try {
        const { data } = await exiosPrivet.get(url);

        setOrders(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);

  return (
    <div className="text-center">
      <h1>this my orders: {orders.length}</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <p>
            {order.email}:{order.service}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
