import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import "../Styles/CartStyle.css"
import Header from './Layouts/Header'
import { Link } from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import items from '../Pages/Homes/Data'
 
function Wishlist({setwish,setcartnumber,wish,cartnumber,carts,setcarts,handlecartnumber}) {
    const handle_clear_wishlist=()=>{
        setwish([]);
        
      }
      const handlecartid_and_handlecartnumber = (cartid) => {
    
        handlecartnumber();
      const element=items.filter((pr)=>pr.id==cartid)
      setcarts([...carts,...element]); //use spread operator for adding as array of object 
      toast.success('Item added on cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    } 
     
  return (
    <div className='Cart_page'>
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
    <Container className='Cart_box '>
    {wish.length===0?
    ( <div className='text-center'>
    <h1 style={{textTransform:"none"}}>Your Wishlist is Empty</h1>
    <Link to="/" className='btn btn-warning'><h4 style={{textTransform:"none",fontWeight:400}}>Continue Shopping...</h4></Link>
    </div>):
    wish.map((cart,index)=>(
      
      <div key={index}  className=' Cart_container '>
      
      <Row className='d-flex justify-content-center' >
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
         <div onClick={()=>handlecartid_and_handlecartnumber(cart.id) } className="btn btn-warning add_to_card">
         <h5 className="mb-1">Add To Cart</h5>
       </div>
      </div>
      </div>
      </Col>
   
    </Row>
      </div>
       ))
    
    }
    
    </Container>
    {wish.length!==0&&(
     <div className='d-flex text-center justify-content-center' style={{marginBottom:"80px"}}>
       <button className='btn btn-warning mx-3'>Check Out</button>
       <button onClick={handle_clear_wishlist} className='btn btn-danger'>Clear Wishlist</button>
     </div>
    
    )}
    </div>
  )
}

export default Wishlist