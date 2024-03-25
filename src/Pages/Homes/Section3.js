import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../../assets/earbud_add.png';
function Section3() {
  return (
    <div>
    <section className='ad_section mt-5 mb-5'>
     <Container >
     <Row>
     <Col  lg={8} >
     <div className='ads_box mb-5  '>
     <h1>B&nbsp;O&nbsp;U&nbsp;L&nbsp;T&nbsp;</h1>
      <div className='earbud_img_div'>
      <img src={img1} className="img-fluid earbud_img" alt="Hero" />
      </div>
     <h5>Top Features in True Wireless Earbuds</h5>
     <h2 className="mb-0">Pro Tips to Find the</h2>
     <h2 >Right Pair</h2>        
      
     </div>
     
     </Col>     
     </Row>
     
     </Container>
    
    </section>
    
    </div>
  )
}

export default Section3