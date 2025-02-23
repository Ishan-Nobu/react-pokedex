import { useState } from "react";
import PokemonCard from "./PokemonCard";

function Pokedex()
{   
    const [startId, setStartId] = useState(1);
    const [limitId, setLimitId] = useState(50);
    let pokemons = [];
    const btnArray = [
        {   
            id: 1,
            name: "Kanto",
            upperLimit: 1,
            lowerLimit: 151
        },

        {   
            id: 2,
            name: "Johto",
            upperLimit: 152,
            lowerLimit: 251
        },
        
        {   
            id: 3,
            name: "Hoenn",
            upperLimit: 252,
            lowerLimit: 386
        },
        
        {   
            id: 4,
            name: "Sinnoh",
            upperLimit: 387,
            lowerLimit: 493
        },
        
        {   
            id: 5,
            name: "Unova",
            upperLimit: 494,
            lowerLimit: 649
        },
        
        {   
            id: 6,
            name: "Kalos",
            upperLimit: 650,
            lowerLimit: 721
        },
        
        {   
            id: 7,
            name: "Alola",
            upperLimit: 722,
            lowerLimit: 809
        },
        
        {   
            id: 8,
            name: "Galar",
            upperLimit: 810,
            lowerLimit: 898
        },
        
    ];

    function changeGen(start, limit)
    {   
        setStartId(s => s = start);
        setLimitId(l => l = limit);
    }

    for(let i = startId; i <= limitId; i++)
    {
        pokemons.push(<PokemonCard key= {i} id={i}/>);
    }


    return(
        <div>  
            <div className="regionFilter">
                {
                    btnArray.map(({ id, name, upperLimit, lowerLimit }) => (
                        <button key={id} onClick={() => changeGen(upperLimit, lowerLimit)}>{name}</button>
                    ))
                }
            </div>
            <div className="pokemonList">
                {pokemons}
            </div>
        </div>
    );
}
export default Pokedex