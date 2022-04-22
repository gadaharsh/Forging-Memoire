import React from "react";
import "./Footer.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useNavigate,
} from "react-router-dom";

const facebook = require("./../../images/facebook.png");
const instagram = require("./../../images/instagram.png");
const twitter = require("./../../images/twitter.png");

function Footer() {
  return (
    <div className="websitebanner d-flex justify-content-center  ">
      <p class="text-white text-center">
        © 2022 Forging Memoire. All rights reserved. No part of this site may be
        reproduced without our written permission.
      </p>
      <div className="follow">
        <div>
          <p class="text-white text-center px-3">Follow Us</p>
        </div>
        <div>
          <Link className="social" to="/home" class>
            <img height={20} width={20} src={facebook} alt="Card image cap" />
          </Link>
          <Link className="social" to="/home">
            <img height={20} width={20} src={instagram} alt="Card image cap" />
          </Link>
          <Link className="social" to="/home">
            <img height={20} width={20} src={twitter} alt="Card image cap" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
