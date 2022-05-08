import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Bounce, Fade } from 'react-reveal';
import './Contact.css';

const Contact = () => {
    return (
        <div>
          <div className="d-flex justify-items-center align-items-center">
            <Form className="container my-5 py-5 w-75">
              <Bounce top>
                <h3>
                  Have A Question About A Product, Our Company, Or Just Want To
                  Chat? Email Us!
                </h3>
              </Bounce>
              <Bounce bottom>
                <p style={{ color: "gray" }} className="fw-bold my-4">
                  We will be glad to assist you in any question and encourage you to
                  share your ideas and improvements with us.
                </p>
              </Bounce>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className="fw-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email </Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted ">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Label className="fw-bold">Message </Form.Label>
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
    
              <Button
                className="btn-success w-100 my-3 fw-bold"
                variant="btn"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
    
          <div className="container contact-container mb-5 pb-5">
            <div className="shadow rounded p-3 text-center py-5 contact-info">
              <Fade top>
                <h4 className="fw-bold"> CUSTOMER SERVICE</h4>
              </Fade>
              <h5 className="mt-3"><i  className="fa-solid fa-phone"></i> +09123 456 789</h5>
              <p><i  className="fa-solid fa-calendar-days"></i> Monday to Friday</p>
              <p><i  className="fa-solid fa-clock"></i> 10am - 6.30pm (NewYork time)</p>
            </div>
    
            <div className="shadow rounded p-3 text-center py-5 contact-info">
              <Fade bottom>
                <h4 className="fw-bold">PRODUCTS & ORDERS</h4>
              </Fade>
              <h5 className="mt-3"><i  className="fa-solid fa-phone"></i> +09123 456 789</h5>
              <p> <i  className="fa-solid fa-calendar-days"></i> Monday to Friday</p>
              <p><i  className="fa-solid fa-clock"></i> 10am - 6.30pm (NewYork time)</p>
            </div>
    
            <div className="shadow rounded p-3 text-center py-5 contact-info">
              <Fade top>
                <h4 className="fw-bold">STORE LOCATOR</h4>
              </Fade>
              <p className="mt-3"><i  className="fa-solid fa-address-card"></i> 521 Fifth Avenue, Pelham, NY 10783</p>
            </div>
          </div>
        </div>
      );
};

export default Contact;