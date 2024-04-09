import React from 'react'
import img1 from "../../assets/marketing.png";
import "../../Styles/HomeStyles.css"
export default function Main_page() {
  return (
    <div className='d-flex justify-content-center align-items-center main_page' style={{width:"100%",height:"100vh"}}>
       <div className='text-center'>
       <img src={img1} style={{maxWidth:"50%"}} className="img-fluid main_page_img" alt="Hero" /> 
       </div>
    </div>
  )
}
