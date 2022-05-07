import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";
//import useInventory from "../Shared/hooks/useInventory";

const MyItems = () => {
  // const [inventories,setInventories] = useInventory();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;

      const url = `https://cryptic-stream-01124.herokuapp.com/myitems?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure?");
    if (proceed) {
      const url = `https://cryptic-stream-01124.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((deleteItem) => {
          console.log(deleteItem);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Your Items: {items.length}</h2>
      <h3>{user.email}</h3>

      {items.map((item) => (
        <div key={item._id}>
          <p>
            {item.email} : {item.name}
          </p>
          <button
            className="btn btn-info m-3"
            onClick={() => handleDelete(item._id)}
          >
            Delete Items
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
