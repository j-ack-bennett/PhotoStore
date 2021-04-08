import React, { useState } from "react"

const Image = props => {
  const [isHovered, setIsHovered] = useState(false)

  const heart = isHovered && <i className="ri-heart-line favorite"></i>
  const cart = isHovered && <i className="ri-add-circle-line cart"></i>

  return (
    <div 
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.img.photoUrl} className="image-grid" />
      {heart}
      {cart}
    </div>
  )
}

export default Image