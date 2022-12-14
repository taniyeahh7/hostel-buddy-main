import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png"

export default function Template() {
 
    return (
        <>

            <div className="sidebar">
               
           </div>
            <div className="topnav">
            <div className="left-nav">
            <p id="hostel-buddy-template-header">
                <Link to = "/landing">
                    <div className="to-align-logo">
                        <h1 className="hostelbuddy-intro-header-1">
                            Hostel
                        </h1>
                        <h1 className="hostelbuddy-intro-header-2">
                            Buddy
                        </h1>
                        <img src={logo} className="logo" />
                    </div>
                </Link>
            </p>
            </div>
 
            <div className="all-header">
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
