import React, { useState } from "react";

import { Link } from "react-router-dom";
import Template from "./Template";

export default function SignupForm() {
    const [user,setUser] = useState({});
    
    const [submitted,setSubmitted] = useState(false);
    
    const handleInput = (e) =>{

        setUser({...user, [e.target.name]:e.target.value});
      
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const {name,username, regno,hostel, email, password} = user;
        try {
            const res = await fetch('http://localhost:3001/signup', {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
            user})
          })
          console.log(res.status)
          if(res.status === 400 || !res){
            window.alert("Already Used Details")
          }else{
            // You need to Restart the Server for Proxy Works
            // Now Try Again
            window.alert("Registered Successfully");
            setSubmitted(true);
          }
        } 
        catch (error) {
          console.log(error);
        }
      }

    
    return (
        <>
            <Template />
            <div className="signup-bg-box">
                <h3 className="signup-header">SIGNUP</h3>
                
                <form onSubmit={handleSubmit} method="POST">   

                <div className="input-box-1">
                <input  placeholder="Name" 
                type="text" 
                className="input-box-2" 
                name="name" 
                id="name"
                value={user.name}
                onChange={handleInput}
                />
                </div>
                
                <div className="input-box-1">
                <input placeholder="Username" 
                type="text" 
                className="input-box-2" 
                name="username" 
                id="username"
                value={user.username}
                onChange={handleInput}
                />
                </div>
                
                <div className="input-box-1">
                <input placeholder="Reg. No." 
                type="text" 
                className="input-box-2" 
                name="regno" 
                id="regno"
                value={user.regno}
                onChange={handleInput}
                />

                </div>
                
                <div className="input-box-1">
                <input placeholder="Hostel Block" 
                type="text" 
                className="input-box-2" 
                name="hostel block" 
                id="hostel-block"
                value={user.hostel}
                onChange={handleInput}
                />
                </div>
                
                <div className="input-box-1">
                <input placeholder="Email" 
                type="email" 
                className="input-box-2" 
                name="email-id" 
                id="email-id" 
                value={user.email}
                onChange={handleInput}
                />
                </div>
                
                <div className="input-box-1">
                <input placeholder="Mobile" 
                type="text" 
                className="input-box-2" 
                name="phone-number" 
                id="phone-number"  
                value={user.mobile}
                onChange={handleInput}
                />
                </div>
                
                <div className="input-box-1">
                <input placeholder="Password" 
                type="password" 
                className="input-box-2" 
                name="password" 
                id="password" 
                value={user.password}
                onChange={handleInput}
                />
                </div>
                
                <div>
                <button type="button" 
                className="submit-button-signup" 
                id="submit"
                onClick={handleSubmit}>
                    
                    SUBMIT
                </button>
                </div>
                
                </form>
                </div>
        </>
    )
}
