import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [reload, setIsReload] = useState(true);

  useEffect(() => {
    const url = `https://cryptic-stream-01124.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);

  const handleDelivered = () => {
    const bq = parseInt(inventory.quantity);
    const quantity = bq - 1;
    console.log(quantity);
    const quantity2 = { quantity };
    console.log(quantity2);

    const url = `https://cryptic-stream-01124.herokuapp.com/inventory/${id}`;
    console.log(url);
    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity2),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsReload(quantity);
        toast("Delivered One Item!");
        console.log("success", data);
      });
  };

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const bq = parseInt(inventory.quantity);
    const quantity1 = event.target.quantity.value;
    const quantity = bq + parseInt(quantity1);
    const quantity2 = { quantity };
    const url = `https://cryptic-stream-01124.herokuapp.com/inventory/${id}`;

    fetch(url, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity2),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        setIsReload(quantity);

        toast("Quantity updated successfully!");
        event.target.reset();
      });
  };

  return (
    <div className=" container text-justify">
      <div className="container  my-5">
        <Row className="g-5">
          <Col  xs={12} sm={12} md={6} >
            <img className="img-fluid rounded shadow mt-5" src={inventory.img} alt="" />
          </Col>

          <Col  xs={12} sm={12} md={6} className=" pt-5">
            <h2 className="text-success">{inventory.name}</h2>
            <p className="fs-6">
              <span className="fw-bold">Description:</span> <span className="" style={{color:'gray'}}>{inventory.description}</span> 
            </p>
             <h5>
              <span className="fw-bold">Price:</span> <sup>$</sup>{inventory.price}
            </h5>
            <h6>
              <span className="fw-bold">Catagory:</span>  {inventory.catagory}
            </h6>
            <h6>
              <span className="fw-bold">Code:</span>  {inventory.product_code}
            </h6>
            <h6><span className="fw-bold">Supplier:</span> {inventory.supplierName}</h6>
           
            
            
            
            <h5>
              <span className="fw-bold">Reviews:</span>  {inventory.reviews}
            </h5>
            <h6>
              <span className="fw-bold">SOLD/STOCK:</span>  {inventory.availability}
            </h6>

            <h6>
              <span className="fw-bold">Quantity: </span> <span>{inventory.quantity}</span>
            </h6>
            <Button
              className="w-50 mx-auto my-3 btn-danger fw-bold"
              onClick={handleDelivered}
            >
              Delivered
            </Button>

<div className="">
            <form
              onSubmit={handleUpdateQuantity}
              className="my-4 d-flex flex-column   "
            >
              <input
                className="mb-3 py-2 "
                placeholder=" Quantity"
                name="quantity"
                required
              />
              <br />

              <input
                className="btn btn-success mb-3 py-2 fw-bold"
                type="submit"
                value="Restcok Inventory"
              />
            </form></div>
          </Col>
        </Row>
      </div>

      <Link
        className="d-flex justify-content-center my-5 py-5"
        to="/inventories"
      >
        <Button className="btn-success fw-bold">Manage Inventories</Button>
      </Link>
    </div>
  );
};

export default UpdateInventory;




// catagory


