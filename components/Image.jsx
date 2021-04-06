import React, { useState } from "react"

const Image = props => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`${props.className} image-container`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.img.photoUrl} className="image-grid" />
    </div>
  )
}

export default Image