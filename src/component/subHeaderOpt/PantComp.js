import React from 'react'

export default function PantComp({ data }) {
    // console.log(data)
    return (
        <>
            {
                data.pantData.map((ele) => {

                    return (
                        <div className='wrapper' key={ele.id}>

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
                                <button className='add-btn' onClick={() => data.addToCart(ele)}>Add to Cart</button>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}
