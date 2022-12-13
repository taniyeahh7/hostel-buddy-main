import React from "react";
import {Link} from "react-router-dom";


export default function Template() {
 
    return (
        <>

            <div className="sidebar">
               
           </div>
            <div className="topnav">
            <div className="left-nav">
            <p id="hostel-buddy-template-header">
                <Link to = "/landing">
            <h1 className="header1">Hostel</h1>
            <h1 className="header2">Buddy</h1>
                </Link>
            </p>
            </div>
 
            <div>
                <Link to="/">
                <a className="home-header">Home</a>
                </Link>
                <Link to="/about">
                <a className="about-header">About us</a>
                </Link>
                <Link to="/addorder">
                <a className="orders-header">Orders</a>
                </Link>
            </div>
            </div>
 
        </>
    )
}
