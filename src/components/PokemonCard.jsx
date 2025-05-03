import { Suspense, useState } from "react";
import { pokemonImageUrl } from "../utils/helper";
import { bgColorGradient } from "../utils/backgroundColors";
import PokemonDialog from "./PokemonDialog";
import { capitalize } from "@mui/material";
import Shimmer from "./Shimmer";


function PokemonCard( { pokemonData, loading } )
{   
    const [isOpen, setIsOpen] = useState(false);

    let bgColor;   // for card background color

    // handling dialog/modal opening
    const handleDialog = () => {
        setIsOpen(!isOpen);
    };

    if(pokemonData?.types?.length === 2)  // set the bg color
    {
        bgColor = bgColorGradient(pokemonData?.types?.[0]?.type?.name, pokemonData?.types?.[1]?.type?.name, pokemonData?.types?.length);
    }
    else
    {
        bgColor = bgColorGradient(pokemonData?.types?.[0]?.type?.name, pokemonData?.types?.[0]?.type?.name, pokemonData?.types?.length);
    }

    return(
        <>  

            <div className="pokeCard" id={pokemonData?.types?.[0]?.type?.name} style={{background: `linear-gradient(${bgColor[0]}, ${bgColor[1]})`}}
                onClick={handleDialog}>

                <PokemonDialog isDialogOpened={isOpen} handleCloseDialog={handleDialog} pokemon={pokemonData} 
                                bgColor1={bgColor[0]} bgColor2={bgColor[1]}/> 

                <div className="pokemonId"> 
                    #{String(pokemonData.id).padStart(3, "0")}
                </div>

                <div className="imageContainer">
                    {
                        loading &&
                        (
                            <Shimmer/>
                        )
                    }
                    {
                        loading ||
                        (
                            <img src={pokemonImageUrl(pokemonData.id)} alt="sprite"/>
                        )
                    }
                </div>

                <div className="nameContainer">
                    {pokemonData.name}
                </div>

                <div className="types">
                    <span className={pokemonData?.types?.[0]?.type?.name}>{pokemonData?.types?.[0]?.type?.name}</span>
                    {pokemonData?.types?.[1]?.type?.name ? 
                    <span className={pokemonData?.types?.[1]?.type?.name}>{capitalize(String(pokemonData?.types?.[1]?.type?.name))}</span> 
                    : ""}
                </div>                      
            </div>   
        </>
    );
}

export default PokemonCard