import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbarr.css";

const Navbarr = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };

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
              {user && (
                <>
                  <CustomLink to="/manageinventories">Manage Items</CustomLink>
                  <CustomLink to="/addInventory">Add Items</CustomLink>
                  <CustomLink to="/myitems">My Items</CustomLink>
                </>
              )}

              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
              {user ? (
                <button
                  className="btn btn-success text-light fw-bold btn-link text-decoration-none"
                  onClick={handleSignOut}
                >
                  Sign Out <i class="fa-solid fa-right-to-bracket"></i>
                </button>
              ) : (
                <CustomLink   className="btn btn-success fw-bold text-light" to="/login"> Login <i class="fa-solid fa-right-to-bracket"></i></CustomLink>
             
              
               
             
                
                  
                
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
