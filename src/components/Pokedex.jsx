import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { getPokemon } from "../utils/apiFetch";
import axios from "axios";

function Pokedex()
{   
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({
        offset: 0,
        limit: 151,
    })
    const [pokemonList, setPokemonList] = useState([])
    const [data, setData] = useState([])

    useEffect(() => 
    {   
        getPokemon(filter.offset, filter.limit).then(result => setPokemonList(result.data?.results))
    }, [filter]) 
    
    // fetch pokemon data after the list is updated
    useEffect(() => {
        getPokemonData()
    }, [pokemonList])

    const getPokemonData = async() => {   
        const response = await Promise.all(pokemonList.map(async(pokemon) => {
            return (await axios.get(pokemon.url)).data
        }))
        setData(response);
        setLoading(false);
    }

    const changeRegion = (lowerLimit, upperLimit) =>
    {   
        setLoading(true);
        setFilter(prevFilter => ({
            ...prevFilter,
            offset: lowerLimit,
            limit: upperLimit,
        }));
    }
    
    const btnArray = [
        {   
            id: 1,
            name: "Kanto",
            upperLimit: 151,
            lowerLimit: 0
        },

        {   
            id: 2,
            name: "Johto",
            upperLimit: 100,
            lowerLimit: 151
        },
        
        {   
            id: 3,
            name: "Hoenn",
            upperLimit: 135,
            lowerLimit: 251
        },
        
        {   
            id: 4,
            name: "Sinnoh",
            upperLimit: 107,
            lowerLimit: 386
        },
        
        {   
            id: 5,
            name: "Unova",
            upperLimit: 156,
            lowerLimit: 493
        },
        
        {   
            id: 6,
            name: "Kalos",
            upperLimit: 72,
            lowerLimit: 649
        },
        
        {   
            id: 7,
            name: "Alola",
            upperLimit: 86,
            lowerLimit: 721
        },
        
        {   
            id: 8,
            name: "Galar",
            upperLimit: 92,
            lowerLimit: 809
        },
        
    ];


    return(
        <div>  
            <div className="regionFilter">
                {
                    btnArray.map(({ id, name, upperLimit, lowerLimit }) => (
                        <button key={id} onClick={() => changeRegion(lowerLimit, upperLimit)}>{name}</button>
                    ))
                }
            </div>
            <div className="pokemonList">
                {data.map((pokemonData, i) => (  
                    <PokemonCard key={i} pokemonData={pokemonData} loading={loading}/>
                ))}
            </div>
        </div>
    );
}
export default Pokedex