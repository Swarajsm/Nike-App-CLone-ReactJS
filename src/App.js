import React from 'react';
import './App.css';
import SignIn from './components/Signin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './components/Product';
import Home from './components/Home';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Details from './components/Details';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">
    
    <Router>

        <Routes>
          <Route path='/' exact element={<SignIn/>} />
          <Route path='/Home' exact element={<Home/>} />
          <Route path='/product/:productId' exact element={<Details/>} />
          {/* <Route path='/' exact element={<Product/>} /> */}
          <Route path='*' element={<h1>404: Not Found</h1>} />
          <Route path="/cart" exact element={<Cart/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
