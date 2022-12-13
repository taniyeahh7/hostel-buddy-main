import React from 'react';
import {useEffect,useState} from 'react';
import Template from './Template';
import {NavLink} from 'react-router-dom';

export default function LoginForm(){

    return (
            <>
            <Template/>
            <div className="input-box-1">
                <input placeholder="Username" type="text" className="input-box-1" name="username" id="username"/>
            </div>
            <div className="input-box-1">
                <input placeholder="Password" type="text" className="input-box-1" name="password" id="password"/>
            </div>
            <button type="button" className="submit-button-signup" id="submit">Submit</button>
           
            </>
    )
}