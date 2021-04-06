import React, { useState, useEffect } from "react"

const Context = React.createContext()

const ContextProvider = props => {
  const [photos, setPhotos] = useState([])
  const photoUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
  useEffect(() => {
    fetch(photoUrl)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <Context.Provider value={{photos}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}