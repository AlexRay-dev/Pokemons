import axios from "axios";
import {API} from "../../consts/api";
import {AppDispatch} from "../store";
import {pokemonsFetching, pokemonsFetchingError} from "../reducers/pokemons-slice";

export const fetchPokemons = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(pokemonsFetching);

  } catch (error) {
    dispatch(pokemonsFetchingError(error))
  }
}
