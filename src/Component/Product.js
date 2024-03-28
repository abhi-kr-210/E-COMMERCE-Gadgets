import React, { useState,useEffect } from 'react'
import {Container, Row } from 'react-bootstrap'
import Cards from "./Cards"
import { useLocation } from 'react-router-dom';
import items from '../Pages/Homes/Data';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import "../Styles/ProductStyle.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 
function Product({carts, setcarts ,cartnumber,handlecartnumber}) {

    const location=useLocation();
    const data= location.state ? location.state.data :"";
    console.log(location)
    const [element,setelement]=useState([...items]);
    useEffect(() => {
      if(data==="nofilter"){
        setelement(items);
      }
     else{
      const relatedProduct=items.filter((pr)=>pr.category===data||pr.price>=data)
      //console.log(relatedProduct);
      setelement(relatedProduct);
     }
  },[data])

  return (
    <div >

    <Header cartnumber={cartnumber}/> 
    <ToastContainer 
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='product_pages '>
    <Container>
    <Row className='mt-5 product_page_row '>
    {element.map((carddata,index)=>(
    
      <Cards
      key={index}
      id={carddata.id}
      //category={carddata.category}
      title={carddata.title}
      imgSrc={carddata.imgSrc}
      //amazonLink={carddata.amazonLink}
      description={carddata.description}
      price={carddata.price}
      handlecartnumber={handlecartnumber}
      carts={carts} 
      setcarts={setcarts} 

      />
    ))}

  </Row>  
    </Container>
    </div>
    <Footer />
    </div>
  )
}

export default Product