import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);

  const handleDelivered = () => {
    //let quantity = document.getElementById("quantity").innerText;
    // console.log(quantity);
    // quantity++;
  };
  const onSubmit = (data) => {
    console.log(data);
    
  };
  return (
    <div className="text-center">
      <div className="container border my-5">
        <Row className="g-5">
          <Col xs={6} className="border">
            <img className="img-fluid" src={inventory.img} alt="" />
          </Col>

          <Col xs={6} className="border">
            <div>
              <h3>Name: {inventory.name}</h3>
              <h5>
                Quantity: <span id="quantity">{inventory.quantity}</span>{" "}
              </h5>
              <Button onClick={handleDelivered()}>Delivered</Button>

              <div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="d-flex flex-column"
                >
                  <input
                    className="mb-3 py-2"
                    placeholder="Reviews"
                    type="number"
                    {...register("reviews")}
                  />
                  <input
                    className="btn btn-success mb-3 py-2"
                    type="submit"
                    value="Add A New Inventory Item"
                  />
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Link
        className="d-flex justify-content-center my-5 py-5"
        to="/inventories"
      >
        <Button>Manage Inventories</Button>
      </Link>
    </div>
  );
};

export default UpdateInventory;
