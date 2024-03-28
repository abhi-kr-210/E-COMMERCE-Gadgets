import React, { useState ,useEffect} from 'react'
import items from '../Pages/Homes/Data'
import { Container, Row,Col } from 'react-bootstrap'
import "../Styles/CartStyle.css"
import Header from './Layouts/Header'

function Cart({carts,cartnumber}) {
  console.log(carts)
  return (
    <div className='Cart_page'>
    <Header cartnumber={cartnumber} />
    <Container className='Cart_box '>
    {carts.map((cart,index)=>(
      
   <div className=' Cart_container '>
   
   <Row key={index} className='d-flex justify-content-center' >
   <Col lg={4} sm={5} xs={5}  xl={4} className='d-flex justify-content-center column_1'>
   <div className='Image_container'>
   <img src={cart.imgSrc} className="img-fluid" alt="Hero" />
   </div>
   </Col>
   <Col lg={4} sm={5} xs={6}  xl={4}className='d-flex justify-content-center align-items-center column_2 '>
   <div>
   <h4 className='text-center'>{cart.title}</h4>
   <h6 className='text-center' style={{textTransform:"none",fontFamily:"sans-serif"}}>{cart.description}</h6>
   <div className="d-flex align-items-center justify-content-between">
     <div className="menu_price btn btn-primary">
     <h5 className="mb-1">{cart.price} {" ₹"}</h5>
     </div>
      <div className="btn btn-warning add_to_card">
      <h5 className="mb-1">Buy Now</h5>
    </div>
   </div>
   </div>
   </Col>

 </Row>
   </div>
    ))}
    </Container>
    </div>
  )

}

export default Cart