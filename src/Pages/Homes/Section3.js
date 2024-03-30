import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../assets/earbud_add.png';
import img2 from '../../assets/headphone.png';
function Section3() {
  return (
    <div>
    <section className='ad_section mt-5 mb-5'>
     <Container >
     <Row>
     <div className='ads_box d-flex justify-content-center' >
     
     <Col  lg={6} xs={5} md={6}className='d-flex justify-content-center align-items-center colun'>
     <div>
     <h3>HeadPhone</h3>
     <h2 className="mb-2"><i class="bi bi-bar-chart">&nbsp;</i>P&nbsp;R&nbsp;E&nbsp;M&nbsp;I&nbsp;M&nbsp;U&nbsp;M &nbsp;&nbsp;&nbsp;S&nbsp;O&nbsp;U&nbsp;N&nbsp;D</h2>
     <h6 style={{letterSpacing:"1px",marginBottom:"0px",fontFamily:"sans-serif"}}>Surround sound experience</h6> 
     <h6 style={{letterSpacing:"1px",marginBottom:"0px",fontFamily:"sans-serif"}}>Noise reduction</h6> 
     <h6 style={{letterSpacing:"1px",marginBottom:"0px",fontFamily:"sans-serif"}}>Noise isolation</h6> 
     </div>         
     </Col>
     <Col lg={4} xs={5} className='d-flex justify-content-center align-items-center'>
     <div>
     <img src={img2} className="img-fluid " alt="Hero" /> 
     </div>
     </Col>
     
     
     </div>
     </Row>
     
     </Container>
    
    </section>
    
    </div>
  )
}

export default Section3