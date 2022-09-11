import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/cart.css"
import cartimg from "../assets/cartimg.svg"
import {useState} from "react"

function Cart() {
    const [cartItems,setCartItems] = useState([])
  return (
    <div>
        <Navbar/>
        {cartItems.length===0?
        <div className='empcart'>
            <img src={cartimg} alt=""  />
            <h3>There's nothing in your cart yet! <span>:(</span></h3>

            <button className='snbtn'>Explore Now</button>  
        </div>
        :<>no hello</>}
    </div>
  )
}

export default Cart