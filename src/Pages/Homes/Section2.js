import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../Component/Card';
import items from '../../Pages/Homes/Data';

function Section2() {
  const [filter_block ,setfilter_block]=useState(false);
  const handlefilter=()=>{
    setfilter_block(!filter_block)
  }

  return (
    <div>
    <section  className='product_page'>
     <div className='filter_box d-flex align-items-center justify-content-center mt-1 '>
      <div className='arrow_container1'>
      <div className='arrow mb-2'></div>
      <div className='arrow'></div>
      </div>
      <Link onClick={handlefilter}><h2>FILTER</h2></Link>
      <div className='arrow_container2'>
      <div className='arrow mb-2'></div>
      <div className='arrow'></div>
      </div>
      
     </div>
     {filter_block ? (
        <Container className='filter_menu'>
          <Row>
            <Col>
              <Link>No Filter</Link>
            </Col>
            <Col>
              <Link>Mobile</Link>
            </Col>
            <Col>
              <Link>Laptop</Link>
            </Col>
            <Col>
              <Link>Tablet</Link>
            </Col>
            <Col>
              <Link>{">="}29999</Link>
            </Col>
            <Col>
              <Link>{">="}49999</Link>
            </Col>
            <Col>
              <Link>{">="}69999</Link>
            </Col>
            <Col>
              <Link>{">="}89999</Link>
            </Col>
          </Row>
        </Container>
      ) : null}
      

    <Container>
    <Row className='mt-5 '>
    {items.map((carddata,index)=>(
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


    </section>
    
    
    </div>
  )
}

export default Section2