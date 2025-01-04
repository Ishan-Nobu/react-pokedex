import { pokemonImageUrl } from "../utils/helper";
import { Dialog, DialogContent, DialogTitle, capitalize } from "@material-ui/core";
    

function PokemonDialog( { pokemon, isDialogOpened, handleCloseDialog, bgColor1, bgColor2, })
{   
    return( 
            <Dialog open={isDialogOpened} onClose={handleCloseDialog} fullWidth={true} maxWidth={"xs"} 
                    PaperProps={{
                        style: {background: `linear-gradient(${bgColor1}, ${bgColor2})`, borderRadius: 25, boxShadow: "1 1 blue"}
                    }}>
                <DialogTitle>
 
                    <div className="modal-title">

                        <div className="modal-id">
                            <p>#{String(pokemon.id).padStart(3, "0")}</p>
                        </div>

                        <div className="modal-image-container">
                            <img src={pokemonImageUrl(pokemon.id)} alt="pokemon-sprite" />
                        </div>

                        <div className="kohan">

                            <div className="modal-name-container">
                                <h3>{pokemon.name}</h3>
                            </div>

                            <div className="modal-types">
                                <span className={pokemon?.types?.[0]?.type?.name}>{pokemon?.types?.[0]?.type?.name}</span>
                                {pokemon?.types?.[1]?.type?.name ? 
                                <span className={pokemon?.types?.[1]?.type?.name}>{capitalize(String(pokemon?.types?.[1]?.type?.name))}</span> 
                                : ""}
                            </div>

                        </div>
                    </div>

                </DialogTitle>

                <DialogContent>

                    <div className="abilities-container">
                        <h4>Abilities</h4>
                        <ul>
                            <li>{pokemon.abilities?.[0]?.ability?.name}</li>
                            {pokemon.abilities?.[1] ? <li> {pokemon.abilities?.[1]?.ability?.name} </li> : ""}
                            {pokemon.abilities?.[2] ? <li> {pokemon.abilities?.[2]?.ability?.name} </li> : ""}
                        </ul>   
                    </div>

                    <div className="stats">

                        <h4>Base Stats</h4>
                        <p>HP: {pokemon.stats?.[0]?.base_stat}</p>
                        <p>Attack: {pokemon.stats?.[1]?.base_stat}</p>
                        <p>Defense: {pokemon.stats?.[2]?.base_stat}</p>
                        <p>Special Attack: {pokemon.stats?.[3]?.base_stat}</p>
                        <p>Special Defense: {pokemon.stats?.[4]?.base_stat}</p>
                        <p>Speed: {pokemon.stats?.[5]?.base_stat}</p>

                    </div>      

                </DialogContent>
            </Dialog>
    );
}

export default PokemonDialog