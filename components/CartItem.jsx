import React from "react"

const CartItem = props => {
  return (
    <div className="cart-item">
      <i className="ri-delete-bin-line"></i>
      <img src={props.item.url} width="130px" />
      <p>$9.99</p>
    </div>
  )
}

export default CartItem