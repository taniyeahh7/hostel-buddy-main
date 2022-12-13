import React from 'react'
import { Link } from 'react-router-dom'
import Template from './Template'
import * as url from '../images/search.png' 


export default function AddFriend() {  
    
    const f = async(e)=>{
        await fetch('http://localhost:3001/addfriend')
        
        
    }

    return (
        <>    
            <Template/>
            <div>
                <form>
                    <input className="search-friends" id="search-friends" placeholder="Search Friends"/>
                </form>
                <div id="requests-header">
                    <h1>
                        Requests:
                    </h1>
                </div>
                <div className='flexbox-requestbox'>
                <div className="request-box">
                    PRANAY
                </div>
                <div className='accept-friend-button'>
                        <button className='accept-friend-button-2' >+</button>    
                </div>
                </div>

                <div className='flexbox-requestbox'>
                <div className="request-box">
                    VARUN
                </div>
                    <div className='accept-friend-button'>
                        <button className='accept-friend-button-2' >+</button>    
                    </div>
                </div>
                
                <div className='flexbox-requestbox'>
                <div className="request-box">
                    TANIYA
                </div>
                <div className='accept-friend-button'>
                        <button className='accept-friend-button-2' >+</button>    
                </div>
                </div>
            </div>
        </>
  )
}
