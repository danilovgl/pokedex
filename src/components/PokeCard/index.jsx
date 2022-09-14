import React from 'react'
import PokeBall from '../../assets/pokeball.png'
import './styles.css'


export const PokeCard = ({name,img,types}) => {

  function TyperHandler(){
    if(types[1]){
      return types[0].type.name + " / " + types[1].type.name 
    }
    return types[0].type.name 
  }
  return (
    <div className='card'>
      <div className="topCard">
       
      <img className='pokeball' src={PokeBall} alt="" /> <h2>{name}</h2>
      </div>
      <img className='pokemons' src={img} alt="pokemons" />
      <div className="bottonCard">
      <p>{TyperHandler()}</p>
      </div>
    </div>
  )
}

