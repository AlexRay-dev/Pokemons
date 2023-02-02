import axios from "axios";
import {DetailedPokemon} from "../../types/pokemons";
import {AppDispatch} from "../store";
import {
  favoritePokemonsFetching,
  favoritePokemonsFetchingError,
  favoritePokemonsFetchingSuccess,
} from "../reducers/user-slice";

export const fetchUserFavoritePokemons = (pokemonsIndices: number[]) => async (dispatch: AppDispatch) => {
  try {
    dispatch(favoritePokemonsFetching(true));
    const pokemonList: DetailedPokemon[] = [];
    await Promise.all(pokemonsIndices.map(async (id) => {
      const response = await axios.get<DetailedPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
      pokemonList.push(response.data);
    }));
    dispatch(favoritePokemonsFetchingSuccess(pokemonList));
  } catch (error: any) {
    dispatch(favoritePokemonsFetchingError(error.message));
  }
};