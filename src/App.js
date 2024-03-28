import React,{useState} from "react";
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from './Pages/Homes/Homes';
import ProductDetail from "./Component/ProductDetail";
import SearchItems from "./Component/SearchItems";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import Cards from "./Component/Cards";

function App() {
 const [cartnumber,setcartnumber]=useState(0);

 const [carts,setcarts]=useState([]);

 const handlecartnumber=()=>{
  setcartnumber(cartnumber+1)
 }

  return (
    
    <BrowserRouter>
   
    <Routes>  
        <Route path="/" element={<Homes  carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber}/>} />  
        <Route path="/product/:id" element={<ProductDetail carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber}/>} />  
        <Route path="/search/:term" element={<SearchItems carts={carts} setcarts={setcarts} cartnumber={cartnumber}  handlecartnumber={handlecartnumber}/>} />
        <Route path="/cart" element={<Cart carts={carts} cartnumber={cartnumber}/>} />
        <Route path="/product" element={<Product carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber}/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
