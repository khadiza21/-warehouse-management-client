import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbarr.css";

const Navbarr = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="# " className="fw-bold ms-4 fs-3">
            <span className="bk">Fresh</span>
            <span className="lap">oho</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/inventory">Inventory</CustomLink>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
