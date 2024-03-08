import React  from 'react';
import { Col, Container, Row ,Carousel} from 'react-bootstrap';
import img1 from "../../assets/headp.png"
import img2 from "../../assets/headp2.png"
import img3 from "../../assets/headp3.png"
import img4 from "../../assets/headp4.png"
import { Link } from 'react-router-dom';

function Section1() {



  return (
    <section className='hero_section'>
      <Container >

        <Row className='justify-content-center '>
          
          <Col lg={12} sm={12} xs={12} className='d-flex justify-content-between content-1'>
          <div className='page_text'>
            <h1>Exclusives</h1>
            <h2>Headphone</h2>
             <h3>upto 50% off</h3>
             <div className='button-1 text-center'>
             <Link to="/" className="order_now">Order Now</Link>
             </div>
          </div>
          <div >
          <Carousel >
          <Carousel.Item >
          <div className>
          <img src={img1} className="img-fluid headphone " alt="Hero" />
          </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
          <div className>
          <img src={img1} className="img-fluid headphone " alt="Hero" />
          </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
          <div className>
          <img src={img2} className="img-fluid headphone " alt="Hero" />
          </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
          <div className>
          <img src={img3} className="img-fluid headphone " alt="Hero" />
          </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
          <div className>
          <img src={img4} className="img-fluid headphone " alt="Hero" />
          </div>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>   


           
          </div>
        </Col>

        </Row>
      </Container>


    </section>
  );
}

export default Section1;
