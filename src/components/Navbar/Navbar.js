import React, { useState ,useEffect } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [cart, setCart] = useState(0);
  
  return (
    <div className="header">
      <div className="call-us">
        <img
          className="call-icon"
          src={require("./assets/Path.png")}
          width="14"
          height="14"
          alt="call icon"
        />
        <p>Call Us: +2 - 0114 - 32 777 - 15</p>
        <p style={{ paddingLeft: 22 }}>|</p>
        <img
          className="mail-icon"
          src={require("./assets/Path 105.png")}
          width="13"
          height="10"
          alt="email icon"
        />
        <p>Mail: info@ingenious.com</p>
        <div className="icons">
          <img
            className="items"
            src={require("./assets/face.png")}
            width="8"
            height="14"
            alt="icon"
          />
          <img
            src={require("./assets/twitter.png")}
            width="13"
            height="10"
            alt=" icon"
          />
          <img
            className="items"
            src={require("./assets/in.png")}
            width="10"
            height="10"
            alt="icon"
          />
          <img
            className="items"
            src={require("./assets/go.png")}
            width="15"
            height="10"
            alt="icon"
          />
          <p className="items" style={{ paddingLeft: 15, paddingBottom: 7 }}>
            |
          </p>
          <img
            className="items"
            style={{ paddingRight: 22 }}
            src={require("./assets/AR.png")}
            width="17"
            height="15"
            alt="icon"
          />
          <div className="Rectangle">
            <img
            className="items"
              src={require("./assets/solid shopping-.png")}
              width="18"
              height="16"
              alt="icon"
            />
            <p className="items" 
            style={{ paddingTop: 0 }}>Shopping Cart ({cart})</p>
          </div>
        </div>

      </div>
    </div>
  );
}
