import React from 'react'
import Layout from '../../Component/Layouts/Layout'
import Section1 from './Section1'
import "../../Styles/HomeStyles.css"
import Section2 from './Section2'
import Section3 from './Section3'
function Homes() {
  
  return (
    <div>
     <Layout>
     {/*section1 hero banner*/ }
    <Section1/>
     {/*section2  filter and card */ }
     <Section2 />
      {/*ad section */ }
      <Section3/> 
     </Layout>
    
    </div>
  )
}

export default Homes