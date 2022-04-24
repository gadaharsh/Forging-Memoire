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
            <div className="blogdetails card mb-4 mx-4 d-flex">
                <div className="row">
                    <div className="col-md-4">
                        <img src={blog.image} width="50px" height="50px"></img>
                    </div>
                    <div className="col-md-8">
                        <h5>State:</h5><p>{blog.state_name}</p><h5>Link:</h5><p>{blog.main_article_link}</p>
                        {/* <h5>Posted By:<span className="text-muted">{blog.author}</span></h5> */}
                    </div>


                    {/* <div className="col-md-8">
                <h5 className="card-title">
                    <%=camp.title%>
                </h5>
                <p className="card-text">
                    <%=camp.description%>
                </p>
                <p className="card-text">
                    <small className="text-muted">
                        <%=camp.location%>
                    </small>
                </p>
                <a href="/campgrounds/<%= camp._id %>" className="btn btn-primary">show details</a>
            </div> */}
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                    </div>
                </div> */}
                <div className="row">
                    <div className="col">
                        <div>
                            <a href={'/blogs/' + blog._id} className="btn btn-primary">show details</a>
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