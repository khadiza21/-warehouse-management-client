import React from "react";
import Inventory from "../Inventory/Inventory";
import useInventory from "../Shared/hooks/useInventory";

const Inventories = () => {
  const [inventories] = useInventory();
  return (
    <div className=" container inventories-container my-5 pb-5">
      
    {inventories.map((inventory) => (
        <Inventory key={inventory._id} inventory={inventory}></Inventory>
      ))}
    </div>
  );
};

export default Inventories;
