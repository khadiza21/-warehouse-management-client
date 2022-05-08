import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./MyItems.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const MyItems = () => {
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
    <div className="container my-5">
      <h5 className="text-center fw-bold text-dark py-2">Your Email: <span className="text-success">{user.email}</span> </h5>
      <h4 className="text-center fw-bold fs-4 text-dark pb-5">Your Items: <span className="text-danger">{items.length}</span></h4> 

      <div className=" table-responsive">
        <Table
          hover  size="sm" className="text-center"
          striped
 
      
        >
          <thead className="rounded">
            <tr className="rounded">
              <th className=" img">Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SupplierName</th>
              <th>Delete</th>
            </tr>
          </thead>

          {items.map((item) => (
            <tbody key={item._id}>
              <td className="">
                <img src={item.img} alt="" className=" img-set img-fluid" />
              </td>
              <td className="pb-0 pt-3 fw-bold">{item.name}</td>
              <td className="pb-0 pt-3 fw-bold"><sup>$</sup>{item.price}</td>
              <td className="pb-0 pt-3 fw-bold">{item.quantity}</td>
              <td className="pb-0 pt-3 fw-bold">{item.supplierName}</td>

              <td className="pb-0 fw-bold ">
                <i
                  onClick={() => handleDelete(item._id)}
                  class="fa-solid fa-trash-can fs-5"
                ></i>
              </td>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default MyItems;
