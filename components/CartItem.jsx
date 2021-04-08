import React, { useContext, useState } from "react"
import PropTypes from "prop-types"

import { Context } from "../Context"

const CartItem = props => {
  const {removeFromCart} = useContext(Context)
  const [isHovered, setIsHovered] = useState(false)

  const trashIcon = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
  
  return (
    <div className="cart-item">
      <i 
        className={trashIcon} 
        onClick={() => removeFromCart(props.item.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      </i>
      <img src={props.item.url} width="130px" />
      <p>$9.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem