import { Container, TextField, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Form, Alert } from 'react-bootstrap';
import './DestPage.scss';
// import { BrowserRouter, Link, Route, Switch, useHistory } from "react-router-dom";
import Axios from 'axios';
const DestPage = () => {
    const [error, setError] = useState("");
    const [blogs, setBlogs] = useState([]);
    let blogList = []
    useEffect(() => {
        // console.log("Hello")
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/blogs/find",
        }).then((data) => {
           
            setBlogs(data.data);
            console.log(data.data)
            console.log("blogs", blogs)
        })
            .catch((error) => {
                setError("No Blogs found");
                setTimeout(() => {
                    setError("")
                }, 5000)
            });
    }, [])
    const blogdetails = blogs.map((blog, id) => {
        return <div key={id}>
            <div className="container justify-content-center">
            <div className="blogdetails card mb-4 m-4 p-3 d-flex">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://images.unsplash.com/photo-1548276145-69a9521f0499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80" width="50px" height="50px"></img>
                    </div>
                    <div className="col-md-8">
                        <h5>State:</h5><p>{blog.statenames}</p>
                    </div>
                </div>
                <div className="row">
                    <div  className="col-4">

                    </div>
                    <div className="col-8">
                        <div>
                        <div className="container pt-4 planChild">
                {/* <Link
                  to="/home"
                  className="destinationbutton btn  lg:inline mb-4"
                > */}
                  {/* <a href=className="destinationbutton" ><Button ></Button></a> */}
                  <Button  href={'/blogs/' + blog._id}  className="destinationbutton btn">show details</Button>
                {/* </Link> */}
              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    })
    return (
        <>
            {blogdetails}
        </>
    )
}
export default DestPage;