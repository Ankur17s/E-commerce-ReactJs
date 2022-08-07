import React from 'react'
import "../../Styles/Card2.css"

export default function ShirtComp({ data }) {
  // console.log(data)
  return (
    <>
    {
      data.shirtData.map((ele) => {
        return (
          <div className='wrapper'>

            <div className='img-cont'>
              <img src={`../images/${ele.coverImage}`} alt='' className='brand-img' />
            </div>

            <div className='card2'>
              <h3 className='brand-name'>{ele.title}</h3>
              <span className='brand-desp'>{ele.description}</span>
              <p><span className='brand-price'>${ele.price}</span></p>
              {/* <p className='brand-offer'>{props.elem.offer}</p> */}
              <p className='brand-delivery'>{ele.delivery}</p>
              {/* <span className='brand-stock'>{ele.stocks}</span> */}
              <button className='add-btn' onClick={()=>data.addToCart(ele)}>Add to Cart</button>
            </div>

          </div>
        )
      })
    }
    </>
  )
}
