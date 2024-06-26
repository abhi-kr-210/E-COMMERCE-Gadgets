import React,{useState} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from  "../../assets/brand_logo.png"
import "../../Styles/HeaderStyle.css"
function Header1() {
  const [nav,setnav]=useState(false);

// for hiding search bar

  return (
    <div>
    <header className='header_section'>
   
    <Navbar collapseOnSelect expand="lg" className= "sticky"  >
    <Container className='d-flex justify-content-between'>
      <Navbar.Brand href="#home">
        <Link to="/" className="logo">
          <img src={img1} alt="logo" className='img-fluid logo_img' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav tog_col" />
  
      <form action="#" className='search_bar ' id="myDiv">
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

        <Nav className="ms-auto mt-2" >
          <Nav.Link as={Link} to="/" >HOME</Nav.Link>    
          <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>         
          <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          <Nav.Link as={Link} to="/">
          <Link to="/cart" className="cart mt-1">
            <i className="bi bi-cart"></i>
            <em className='roundpoint'>2</em>
          </Link>
        </Nav.Link>
 
        </Nav>


      </Navbar.Collapse>

    </Container>
  </Navbar>
<div className='search_bar1_container d-flex justify-content-center '>
<form action="#" className='search_bar1 ms-1 me-1' >
<div className="input-group ">
  <input type="text" class="form-control rounded-0" placeholder="Search Your Products"/>
  <div className="input-group-append search_bar_button_box">
    <button class="btn btn-primary rounded-0" type="submit">
    <i className="bi bi-search"></i>
    </button>
  </div>
</div>
</form>
</div>
    </header>
   
    </div>
  )
}

export default Header1

// function toggleDivVisibility() {
//   var screenWidth = window.innerWidth;
//   var myDiv = document.getElementById("myDiv");
  
//   if (screenWidth > 767) {
//       myDiv.style.display = "block";
//   } else {
//       myDiv.style.display = "none";
//   }
//   console.log(myDiv.style.display)
// }

// // Call the function when the page loads
// window.onload = toggleDivVisibility;

// // Add an event listener for the resize event
// window.addEventListener('resize', toggleDivVisibility);