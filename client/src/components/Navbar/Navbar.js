import "./Navbar.scss";
import { Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import {  Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch, useHistory,useNavigate  } from "react-router-dom";
import Axios from 'axios';

function Navbar() {

  // let isLoggedIn = false
    // let history = useHistory();
//     let navigate = useNavigate();
//     const [userSet, setUserSet] = useState(false);
//     const [error, setError] = useState("");
//     const handleLogout = (e) => {

//         e.preventDefault();
        


//         Axios({
//             method: "GET",
//             withCredentials: true,
//             url: "http://localhost:3001/logout",
//         }).then((data) => {
//            navigate("/")
//         })
//             .catch((error) => {
//                 setError("Incorrect emailId or password");
//                 setTimeout(() => {
//                     setError("")
//                 }, 5000)
//             });
//     }
//   return (
//     <>
//     <link rel="shortcut icon" href="images/favicon.png"/>


// <meta charset="UTF-8" />
// <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
// <meta name="description" content="" />
// <meta name="keywords" content="" />
// <meta name="author" content="" />
// <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />


// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>


// <link rel="preconnect" href="https://fonts.googleapis.com"/>
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
// <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet"/> 
//     <header>
// <div className="header">
// <section>
// <span className="cross parallelogram"><img src="https://i.ibb.co/wRTpk3V/logo.png" className="logo skew-fix" alt="LOGO."/></span>
// </section>
// <section>
// <div className="top-tab">
// <span>
// <a href="tel:0000000000"><i className="fa fa-phone"></i> (+0)-000-0000-000</a>
// <a href="emailto:support@websitename.com"><i className="fa fa-envelope"></i> support@websitename.com</a>
// </span>
// <span>
// <a href="#"><i className="fa fa-facebook"></i></a>
// <a href="#"><i className="fa fa-instagram"></i></a>
// <a href="#"><i className="fa fa-twitter"></i></a>
// <a href="#"><i className="fa fa-youtube"></i></a>
// </span>
// </div>
// <div className="topnav" id="myTopnav">
// <a href="#"><img src="https://i.ibb.co/wRTpk3V/logo.png" id="res_logo"/></a>
// <a href="#home" className="active">Home</a>
// <a href="#news">News</a>
// <a href="#contact">Contact</a>
// <div className="dropdown">
// <button className="dropbtn">Dropdown 
// <i className="fa fa-caret-down"></i>
// </button>
// <div className="dropdown-content">
// <a href="#">Link 1</a>
// <a href="#">Link 2</a>
// <a href="#">Link 3</a>
// </div>
// </div> 
// <a href="#about">About</a>
// <a href="javascript:void(0);" style="font-size:15px;" className="icon" onclick="myFunction()">&#9776;</a>
// </div>
// </section>
// </div>
// </header>

    // </>
  // );
}
export default Navbar;

