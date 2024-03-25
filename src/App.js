import React from "react";
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from './Pages/Homes/Homes';
import ProductDetail from "./Component/ProductDetail";
import SearchItems from "./Component/SearchItems";
import Cart from "./Component/Cart";

function App() {
  return (
    <BrowserRouter>
    <Routes>  
        <Route path="/" element={<Homes />} />  
        <Route path="/product/:id" element={<ProductDetail />} />  
        <Route path="/search/:term" element={<SearchItems />} />
        <Route path="/cart" element={<Cart />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
