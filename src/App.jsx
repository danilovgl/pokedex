
import { Navbar } from './components/Navbar'
import {PokeCard} from './components/PokeCard'

import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [pokemons, setPokemos] =  useState([])


  useEffect(()=>{
    getPockemons()
  },[])
  
  const getPockemons = () =>{
    let endPoints = [] 
    for (let i = 1; i < 100 ; i++){
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    console.log(endPoints)
    axios.all(endPoints.map((endP) => axios.get(endP))).then((res)=> setPokemos(res)).catch((err) => console.log(err))
  }

  function PokemonFilter(name){
    let filterPokemons = []
    if(name === ""){
      getPockemons()
    }
    for(let i in pokemons){
      if(pokemons[i].data.name.includes(name)){
        filterPokemons.push(pokemons[i])
      }
    }
    setPokemos(filterPokemons)
  }

  return (
        <>
          <Navbar PokemonFilter={PokemonFilter} />
          <h1>Lista de Pokémons</h1>
          <div className='containerCard'>
            {pokemons.length  === 0 ? 'Carregando...' : 
               pokemons.map((poke) => (
                <div key={Math.random()} className='PokeCard'>
                <PokeCard name={poke.data.name} img={poke.data.sprites.front_default} types={poke.data.types} />
                </div>
              ))
            }
           
          </div>
        </>
  )
}

export default App