import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="p-5 mb-0 head-foot">
      <div className="row rew">
        <div className="col-lg-3 col-md-6 col-12 py-3 px-1">
          <h3>Address</h3>
          <p>
            123 Street, New York , USA <br /> +01234523456 <br /> carx@gmail.com{" "}
            <br />{" "}
          </p>
          <div className="text-danger">
            <span>FB</span>
            <span>TWT</span>
            <span>LNKD</span>
            <span>YT</span>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 py-3 px-1">
          <h3>Services</h3>
          <ul class="list-style">
            <li>General Carpentry</li>
            <li>Mechanicals Remodeling</li>
            <li>Car Floor</li>
            <li>Wooden Floor</li>
            <li>Custom Carpentry</li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-12  py-3 px-1">
          <h3>Quick Links</h3>
          <ul class="list-style">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Our Services</li>
            <li>Terms & Condition</li>
            <li>Support</li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 col-12  py-3 px-1">
          <h3>Newsletter</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            blanditiis?
          </p>
          <div class="bg-white row py-2  rounded ">
              <input type="email"   className="inputt border-0 col-8"  placeholder="Your email"/>
            <Button className="btn btn-danger col-3 mx-1">Send</Button>
        
          </div>
        </div>
      </div>

      <hr />

      <div class="row text-center">
        <p class="col-lg-6 col-md-6 col-12">
          © Your Site Name, All Right Reserved.
        </p>
        <p class="col-lg-6 col-md-6 col-12 start-100">Developed By BK</p>
      </div>
    </div>
  );
};

export default Footer;
