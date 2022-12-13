import React, { useState } from "react";
import Landing from "./components/Landing";
import { BrowserRouter as Router,  
  Route,Routes,} from "react-router-dom";
import SignupForm from "./components/SignupForm"
import Intro from "./components/Intro";
import LoginForm from "./components/LoginForm";
import OrderDetails from "./components/OrderDetails";
import AddFriend from "./components/AddFriend";
import Soing from "./components/Soing"
import Profile from "./Profile";


function App() {
    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/addfriends" element={<AddFriend />} />
          <Route path="/addorder" element={<OrderDetails />} />
          <Route path="/my-profile" element={<Profile />} />
          
        </Routes>
      </Router>
      </>
  );
}

export default App;
