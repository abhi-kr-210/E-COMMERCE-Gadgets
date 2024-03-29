import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../../Styles/FooterStyle.css';
function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrolldown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });
  return (
   
    
    <div>
      <footer className="footer_section">
        <Container>
          <Row className="justify-content-center  ">
            <Col sm={6} lg={3} className="mb-4 footer_box mr-3">
              <div className='footer_box_inside'>
                <h2>Lorem diam Vbhks </h2>
                <p>Lorem diam sit erat dolor elitr et, diam lorem justo labore amet clita labore stet
                  eos magna sit. Elitr dolor eirmod duo tempor lorem, elitr clita ipsum sea. Nonumy rebum
                  et takimata ea takimata amet gubergren, erat rebum magna lorem stet eos. Diam amet
                  et kasd eos duo dolore no.</p>
              </div>

            </Col>

            <Col lg={3} className='mb-4'>
              <h3>GET IN TOUCH</h3>
              <div className='d-flex mb=2'>
                <i className="bi bi-geo-alt  me-2 arrow_color"></i>
                <p className='mb=0' >123 Street, New York, USA</p>
              </div>
              <div className='d-flex mb=2'>
                <i className="bi bi-envelope-open  me-2 arrow_color"></i>
                <p className='mb=0' >yVn6T@example.com</p>
              </div>
              <div className='d-flex mb=2'>
                <i className="bi bi-telephone  me-2 arrow_color"></i>
                <p className='mb=0' >+012 345 67890</p>
              </div>
              <div className='d-flex mb=4  social_media'>
                <Link to="/">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="bi bi-youtube"></i>
                </Link>
              </div>
            </Col>
            <Col lg={3} className='mb-4'>
              <h3>QUICK LINKS</h3>
              <div className='d-flex flex-column justify-content-start sliding_effect'>
                <Link to="/" onClick={scrollTop}>
                  <i className="bi bi-arrow-right me-2 arrow_color"></i>
                  Home
                </Link>
                <Link to="/">
                  <i className="bi bi-arrow-right me-2 arrow_color"></i>
                  About
                </Link>
                <Link to="/">
                  <i className="bi bi-arrow-right me-2 arrow_color"></i>
                  Our menu
                </Link>
                <Link to="/">
                  <i className="bi bi-arrow-right me-2 arrow_color"></i>
                  Meet The Team
                </Link>
                <Link to="/">
                  <i className="bi bi-arrow-right me-2 arrow_color"></i>
                  Latest Blog
                </Link>
                <Link to="/">
                  <i className="bi bi-arrow-right me-2 arrow_color"></i>
                  Contact Us
                </Link>

              </div>

            </Col>

            <Col lg={3} className='mb-4'>
              <h3 className="mb-4">NEWSLETTER</h3>
              <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
              <form action="#">
                <div className="input-group">
                  <input type="text" className="form-control border-white p-3 footer_input" placeholder="Your Email" />
                  <button className="btn btn_footer" type="submit">Sign Up</button>
                </div>
              </form>
            </Col>

          </Row>
          <Row className="copy_right">
            <Col >
              <div className='d-flex  justify-content-center text-center'>
                <ul className="list-unstyled">
                  <li>

                    <Link to="/" className=" text-nowrap">
                      © 2024 <span>COPYRIGHT</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/" >About Us</Link>
                  </li>
                  <li>
                    <Link to="/" >Terms Of Use</Link>
                  </li>
                  <li >
                    <Link to="/" >Privacy Policy</Link>
                  </li>

                </ul>

              </div>
            </Col>
          </Row>
        </Container>

      </footer>

       {/* Sroll To Top */}
       {isVisible && (
        <div className="scroll_top" onClick={scrollTop}>
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
             {/* Sroll To down*/}
           
              <div className="scroll_down" onClick={scrolldown}>
                <i className="bi bi-arrow-down"></i>
              </div>
            
  

    </div>
  )
}

export default Footer