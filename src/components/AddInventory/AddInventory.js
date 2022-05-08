import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddInventory = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://cryptic-stream-01124.herokuapp.com/inventory`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((addItem) => {
        console.log(addItem, user.email);

        toast("Item Added Successfully...");
      });
    // toast("Item Added Successfully...");
    reset();
  };
  return (
    <div className="container mx-auto my-5 pb-5">
      {console.log(user)}
      <h3 className="py-3 text-danger fs-1 pb-5  text-center fw-bold">Add A New Inventory Items</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-75 mx-auto">
        <input
          // readOnly
          value={user?.email}
          className="mb-3 py-2 ps-2"
          {...register("email")}
        />

        <input
          className="mb-3 py-2"
          placeholder=" Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="mb-3 py-2"
          placeholder=" Supplier Name"
          {...register("supplierName", { required: true, maxLength: 20 })}
        />
        <input
        required
          className="mb-3 py-2"
          placeholder=" Image Url"
          {...register("img")}
        />
        <input
        required
          className="mb-3 py-2"
          placeholder=" Product Code"
          {...register("product_code")}
        />
        <textarea
        required
          className="mb-3 py-2"
          placeholder=" Description"
          {...register("description")}
        />
        <input
        required
          className="mb-3 py-2 mt-1"
          placeholder=" Price"
          {...register("price")}
        />
        <input
        required
          className="mb-3 py-2"
          placeholder=" Quantity"
          {...register("quantity")}
        />
        <input
        required
          className="mb-3 py-2"
          placeholder=" Reviews"
          {...register("reviews")}
        />
        <input
        required
          className="mb-3 py-2"
          placeholder=" Catagory"
          {...register("catagory")}
        />
        <input
        required
          className="mb-3 py-2"
          placeholder=" Availability"
          {...register("availability")}
        />
        <input
          className="btn btn-success mb-3 py-2 fw-bold"
          type="submit"
          value="Add New Inventory Item"
        />
      </form>
    </div>
  );
};

export default AddInventory;
