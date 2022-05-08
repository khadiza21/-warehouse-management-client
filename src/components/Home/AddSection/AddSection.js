import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../../../image/addbanner1.webp";
import banner2 from "../../../image/addbanner2.webp";
import './AddSection.css';

const AddSection = () => {
  return (
    <div>
      <Container className="container my-5 mx-5 p-5">
        <Row className="mb-5 py-3">
          <Col xs={12} sm={12} md={6}>
            <img src={banner1} className="shadow rounded img-fluid " alt="" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <img src={banner2} className="shadow rounded img-fluid"  alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddSection;
