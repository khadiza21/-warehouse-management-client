import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddSection from "../AddSection/AddSection";
import Banner from "../Banner/Banner";
import HomeInventory from "../HomeInventory/HomeInventory";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Offer></Offer>
      <HomeInventory></HomeInventory>

      <Link className="d-flex justify-content-center my-5 py-5" to="/inventories">
        <Button className="btn btn-success">Manage Inventories</Button>
      </Link>
      <AddSection></AddSection>
    </>
  );
};

export default Home;
