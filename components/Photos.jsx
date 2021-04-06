import React, { useContext } from "react"

import Image from "./Image"
import { Context } from "../Context"
import { getClass } from "../utilities"

const Photos = () => {
  const {photos} = useContext(Context)

  const images = photos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  return (
    <main className="photos">
      {images}
    </main>
  )
}

export default Photos