import React, { useState,useEffect } from 'react'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import { useParams } from 'react-router-dom'
import items from '../Pages/Homes/Data'
import Cards from './Cards'
import { Container, Row } from 'react-bootstrap'
import "../Styles/SearchitemsStyle.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 
function SearchItems({carts,setcarts ,cartnumber,handlecartnumber}) {
  const {term}=useParams();
  const [filterdata,setfilterdata]=useState([]);
  useEffect(() => {
  const data=items.filter((pr)=>pr.title.toLowerCase().includes(term.toLowerCase()))
  setfilterdata(data);
   
  }, [term])

  return (
    <div>
    

    <Header cartnumber={cartnumber} />
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
     <div className='searchbar_inputs '>
     <Container>
     <Row className='mt-5 product_page_row'>
     {filterdata.map((carddata,index)=>(
       <Cards   
       key={index}
       id={carddata.id}
       //category={carddata.category}
       title={carddata.title}
       imgSrc={carddata.imgSrc}
      // amazonLink={carddata.amazonLink}
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

export default SearchItems