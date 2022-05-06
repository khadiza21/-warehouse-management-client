import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Inventory from "../Inventory/Inventory";
import useInventory from "../Shared/hooks/useInventory";

const Inventories = () => {
  const [inventories] = useInventory();
  return (
    <div>
      <div className=" container inventories-container my-5 pb-5">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>

      <div>
      <Link className="d-flex justify-content-center my-5 py-5" to="/addInventory">
        <Button>Add New Inventory</Button>
      </Link>
      </div>
    </div>
  );
};

export default Inventories;
