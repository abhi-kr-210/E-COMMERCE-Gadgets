import React, { useState,useEffect } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import { useParams } from 'react-router-dom'
import items from '../Pages/Homes/Data'
import Card from './Card'
import { Container, Row } from 'react-bootstrap'
import "../Styles/SearchitemsStyle.css"
function SearchItems() {
  const {term}=useParams();
  const [filterdata,setfilterdata]=useState([]);
  useEffect(() => {
  const data=items.filter((pr)=>pr.title.toLowerCase().includes(term.toLowerCase()))
  setfilterdata(data);
   
  }, [term])

  return (
    <div>
    <Header />
     <div className='searchbar_inputs'>
     <Container>
     <Row className='mt-5 product_page_row'>
     {filterdata.map((carddata,index)=>(
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

export default SearchItems