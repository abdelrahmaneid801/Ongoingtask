import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

import "./Form.css";

const Input = styled("input")({
  display: "none",
});
export default function Form() {
  return (
    <div className="formsection">
      <div className="service-request-section">
        <p style={{paddingTop:62, color: "#124c64", fontWeight: "bold" }}>Service request</p>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Please fill in the information and attach the required files
        </p>
      </div>
      <form>
        <div className="top-form">
          <div class="fontuser">
            <input type="text" placeholder="Name*" name="uname" required />
            <i class="fa fa-user fa-lg"></i>
          </div>
          <div class="fontuser">
            <input type="text" placeholder="Mobile*" name="uname" required />
            <i class="fa fa-mobile-phone	fa-lg"></i>
          </div>
          <div class="fontuser">
            <input type="text" placeholder="Job Title*" name="uname" required />
            <i class="fa fa-id-badge	fa-lg"></i>
          </div>
        </div>
        <div className="bottom-form">
          <div class="fontmessage">
            <textarea
              scrollable="none"
              placeholder="The Message"
              type="text"
              name="uname"
            />
            <i class="fa fa-envelope-o fa-lg"></i>
          </div>
        </div>
      </form>
      <div className="file-section">
        <div className="left-section">
          <p style={{ color: "#124c64", fontWeight: "bold" }}>File Request</p>
          <input type="radio" name="file" value="file1" />
          <label for="html">
            <span style={{ fontWeight: "bold" }}>File name -</span> Description
            of the required file
          </label>
          <br></br>
          <br></br>

          <input type="radio" name="file" value="file2" />
          <label for="css">
            <span style={{ fontWeight: "bold" }}>File name -</span>Description
            of the required file
          </label>
          <br></br>
          <br></br>

          <input type="radio" name="file" value="file3" />
          <label for="css">
            <span style={{ fontWeight: "bold" }}>File name -</span> Description
            of the required file
          </label>
          <br></br>
          <br></br>

          <input type="radio" name="file" value="file4" />
          <label for="css">
            <span style={{ fontWeight: "bold" }}>File name -</span>Description
            of the required file
          </label>
          <br></br>
          <br></br>
        </div>
        <div className="right-section">
          <p
            className="upload-files"
           
          >
            Upload Files
          </p>
          <div className="upload-section">
            <div className="upload">
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton aria-label="upload picture" component="span">
                  <AddIcon color="default" fontSize="large" />
                </IconButton>
                <span style={{ color: "gray" }}>Upload File</span>
              </label>
              <div className="buttons">
                <button class="btn">
                  <i class="fa fa-file-word-o"></i> Trash
                </button>
                <button class="btn">
                  <i class="fa fa-file-pdf-o"></i> Close
                </button>
                <button class="btn">
                  <i class="fa fa-file-image-o"></i> Folder
                </button>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="cart-section">
              <p style={{ color: "#124c64", paddingLeft: 24 }}>
                <span style={{ color: "#124c64", fontWeight: "bold" }}>
                  service price :
                </span>
                260{" "}
                <span style={{ color: "#124c64", fontWeight: "bold" }}>
                  Egp 200 Egp Estimated service time is
                </span>{" "}
                : ( 20 days )
              </p>
            </div>
              <div className="form-cart">
            <img
            className="items"
              src={require("./assets/solid shopping-.png")}
              width="18"
              height="16"
              alt="icon"
            />
            <p className="items" 
            style={{ paddingTop: 0 }}>Add To Cart</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
