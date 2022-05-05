import React from "react";
import useInventory from "../../Shared/hooks/useInventory";
import Inventory from "../Inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [inventories] = useInventory();
  return (
    <div className=" container inventories-container my-5 pb-5">
      {inventories.slice(0, 6).map((inventory) => (
        <Inventory key={inventory._id} inventory={inventory}></Inventory>
      ))}
    </div>
  );
};

export default Inventories;
