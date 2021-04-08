import React, { useContext } from "react"

import { Context } from "../Context"
import CartItem from "./CartItem"

const Cart = () => {
  const {cartItems} = useContext(Context)
  const totalCost = 9.99 * cartItems.length
  const displayTotalCost = totalCost.toLocaleString("en-NZ", {style: "currency", currency: "NZD"})

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {displayTotalCost}</p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  )
}

export default Cart