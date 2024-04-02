import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import "../Styles/CartStyle.css"
import Header from './Layouts/Header'
import { Link } from 'react-router-dom'

function Cart({setcarts,setcartnumber,carts,cartnumber}) {
  
  const handle_clear_cart=()=>{
    setcarts([]);
    setcartnumber(0);
  }
  const removeItem = (indexToRemove) => {
    const updatedItems = carts.filter((_, index) => index !== indexToRemove);
    setcarts(updatedItems);
    setcartnumber(cartnumber-1);
  };
  return (
    <div className='Cart_page'>
    <Header cartnumber={cartnumber} />
    <Container className='Cart_box '>
    {carts.length===0?
    ( <div className='text-center'>
    <h1 style={{textTransform:"none"}}>Your Cart is Empty</h1>
    <Link to="/" className='btn btn-warning'><h4 style={{textTransform:"none",fontWeight:400}}>Continue Shopping...</h4></Link>
    </div>):
    carts.map((cart,index)=>(
      
      <div key={index}  className=' Cart_container '>
      
      <Row className='d-flex justify-content-center' >
      <Col lg={4} sm={5} xs={5}  xl={4} className='d-flex justify-content-center column_1'>
      <div className='Image_container'>
      <img src={cart.imgSrc} className="img-fluid" alt="Hero" />
      </div>
      </Col>
      <Col lg={4} sm={5} xs={6}  xl={4} className='d-flex flex-column justify-content-center column_2 '>
      <div>
      <h4 className='text-center'>{cart.title}</h4>
      <h6 className='text-center' style={{textTransform:"none",fontFamily:"sans-serif"}}>{cart.description}</h6>

      </div>
      <div className=" buttonbox_cart">
      <div className="menu_price btn btn-primary cart_div">
      <h6 className="mb-1">{cart.price} {" ₹"}</h6>
      </div>
       <div className="btn btn-warning add_to_card" onClick={() => removeItem(index)}>
       <h6 className="mb-1">Remove</h6>
     </div>
    </div>
      </Col>
      
    </Row>
      </div>
       ))
    
    }
    
    </Container>
    {carts.length!==0&&(
     <div className='d-flex text-center justify-content-center' style={{marginBottom:"80px"}}>
       <Link to="/checkout" className='btn btn-warning mx-3'>Check Out</Link>
       <button onClick={handle_clear_cart} className='btn btn-danger'>Clear Cart</button>
     </div>
    
    )}
    </div>
  )

}

export default Cart