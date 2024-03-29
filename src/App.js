import React,{useState} from "react";
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from './Pages/Homes/Homes';
import ProductDetail from "./Component/ProductDetail";
import SearchItems from "./Component/SearchItems";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import Wishlist from "./Component/Wishlist";


function App() {

 const [cartnumber,setcartnumber]=useState(0);

 const [carts,setcarts]=useState([]);
 
 const [wish,setwish]=useState([]);
  
 const handlecartnumber=()=>{
  setcartnumber(cartnumber+1)
 }

  return (
    
    <BrowserRouter>
   
    <Routes>  
        <Route path="/" element={<Homes  carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />  
        <Route path="/product/:id" element={<ProductDetail carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />  
        <Route path="/search/:term" element={<SearchItems carts={carts} setcarts={setcarts} cartnumber={cartnumber}  handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />
        <Route path="/cart" element={<Cart setcarts={setcarts} setcartnumber = {setcartnumber} carts={carts} cartnumber={cartnumber}/>} />
        <Route path="/product" element={<Product carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />
        <Route path="/wishlist" element={<Wishlist setwish={setwish} setcartnumber = {setcartnumber} wish={wish} cartnumber={cartnumber} carts={carts} setcarts={setcarts} handlecartnumber={handlecartnumber}/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
