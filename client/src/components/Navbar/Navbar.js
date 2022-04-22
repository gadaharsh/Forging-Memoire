import "./Navbar.scss";
import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useNavigate,
} from "react-router-dom";
import Axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "../SearchModal/SearchModal";


const logo = require("../../components/Home/Forging.png");

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpen = () => {
    setOpenSearch(true);
    console.log("clicked");
  };
  const handleClose = () => setOpenSearch(false);

  return (
    <>
      <div className="header py-0">
        <nav className="navigation py-3">
          {/* <div className="navbar-brand"> */}
          <div className="image-div">
            <Link to="/home" className="navbar-logo">
              <img
                className="image-fluid logo-image"
                src={logo}
                alt="brand_logo"
              />
            </Link>
          </div>
          <div className="navbar-right my-5">
            {/* <ul>
              <li>
                <Link to="/home">Destinations</Link>
              </li>
              <li>
                <Link to="/home">Experiences</Link>
              </li>
              <li>
                <Link to="/home">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul> */}
            <>
              <button onClick={handleOpen} className="searchBtn">
                <SearchIcon style={{ color: "white" }} />
                Search
              </button>
              <SearchModal handleClose={handleClose} openSearch={openSearch} />
            </>

            <Link to="/home">Destinations</Link>
            <Link to="/home">Experiences</Link>
            <Link to="/home">About</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
