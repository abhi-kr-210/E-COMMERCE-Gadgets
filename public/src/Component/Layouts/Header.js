import React,{useState} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import img1 from  "../../assets/brand_logo.png"
import "../../Styles/HeaderStyle.css"


function Header({cartnumber}) {

//console.log(cartnumber,"lpop")
  const navigate=useNavigate();
  const [nav,setnav]=useState(false);
const handlesticky=()=>{
  const windowScroll =
  document?.documentElement?.scrollTop;

windowScroll > 100 ? setnav(true) : setnav(false);
}
window.addEventListener("scroll", handlesticky);
// for hiding search bar
//search bar navigation
const [input,setinput]=useState("");
const handlesubmit=(e)=>{
   e.preventDefault();
   //input.trim() !== "" checks if the trimmed value of the input is not an empty string  
   if (input.trim() !== "") {
    navigate(`/search/${input}`);
  }
}
  return (
    <div>
    <header className='header_section'>
   
    <Navbar collapseOnSelect expand="lg" className={` ${nav === true ? "sticky" : ""}`} >
    <Container className='d-flex justify-content-between'>
      <Navbar.Brand >
        <Link to="/" className="logo">
          <img src={img1} alt="logo" className='img-fluid logo_img' />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav tog_col" />
  
      <form  onSubmit={handlesubmit} className='search_bar ' id="myDiv">
      <div className="input-group ">
        <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} className="form-control rounded-0" placeholder="Search Your Products"/>
        <div className="input-group-append search_bar_button_box">
          <button  className="btn btn-primary rounded-0 " type="submit">
          <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </form>
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="ms-auto mt-3" >
          <Nav.Link as={Link} to="/" >HOME</Nav.Link>       
          <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
          <Nav.Link as={Link} >
          <Link to="/wishlist"  className="cart mt-1 ">
          <i className="bi bi-heart" />
         
        </Link>
          <Link to="/cart"  className="cart mt-1 mx-3">
            <i className="bi bi-cart"></i>
            <em className='roundpoint'>{cartnumber}</em>
          </Link>
        </Nav.Link>
 
        </Nav>


      </Navbar.Collapse>

    </Container>
  </Navbar>
<div className='search_bar1_container d-flex justify-content-center '>
<form onSubmit={handlesubmit}  className='search_bar1 ms-1 me-1' >
<div className="input-group ">
  <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} className="form-control rounded-0" placeholder="Search Your Products"/>
  <div className="input-group-append search_bar_button_box">
    <button className="btn btn-primary rounded-0" type="submit">
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

export default Header

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