import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import useInventory from "../Shared/hooks/useInventory";

const Inventories = () => {
  const [inventories,setInventories] = useInventory();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deleteItem) =>{ 
          console.log(deleteItem);
          const remaining = inventories.filter(inventory => inventory._id !== id);
          setInventories(remaining);
        });
    }
  };
  return (
    <div>
      <div className=" container  my-5 pb-5">
        <div className="fw-bold fs-2 my-5 text-center">Manage All Inventories</div>
        <div className="inventories-container">
        {inventories.map((inventory) => (
          <div key={inventory._id} className="border rounded">
            <ul>
              <li>{inventory.name}</li>
              <li>{inventory.supplierName}</li>
              <li>{inventory.quantity}</li>
            </ul>
            <button className="btn btn-info m-3" onClick={() => handleDelete(inventory._id)}>
              Delete Items
            </button>
          </div>
        ))}</div>
      </div>

      <div>
        <Link
          className="d-flex justify-content-center my-5 py-5"
          to="/addInventory"
        >
          <Button>Add New Inventory</Button>
        </Link>
      </div>
    </div>
  );
};

export default Inventories;
