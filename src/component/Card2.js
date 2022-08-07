import React from 'react'
import '../Styles/Card2.css'
import data from '../Data2'

function Card2({ input }) {
  console.log(input)
  let dataFiltered = data.filter(ele => ele.type.includes(input.input.toLowerCase()))
  return (
    <>
      {
        dataFiltered.length == 0 ?
          data.map((ele) => {
            return (
              <div className='wrapper' key={ele.id}>

                <div className='img-cont'>
                  <img src={`../images/${ele.coverImage}`} alt='' className='brand-img' />
                </div>

                <div className='card2'>
                  <h3 className='brand-name'>{ele.title}</h3>
                  <span className='brand-desp'>{ele.description}</span>
                  <p><span className='brand-price'>${ele.price}</span></p>
                  {/* <p className='brand-offer'>{props.elem.offer}</p>  */}
                  <p className='brand-delivery'>{ele.delivery}</p>
                  {/* <span className='brand-stock'>{ele.stocks}</span> */}
                  <button className='add-btn' onClick={() => input.addToCart(ele)}>Add to Cart</button>
                </div>

              </div>
            )
          }) : dataFiltered.map((ele) => {
            return (
              <div className='wrapper' key={ele.id}>

                <div className='img-cont'>
                  <img src={`../images/${ele.coverImage}`} alt='' className='brand-img' />
                </div>

                <div className='card2'>
                  <h3 className='brand-name'>{ele.title}</h3>
                  <span className='brand-desp'>{ele.description}</span>
                  <p><span className='brand-price'>${ele.price}</span></p>
                  {/* <p className='brand-offer'>{props.elem.offer}</p>  */}
                  <p className='brand-delivery'>{ele.delivery}</p>
                  <span className='brand-stock'>{ele.stocks}</span>
                  <button className='add-btn' onClick={() => input.addToCart(ele)}>Add to Cart</button>  
                </div>

              </div>
            )
          })

      }
    </>



    // <div className='wrapper'>

    // <div className='img-cont'>
    //   <img src={`../images/${props.elem.coverImage}`} alt='' className='brand-img'/>
    // </div>

    //   <div className='card2'>
    //     <h3 className='brand-name'>{props.elem.title}</h3>
    //     <span className='brand-desp'>{props.elem.description}</span>
    //     <p><span className='brand-price'>${props.elem.price}</span></p>
    //     {/* <p className='brand-offer'>{props.elem.offer}</p> */}
    //     <p className='brand-delivery'>{props.elem.delivery}</p>
    //     <span className='brand-stock'>{props.elem.stocks}</span>
    //   </div>

    // </div>

  )
}

export default Card2