import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [id]);
  return (
    <div className="text-center">
      <div className="container">
        <div className="border my-5">
          <Row className="g-5">
            <Col xs={6} className="border">
              <img className="img-fluid" src={inventory.img} alt="" />
            </Col>
            <Col xs={6} className="border">
              <div>
                <h1>Name: {inventory.name}</h1>
                <h2>Quantity: {inventory.quantity}</h2>
                <Button>Delivered</Button>
              </div>
            </Col>
          </Row>
        </div>

        
      </div>

      <div>
        <Link
          className="d-flex justify-content-center my-5 py-5"
          to="/inventories"
        >
          <Button>Manage Inventories</Button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateInventory;
