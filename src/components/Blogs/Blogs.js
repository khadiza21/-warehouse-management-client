import React from "react";
import { Accordion } from "react-bootstrap";
import { Bounce, Fade } from "react-reveal";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="mb-5 pb-5">
      <Bounce top>
        <h1 className=" b-text text-center mt-5  pt-5 fw-bold">OURS BLOGS</h1>
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
              <li>
                JavaScript is a programming language. But Node.js is iterpreter
                and environment for JS
              </li>
              <li>
                JS utility is used for any client side activity for a web
                application and Node.js is used for accessing any non-blocking
                operation of any operating system.
              </li>
              <li>
                JS running engines are spider monkey(firefox) , JS Core(Safari),
                V8(Google Chorme) etc . And Node.js running engine is V8(Google
                Chorme)
              </li>
              <li>
                JS basically used for client side and Node.js is mostly used for
                client side.
              </li>
              <li>
                JS projects are: Airbnb,Reddit,Instagram,Slack . And Node.js
                projects are Uber,Netflix,Twitter,Medium.com
              </li>
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
              <li>
                When we will use node.js: Basiclly node.js used in server side
                to connectd database. If we need fast working working in a
                website we can use node.js. Node.js have easy scalability , high
                performance , full stack JS . Node.js have large community with
                extended support. Node.js is highly extensible. It's also have
                caching advantages . So in thoose perpuse we can use node.js.
              </li>
              <li>
                MongoDB is a NoSQL Database. MongoDB have high performance and
                strong consistency . MongoDB is highly available .It's also
                agile flexible.MongoDB have single view, real time analysis ,
                personalization.Fot CRUD operation MongoDB is best.For data store in Database we used MongoDB in server side . So in thoose perpuse we can use MongoDB.
              </li>
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
              <li>
                SQL is a realtional database. NoSQL is non-realtional Database.
              </li>
              <li>
                SQL is structured query language . NoSQL have unstructured data.
              </li>
              <li>
                SQL are vertically scalable and NoSQL are horizontally scalable.
              </li>
              <li>
                SQL data store table based. NoSQL data graph or wide-column
                stores.
              </li>
              <li>SQL have predefined schema and NoSQL have dynamic schema;</li>
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
              <li>
                JWT(JSON WEB TOKEN) is popular user authorization technique
                nowadays.
              </li>
              <li>
                JWT is made for sequre communication within two side. As server
                and client.
              </li>
              <li>
                JWT generate a token with json value and pass this token to user
                in cilent side.
              </li>
              <li>
                JWT token saved in cokiees or localStorage . When user sign in
                with secret token then send token in request in server side.
              </li>
              <li>
                Server side check the token request . If verified token then
                client side user can read information or used info. Otherwise
                it's failed or returned.{" "}
              </li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
