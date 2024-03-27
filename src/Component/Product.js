import React, { useState,useEffect } from 'react'
import {Container, Row } from 'react-bootstrap'
import Card from "../Component/Card"
import { useLocation } from 'react-router-dom';
import items from '../Pages/Homes/Data';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import "../Styles/ProductStyle.css"
function Product() {
    
    const location=useLocation();
    const data=location.state.data;
    console.log(location)
    const [element,setelement]=useState([...items]);
    useEffect(() => {
      if(data=="nofilter"){
        setelement(items);
      }
     else{
      const relatedProduct=items.filter((pr)=>pr.category==data||pr.price>=data)
      //console.log(relatedProduct);
      setelement(relatedProduct);
     }
  },[data])

  return (
    <div >
    <Header/> 
    <div className='product_pages'>
    <Container>
    <Row className='mt-5 '>
    {element.map((carddata,index)=>(
    
      <Card
      key={index}
      id={carddata.id}
      category={carddata.category}
      title={carddata.title}
      imgSrc={carddata.imgSrc}
      amazonLink={carddata.amazonLink}
      description={carddata.description}
      price={carddata.price}
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