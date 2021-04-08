import React, { useContext } from "react"

import { Context } from "../Context"

const CartItem = props => {
  const {removeFromCart} = useContext(Context)
  
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line" onClick={() => removeFromCart(props.item.id)}></i>
      <img src={props.item.url} width="130px" />
      <p>$9.99</p>
    </div>
  )
}

export default CartItem