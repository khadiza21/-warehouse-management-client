import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>to detail : {inventory.name}</h1>
    </div>
  );
};

export default UpdateInventory;
