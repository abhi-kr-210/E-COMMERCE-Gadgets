import React,{useState,useEffect} from 'react'
// to fetch id we will use useparam
import { Link, useParams } from 'react-router-dom'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header';
import "../Styles/ProductDetailStyle.css"
import { Col, Container, Row } from 'react-bootstrap';
import items from '../Pages/Homes/Data';
import Card from '../Component/Card';
function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedproduct,setrelatedproduct]=useState([]);

    useEffect(() => {
        const filterProduct=items.filter((product)=>product.id==id)
        //console.log(filterProduct)
        setProduct(filterProduct[0])
        const relatedProduct=items.filter((pr)=>pr.category==product.category)
        //console.log(relatedProduct);
        setrelatedproduct(relatedProduct);
    },[id,product.category])
  return (
    <div>
     <Header/> 
     <div className='details'>
      <Container>
      <Row>
      <Col lg={6}className='mb-1'>
      <div>
      <img src={product.imgSrc} className="img-fluid " alt="Hero" />
      </div>
      
      </Col>
      <Col lg={6} className='d-flex align-items-center justify-content-center mt-0'>

        <div>
        <h1 className="text-center" >{product.title}</h1>
        <h6 className="text-center" style={{textTransform:"none",fontFamily:"sans-serif"}}>{product.description}</h6>
  
        <div className="d-flex align-items-center justify-content-between">
          <div className="menu_price btn btn-primary">
            <h5 className="mb-0">{product.price} {" ₹"}</h5>
          </div>
          <div className="btn btn-warning add_to_card">
            <Link to="/" className="text-decoration-none" style={{ color: "black" }} >
              <i class="bi bi-bag me-2"></i>
              Add To Cart
            </Link>
          </div>
        </div>
        </div>
      </Col>      
      </Row> 

      </Container>
     </div>
     <div>
      <h2 className='text-center ' style={{texttransform:"none"}}>Related Products</h2>
     <Container>
      
     {/* related product */}     
     <Row>
     {relatedproduct.map((carddata,index)=>(
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
     </div>
    <Footer />
     
      
    </div>
  )
}

export default ProductDetail