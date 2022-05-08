import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="p-5 mb-0 head-foot">
      <div className="row rew">
        <div className="col-lg-3 col-md-6 col-12 py-3 px-1">
          <h3>Address</h3>
          <p>
          <i  className="fa-solid fa-address-card"></i>  123 Street, New York , USA <br /> <i  className="fa-solid fa-phone"></i> +01234523456 <br /> <i  className="fa-solid fa-envelope"></i> freshoho@gmail.com{" "}
            <br />{" "}
          </p>
          <div className="text-danger fs-3 fw-bold">
            <span className="me-2"><i  className="fa-brands fa-facebook-square"></i></span>
            <span className="me-2"><i  className="fa-brands fa-twitter-square"></i></span>
            <span className="me-2"><i  className="fa-brands fa-linkedin"></i></span>
            <span className="me-2"><i  className="fa-brands fa-youtube"></i></span>
          </div>
        </div>

        <div  className="col-lg-3 col-md-6 col-12 py-3 px-1">
          <h3>Services</h3>
          <ul  className="list-style">
            <li>General Carpentry</li>
            <li>Mechanicals Remodeling</li>
            <li>Car Floor</li>
            <li>Wooden Floor</li>
            <li>Custom Carpentry</li>
          </ul>
        </div>

        <div  className="col-lg-3 col-md-6 col-12  py-3 px-1">
          <h3>Quick Links</h3>
          <ul  className="list-style">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Terms & Condition</li>
            <li>Support</li>
          </ul>
        </div>

        <div  className="col-lg-3 col-md-6 col-12  py-3 px-1">
          <h3>Newsletter</h3>
          <p>
          We will be glad to assist you in any question and encourage you to share your ideas and improvements with us.
          </p>
          <div  className="bg-white row py-2  rounded ">
              <input type="email"   className="inputt border-0 col-8"  placeholder="Your email"/>
            <Button className="btn btn-danger col-3 mx-1 fw-bold">Send <i  className="fa-solid fa-paper-plane"></i></Button>
        
          </div>
        </div>
      </div>

      <hr />

      <div  className="row text-center">
        <p  className="col-lg-6 col-md-6 col-12">
        copyright © {year} Freshoho, All Right Reserved.
        </p>
        <p  className="col-lg-6 col-md-6 col-12 start-100">Developed By BK</p>
      </div>
    </div>
  );
};

export default Footer;
