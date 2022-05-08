import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Fade, LightSpeed } from 'react-reveal';
import './About.css';
import about from '../../image/about.webp'

const About = () => {
    return (
        <div>
        <div className="banner-about d-flex justify-content-center align-items-center">
          <div className="text-center fs-5 px-3">
            <LightSpeed top>
              <h1 className="fw-bold mb-4">
               

               Why  <span className="text-success aw">Choose</span> Us?
              </h1>
            </LightSpeed>
            <LightSpeed bottom>
              <p className="fw-bold fs-5">We Do Not Buy From The Open Market & Traders.
               
              </p>
            </LightSpeed>
          </div>
        </div>
        <div className=" pt-5">
        
  
          <Container className="container mb-5 ">
            <Row>
              <Col
                xs={12}
                md={6}
                className=" d-flex justify-content-center my-3 align-items-center "
              >
                <img className="img-fluid rounded h-75" src={about} alt="" />
              </Col>
  
              <Col
                xs={12}
                md={6}
                className="d-flex justify-content-center my-3 align-items-center "
              >
                <div className="px-4  text-justify">
                  <Fade top>
                    <h3 className="my-2 fs-2 fw-bold pb-3 ">We Believe In Working With Accredited Farmers </h3>
                  </Fade>
                  <Fade bottom>
                    <p className="mt-3">
                    Organic Foods And Café Is A Family Run Company That Runs Organic Super Markets And Cafés Selling Fresh Organic And Biodynamic Food, Supplers, Skincare, Cosmetics, Baby Items And Household Cleaning Products. We Have 5 Shops In Dubai – On Sheikh Zayed Road.
                    </p>
                  </Fade>
                  <Button className="btn-danger my-3  fw-bold" variant="btn">
                  Why Organic?
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default About;