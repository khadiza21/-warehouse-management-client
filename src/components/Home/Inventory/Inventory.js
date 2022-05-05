import React from "react";
import { Button } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";

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

      <div className="">
        <Zoom>
        <h4 className=" mt-2 fw-bold">Name: {name}</h4></Zoom>
        <Fade top>
          <h6 className="inventory-text"> Description: {description}</h6>
        </Fade>
        <h5>Quantity: {quantity}</h5>
        <h5>SupplierName: {supplierName}</h5>
        <h5>Price: {price}</h5>
      </div>

      <div className="d-flex my-3">
        <Button>Update Inventory</Button>
   
        <Button className="mx-4">Delete Inventory</Button>
      </div>

    

    </div>
  );
};

export default Inventory;
