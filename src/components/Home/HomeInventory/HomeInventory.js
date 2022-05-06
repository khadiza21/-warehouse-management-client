import React from "react";
import useInventory from "../../Shared/hooks/useInventory";
import HomeInventor from "../HomeInventor/HomeInventor";
import "./HomeInventory.css";

const HomeInventory = () => {
  const [inventories] = useInventory();
  return (
    <div className=" container inventories-container my-5 pb-5">
     
      {inventories.slice(0, 3).map((inventory) => (
        <HomeInventor key={inventory._id} inventory={inventory}></HomeInventor>
      ))}
    </div>
  );
};

export default HomeInventory;
