import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import useInventory from "../Shared/hooks/useInventory";

const Inventories = () => {
  const [inventories, setInventories] = useInventory();
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
          toast("Deleted Item!");
          const remaining = inventories.filter(
            (inventory) => inventory._id !== id
          );
          setInventories(remaining);
        });
    }
  };
  return (
    <div>
      <div className=" container  my-5 pb-5">
      <div>
        <Link
          className="d-flex justify-content-end  my-5 "
          to="/addInventory"
        >
          <Button className="btn-success fw-bold">Add New Inventory <i class="fa-solid fa-circle-plus"></i></Button>
        </Link>
      </div>
        <div className="fw-bold text-danger fs-2 my-5 text-center">
          Manage All Inventories
        </div>
        <div className=" table-responsive">
          <Table striped hover variant="success" size="sm" className="text-center">
            <thead>
              <tr>
                <th className="img">Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>SupplierName</th>
                <th>Manage</th>
              </tr>
            </thead>

            {inventories.map((inventory) => (
              <tbody key={inventory._id}>
                <tr>
                  <td className="">
                    <img
                      src={inventory.img}
                      alt=""
                      className=" img-set img-fluid"
                    />
                  </td>
                  <td className="pb-0 pt-3 fw-bold">{inventory.name}</td>
                  <td className="pb-0 pt-3 fw-bold"><sup>$</sup>{inventory.price}</td>
                  <td className="pb-0 pt-3 fw-bold">{inventory.quantity}</td>
                  <td className="pb-0 pt-3 fw-bold">
                    {inventory.supplierName}
                  </td>

                  <td className="pb-0 fw-bold ">
                    <i
                      onClick={() => handleDelete(inventory._id)}
                      class="fa-solid fa-trash-can fs-5"
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>

    
    </div>
  );
};

export default Inventories;
