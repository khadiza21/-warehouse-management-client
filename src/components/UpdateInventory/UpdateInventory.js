import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const UpdateInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  const [reload, setIsReload] = useState(true)


  useEffect(() => {
    const url = `https://cryptic-stream-01124.herokuapp.com/inventory/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [reload]);

  const handleDelivered = () => {

    
    const bq = parseInt(inventory.quantity);
    const quantity= (bq - 1);
    console.log(quantity);
    const quantity2 = { quantity };
    console.log(quantity2)
   
    
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
        console.log("success", data);
        
      });
  };

  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const bq = parseInt(inventory.quantity);
    const quantity1 = event.target.quantity.value;
    const quantity= (bq + parseInt(quantity1));
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
        
        alert("Quantity updated successfully!");
              event.target.reset();
      });
  };

  return (
    <div className="text-center">
      <div className="container border my-5">
        <Row className="g-5">
          <Col xs={6} className="border">
            <img className="img-fluid" src={inventory.img} alt="" />
          </Col>

          <Col xs={6} className="border">
            <h3>Name: {inventory.name}</h3>
            <h5>
              Quantity: <span>{inventory.quantity}</span>
            </h5>
            <Button className="w-50 mx-auto my-3" onClick={handleDelivered}>
              Delivered
            </Button>

            <form
              onSubmit={handleUpdateQuantity}
              className="my-4 d-flex flex-column  w-50 mx-auto"
            >
              <input
                className="mb-3 py-2 "
                placeholder="Quantity"
              
                name="quantity"
                required
              />
              <br />

              <input
                className="btn btn-success mb-3 py-2 "
                type="submit"
                value="Restcok Inventory"
              />
            </form>
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


