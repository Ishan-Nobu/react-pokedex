import axios from "axios";

// https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
export const getPokemon = async (offset, limit) => {
    return await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
}
    