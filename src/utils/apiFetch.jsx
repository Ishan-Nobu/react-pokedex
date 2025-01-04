import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

// base api
const fetchApi = async (endpoint) => {

    return await axios.get(baseUrl + endpoint);
};

//fetch using id
export const getPokemon = (pokemonId) => {
    return fetchApi(`pokemon/${pokemonId}/`);
};
