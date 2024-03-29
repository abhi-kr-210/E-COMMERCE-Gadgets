import React,{useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Cards from '../../Component/Cards';
import items from '../../Pages/Homes/Data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Section2({carts, setcarts ,handlecartnumber,wish, setwish}) {
  const [filter_block ,setfilter_block]=useState(false);
  const handlefilter=()=>{
    setfilter_block(!filter_block)
  }

  return (
   
    <div>
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
              <Link to="/product" state={{data:"nofilter"}}>No Filter</Link>
            </Col>
            <Col>
              <Link to="/product" state={{data:"mobiles"}} >Mobile</Link>
            
            </Col>
            <Col>
              <Link to="/product" state={{data:"laptops"}}>Laptop</Link>
            </Col>
            <Col>
              <Link to="/product" state={{data:"tablets"}}>Tablet</Link>
            </Col>
            <Col>
              <Link  to="/product" state={{data:29999}}>{">="}29999</Link>
            </Col>
            <Col>
              <Link to="/product" state={{data:49999}}>{">="}49999</Link>
            </Col>
            <Col>
              <Link to="/product" state={{data:69999}}>{">="}69999</Link>
            </Col>
            <Col>
              <Link to="/product" state={{data:89999}}>{">="}89999</Link>
            </Col>
          </Row>
        </Container>
      ) : null}

    <Container>
    <Row className='mt-5 product_page_row'>
    {items.map((carddata,index)=>(
      <Cards
      key={index}
      id={carddata.id}
      //category={carddata.category}
      title={carddata.title}
      imgSrc={carddata.imgSrc}
      //amazonLink={carddata.amazonLink}
      description={carddata.description}
      price={carddata.price}
      handlecartnumber={handlecartnumber}
      carts={carts} 
      setcarts={setcarts} 
      rating={carddata.rating}
      wish={wish} 
      setwish={setwish}

      />
    ))}

  </Row>  
    </Container>
    </section>     
    </div>
  )
}
export default Section2
