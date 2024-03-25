import React,{useState} from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Cards({id,category,title,imgSrc,amazonLink,description,price}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <Col key={id} sm={6} lg={4} xl={4} className="mb-4 card_box_design">
    <Card className="overflow-hidden">
      <Link to={`/product/${id}`} className="overflow-hidden card_image_hover" >
        <Card.Img variant="top" src={imgSrc} />
        
      </Link>
      <Card.Body>
{ /*      <div className="d-flex align-items-center justify-content-between">
          <div className="item_rating">{}</div>
          <div className="wishlist">
            <i class="bi bi-heart"></i>
          </div>
  </div> */}

        <Card.Title className="text-center" style={{ cursor: "pointer" }} onClick={handleShow}>{title}</Card.Title>
        <Card.Text>{}</Card.Text>

        <div className="d-flex align-items-center justify-content-between">
          <div className="menu_price btn btn-primary">
            <h5 className="mb-0">{price} {" ₹"}</h5>
          </div>
          <div className="btn btn-warning add_to_card">
            <Link to="/" className="text-decoration-none" style={{ color: "black" }} >
              <i class="bi bi-bag me-2"></i>
              Add To Cart
            </Link>
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
    
  )
}

export default Cards;