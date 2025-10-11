/*import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            blanditiis laboriosam dicta dolorem officiis aperiam voluptatibus,
            quisquam eaque consequuntur, ea ad praesentium minima quibusdam a
            nesciunt voluptates. Assumenda, iure labore.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>7506195951</li>
            <li>Contact@chetan.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 is reserved by chetan bhaii </p>
    </div>
  );
};

export default Footer;
*/
/*
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.grillzblack} alt="Grillz Logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            blanditiis laboriosam dicta dolorem officiis aperiam voluptatibus,
            quisquam eaque consequuntur, ea ad praesentium minima quibusdam a
            nesciunt voluptates. Assumenda, iure labore.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/myorders">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>7506195951</li>
            <li>Contact@grillz.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 is reserved by Grillz</p>
    </div>
  );
};

export default Footer;
*/

// uppar wala yadd nahi kya hai but ok he hoga yeh neeche wala grillz logog

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.bookdow_black} alt="Grillz Logo" />
          {/* <p>
          Spark your appetite with Grillz! Our food ordering platform serves up a diverse range of delicious dishes, from comfort food to international cuisine. Order now and discover a world of flavors at your fingertips!
          </p> */}
           <p>
    <strong>BookDow</strong> — your go-to platform for renting and buying books
    online. From timeless classics to trending bestsellers, explore thousands of
    titles and make reading more convenient and affordable.
  </p>
          
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/exploreall">Explore</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/myorders">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            
            <li><Link to="/contactus">Contact-us</Link></li>
            <li>8655089608</li>

            <li>loopandlogic28@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 is reserved by BookDow</p>
    </div>
  );
};

export default Footer;
