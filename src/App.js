import React,{useState,useEffect} from "react";
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from './Pages/Homes/Homes';
import ProductDetail from "./Component/ProductDetail";
import SearchItems from "./Component/SearchItems";
import Cart from "./Component/Cart";
import Product from "./Component/Product";
import Wishlist from "./Component/Wishlist";
import Checkout from "./Component/Checkout";
import Contactpage from "./Pages/Homes/Contactpage";
import Mainpage from "./Pages/Homes/Mainpage";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time with setTimeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay time as needed

    return () => clearTimeout(timeout);
  }, []);
 const [cartnumber,setcartnumber]=useState(0);

 const [carts,setcarts]=useState([]);
 
 const [wish,setwish]=useState([]);
  
 const handlecartnumber=()=>{
  setcartnumber(cartnumber+1)
 }

  return (
    
    <BrowserRouter>
      {isLoading ? (
        <Mainpage />):(

          <Routes>  
          <Route path="/" element={<Homes  carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />  
          <Route path="/product/:id" element={<ProductDetail carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />  
          <Route path="/search/:term" element={<SearchItems carts={carts} setcarts={setcarts} cartnumber={cartnumber}  handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />
          <Route path="/cart" element={<Cart setcarts={setcarts} setcartnumber = {setcartnumber} carts={carts} cartnumber={cartnumber}/>} />
          <Route path="/product" element={<Product carts={carts} setcarts={setcarts} cartnumber={cartnumber} handlecartnumber={handlecartnumber} wish={wish} setwish={setwish} />} />
          <Route path="/wishlist" element={<Wishlist setwish={setwish} setcartnumber = {setcartnumber} wish={wish} cartnumber={cartnumber} carts={carts} setcarts={setcarts} handlecartnumber={handlecartnumber}/>} />
          <Route path="/checkout" element={<Checkout cartnumber={cartnumber} carts={carts} />} />
          <Route path="/contact" element={<Contactpage cartnumber={cartnumber} />} />
       
      </Routes>         
        )}
    </BrowserRouter>
  );
}

export default App;
