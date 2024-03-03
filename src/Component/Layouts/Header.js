import React,{useState} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from  "../../assets/brand_logo.png"
import "../../Styles/HeaderStyle.css"
function Header() {
  const [nav,setnav]=useState(false);
const handlesticky=()=>{
  const windowScroll =
  document?.documentElement?.scrollTop;

windowScroll > 100 ? setnav(true) : setnav(false);
}
window.addEventListener("scroll", handlesticky);
  return (
    <div>
    <header className='header_section'>
   
    <Navbar collapseOnSelect expand="lg" className={`  ${nav === true ? "sticky" : ""}`} >
    <Container className='d-flex justify-content-between'>
      <Navbar.Brand href="#home">
        <Link to="/" className="logo">
          <img src={img1} alt="logo" className='img-fluid logo_img' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav tog_col" />
  
      <form action="#" className='search_bar '>
      <div className="input-group ">
        <input type="text" class="form-control rounded-0" placeholder="Search Your Products"/>
        <div className="input-group-append search_bar_button_box">
          <button class="btn btn-primary rounded-0" type="submit">
          <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </form>
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="ms-auto" >
          <Nav.Link as={Link} to="/" >HOME</Nav.Link>    
          <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>         
          <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          <Nav.Link as={Link} to="/">
          <div className="cart">
            <i className="bi bi-cart"></i>
            <em className='roundpoint'>2</em>
          </div>
        </Nav.Link>
 
        </Nav>


      </Navbar.Collapse>

    </Container>
  </Navbar>
    
    </header>
   
    </div>
  )
}

export default Header