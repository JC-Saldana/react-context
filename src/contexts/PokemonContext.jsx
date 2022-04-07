import React, { useContext, useState } from 'react'

const PokemonContext = React.createContext()

export const usePokemon = () => useContext(PokemonContext)


export const PokemonContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([])

  const value = ([pokemon, setPokemon])

  return (
    <PokemonContext.Provider value={value}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonContextProvider