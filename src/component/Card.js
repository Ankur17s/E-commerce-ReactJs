import React from 'react'

function Card(props) {      //===========>>>> using props properties
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if(props.item.location === "India"){
    badgeText = "Available"
  }

  return (    //passing object as props
    <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}            
        <img src={`../images/${props.item.coverImg}`} alt='' className="card-img"/> 
        <div className="card-stats" >
            <span>{props.item.stats.rating}</span>
            <span className="gray">({props.item.stats.reviewCount}) .</span>
            <span className="gray">{props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p><span className="bold">From ${props.item.price} </span>/ person</p>

    </div>
  )
}
// function Card({img, rating, nums, location, title, price}) {        // using Destructring

//     return (
//       <div className="card">
//           <img src={img} alt='' className="card-img"/>
//           <div className="card-stats" >
//               <span>{rating}</span>
//               <span className="gray">{nums} </span>
//               <span className="gray">{location}</span>
//           </div>
//           <p>{title}</p>
//           <p><span className="bold">{price} </span>/ person</p>
  
//       </div>
//     )
//   }

export default Card