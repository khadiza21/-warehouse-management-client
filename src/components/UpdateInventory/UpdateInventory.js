import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
      <div>
        <h1>to detail Name: {inventory.name}</h1>
        <h2>Quantity: {inventory.quantity}</h2>
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
