import React from "react";
import "./Inventory.css";
const Inventory = (props) => {
  const { name, description, quantity, img, supplierName, price } =
    props.inventory;
  return (
    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">

      <div className="">
        <img className="img-r img-fluid rounded" src={img} alt="" />
      </div>

      {/* <h5>id: {_id}</h5> */}
      {/* <Fade top> </Fade> */}
      <div className="">
      <h4 className=" mt-2 fw-bold">Name: {name}</h4>
      <h6 className="inventory-text"> Description: {description}</h6>
      <h5>Quantity: {quantity}</h5>
      <h5>SupplierName: {supplierName}</h5>
      <h5>Price: {price}</h5>
</div>
      {/* <Fade bottom>
          <p className="my-3 ">
            {" "}
            <span className="fw-bold">Review: </span>{" "}
            <span className="review-text">{review}</span>{" "}
          </p>
        </Fade> */}

      {/* <span className="fw-bold">Ratings: ({rating})</span>
        <Zoom>
          <ReactStars count={5} value={rating} size={26} activeColor="#f15735" />
        </Zoom> */}
    </div>
  );
};

export default Inventory;
