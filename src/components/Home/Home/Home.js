import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeInventory from "../HomeInventory/HomeInventory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <HomeInventory></HomeInventory>

      <Link className="d-flex justify-content-center my-5 py-5" to="/inventories">
        <Button>Manage Inventories</Button>
      </Link>
    </>
  );
};

export default Home;
