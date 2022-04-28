import React from "react";
import { useNavigate } from "react-router-dom";
import PageTaitle from "../../Shared/PageTaitle/PageTaitle";
import "./Service.css";
const Service = ({ service }) => {
  const { name, _id, price, img, description } = service;

  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service">
      <PageTaitle title="service"></PageTaitle>
      <img className="w-100" src={img} alt="" />
      <h2> {name}</h2>
      <p>price : {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(_id)}
        className="btn btn-primary"
      >
        Book: {name}
      </button>
    </div>
  );
};

export default Service;
