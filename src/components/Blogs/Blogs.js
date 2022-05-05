import React from "react";
import { Accordion } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="mb-5 pb-5">
      <Bounce top>
        <h2 className=" b-text text-center mt-5  pt-5 fw-bold">OURS BLOGS</h2>
      </Bounce>
      <Accordion className="container my-3 py-2 " defaultActiveKey="0">
        <Accordion.Item eventKey="0" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade top>
              <h5 className="fw-bold ques">
                Difference between javascript and nodejs?
              </h5>
            </Fade>{" "}
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className=" border-0 shadow rounded my-4">
          <Accordion.Header>
            <Fade bottom>
              <h5 className="fw-bold ques">
                When should you use nodejs and when should you use mongodb?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="ques">
            <Fade top>
              <h5 className="fw-bold ques">
                Differences between sql and nosql databases?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className=" border-0 shadow rounded my-4">
          <Accordion.Header className="ques">
            <Fade bottom>
              <h5 className="fw-bold ques">
              What is the purpose of jwt and how does it work?
              </h5>
            </Fade>
          </Accordion.Header>
          <Accordion.Body>
            <ol>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
