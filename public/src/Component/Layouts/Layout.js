import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({cartnumber,children}) {
  return (

    <div>
     <Header cartnumber={cartnumber}/>
     <div>{children}</div>
     <Footer />
    </div>
  )
}

export default Layout