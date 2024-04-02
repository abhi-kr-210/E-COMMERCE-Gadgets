import React from 'react'
import Header from '../../Component/Layouts/Header'
import "../../Styles/ContactPageStyle.css"
import { Container, Row,Col } from 'react-bootstrap'
function Contactpage({cartnumber }) {
    const handlesubmit=(e)=>{
        e.preventDefault();
        
      }
  return (
    <div>
    <Header cartnumber={cartnumber} />
    <div className='contactus_page'>
     <Container>
     <Row className='justify-content-center'>
     <Col lg={6} className='contactus_page_column '>
     <div style={{backgroundColor:"#0000003d",padding:"5px"}}>
      <h2>Contact Us</h2>
     </div>
     <form onSubmit={handlesubmit} className='mt-3'>
      <div className='mb-2'>
      <label htmlFor="name">Name</label>
       <div className='input_box'>
       <input type="text" id='name' />
       </div>
      </div>
            
      <div className='mb-2'>    
      <label htmlFor="email">Email</label>
       <div className='input_box'>
       <input type="email" id='email' />
       </div>
      </div>

     <div className='mb-2'>
     <label htmlFor="subject">Subject</label>
     <div className='input_box'>
     <input type="text" id='subject' />
     </div>
     </div>

     <div className='input_box mb-2'>
     <label htmlFor="subject">Message</label>
     <textarea id="message" name="message" 
     style={{width:"100%"}} >
     </textarea>
     </div>

     <div className='d-flex justify-content-start align-items-center mt-3'>
     
     <button className='btn btn-primary' style={{fontWeight:400,backgroundColor:"#ee1bc0",borderColor:"#ee1bc0",padding:"10px",fontSize:"1rem"}}>Send Message</button>
     </div>
    </form>
     
     </Col>   
     <Col lg={6} className='d-flex align-items-center justify-content-center contactus_page_column2' >
       <div>
       
       <div>
       <h3 style={{textTransform:"none",fontFamily:"serif"}}>We are open for any suggestion or just to</h3> 
        <h3 style={{textTransform:"none",fontFamily:"serif"}}>have a chat</h3>
       </div>
        <div className='d-flex justify-content-center align-items-center'>
        <div >
        <div className=' d-flex align-items-center icon_container icon_container1'>
        <div className='icon  d-flex justify-content-center align-items-center'><i class="bi bi-geo-alt-fill" style={{fontSize:"1.5rem"}}></i></div> 
        <div>
        <h5 style={{textTransform:"none"}}>Address:&nbsp;&nbsp;<span style={{fontFamily:"cursive",color:"#393939c7"}}>198 West 21th Street,</span></h5>
        <h5 style={{textTransform:"none"}}><span style={{fontFamily:"cursive",color:"#393939c7"}}>Suite 721 New York NY 10016</span></h5>
        </div>
       </div>
       <div className=' d-flex align-items-center icon_container'>
        <div className='icon d-flex justify-content-center align-items-center'><i class="bi bi-telephone-fill" style={{fontSize:"1.5rem"}}></i></div>
        <div>
        <h5 style={{textTransform:"none"}}>Phone:&nbsp;&nbsp;<span style={{fontFamily:"cursive",color:"#393939c7"}}>+1235 2355 98</span></h5>
        </div>
       </div>
       <div className=' d-flex align-items-center icon_container'>
       <div className='icon d-flex justify-content-center align-items-center'><i class="bi bi-send-fill" style={{fontSize:"1.5rem"}}></i></div>
       <div>
       <h5 style={{textTransform:"none"}}>Email:&nbsp;&nbsp;<span style={{fontFamily:"cursive",color:"#393939c7"}}>info@yoursite.com</span></h5>
       </div>
       </div>
       <div className=' d-flex align-items-center icon_container'>
        <div className='icon d-flex justify-content-center align-items-center'><i class="bi bi-globe-americas" style={{fontSize:"1.5rem"}}></i></div>
        <div>
        <h5 style={{textTransform:"none"}}>Website:&nbsp;&nbsp;<span style={{fontFamily:"cursive",color:"#393939c7"}}>yoursite.com</span></h5>
        </div>
       </div>
        </div>
        
        </div>
       </div>
     </Col>  
     </Row>     
     </Container>
    
    </div>
    </div>
  )
}

export default Contactpage