import React  from "react";
import logo from "../images/logo.png";
import { Link,  } from "react-router-dom";

export default function Intro() {
    return(
        <div>
            <div>
                <nav> 
                    <div className="butts">
                        <Link to ='/login' >
                        <button className="button-login">
                            <p className="login-butt-text">LOGIN</p>
                        </button>
                        </Link>
                        <Link to ='/signup' >
                        <button className="button-signup" >
                            <p className="signup-butt-text">SIGNUP</p>
                        </button>
                        </Link>
                    </div>
                    
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
                <h4> 
                Add your friends with a friend recommendation system
                </h4>
                <h4>
                Access their location using our live location access feature
                </h4>
                <h4>
                Choose friend according to proximity or preference
                </h4>
                <h4>
                Send pick-up Request
                </h4>
            </div>

            </div>
        </div>
    )
}
/*
className="box-1"
className="box-2"
className="box-3"
className="box-4"*/