import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Styles/CheckoutStyle.css"
import Header from './Layouts/Header'
import Table from 'react-bootstrap/Table';
export default function Checkout({cartnumber,carts}) {
  
  // Use reduce to accumulate unique IDs with quantities
const checklist= carts.reduce((acc, item) => {
  const existingItem = acc.find(elem => elem.id === item.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    acc.push({ ...item, quantity: 1 });
  }
  return acc;
}, []);
let grandtotal=0
const handletotal=(price,quantity)=>{
  const total = price * quantity;
  grandtotal=grandtotal+total;
  return total;
}
  return (
    <div>
    <Header cartnumber={cartnumber} />

    <div className='checkout_page'>
    <Container>
    <Row >
    <Col lg={6} className='mb-5 '>
    <div className='checkout_page_form_container checkout_column1'>
    <div style={{backgroundColor:"#e6e6e6c4",color:"#304635",padding:"6px"}} className='align-items-center'>
    <h4 style={{fontWeight:500}}>Basic Information</h4>
    </div>
    <form className='mt-3'>
      <div className='d-flex justify-content-between mb-2 checkout_input'>
      <div>
      <label htmlFor="fname">First Name</label>
       <div>
       <input type="text" id='fname' />
       </div>
      </div>
      <div>
      <label htmlFor="lname">Last Name</label>
        <div>
        <input type="text" id='lname' />
        </div>
      </div>
      
      </div>
      <div className='d-flex justify-content-between mb-2 checkout_input'>
      <div>
      <label htmlFor='phone'>Phone Number</label>
       <div>
       <input type="number" id='phone' />
       </div>
      </div>
      <div>
      <label htmlFor="email">Email</label>
       <div>
       <input type="email" id='email' />
       </div>
      </div>
      
      </div>
     <div>
     <label htmlFor="address">Full Address</label>
     <div>
     <textarea id="address" name="address" placeholder="Type your address"
     style={{width:"100%"}} >
     </textarea>
     </div>
     </div>
     <div  className='d-flex justify-content-between mb-2 checkout_input'>
      <div>
      <label>City</label>
       <div>
       <input type="text" />
       </div>
      </div>
      
     <div>
     <label>State</label>
     <div>
     <input type="text" />
     </div>
     </div>
      

     
     </div>
     <div className='zip'>
     <label>Zip Code</label>
     <div>
     <input type="number" />
     </div>
     </div>
     <div className='d-flex justify-content-end align-items-center mt-3'>
     
     <button className='btn btn-primary' style={{fontWeight:400,backgroundColor:"#304635",borderColor:"#304635"}}>Place Order</button>
     </div>
    </form>
    </div>    
    </Col> 
    <Col lg={6} className='mb-5'>
      <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

      {checklist.map((cart,index)=>(
        <tr key={index}>
          <td>{cart.title}</td>
          <td>{cart.price}</td>
          <td>{cart.quantity}</td>
          <td>{handletotal(cart.price,cart.quantity)}</td>
        </tr>
      ))}
   
      <tr>
      <td colSpan={2} style={{textAlign:"end"}}>Grand Total</td>
      <td colSpan={2} style={{textAlign:"end"}}>{grandtotal}{"₹"} </td>
      </tr>
      </tbody>
    </Table>
      
      </div>
    </Col>   
    </Row>   
    </Container>
    
    </div>
    
    
    
    </div>
  )
}
