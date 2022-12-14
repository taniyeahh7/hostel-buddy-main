import React from 'react';
import {useEffect,useState} from 'react';
import Template from './Template';
import {NavLink} from 'react-router-dom';

export default function LoginForm(){

    return (
            <>
            <Template/>
            <div className="login-fields">
                <div>
                    <input placeholder="Username" type="text" name="username" id="username"/>
                </div>
                <div>
                    <input placeholder="Password" type="text" name="password" id="password"/>
                </div>
                </div>
                <button type="button" className="submit-button-signup" id="submit">Submit</button>
            
            </>
    )
}