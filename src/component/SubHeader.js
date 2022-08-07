// import React from 'react'+
import '../Styles/SubHeader.css';
import {Link} from "react-router-dom"

function SubHeader() {
  return (
    <div className="Sub_Header">
      <span className='cloths'>All</span>
      <span className='cloths'>Best Sellers</span>

     <Link to="Shirt"><span className='cloths'>Shirts</span></Link> 
     <Link to="Pant"><span className='cloths'>Pants</span></Link>
      
      <span className='cloths'>Fashions</span>
      <span className='cloths'>Customer Service</span>
      <span className='cloths'>Today's Deals</span>
      <span className='cloths'>Prime</span>
      <span className='cloths'>Amazon Pay</span>
      <div className='prime-vid'>
        <span className='prime1'>Join Prime @ 159/month</span>
        <span className='prime'>amazon prime</span>
      </div>
    </div>
    
  )
}

export default SubHeader