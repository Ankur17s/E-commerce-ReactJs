import React from "react";
import { Link } from "react-router-dom"

function Header({ setInput }) {
    console.log(setInput)
    function checkInp(e) {
        // console.log(e.target.value);
        let {value} = e.target
        // console.log(value);
        setInput.setInput(value)
    }
    return (
        <div className="parent">

            <div className="navbar">
                <Link to="Card2"><img src="/images/amazon.png" className="img" /></Link>
                <span className="both">
                    <p className="hel">Hello</p>
                    <h3 className="addr">Select your address</h3>
                </span>

                <input type="text" className="search" placeholder="Search Your Products" onChange={checkInp} />
                <div className="ip">
                    <img src="/images/search-icon.png" className="icon" />
                </div>
                <div className="h-ac">
                    <p className="s-op">Hello, Sign in</p>  
                    <h4 className="ac">Account and Lists</h4>
                </div>
                <div className="r-ac">
                    <p className="s-op">Returns</p>
                    <h4 className="ac">& Orders</h4>
                </div>
                <div className="ncart">
                    <img src="../images/cart-icon.png" className="cart" />
                    <div className="nums">{setInput.cart.length}</div>
                    <Link to="UpdateCart"> <p className="cn">Cart</p> </Link>
                </div>
            </div>
        </div>
    );
}
export default Header;