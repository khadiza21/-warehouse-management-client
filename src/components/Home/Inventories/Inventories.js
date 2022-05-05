import React from "react";
import useInventory from "../../Shared/hooks/useInventory";
import Inventory from "../Inventory/Inventory";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Inventories.css";

const Inventories = () => {
  const [inventories] = useInventory();
  return (
    <div>
      <div>
        <Link
          className="d-flex justify-content-center my-5"
          to="/addinventories"
        >
          <Button>Add New Items</Button>
        </Link>
      </div>

      <div className=" container inventories-container my-5 pb-5">
        {inventories.map((inventory) => (
          <Inventory key={inventory._id} inventory={inventory}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
