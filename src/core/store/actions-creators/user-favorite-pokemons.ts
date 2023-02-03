import axios from "axios";
import {DetailedPokemon} from "../../types/pokemons";
import {AppDispatch} from "../store";
import {
  favoritePokemonsFetching,
  favoritePokemonsFetchingError,
  favoritePokemonsFetchingSuccess
} from "../reducers/favorite-pokemons-slice";
import {API} from "../../consts/api";


export const fetchUserFavoritePokemons = (pokemonsIndices: number[]) => async (dispatch: AppDispatch) => {
  try {
    dispatch(favoritePokemonsFetching(true));
    const pokemonList: DetailedPokemon[] = [];
    await Promise.all(pokemonsIndices.map(async (id) => {
      const response = await axios.get<DetailedPokemon>(`${API.URL}/pokemon/${id}`);
      pokemonList.push(response.data);
    }));
    dispatch(favoritePokemonsFetchingSuccess(pokemonList));
  } catch (error: any) {
    dispatch(favoritePokemonsFetchingError(error.message));
  }
};