import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import { Context } from "../Context"
import useHover from "../hooks/useHover"

const Image = props => {
  const [isHovered, ref] = useHover()
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)

  const heartIcon = () => {
    if(props.img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    } else if(isHovered) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
    }
  }

  const cartIcon = () => {
    const inCart = cartItems.some(item => item.id === img.id)
    if(inCart) {
      return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(props.img.id)}></i>
    } else if(isHovered) {
      return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
    }
  }

  return (
    <div
      className={`${props.className} image-container`}
      ref={ref}
    >
      <img src={props.img.photoUrl} className="image-grid" />
      {heartIcon()}
      {cartIcon()}
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  })
}

export default Image