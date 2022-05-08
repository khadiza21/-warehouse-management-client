import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import vege from "../../../image/vegetables.webp";
import juice from "../../../image/juice.webp";
import fruit from "../../../image/fruits.png";

const Offer = () => {
  return (
    <Container className="container my-5 ">
      <Row className="mb-5 py-3 g-5">
        <Col xs={12} sm={12} md={4} className="my-5">
          <div
            style={{ backgroundColor: "rgb(241, 169, 180)" }}
            className="d-flex h-100 rounded shadow"
          >
            <div className="my-auto py-5 text-center">
              <h6 className="fw-bold">UPTO 20% OFF</h6>
              <h4>Change Diet Plan</h4>
              <Button className="btn-danger">See Details</Button>
            </div>

            <div>
              <img src={fruit} className="  img-fluid h-75  my-4" alt="" />
            </div>
          </div>
        </Col>

        <Col xs={12} sm={12} md={4} className=" my-5">
          <div
            className="d-flex h-100 rounded shadow"
            style={{ backgroundColor: "rgb(181, 241, 169)" }}
          >
            <div className="my-auto py-5  text-center">
              <h6 className="fw-bold">UPTO 20% OFF</h6>
              <h4>Vegetable 100% Organic</h4>
              <Button className="btn-danger">See Details</Button>
            </div>
            <div>
              <img src={vege} className="  img-fluid  my-4" alt="" />
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} className=" my-5">
          <div
            className="d-flex h-100  rounded shadow"
            style={{ backgroundColor: "rgb(241, 169, 180)" }}
          >
            <div className="my-auto  py-5 text-center">
              <h6 className="fw-bold">UPTO 20% OFF</h6>
              <h4>Collected From Gardens</h4>
              <Button className="btn-danger">See Details</Button>
            </div>
            <div>
              <img src={juice} className=" img-fluid  my-4" alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Offer;
