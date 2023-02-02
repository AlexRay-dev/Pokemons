import axios from "axios";
import {API} from "../../consts/api";
import {AppDispatch} from "../store";
import {pokemonsFetching, pokemonsFetchingError, pokemonsFetchingSuccess} from "../reducers/pokemons-slice";
import {DetailedPokemon, InitialPokemonList} from "../../types/pokemons";
import {POKEMONS_LIMIT} from "../../consts/config";

export const fetchPokemons = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(pokemonsFetching(true));
    const response = await axios.get<InitialPokemonList>(`${API.URL}/pokemon?limit=${POKEMONS_LIMIT}&offset=${(page - 1) * POKEMONS_LIMIT}`);
    const pokemonList = response.data.results;
    const fetchPokemonPromises = pokemonList.map(pokemon => fetchDetailedPokemon(pokemon.url));
    const detailedPokemons = await Promise.all(fetchPokemonPromises);
    const validDetailedPokemons = detailedPokemons.filter((pokemon): pokemon is DetailedPokemon => pokemon !== undefined);
    dispatch(pokemonsFetchingSuccess(validDetailedPokemons));
  } catch (error: any) {
    dispatch(pokemonsFetchingError(error.message));
  }
};

export const fetchDetailedPokemon = async (pokemonUrl: string): Promise<DetailedPokemon | undefined> => {
  try {
    const response = await axios.get<DetailedPokemon>(pokemonUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};