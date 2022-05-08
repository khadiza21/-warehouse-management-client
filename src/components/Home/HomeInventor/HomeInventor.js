import React from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";

import "./HomeInventor.css";

const HomeInventor = (props) => {
  const { _id, name, description, quantity, img, supplierName, price } =
    props.inventory;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">
      <div className="">
        <img className="img-r img-fluid rounded" src={img} alt="" />
      </div>
      <div className="">
        <h4 className=" mt-2 fw-bold">Name: {name}</h4>

        <Fade top>
          <h6 className="inventory-text"> Description: {description}</h6>
        </Fade>
        <h5>Quantity: {quantity}</h5>
        <h5>SupplierName: {supplierName}</h5>
        <h5>Price: {price}</h5>
      </div>

      <div>
        <Button className="btn btn-danger" onClick={() => navigateToServiceDetail(_id)}>
          Update Inventory
        </Button>
      </div>
    </div>
  );
};

export default HomeInventor;
