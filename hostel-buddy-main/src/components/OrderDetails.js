import React, { useState } from "react";
import Template from "./Template";
import { Link } from "react-router-dom";

export default function OrderDetails() {
    const [order,setOrder]=useState({});
    const [deliver,setDeliver] = useState(false);
    
    const handleInput = (e) =>{

        setOrder({...order, [e.target.name]:e.target.value});
      }

        const handleSubmit = async (event)=>{
            event.preventDefault();
            const {product,payment,pickupLocation,deliveryLocation} = order;
            try {
                const res = await fetch('http://localhost:3001/neworder', {
                method : "POST",
                headers : {
                  "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                order})
              })
              console.log(res.status)
              if(res.status === 400 || !res){
                window.alert("Please Try again")
              }
              else{
                window.alert("Select a friend!");
                setDeliver(true);
              }
            } 
            catch (error) {
              console.log(error);
            }
          }
    return (
        <>
        
            <Template />
            <form onSubmit={handleSubmit} method="POST">
            <div className="signup-bg-box">
                <h3 className="order-details-header">ORDER DETAILS</h3>
                <div className="input-box-3">
                <input  placeholder="Product Name" 
                type="text" 
                className="input-box-2" id="prdctname" 
                value={order.product}
                onChange={handleInput}/>
                </div>
                
                <div className="input-box-3" id="input-box-3">
                <input  placeholder="Payment Status"
                 type="text" 
                className="input-box-2"  
                id="payment"
                value={order.payment}
                onChange={handleInput}
                />
                
                </div> 
                
                <div className="input-box-3">
                <input placeholder="Pickup Location" 
                type="text" 
                className="input-box-2"  id="location" 
                value={order.pickupLocation}
                onChange={handleInput}/>
                </div>
                
                <div className="input-box-3">
                <input placeholder="Hostel Block" 
                type="text" 
                className="input-box-2"  id="hostel-block" 
                value={order.deliveryLocation}
                onChange={handleInput}/>
                </div>
                
                <div>
                <button type="button" 
                className="submit-button-signup" 
                id="submit"
                onSubmit={handleSubmit}>SUBMIT</button>
                </div>
            </div>
            </form>    
        
        </>
    )
}
