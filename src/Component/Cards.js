import React,{useState,useEffect} from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import items from "../Pages/Homes/Data";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 
import "../Styles/WishlistStyle.css"
function Cards({id,title,imgSrc,description,price,handlecartnumber,carts,setcarts ,rating,wish,setwish}) {
  const [wishlistcolor,setwishlistcolor]=useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Check if the item is already in the wishlist and set its color accordingly
    const isItemInWishlist = wish.some((item) => item.id === id);
    setwishlistcolor(isItemInWishlist);
  }, [id, wish]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlecartid_and_handlecartnumber = () => {
      handlecartnumber();
    const element=items.filter((pr)=>pr.id==id)
    setcarts([...carts,...element]); //use spread operator for adding as array of object 
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }
 const renderRatingIcons=(rating)=>{
  const icons = [];
  for (let i = 1; i <= 5; i++) {
    if(rating>0.5){
      icons.push(<i key={i} className="bi bi-star-fill" style={{color:"var(--yellow)" ,paddingRight:"5px"}}></i>);
    }else if(rating>0){
      icons.push(<i key={"half"} className="bi bi-star-half" style={{color:"var(--yellow)",paddingRight:"5px"}}></i>);
    }else{
      icons.push(<i key={`empty${i}`} className="bi bi-star" style={{color:"var(--yellow)",paddingRight:"5px"}}></i>);
    }
    rating--;
  }
  return icons
 }

 
 const handlewishlist=()=>{
  if (wishlistcolor === false) {
    const element = items.filter((pr) => pr.id === id);
    setwishlistcolor(true);
    setwish([...wish, ...element]);
    console.log(wishlistcolor,{id})
  } else {
    const updatedWishList = wish.filter((pr) => pr.id !== id);
    setwishlistcolor(false);
    setwish(updatedWishList);
  }
  console.log(wishlistcolor,{id})
 }
  return ( 
    <>
    
    <Col key={id}  sm={6} lg={4} xl={4} xs={9} className="mb-4 card_box_design">
    <Card className="overflow-hidden">
      <Link to={`/product/${id}`} className="overflow-hidden card_image_hover" >
        <Card.Img variant="top" src={imgSrc} />
        
      </Link>
      <Card.Body>
{ /*      <div className="d-flex align-items-center justify-content-between">
          <div className="item_rating">{}</div>
          <div className="wishlist">
            <i className="bi bi-heart"></i>
          </div>
  </div> */}
          <div className="d-flex align-items-center justify-content-between mb-3">
          <div className="item_rating">{renderRatingIcons(rating)}</div>
          <div onClick={handlewishlist} >            
            {wishlistcolor ? (<i className="bi bi-heart-fill" style={{color:"red",cursor:"pointer",fontSize:"1.5rem"}}></i> ): <i className="bi bi-heart"  style={{cursor:"pointer",fontSize:"1.5rem"}}></i>}
          </div>
        </div>
        <Card.Title className="text-center" style={{ cursor: "pointer" }} onClick={handleShow}>{title}</Card.Title>
        <Card.Text>{}</Card.Text>

        <div className="d-flex align-items-center justify-content-between">
          <div className="menu_price btn btn-primary">
            <h5 className="mb-0">{price} {" ₹"}</h5>
          </div>
          <div className="btn btn-warning add_to_card">
            <div  onClick={handlecartid_and_handlecartnumber} className="text-decoration-none" style={{ color: "black" }} >
              <i className="bi bi-bag me-2"></i>
              Add To Cart

            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div  >
    <img src={imgSrc} className="img-fluid " alt="cardimage" />
    </div>
    </Modal.Body>
    <Modal.Footer>
    {description}
    </Modal.Footer>
  </Modal>
 
  </Col>
  </>
  )
}

export default Cards;