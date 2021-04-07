import React, { useState, useContext } from "react"
import {Context} from "../Context"

const Image = props => {
  const [isHovered, setIsHovered] = useState(false)
  const {toggleFavorite} = useContext(Context)

  const heartIcon = isHovered &&
    <i className="ri-heart-line favorite" onClick={() => toggleFavorite(props.img.id)}></i>
  const cartIcon = isHovered &&
    <i className="ri-add-circle-line cart"></i>

  return (
    <div 
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.img.photoUrl} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  )
}

export default Image