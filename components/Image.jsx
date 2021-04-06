import React from "react"

const Image = props => {
  return (
    <div className={`${props.className} image-container`}>
      <img src={props.img.photoUrl} className="image-grid" />
    </div>
  )
}

export default Image