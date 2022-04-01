import logo from './logo.svg';
import './App.css';
import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home.jsx";
import Userlist from './pages/userlist/Userlist.jsx';
import User from  './pages/users/User.jsx';
import Productlist from  './pages/productlist/Productlist.jsx';
import Product from  './pages/product/Product.jsx';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const App=()=>{
  return (
    <div >
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/"  element = {<Home/>} />
          <Route  path="/users"  element = {<Userlist/>} />

        
        
        
          <Route path="/users/:userId" element = {<User/>} / >
          <Route path = "/products"  element = {<Productlist/>}/>
          <Route path="/product/:userId" element = {<Product/>} / >

          
        
      
        
        </Routes>

      </div>
      
    </div>
  
  )

}

export default App;
