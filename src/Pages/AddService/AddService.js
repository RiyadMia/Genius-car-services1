import React from "react";
import { useForm } from "react-hook-form";
const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = `https://morning-cove-96291.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    // console.log(data);
  };
  return (
    <div className="w-50 mx-auto">
      <h1>pleace add a service</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name")}
          required
        />
        <input
          className="mb-2"
          placeholder="description"
          {...register("description")}
          required
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
