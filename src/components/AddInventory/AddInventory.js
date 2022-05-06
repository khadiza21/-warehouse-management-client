import React from "react";
import { useForm } from "react-hook-form";

const AddInventory = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(addItem => console.log(addItem));
  };
  return (
    <div className="w-50 mx-auto my-5 pb-5">
      <h3 className="py-3 text-center fw-bold">Add A New Inventory Items</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input
          className="mb-3 py-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3 py-2"
          placeholder="Supplier Name"
          {...register("supplierName", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3 py-2"
          placeholder="Image Url"
          {...register("img")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Product Code"
          {...register("product_code")}
        />
        <textarea
          className="mb-3 py-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Reviews"
          type="number"
          {...register("reviews")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Catagory"
          {...register("catagory")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Availability"
          {...register("availability")}
        />
        <input
          className="btn btn-success mb-3 py-2"
          type="submit"
          value="Add A New Inventory Item"
        />
      </form>
    </div>
  );
};

export default AddInventory;
