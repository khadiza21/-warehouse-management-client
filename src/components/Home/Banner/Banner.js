
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Fade, Flip } from "react-reveal";
import foods from'../../../image/banner.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <Container className="container mb-5">
      <Row>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center my-3 align-items-center "
        >
          <div className="px-2  text-justify">
            <Flip top>
              <h1 className="my-2 ban-t"><span className="text-danger">Fresh</span><span className="text-success">oho</span> </h1>
            </Flip>
            <Fade bottom>
              <h5 className="mt-3">
              Organic Foods And Café Is A Family Run Company That Runs Organic Super Markets And Cafés Selling Fresh Organic And Biodynamic Food, Supplers, Skincare, Cosmetics, Baby Items And Household Cleaning Products. We Have 5 Shops In Dubai On Sheikh Zayed Road.
              </h5>
            </Fade>
            <Button className="btn btn-success my-3 fw-bold" variant="btn">
              LIVE DEMO
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="my-3 ">
          <img className="img-fluid rounded " src={foods} alt="" /> 
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
