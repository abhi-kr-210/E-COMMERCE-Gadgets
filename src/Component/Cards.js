import React,{useState} from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import items from "../Pages/Homes/Data";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 
function Cards({id,title,imgSrc,description,price,handlecartnumber,carts,setcarts  }) {
  
  const [show, setShow] = useState(false);

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