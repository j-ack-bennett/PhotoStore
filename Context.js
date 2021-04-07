import React, { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider = props => {
  const [photos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const photoUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
  useEffect(() => {
    fetch(photoUrl)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  const toggleFavorite = id => {
    const newArr = photos.map(photo => {
      if(photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite
        }
      }
      return photo
    })
    setPhotos(newArr)
  }

  const addToCart = newItem => {
    setCartItems(prevItems => [...prevItems, newItem])
  }

  return (
    <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}