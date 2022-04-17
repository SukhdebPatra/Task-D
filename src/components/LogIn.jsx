import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const LogIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const  navigate=useNavigate();

  const collectData = async () => {
    console.warn(name, email, number);
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      body: JSON.stringify({ name, email, number, time: Date.now() }),
      headers: {
        "content-Type": "application/json",
      },
    });

    result = await result.json();

    const token = Number(localStorage.getItem("token"));
    if (token) {
      const expiryTime = Number(localStorage.getItem("time"));
      if (expiryTime < Date.now() / 1000) {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("time");
        
        navigate('/login')
      } else {
        navigate('/home')
      }
    } else {
      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.user.name);
      localStorage.setItem("time", result.user.time);
      navigate('/home')
    }
  };

  return (
    
    <>
      <div className="register">
        <input
          className="inputBox"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputBox"
          type="text"
          placeholder="Enter Email"
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="inputBox"
          type="number"
          placeholder="Enter Number"
        />
        <button onClick={collectData} className="appbtn" type="btn">
          Login
        </button>


        
      </div>
  
    </>
  );
};

export default LogIn;
