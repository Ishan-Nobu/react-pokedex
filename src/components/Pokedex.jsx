import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";

function Pokedex()
{   
    const [startId, setStartId] = useState(1);
    const [limitId, setLimitId] = useState(50);
    let pokemons = [];

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
            <button onClick={() => changeGen(1, 151)}>Kanto</button>
            <button onClick={() => changeGen(152, 251)}>Johto</button>
            <button onClick={() => changeGen(252, 386)}>Hoenn</button>
            <button onClick={() => changeGen(387, 493)}>Sinnoh</button>
            <button onClick={() => changeGen(494, 649)}>Unova</button>
            <button onClick={() => changeGen(650, 721)}>Kalos</button>
            <button onClick={() => changeGen(722, 809)}>Alola</button>
            <button onClick={() => changeGen(810, 898)}>Galar</button>
            </div>
            <div className="pokemonList">
                {pokemons}
            </div>
        </div>
    );
}
export default Pokedex