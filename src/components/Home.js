import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Home.css";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Product from "./Product";
import MorePricing from "./MorePricing";

 

export default function Home() {
  return (
    <div className="App">
      
      <Product />
      <MorePricing />
    </div>
  );
}
