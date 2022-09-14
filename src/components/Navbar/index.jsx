import { MdSearch } from "react-icons/md";
import './styles.css'

import React from 'react'

export const Navbar = ({PokemonFilter}) => {
  return (
    <div className="container">
        <div className="conatainer-title">
            <h2>Pokédex</h2>
        </div>
        <form>
            <div className="container-itens">
                <input onChange={(e) => PokemonFilter(e.target.value)} type="text" placeholder="Busque seu Pokémon"  />
                <button type='search'> <MdSearch size={20}/> </button>
            </div>
        </form>
    </div>
  )
}
