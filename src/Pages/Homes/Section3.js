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
     <Col  lg={8} >
     <div className='ads_box mb-5  d-flex justify-content-between'>
     <div>
     <h5>Pemium Sound</h5>
     <h2 className="mb-0">Pro Tips to Find the</h2>
     <h2 >Right Pair</h2> 
     </div>       
      <div>
      <img src={img2} className="img-fluid " alt="Hero" /> 
      </div>
     </div>
     
     </Col>
     
     </Row>
     
     </Container>
    
    </section>
    
    </div>
  )
}

export default Section3