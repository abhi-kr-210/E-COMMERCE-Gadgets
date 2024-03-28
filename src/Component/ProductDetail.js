import React,{useState,useEffect} from 'react'
// to fetch id we will use useparam
import { useParams } from 'react-router-dom'
import Footer from './Layouts/Footer'
import Header from './Layouts/Header';
import "../Styles/ProductDetailStyle.css"
import { Col, Container, Row } from 'react-bootstrap';
import items from '../Pages/Homes/Data';
import Cards from './Cards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 
function ProductDetail({carts,setcarts ,cartnumber,handlecartnumber}) {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedproduct,setrelatedproduct]=useState([]);
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
    
     <Header cartnumber={cartnumber}/> 
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
            <div onClick={handlecartid_and_handlecartnumber} className="text-decoration-none" style={{ color: "black" }} >
              <i className="bi bi-bag me-2"></i>
              Add To Cart
            </div>
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
     <Row className='product_page_row '>
     {relatedproduct.map((carddata,index)=>(
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