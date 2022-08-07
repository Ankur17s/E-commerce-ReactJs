import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import SubHeader from './component/SubHeader';
import Card2 from "./component/Card2"
import Shirt from './component/subHeaderOpt/Shirt';
import Pant from './component/subHeaderOpt/Pant';
import UpdateCart from './component/cartPages/UpdateCart';


function App() {
  // let name1 = "ankur"
  // const cards = Data.map(items => {
  //   return (
  //     <Card
  //       key={items.id}
  //       item={items.coverImg}
  // img={items.coverImg}
  // rating={items.stats.rating}
  // nums={items.stats.reviewCount}
  // location={items.location}
  // title={items.title}
  // price={items.price}
  // openSpots={items.openSpots}
  // />
  //   )
  // })
  let [input, setInput] = useState('sample')
  // console.log(input)

  // const card2 = Data2.map(elem =>{
  //   return(
  //     <Card2 
  //       key={elem.id}
  //       elem={elem}
  //     />
  //   )
  // })

  // step 1 --> for add to cart
  const [cart, setCart] = useState([])
  // we are making this state so that we can use it on any of the other child component

  // function add to cart
  // making logic for add to cart
  function addToCart(product) {
    console.log("clicked on cart", product);

    // now using find method to check whether the product exit or not
    const productInCart = cart.find((ele) => ele.id === product.id);
    // for empty cart array this find method will not work

    if (productInCart) {
      // if product exist in cart we map the product and set product in cart quality to increment and otherwise just add new items
      setCart(cart.map((ele) => ele.id === product.id ? { ...productInCart, quantity: productInCart.quantity + 1 } : ele))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }

  }

  function deleteToCart(product) {
    const productinCarttoDelete = cart.find((ele) => ele.id === product.id)
    console.log(productinCarttoDelete);
    if(productinCarttoDelete === 1){
      setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((ele) => ele.id === product.id ? {...productinCarttoDelete, quantity: productinCarttoDelete.quantity - 1}:ele))
    }
  }

  function removeCart(product) {
    setCart(cart.filter(ele => ele.id != product.id))
  }
  return (
    <div className="App">

      <BrowserRouter>

        <Header setInput={{ setInput, cart }} />
        <SubHeader />
        {/* <UpdateCart /> */}

        {/* <div className='paren-1'>{card2} </div>   */}

        <Routes>
          <Route path="/" element={<Card2 input={{ input, addToCart }} />} />
          {/* <Route path="/" element={<Card2 />} /> */}
          <Route path="/shirt" element={<Shirt addToCart={addToCart}/>} />
          <Route path="/pant" element={<Pant addToCart={addToCart}/>} />
          <Route path="/updatecart" element={<UpdateCart cart={{ cart, addToCart, deleteToCart, removeCart }} />} />

        </Routes>
      </BrowserRouter>

      {/* {cards} */}
      {/* <Card 
        img="../images/Deepika.png"
        rating="5.0"
        nums="(7) ."
        location="India"
        title="Life Lesson with Deepika Padukaun"
        price="from $150 "
      />
      <Card 
         img="../images/Shardha.png"
         rating="4.0"
         nums="(6) ."
         location="India"
         title="Life Lesson with Sharddha Kapoor"
         price="from $250 "
      />
      <Card 
         img="../images/kiara.png"
         rating="4.5"
         nums="(8) ."
         location="India"
         title="Life Lesson with Kiara Advani"
         price="from $50 "
      />
      <Card 
         img="../images/Kareena.png"
         rating="3.0"
         nums="(9) ."
         location="India"
         title="Life Lesson with Kareena Kapoor"
         price="from $15 "
      /> */}

      {/* <LoginPage /> */}

    </div>
  )
}

export default App;
