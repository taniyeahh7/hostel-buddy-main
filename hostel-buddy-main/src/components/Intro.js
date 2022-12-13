import React  from "react";
import logo from "../images/logo.png";
import { Link,  } from "react-router-dom";

export default function Intro() {
    return(
        <>
            <div className="main-solid">
            
            <nav> 
             
            <Link to ='/login' >
            <button className="button-login">
                LOGIN
            </button>
            </Link>
            <Link to ='/signup' >
            <button className="button-signup" >
                SIGNUP
            </button>
            </Link>
            <div className="to-align-logo">
                <h1 className="hostelbuddy-intro-header-1">
                    Hostel
                </h1>
                <h1 className="hostelbuddy-intro-header-2">
                    Buddy
                </h1>
                <img src={logo} className="logo" />
            </div>
            </nav>

            <h2 className="left-main-box">
                Reliable, Fast, Friendly.
            </h2>

            <div className="right-main-box">
                <h1 > 
                Add your friends with a friend recommendation system
                </h1>
                <h1>
                Access their location using our live location access feature
                </h1>
                <h1>
                Choose friend according to proximity or preference
                </h1>
                <h1>
                Send pick-up Request
                </h1>
            </div>

            </div>
        </>
    )
}
/*
className="box-1"
className="box-2"
className="box-3"
className="box-4"*/