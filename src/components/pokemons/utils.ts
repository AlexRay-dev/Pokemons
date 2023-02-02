import axios from "axios";
import {InitialPokemonList} from "../../core/types/pokemons";
import {API} from "../../core/consts/api";
import {Dispatch, SetStateAction} from "react";

export const fetchAllPokemonsCount = async (setTotalCounts: Dispatch<SetStateAction<number>>) => {
  const pokemonsCount = await axios.get<InitialPokemonList>(`${API.URL}/pokemon`);
  setTotalCounts(pokemonsCount.data.count);
};