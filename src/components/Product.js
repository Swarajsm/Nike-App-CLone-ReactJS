import * as React from "react";
import productImg from "../images/product image 1.png";
import "./Home.css";
import HalfRating from "./HalfRating";
import { Reviews } from "@mui/icons-material";
import productImg2 from "../images/product image 2.png";
import productImg3 from "../images/product image 3.png";
import productImg4 from "../images/product image 4.png";
import Details from "./Details";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

export default function Product() {
  const navigate = useNavigate();
  return (
    
    <div>
      <ResponsiveAppBar />
      <h1>Nike Air Jordan Travis Scott</h1>
      <div className="container1">
        <img src={productImg} className="display" alt="product" />
        <div>
          <h2>Product Description</h2>
          <h3>Price $200</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HalfRating />
          </div>
          <p className="Description">
            {" "}
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="btn" onClick={()=> navigate("/product/0")}>See More</button>
        </div>
      </div>
    </div>
  );
}
