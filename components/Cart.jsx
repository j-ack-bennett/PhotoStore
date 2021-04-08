import React, { useContext, useState } from "react"

import { Context } from "../Context"
import CartItem from "./CartItem"

const Cart = () => {
  const {cartItems, emptyCart} = useContext(Context)
  const [text, setText] = useState("Place Order")
  const totalCost = 9.99 * cartItems.length
  const displayTotalCost = totalCost.toLocaleString("en-NZ", {style: "currency", currency: "NZD"})

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))
  
  const placeOrder = () => {
    setText("Ordering...")
    setTimeout(() => {
      console.log("Order Placed!")
      setText("Place Order")
      emptyCart()
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {displayTotalCost}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{text}</button>
      </div>
    </main>
  )
}

export default Cart