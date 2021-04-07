import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"

const Image = props => {
  const [isHovered, setIsHovered] = useState(false)
  const {toggleFavorite, addToCart} = useContext(Context)

  const heartIcon = () => {
    if(props.img.isFavorite) {
      return 
        <i 
          className="ri-heart-fill favorite" 
          onClick={() => toggleFavorite(props.img.id)}
        ></i>
    } else if(isHovered) {
      return 
        <i 
          className="ri-heart-line favorite" 
          onClick={() => toggleFavorite(props.img.id)}
        ></i>
    }
  }

  const cartIcon = isHovered &&
    <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>

  return (
    <div 
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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