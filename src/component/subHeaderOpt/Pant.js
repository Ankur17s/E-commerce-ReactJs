import React from 'react'
import data from '../../Data2'
import PantComp from './PantComp'

export default function Pant({ addToCart }) {
  // console.log(data)
  let pantData = data.filter((ele) => ele.type == "pant")
  // console.log(pantData)
  return (
    <>
      <PantComp data={{pantData, addToCart}} />
    </>
  )
}
