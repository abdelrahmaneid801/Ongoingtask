import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="left-section-footer">
          <img
            style={{ paddingTop: 75 }}
            src={require("./assets/Ingeniousw.png")}
          />
          <p className="left-footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img src={require("./assets/payment_logo.png")} />
        </div>
        <div className="middle-section">
          <p className="middle-footer-text">
            News Letter <br></br>
            Subscribe to our Newsletter and get exclusive deals you wont find
            anywhere else straight to your inbox ! ..
          </p>
          <div class="input-container">
            <input
              class="input-field"
              type="email"
              placeholder="Enter Email Address"
            />
            <button className="sub-btn">SUBSCRIBE</button>
          </div>
          <div className="logos-section">
            <div style={{ backgroundColor: "#13435a", marginRight: 7 }}>
              <img
                style={{ padding: 11 }}
                src={require("./assets/brand.png")}
              />
            </div>
            <div style={{ backgroundColor: "#13435a", marginRight: 7 }}>
              <img
                style={{ padding: 11 }}
                src={require("./assets/brand vimeo-v.png")}
              />
            </div>
            <div style={{ backgroundColor: "#13435a", marginRight: 7 }}>
              <img
                style={{ padding: 11, paddingLeft: 15, paddingRight: 15 }}
                src={require("./assets/face.png")}
              />
            </div>
            <div style={{ backgroundColor: "#ed1b23", marginRight: 7 }}>
              <img
                style={{ padding: 11, paddingTop: 15 }}
                src={require("./assets/Icon awesome-yo.png")}
              />
            </div>
            <div style={{ backgroundColor: "#13435a", marginRight: 7 }}>
              <img
                style={{ padding: 11 }}
                src={require("./assets/tweet.png")}
              />
            </div>
          </div>
        </div>
        <div className="right-section-footer">
          <ul>
            <p className="right-footer-text">Main menu</p>
            <li>>> Home</li>
            <li>>> About us</li>
            <li>>> services</li>
            <li>>> Management Board</li>
            <li>>>Contact </li>
          </ul>
        </div>
      </div>
        <div style={{height:1,backgroundColor:'gray'}}></div>
        <div className="copy-rights">
          <p>
            Copyright 2022 | INGENIOUS | All Rights Reserved Powered by EvoTech
          </p>
        </div>
    </div>
  );
}
