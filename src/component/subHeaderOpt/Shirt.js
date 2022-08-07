import React from 'react'
import data from '../../Data2'
import ShirtComp from './ShirtComp'

export default function Shirt({addToCart}) {
  // console.log(Data2)
  let shirtData = data.filter(ele => ele.type =="shirt")
  return (
    
      <ShirtComp data={{shirtData, addToCart}}/>
    
  )
}
