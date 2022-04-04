import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./_personajes.css"

function Personajes() {
    const [personajes, setPersonajes]=useState([]);
    const [contador,setContador]=useState(1);
   /*  const url="https://rickandmortyapi.com/api/character"; */
    const url=`https://rickandmortyapi.com/api/character?page=${contador}`;

    console.log(url);
   const nextPage = () => {
        contador <= 41 && setContador(contador + 1) 
    }

    const backPage = () => {
        contador > 1 && setContador(contador - 1)
    }

    useEffect(() => {
        axios
        .get(url)
        .then((response) => {
            console.log(response.data)
            setPersonajes(response.data.results);
        })
    },[url])
    
  return (
    <div className='todo'>
    <div className='navbar'><img className='logo' src="/rickandmortyNavbar2.png" alt="logo"></img></div>
        <div className='pageBar'>
            <button onClick={backPage} className='backBtn'>⬅️</button><h1>Pagina {contador}</h1><button onClick={nextPage} className='nextBtn'>➡️</button>
        </div>
        
        <div className='personajes'>
        {personajes.map(personaje => {
        return(
            <div className='personaje' key={personaje.id}>
                    <img className='images'  src={personaje.image} alt="imagen personaje"/> 
                    <h1 className='personajeName'>{personaje.name}</h1>
                    <div className='species'>
                        <h1 className='species'>{personaje.species}</h1>
                    </div>
               
                
            </div>    
            )
        })
        }
        </div>
    </div>
)
}

export default Personajes