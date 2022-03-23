import React, { useState } from "react";
import "./Home.css";
export default function () {
  return (
    <div>
      <div className="second-nav">
        <div style={{ flex: 1, display: "flex" }}>
          <img
            className="logo"
            src={require("./assets/Ingenious Final.png")}
            width="220"
            height="33"
            alt="logo"
          />
          <div className="items">
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>services</li>
              <li>Management Board</li>
              <li>Contact </li>
            </ul>
          </div>
          <div className="account">
            <img
              style={{ paddingTop: 32 }}
              src={require("./assets/Ellipse 10.png")}
              width="34"
              height="34"
              alt="logo"
            />
            <div
              className="account-text"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingTop: 64,
              }}
            >
              <p style={{ fontSize: 12, fontWeight: "bold", margin: 0 ,color:'black'}}>
                account
              </p>
              <p style={{ margin: 0 , color:'black' ,  fontSize: 11 }}>
                <span style={{ color: "orange", fontSize: 11 }}>
                  Registration
                </span>
                / Login
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cover">
        <img
          style={{
            paddingTop: 32,
            float: "right",
            width: "auto",
            height: "auto",
          }}
          src={require("./assets/workers-conside.png")}
          alt="logo"
          height="621"
        />
      </div>
      <div className="Cards">
        <div className="left-card">
          <h2>Product Registration</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud{" "}
          </p>
        </div>
        <div className="right-card">
          <p>
            <span style={{fontWeight:'bold'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.</span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
           
          </p>

          {/* <img
         width="547"
         height="286"
          src={require("./Lorem ipsum dol.png")}
          alt="logo"
        /> */}
        </div>
      </div>
    </div>
  );
}
