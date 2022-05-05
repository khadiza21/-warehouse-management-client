import React from "react";
import { Button } from "react-bootstrap";
import { Fade } from "react-reveal";

const HomeInventor = (props) => {
  const { name, description, quantity, img, supplierName, price } =
    props.inventory;

  return (
    <div className="container mt-3 pt-3 py-4 rounded shadow text-justify px-4">
      <div className="">
        <img className="img-r img-fluid rounded" src={img} alt="" />
      </div>

      {/* <h5>id: {_id}</h5> */}

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
        <Button>Update Inventory</Button>
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

export default HomeInventor;
