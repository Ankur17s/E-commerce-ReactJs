import React from 'react'
import "../../Styles/UpdateCart.css"

export default function UpdateCart({ cart }) {
  return (
    <>
    <h1 className='cart-list'> SHOPPING CART</h1>
      {
       
        cart.cart.length == 0 ?
        <>
        {/* <h1 className='cart-list'> SHOPPING CART</h1> */}
        <div className='item-cont'>
        <h3 className='cart-ite'>Your Cart is Empty Go Back</h3>
        </div>
        </>
          :
          cart.cart.map((ele) => {
            return (
<>
              {/* <h1 className='cart-list'> SHOPPING CART</h1> */}
              <div className='cart-container' key={ele.id}>
              
              <div className='img-cont'>
                <img src={`../images/${ele.coverImage}`} />
              </div>
    
              <div className='product-details'>
                <div>Price</div>
                <div>{ele.price}</div>
              </div>
    
              <div className='quantity-cont'>
                <div className='quant'>Quantity</div>
                <div className='btn-ele'>
                  <button onClick={()=>cart.deleteToCart(ele)} className='minus'>-</button>
                  <div>{ele.quantity}</div>
                  <button onClick={()=>cart.addToCart(ele) } className='plus'>+</button>
                </div>
              </div>
    
              <div className='total'>
                <div>Total Price</div>
                <div>{ele.price * ele.quantity}</div>
              </div>
    
              <div className='delete'>
                <button onClick={()=>cart.removeCart(ele)}>Delete from Cart</button>
              </div>
      
            </div>
            <hr className='line'/>
            </>
            
              )
          })
      }
    </>
  )
}
  //   <div className='img-cont'>
            //     <img src={`../images/${ele.coverImage}`} />
            //   </div>
    
            //   <div className='product-details'>
            //     <div>Price</div>
            //     <div>{ele.price}</div>
            //   </div>
    
            //   <div className='quantity-cont'>
            //     <div className='quant'>Quantity</div>
            //     <div className='btn-ele'>
            //       <button onClick={()=>cart.deleteToCart(ele)}>-</button>
            //       <div>{ele.quantity}</div>
            //       <button onClick={()=>cart.addToCart(ele) }>+</button>
            //     </div>
            //   </div>
    
            //   <div className='total'>
            //     <div>Total Price</div>
            //     <div>{ele.price * ele.quantity}</div>
            //   </div>
    
            //   <div className='delete'>
            //     <button onClick={()=>cart.removeCart(ele)}>Delete from Cart</button>
            //   </div>
    
            // </div>
              //     <button className='add-btn' onClick={() => cart.addToCart(ele)}>Add to Cart</button>
              //   </div>

              // </div>