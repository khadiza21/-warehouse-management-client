import React from "react";
import useInventory from "../../Shared/hooks/useInventory";
import HomeInventor from "../HomeInventor/HomeInventor";
import "./HomeInventory.css";

const HomeInventory = () => {
  const [inventories] = useInventory();
  return (
    <div className="my-5 pt-5">
      <h2 className="text-center fw-bold fs-1 text-danger mt-3">Inventory Items</h2>
    <div className=" container inventories-container my-3 pb-5">
      
      
      {inventories.slice(0,6).map((inventory) => (
        <HomeInventor key={inventory._id} inventory={inventory}></HomeInventor>
      ))}
    </div></div>
  );
};

export default HomeInventory;
